import React, {Component} from "react";
import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="{logo}" className='App-logo' alt=""/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload
          </p>
          <a href="https://reactjs.org"
          className='App-link'
          target='_blank'
          rel='noopener noreferrer'
          >
            Learn REact
          </a>
        </header>
      </div>
  );
  }
}

export default App;
