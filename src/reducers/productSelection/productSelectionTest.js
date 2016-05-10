import reducer from './productSelection';
import chai from 'chai';
const expect = chai.expect;

import {
    SELECT_PRODUCT,
    UN_SELECT_PRODUCT,
    GET_PRODUCTS,
    GETTING_PRODUCTS,
    GETTING_PRODUCTS_FAILED,
    CLEAR_SELECTED_PRODUCTS
} from './productSelectionTypeDef';

describe('Reducers - productSelection', () => {
  it('should handle SELECT_PRODUCT', () => {
    const reduced = reducer([], {
      type: SELECT_PRODUCT,
      id: 123
    });

    expect(reduced).to.deep.equal({ selected: { 123: true } });
  });

  it('should handle UN_SELECT_PRODUCT', () => {
    const initialState = { selected: { 123: true } };
    const reduced = reducer(initialState, {
      type: UN_SELECT_PRODUCT,
      id: 123
    });

    expect(reduced).to.deep.equal({ selected: { 123: false } });
  });

  it('should handle UN_SELECT_PRODUCT', () => {
    const initialState = { selected: { 123: true } };
    const reduced = reducer(initialState, {
      type: UN_SELECT_PRODUCT,
      id: 123
    });

    expect(reduced).to.deep.equal({ selected: { 123: false } });
  });

  it('should handle GET_PRODUCTS', () => {
    const products = [
      { product1: '1' },
      { product2: '2' }
    ];

    const reduced = reducer({}, {
      type: GET_PRODUCTS,
      loaded: true,
      error: false,
      products
    });

    expect(reduced).to.deep.equal({ loaded: true, error: false, products });
  });

  it('should handle GETTING_PRODUCTS', () => {
    const reduced = reducer({}, {
      type: GETTING_PRODUCTS
    });

    expect(reduced).to.deep.equal({ loading: true, loaded: false });
  });

  it('should handle GETTING_PRODUCTS_FAILED', () => {
    const reduced = reducer({}, {
      type: GETTING_PRODUCTS_FAILED,
      error: 'errorTest'
    });

    expect(reduced).to.deep.equal({ loading: false, loaded: false, error: 'errorTest' });
  });

  it('should handle CLEAR_SELECTED_PRODUCTS', () => {
    const reduced = reducer({}, {
      type: CLEAR_SELECTED_PRODUCTS
    });

    expect(reduced).to.deep.equal({ selected: {} });
  });
});


/* TODO: Test the actions */
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// describe('Actions - productSelection', () => {
//     it('creates GET_PRODUCTS when fetching products', () => {
//
//     });
// });
