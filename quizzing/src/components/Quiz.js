import React, { Component } from 'react'
import {QuizData} from "./QuizData"
import "./Quiz.css"


export default class Quiz extends Component {
    state={
        userAnswer:null,
        currentQuestion:0,
        options:[],
        quizEnd:false,
        scores:0
    }
    loadQuiz=()=>{
    const currentQuestion=this.state.currentQuestion//const {currentQuestion}=this.state
        this.setState({
            questions:QuizData[currentQuestion].question,
            options:QuizData[currentQuestion].options,
            answer:QuizData[currentQuestion].answer,

           

           
        })
    }
    componentDidMount=()=>{
        this.loadQuiz()
    }
    nextQuestionHandler=()=>{
        const {userAnswer,answer,scores}=this.state

        this.setState({
            currentQuestion:this.state.currentQuestion+1
        })
        if(userAnswer===answer){
           this.setState({scores:scores+1})
        }
        console.log(this.state.currentQuestion)
    }
    componentDidUpdate=(prevProps,prevState)=>{
        const {currentQuestion}=this.state
        if(this.state.currentQuestion  !== prevState.currentQuestion){
                this.setState({
                    questions:QuizData[currentQuestion].question,
                    options:QuizData[currentQuestion].options,
                     answer:QuizData[currentQuestion].answer,

           

                })

        }
    }
    checkAnswer=(answer) =>{
        console.log("Answer clicked ", answer)
        this.setState({userAnswer:answer})

    }
    finishHandler=()=>{
        if (this.state.currentQuestion === QuizData.length-1){
            this.setState({quizEnd:true})
        }
    }
    render() {
        const questions=this.state.questions//const{questions,options,currentQuestion,userAnswer,quizEnd}=this.state
        const options=this.state.options
        const currentQuestion=this.state.currentQuestion
        const userAnswer=this.state.userAnswer
        const quizEnd= this.state.quizEnd
        if(quizEnd){
           return <div>
                    <h2>Quiz is Over</h2>
                    <h3>Your Final Score is  {this.state.scores} points</h3>
                    <p> The  correct  answers are:</p>
                    <ul>{QuizData.map((item,index) =>{
                           return <li key={index}>{item.answer}</li>
                         })}</ul>
                        
                </div>
        }
        return (
            <div className="main">
                <h1 classname="questions">{questions}</h1>
                <span style ={{color:"red" }}>{`You are attempting question ${currentQuestion } out of ${QuizData.length-1}`}</span>
                {options.map( option=>{
                  return <p key ={option.id} className={` options  ${userAnswer === option ? "selected" :null }`}
                                             onClick={()=>this.checkAnswer(option)} >  {option}   </p>
                })}
                {currentQuestion <QuizData.length-1 &&
                     <button onClick={this.nextQuestionHandler}>Next</button>
                }
                 {currentQuestion === QuizData.length-1 &&
                         <button onClick={this.finishHandler}>Finish</button>
                 }        
            </div>
        )
    }
}
