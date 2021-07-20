import React from 'react'
import Shelf from'./BookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
const title= ["Currently Reading","Want To Read","Read"];
const shelf=["currentlyReading","wantToRead","read","Non"];

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
          <Shelf books={books} getAllBooks={this.getAllBooks} shelf={shelf[0]} title={title[0]} />
          <Shelf books={books}  getAllBooks={this.getAllBooks} shelf={shelf[1]} title={title[1]} />
          <Shelf books={books} getAllBooks={this.getAllBooks}  shelf={shelf[2]} title={title[2]} />
        </div>  
        <Link to="/search" className="open-search">Search</Link>  
      </div>
     )
 }
}
export default HomePage