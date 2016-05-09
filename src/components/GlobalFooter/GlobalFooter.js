require('./GlobalFooter.scss');
import React, { Component } from 'react';

export default class GlobalFooter extends Component {
  render() {
    return (
      <footer className="global-footer">
        <div className="container">
          <i className="sprite-sky-logo"></i>
          <span className="copyright">&copy; 2016 @rickyharrison</span>
        </div>
      </footer>
    );
  }
}
