import React, { Component } from "react"
import './App.css';
import Main from "./components/main/main.js";


class App extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return (
      <>
        <header role="header"> 
          <h1>CV Generator</h1>
        </header>

      <Main/>

        <footer role="footer"> 

        </footer>
      </>
    )
  }
}

export default App;
