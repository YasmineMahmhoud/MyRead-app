import React from 'react'
import Shelf from'./BookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
const books_array=[{title:"Currently Reading",shelf:"currentlyReading"},
{title:"Want To Read",shelf:"wantToRead"},{title:"Read",shelf:"read"}]
class HomePage extends React.Component{
  state = {
    books: [],
  }
  
  componentDidMount(){
     this.getAllBooks();
  }
  
  getAllBooks = ()=>{  
  BooksAPI.getAll().then(res=>{
    this.setState({books: res});
    });}
  
 render(){
   const {books} = this.state;
     return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div/>
          {books_array.map((item)=> <Shelf  key ={item.shelf} shelf={item.shelf} title={item.title} books={books} getAllBooks={this.getAllBooks}/>)}
        </div>  
        <Link to="/search" className="open-search">Search</Link>  
      </div>
     )
 }
}
export default HomePage