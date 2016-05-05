require('./Home.scss');
import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HelloWorld } from 'components';
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
@connect(
  state => ({
    message: state.helloworld.message
  })
)

export default class Home extends Component {
  static propTypes = {
    message: PropTypes.string
  };

  render() {
    return (
      <div className="page-home">
        test: {this.props.message}
        <HelloWorld count={10} className="hello-mars" />
      </div>
    );
  }
}
