import React from "react";
import Book from "./Book";
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component{
  state={
    value:"",
    books:[],
  }


  updateBar=(event)=>{
    const value = event.target.value;
    this.setState({value});
    this.searchBooks(value);
  }

 searchBooks=(value)=>{
      if(value){
        BooksAPI.search(value).then( searchedBooks=>{        
          if(searchedBooks.error){
            this.setState({books:[]});
          }else{
          
            BooksAPI.getAll().then(res=>{
               let myBooks = res;
                const filteredBooks = searchedBooks.filter(book=> book.imageLinks && book.authors );              
                filteredBooks.map((searchedBook)=>{             
                  myBooks.map((homeBook)=>{                 
                    if(homeBook.id === searchedBook.id){
                   searchedBook.shelf= homeBook.shelf;
                    }return null
                  });
                  if(!searchedBook.shelf){
                    searchedBook.shelf= 'none'
                  }return null
                })
                this.setState({books:filteredBooks});
              });
            }   
        })
    }else{
      this.setState({books:[]})
    }
  }

 resetSerch=()=>{(
    this.setState(()=>({
      books2:[]
    })  
    ))}

  
    render(){
      const {value, books}=this.state;
    
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" onClick={this.resetSerch}>close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={value} 
                  onChange={this.updateBar}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              {!books.length ? 
          <p>'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</p>
        :
        books.map((item)=>(<li key={item.id}><Book  book={item}/></li>)
              )
        }
              </ol>
            </div>
              
            </div>
          
        )
    }
}
export default Search;
