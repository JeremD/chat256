import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SimpleHashPage extends Component {
  render() {
    return (
     <div>
      <button><Link to="/">Go Back</Link></button>
      <h1>
        Welcome to the SimpleHashPage
      </h1>
     </div>
    );
  }
}

export default SimpleHashPage;
