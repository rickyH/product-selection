require('./Helloworld.scss');
import React, { Component, PropTypes } from 'react';

export default class HelloWorld extends Component {
  static propTypes = {
    className: PropTypes.string,
    count: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentWillMount() {
    let { count } = this.props;

    /* Validate that the number was passed through as an int */
    if (typeof count !== 'number') {
      count = 0;
    }

    /* We don't want any decimals only integer values. */
    count = parseInt(count, 10);

    /* Set the local state of counter */
    this.setState({ counter: count });
  }

  handleClick = () => {
    const count = this.state.counter;
    this.setState({ counter: (count + 1) });
  };

  render() {
    const { className } = this.props;
    return (
      <div onClick={this.handleClick} className={`${className} hello-world`}>
        Hello World
        <span>
          {this.state.counter}
        </span>
      </div>
    );
  }
}
