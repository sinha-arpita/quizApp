import React, { Component } from 'react'

import './App.css';

import Quiz from "./components/Quiz"

export default class  extends Component {
  render() {
    return (
      <div>
        <h1> Quiz</h1>
       <Quiz/>

      </div>
    )
  }
}
