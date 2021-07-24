import React from 'react'
import './App.css'
import Search from './search'
import HomePage from './homePage'
import { Route,Switch } from 'react-router-dom'

class BooksApp extends React.Component {
 
  render() {
    return (
      <div className="app">
      <Switch>
      <Route  path ='/search' component={Search}/>
      <Route exact path ='/' component={HomePage} />
      <Route render={()=><p>page is not found</p>}/>
      </Switch>
      </div>
    )
  }
}

export default BooksApp
