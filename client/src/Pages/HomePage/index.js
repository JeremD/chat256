import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/Page'

class HomePage extends Component {
  render () {
    return (
      <Page>
        <h1>
          Welcome to the HomePage
        </h1>
        <div>Pages:</div>
        <ul>
          <li><Link to="simple-hash">Simple hash generation page</Link></li>
          <li><Link to="custom-hash">Custom hash generation page</Link></li>
        </ul>
      </Page>
    )
  }
}

export default HomePage
