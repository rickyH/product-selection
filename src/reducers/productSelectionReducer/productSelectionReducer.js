const SELECT_PRODUCT = 'component/productSelection/SELECT_PRODUCT';
const UN_SELECT_PRODUCT = 'component/productSelection/UN_SELECT_PRODUCT';

const GET_PRODUCTS = 'component/productSelection/GET_PRODUCTS';
const GETTING_PRODUCTS = 'component/productSelection/GETTING_PRODUCTS';
const GETTING_PRODUCTS_FAILED = 'component/productSelection/GETTING_PRODUCTS_FAILED';

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
        products: action.products
      };
    default:
      return state;
  }
}


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

function receivedProductsFailed(err) {
  return {
    type: GETTING_PRODUCTS_FAILED,
    error: err
  };
}

export function getProducts() {
  return dispatch => {
    dispatch(requestProducts());
    return fetch('http://localhost:3030/products')
      .then(response => response.json())
      .then(json => {
        const products = json.products || json;
        return products;
      })
      .then(products => dispatch(receivedProducts(products)))
      .catch(err => dispatch(receivedProductsFailed(err)));
  };
}
