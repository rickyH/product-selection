require('./ProductSelection.scss');
import React, { Component, PropTypes } from 'react';
import { Grid, Col, Button } from 'react-bootstrap';
import { Selection } from 'components';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routerActions } from 'react-router-redux';
import { checkout } from 'reducers/confirmation/confirmation';
import {
  selectProduct,
  unSelectProduct,
  getProducts,
  clearSelectedProducts
} from 'reducers/productSelection/productSelection';

/* Map state and dispatch to props */
@connect(
  state => ({
    productSelection: state.productSelection
  }),
  {
    pushState: routerActions.push,
    unSelectProduct,
    selectProduct,
    getProducts,
    clearSelectedProducts,
    checkout
  }
)

/* The product selection page */
export default class ProductSelection extends Component {
  static propTypes = {
    productSelection: PropTypes.object,
    history: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired,
    unSelectProduct: PropTypes.func.isRequired,
    selectProduct: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    clearSelectedProducts: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired
  };

  /* Get the products from the server when the component mounts */
  componentDidMount() {
    this.props.getProducts();
  }

  /* Remove the product selection from state when the page is left */
  componentWillUnmount() {
    this.props.clearSelectedProducts();
  }

  /* Handle the click of a product selector */
  selectionClick = (passedProps) => {
    /* Return if no uniqueId is returned */
    if (!passedProps.uniqueId) {
      return false;
    }

    if (passedProps.selected) {
      this.props.unSelectProduct(passedProps.uniqueId);
    } else {
      this.props.selectProduct(passedProps.uniqueId);
    }
    selectProduct();
    return true;
  }

  /* Handle the checkout of a product */
  checkout = () => {
    const selected = this.props.productSelection.selected || {};
    this.props.checkout(selected);
  }

  /* Create a selection option for each of the products returned from the server */
  renderProducts = (productCatogary) => {
    /* Get the products from the store */
    const products = this.props.productSelection.products || [];
    const selected = this.props.productSelection.selected || {};

    const productElements = products.map((product) => {
      if (product.catogary === productCatogary) {
        const isSelected = selected[product.uniqueId] || false;
        return (
          <Selection
            name={product.displayText}
            value={product.value}
            clickEvent={this.selectionClick}
            uniqueId={product.uniqueId}
            key={product.value}
            selected={isSelected}
          >
          {product.displayText}
          </Selection>
        );
      }
      return null;
    });
    return productElements;
  };

  /* Render the selected products to the basket */
  renderSelectedProducts = () => {
    /* For each of the selected items, display them in the basket */
    const products = this.props.productSelection.products || [];
    const selectedProducts = this.props.productSelection.selected || {};

    const selectedElements = [];
    products.forEach((product) => { // eslint-disable-line
      if (selectedProducts[product.uniqueId] === true) {
        selectedElements.push(
          <div className="basket-item" key={`selected-${product.uniqueId}`}>
            {product.displayText}
          </div>
        );
      }
    });

    if (selectedElements.length === 0) {
      selectedElements.push(
        <p key="empty-message">
          Select the products you would like to add to your Sky package.
        </p>
      );
    }

    return selectedElements;
  }

  render() {
    const requestError = this.props.productSelection.error;
    return (
      <div className="page-product-selection">
        <section className="container page-section-header">
          <h1>Personalise your selection</h1>
        </section>
        {!requestError &&
          <div className="page-section-main">
            <section className="container">
              <h2>Add channels to your Sky bundle</h2>
            </section>
            <Grid className="grid personalise-selection">
              <Col md={4}>
                <h3>Sports</h3>
                {this.renderProducts('sports')}
              </Col>
              <Col md={4}>
                <h3>News</h3>
                {this.renderProducts('news')}
              </Col>
              <Col md={4}>
                <h3>Basket</h3>
                <div className="basket-items">
                  {this.renderSelectedProducts()}
                </div>
                <Link to="/confirmation" className="link-button">
                  <Button
                    onClick={this.checkout}
                    key="submit-button"
                    bsSize="large" block
                  >Checkout</Button>
                </Link>
              </Col>
            </Grid>
          </div>
        }
        {requestError &&
          <div className="page-section-main">
            <section className="container">
              <h2>No Location</h2>
              <p>
                Please make sure you have a location cookie set,
                Return to the <Link to="/">home page</Link> to set a cookie
              </p>
            </section>
          </div>
        }
      </div>
    );
  }
}
