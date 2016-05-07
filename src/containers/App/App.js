require('./App.scss');
import React, { Component, PropTypes } from 'react';
import { GlobalHeader, GlobalFooter } from 'components';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    console.log('Welcom to the app');
  }

  render() {
    return (
      <div className="page-app">
        <GlobalHeader />
        {this.props.children}
        <GlobalFooter />
      </div>
    );
  }
}
