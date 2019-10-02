import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './component/image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image url={"https://vignette.wikia.nocookie.net/tier-zoo/images/d/d2/Lion.jpg/revision/latest?cb=20181109231317"}/>
      </div>
    );
  }
}

export default App;
