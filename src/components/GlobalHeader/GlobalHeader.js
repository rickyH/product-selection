require('./GlobalHeader.scss');
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GlobalHeader extends Component {
  render() {
    return (
      <header className="global-header">
        <div className="container">
          <Link to="/">
            <i className="sprite-sky-logo"></i>
          </Link>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>
                <Link
                  to="/product-selection"
                  activeClassName="active-header"
                >
                  Product Selection
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
