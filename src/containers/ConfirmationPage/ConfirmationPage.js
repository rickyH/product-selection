require('./ConfirmationPage.scss');
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { clearConfirmation } from 'reducers/confirmation/confirmation';

@connect(
  state => ({
    products: state.productSelection.products,
    confirmation: state.confirmation.confirmation
  }),
  {
    clearConfirmation
  }
)

export default class ConfirmationPage extends Component {
  static propTypes = {
    confirmation: PropTypes.object,
    products: PropTypes.array,
    clearConfirmation: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    this.props.clearConfirmation();
  }

  returnProductDisplayName = (uniqueId) => {
    const { products } = this.props;
    const findProduct = (product) => product.uniqueId === uniqueId;
    const product = products.find(findProduct);
    return product.displayText || uniqueId;
  }

  renderConfirmedProducts = () => {
    const { confirmation } = this.props;
    const products = [];

    products.push(
      <span key="sky-q" className="sky-q">Sky Q Silver TV</span>
    );

    if (confirmation.data && confirmation.data.selectedProducts) {
      const selectedProducts = confirmation.data.selectedProducts;
      Object.keys(selectedProducts).forEach((uniqueId) => {
        if (selectedProducts[uniqueId] === true) {
          const displayText = this.returnProductDisplayName(uniqueId);
          products.push(
            <span className="bundle" key={`confirm-${uniqueId}`}>{displayText}</span>
          );
        }
      });
    }
    return products;
  }

  render() {
    const { confirmation } = this.props;
    const completed = confirmation.completed || false;
    return (
      <div className="page-confirmation-page">
        <section className="container page-section-header">
          <h1>Confirmation of your order</h1>
        </section>
        {!completed &&
          <div className="page-section-main">
            <section className="container">
              <h2>We have not recieved your details {completed}</h2>
              <p>
                Please return to the <Link to="/product-selection">product selection</Link> page.
              </p>
            </section>
          </div>
      }
      {completed &&
        <div className="page-section-main">
          <section className="container">
            <h2>Your Bundle</h2>
            <div className="confirmation-dialog">
              {this.renderConfirmedProducts()}
            </div>
            <p>
              <Link to="/">Continue Shopping</Link>
            </p>
          </section>
        </div>
      }
      </div>
    );
  }
}
