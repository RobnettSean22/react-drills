import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:''
    }
    this.but = this.but.bind(this)
  }
  userName(input){
    this.setState({
      username:input
    })
  }
  passWord(input1){
    this.setState({
      password:input1
    })
  }

  but(){
    alert(`Username:${this.state.username} Password:${this.state.password} `)
  }


  render() {
    return (
      <div className="App">
       <input onChange={(e)=>{this.userName(e.target.value)}}/>
      
       <input onChange={(e)=>{this.passWord(e.target.value)}}/>
       
       <button onClick={this.but}>login</button>
      </div>
    );
  }
}

export default App;
