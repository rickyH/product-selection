require('./ProductSelection.scss');
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import { Button } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import { HelloWorld } from 'components';
// import { getMessage } from 'reducers/helloworld/helloworld';


// @connect(
//   state => ({
//     message: state.helloworld.message
//   })
// )
export default class ProductSelection extends Component {
  static propTypes = {
    message: PropTypes.string
  };

  // componentDidMount() {
  //   this.props.dispatch(getMessage());
  //   // getMessage();
  // }

  render() {
    return (
      <div className="page-product-selection">
        <div>Hello from the Product Selection Page</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
