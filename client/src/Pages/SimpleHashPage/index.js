import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SimpleHashPage.css'
import Page from '../../components/Page'
import request from '../../utils/request'

class SimpleHashPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      simpleHash: ''
    }
  }

  fetchSimpleHash = () => {
    const requestOptions = {
      method: 'GET'
    }

    return request('/generateDummyHash', requestOptions)
      .then((response) => {
        this.setState({ simpleHash: response.hash })
      })
  }

  render () {
    return (
      <Page>
        <button><Link to='/'>Go Back</Link></button>
        <h1>
          Generate a simple hash !
        </h1>
        <button onClick={this.fetchSimpleHash}>Generate</button>
        {this.state.simpleHash
          ? <div>Generated hash: {this.state.simpleHash}</div>
          : ''
        }
      </Page>
    )
  }
}

export default SimpleHashPage
