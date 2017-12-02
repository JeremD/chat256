import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SimpleHashPage.css';
import Page from '../../components/Page';

class SimpleHashPage extends Component {
  render() {
    return (
     <Page>
      <button><Link to="/">Go Back</Link></button>
      <h1>
        Welcome to the SimpleHashPage
      </h1>
     </Page>
    );
  }
}

export default SimpleHashPage;
