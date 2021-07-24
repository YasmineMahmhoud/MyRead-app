import React from 'react';
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'; 

class Book extends React.Component{
  static propTypes={
    book:PropTypes.object,
  }
  changeShelf=(book,shelf)=>{
    const {getAllBooks} = this.props;
    BooksAPI.update(book,shelf).then(res =>{
      if(getAllBooks){
        getAllBooks();
      } 
    });
   }
 render(){
   const {book}=this.props;

    return(
      <div className="book">
      <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
         <div className="book-shelf-changer">
         <select   defaultValue={book.shelf} onChange={(event)=>{this.changeShelf(book,event.target.value)}}>
             <option value="move" disabled>Move to...</option>
             <option value="currentlyReading">Currently Reading</option>
             <option value="wantToRead">Want to Read</option>
             <option value="read">Read</option>
             <option value="none">None</option>
         </select>
           </div>        
      </div>
      <div className="book-title">{book.title}</div>
     <div className="book-authors">{book.authors.join(', ')}</div>
     </div>
)
}}
export default Book;