require('./Home.scss');
import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HelloWorld } from 'components';
import { getMessage } from 'reducers/helloworld/helloworld';
// import { asyncConnect } from 'redux-async-connect';
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

/* TODO: Need an alternative to asyncConnect as it's not updated */
// // @asyncConnect([{
//   deferred: true,
//   promise: ({store: {dispatch, getState}}) => {
//     alert('what');
//     console.log('asyncConnect');
//     return dispatch(getMessage());
//   }
// }])

@connect(
  state => ({
    message: state.helloworld.message
  })
)

export default class Home extends Component {
  static propTypes = {
    message: PropTypes.string
  };

  componentDidMount() {
    this.props.dispatch(getMessage('Changed the message'));
    // getMessage();
  }

  render() { 
    return (
      <div className="page-home">
        test: {this.props.message}
        <HelloWorld count={10} className="hello-mars" />
      </div>
    );
  }
}
