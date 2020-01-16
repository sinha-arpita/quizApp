import React, { Component } from 'react'
import {Link,Route,NavLink} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import Home from "./components/Home"
import Maths from "./components/Maths"
import General from "./components/General"

import './App.css';
import Navbar from "./components/Navbar"

import Quiz from "./components/Quiz"

   class  App  extends Component {
  render() {
    return (
     
      <Router>
        <div>
          <Navbar/>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/general" component={General}/>
          <h1> Quiz</h1>
          <Route exact path="/maths" component={Maths}/>
          </div>
        
         
          <Quiz/>
       
       </Router>     
    )
  }
}


 
export default App;


