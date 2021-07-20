import React from 'react';
import Book from "./Book";

class Shelf extends React.Component{
 
  
render(){

  const {title,shelf, getAllBooks, books}=this.props;
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
}
export default Shelf; 