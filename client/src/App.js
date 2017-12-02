import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import SimpleHashPage from './Pages/SimpleHashPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/simple-hash" component={SimpleHashPage} />
        </div>
      </Router>
    );
  }
}

export default App;
