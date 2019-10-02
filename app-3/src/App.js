import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state={
      search:'',
      anime:['SAO', 'Future Diary', 'One Piece', 'Black Lagoon']
    }
  }

  narrow(filter){
    this.setState({
      search:filter
    })
  }
  render() {
    let animeShows = this.state.anime.filter((shows,index)=>{return shows.includes(this.state.search)})
    .map((shows,index)=>{return <h1 key={index}>{shows}</h1>})
    return (
      <div className="App">
        <input onChange={(e)=>{this.narrow(e.target.value)}} />
        <div>{animeShows}</div>
      </div>
    );
  }
}

export default App;
