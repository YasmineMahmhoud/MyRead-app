import React from 'react';
import Book from "./Book";
import PropTypes from 'prop-types'; 

function Shelf (props){
  const {title,shelf, getAllBooks, books}= props;
  console.log( books)

     return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
         <div className="bookshelf-books">
            <ol className="books-grid">
               {books.map((item)=>{
                if(item.shelf===shelf){
                  return (
                    <li key={item.id}>
                    <Book book={item} getAllBooks={getAllBooks}/>
                    </li>
                 );
                }
              return null;
              })}
           </ol>
      </div>
    </div>       
        )
    }
   
export default Shelf; 
Shelf.propTypes={
   title:PropTypes.string,
   shelf:PropTypes.string,
   getAllBooks:PropTypes.func.isRequired,
   books:PropTypes.array.isRequired
}