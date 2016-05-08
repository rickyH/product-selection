require('./ProductSelection.scss');
import React, { Component, PropTypes } from 'react';
import { Grid, Col, Button } from 'react-bootstrap';
import { Selection } from 'components';
import { connect } from 'react-redux';
import {
  selectProduct,
  unSelectProduct,
  getProducts
} from 'reducers/productSelectionReducer/productSelectionReducer';

@connect(
  state => ({
    productSelection: state.productSelection
  })
)

export default class ProductSelection extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    productSelection: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  selectionClick = (passedProps) => {
    /* Return if no uniqueId is returned */
    if (!passedProps.uniqueId) {
      return false;
    }

    if (passedProps.selected) {
      this.props.dispatch(unSelectProduct(passedProps.uniqueId));
    } else {
      this.props.dispatch(selectProduct(passedProps.uniqueId));
    }
    selectProduct();
    return true;
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

  /* TODO: Selections need to be loaded from server... */
  render() {
    return (
      <div className="page-product-selection">
        <section className="container page-section-header">
          <h1>Personalise your selection</h1>
        </section>
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
              <Button key="submit-button" bsSize="large" block>Checkout</Button>
            </Col>
          </Grid>
        </div>
      </div>
    );
  }
}
