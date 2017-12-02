import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Page.css';

class Page extends Component {
  render() {
    return (
    <div>
      <div className="page-header"></div>
      <div className="page-content">
        {this.props.children}
      </div>
    </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
