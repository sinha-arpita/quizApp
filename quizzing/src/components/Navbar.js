import React, { Component } from 'react'
import {Link, withRouter,NavLink} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
        <div>
         <nav>
            <div className="nav-wrapper" style={{background:"teal"}}>
              <a href="#" className="brand-logo">QTime</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                   <li><NavLink to ="/">Home</NavLink></li>
                   <li><NavLink to="/general">General</NavLink></li>
                   <li><NavLink to="/maths">Maths</NavLink></li>
             </ul>
            </div>
         </nav>
                
       </div>
        )
    }
}
