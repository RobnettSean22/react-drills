import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state={
      favDogs:['rot', 'pit', 'shepard']
    }
  }

 
  render() {
    let favDogsList = this.state.favDogs.map((dogs,index)=>{return <h1 key={index}>{dogs}</h1>})
    
    return (
      <div className="App">
        <div>{favDogsList}</div>
      </div>
    );
  }
}

export default App;
