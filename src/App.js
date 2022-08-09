import React, { Component } from "react"
import './App.css';
import Main from "./components/main/main.js";

const personalInputs = {
  domClass: 'firstName',
  type: 'text',
  placeholder: 'First Name',
  value: ''
}

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

      <Main {...personalInputs}/>

        <footer role="footer"> 

        </footer>
      </>
    )
  }
}

export default App;
