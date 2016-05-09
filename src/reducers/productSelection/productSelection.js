import fetch from 'isomorphic-fetch';

const SELECT_PRODUCT = 'component/productSelection/SELECT_PRODUCT';
const UN_SELECT_PRODUCT = 'component/productSelection/UN_SELECT_PRODUCT';

const GET_PRODUCTS = 'component/productSelection/GET_PRODUCTS';
const GETTING_PRODUCTS = 'component/productSelection/GETTING_PRODUCTS';
const GETTING_PRODUCTS_FAILED = 'component/productSelection/GETTING_PRODUCTS_FAILED';

const CLEAR_SELECTED_PRODUCTS = 'component/productSelection/CLEAR_SELECTED_PRODUCTS';

const initialState = {
  loaded: false,
  products: [],
  selected: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.id]: true
        }
      };
    case UN_SELECT_PRODUCT:
      return {
        ...state,
        selected: {
          ...state.selected,
          [action.id]: false
        }
      };
    case GET_PRODUCTS:
      return {
        ...state,
        loaded: true,
        error: false,
        products: action.products
      };
    case GETTING_PRODUCTS:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case GETTING_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case CLEAR_SELECTED_PRODUCTS:
      return {
        ...state,
        selected: {}
      };
    default:
      return state;
  }
}

/* Actions */
export function selectProduct(productId) {
  return {
    type: SELECT_PRODUCT,
    id: productId
  };
}

export function unSelectProduct(productId) {
  return {
    type: UN_SELECT_PRODUCT,
    id: productId
  };
}

function requestProducts() {
  return {
    type: GETTING_PRODUCTS
  };
}

function receivedProducts(returnedProducts) {
  const products = returnedProducts || {};
  return {
    type: GET_PRODUCTS,
    products
  };
}

function receivedProductsFailed() {
  return {
    type: GETTING_PRODUCTS_FAILED,
    error: true
  };
}

export function clearSelectedProducts() {
  return {
    type: CLEAR_SELECTED_PRODUCTS,
    error: true
  };
}

export function getProducts() {
  return dispatch => {
    dispatch(requestProducts());
    return fetch('http://localhost:3030/products', {
      credentials: 'include'
    })
      .then(response => response.json())
      .then(json => json.products || json)
      .then(products => dispatch(receivedProducts(products)))
      .catch(err => dispatch(receivedProductsFailed(err)));
  };
}
