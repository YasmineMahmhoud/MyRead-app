import React from 'react'
import './App.css'
import Search from './search'
import HomePage from './homePage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
 
  render() {
    return (
      <div className="app">
      <Route  path ='/search' render={()=>(<Search />)}/>
      <Route exact path ='/' render={()=>(  <HomePage />  )} />
      </div>
    )
  }
}

export default BooksApp
