import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CustomHashPage.css'
import Page from '../../components/Page'
import request from '../../utils/request'

const HASH_METHODS = {
  MD5: 'MD5',
  SHA1: 'SHA1',
  SHA256: 'SHA256'
}

class CustomHashPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      textToHash: '',
      hashMethod: HASH_METHODS.MD5,
      numberOfIteration: 1,
      customHash: ''
    }
  }

  handleFieldChange = (event) => {
    console.log(event)
    this.setState({ ...this.state, [event.target.name]: event.target.value })
  }

  handleFormSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        data: this.state.textToHash,
        algorithm: this.state.hashMethod,
        iterations: this.state.numberOfIteration
      })
    }

    request('/generateCustomHash', requestOptions)
      .then((response) => {
        this.setState({ simpleHash: response.hash })
      })
  }

  render () {
    return (
      <Page>
        <button><Link to='/'>Go Back</Link></button>
        <div className="custom-hash-container">
          <div
            className="custom-hash_form"
          >
            <h1>Hash As A Service</h1>
            <h2>Hash anything in a second ! Let's play.</h2>
            <div className="custom-hash_form_element">
              <label>
                Text to hash
              </label>
              <input
                name="textToHash"
                className="custom-hash_form_field"
                onChange={this.handleFieldChange}
                type="text"
                value={this.state.textToHash}
              ></input>
            </div>
            <div className="custom-hash_form_element">
              <label>
                Chose a method
              </label>
              <select
                name="hashMethod"
                onChange={this.handleFieldChange}
                value={this.state.hashMethod}
              >
                <option value={HASH_METHODS.MD5}>md5</option>
                <option value={HASH_METHODS.SHA1}>sha1</option>
                <option value={HASH_METHODS.SHA256}>sha256</option>
              </select>
            </div>
            <div className="custom-hash_form_element">
              <label>
                Number of iterations
              </label>
              <input
                name="numberOfIteration"
                className="custom-hash_form_field"
                onChange={this.handleFieldChange}
                type="number"
                min="1"
                value={this.state.numberOfIteration}
              ></input>
              <button onClick={this.handleFormSubmit}>Generate</button>
            </div>
          </div>
        </div>
        {this.state.simpleHash
          ? <div>Generated hash: {this.state.simpleHash}</div>
          : ''
        }
      </Page>
    )
  }
}

export default CustomHashPage
