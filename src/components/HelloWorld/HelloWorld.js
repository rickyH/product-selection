import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {className} = this.props;
    return (
      <div className={className}>Hello World</div>
    );
  }
}
