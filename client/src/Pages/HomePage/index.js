import React, { Component } from 'react'
import Page from '../../components/Page'

class HomePage extends Component {
  render () {
    console.log(this.props)
    return (
      <Page>
        <h1>
          Welcome to the HomePage
        </h1>
      </Page>
    )
  }
}

export default HomePage
