import fetch from 'isomorphic-fetch';

const POST_CONFIRMATION = 'component/confirmationReducer/POST_CONFIRMATION';
const POSTING_CONFIRMATION = 'component/confirmationReducer/POSTING_CONFIRMATION';
const POSTING_CONFIRMATION_FAILED = 'component/confirmationReducer/POSTING_CONFIRMATION_FAILED';

const CLEAR_CONFIRMATION = 'component/confirmationReducer/CLEAR_CONFIRMATION';

const initialState = {
  loaded: false,
  confirmation: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case POST_CONFIRMATION:
      return {
        ...state,
        loaded: true,
        error: false,
        confirmation: action.confirmation
      };
    case POSTING_CONFIRMATION:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case POSTING_CONFIRMATION_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case CLEAR_CONFIRMATION:
      return {
        ...state,
        loading: false,
        loaded: false,
        confirmation: {}
      };
    default:
      return state;
  }
}

/* Actions */
function requestConfirmation() {
  return {
    type: POSTING_CONFIRMATION
  };
}

function receivedConfirmation(returnedConfirmation) {
  const confirmation = returnedConfirmation || {};
  return {
    type: POST_CONFIRMATION,
    confirmation
  };
}

function receivedConfirmationFailed() {
  return {
    type: POSTING_CONFIRMATION_FAILED,
    error: true
  };
}

export function clearConfirmation() {
  return {
    type: CLEAR_CONFIRMATION
  };
}

export function checkout(selectedProducts) {
  const body = JSON.stringify({
    selectedProducts
  });

  return dispatch => {
    dispatch(requestConfirmation());
    return fetch('http://localhost:3030/checkout', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body
    })
      .then(response => response.json())
      .then(json => {
        const confirmation = json.confirmation || json;
        return confirmation;
      })
      .then(confirmation => dispatch(receivedConfirmation(confirmation)))
      .catch(err => dispatch(receivedConfirmationFailed(err)));
  };
}
