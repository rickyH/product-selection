import fetch from 'isomorphic-fetch';

const GET_MESSAGE = 'component/helloworld/GET_MESSAGE';
const GETTING_MESSAGE = 'component/helloworld/GETTING_MESSAGE';
const GETTING_MESSAGE_FAILED = 'component/helloworld/GETTING_MESSAGE';

const initialState = {
  loaded: false,
  message: 'default message'
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GETTING_MESSAGE:
      return {
        ...state,
        loading: true
      };
    case GET_MESSAGE:
      console.log('GET_MESSAGE');
      return {
        ...state,
        loading: false,
        loaded: true,
        message: action.message,
        error: null
      };
    case GETTING_MESSAGE_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
        message: action.error
      };
    default:
      return state;
  }
}

/* TODO: move to actions folder */
export function getMessage() {
  return dispatch => {
    dispatch(requestMessage())
    return fetch(`http://localhost:3030/hello`)
      .then(response => response.json())
      .then(json => dispatch(receivedMessage(json)))
      .catch(err => dispatch(receivedMessageFailed(err)));
  }
}

function requestMessage () {
  return {
    type: GETTING_MESSAGE
  }
}

function receivedMessage (messageJSON) {
  const message = messageJSON.message || "-";
  return {
    type: GET_MESSAGE,
    message
  };
}

function receivedMessageFailed (err) {
  return {
    type: GETTING_MESSAGE_FAILED,
    error: err
  }
}

// export function getMessage() {
//   /* TODO: Instead of getteing this message it should recieve it from the server */
//   return {
//     type: GET_MESSAGE,
//     message: passedMessage,
//     promise: (client) => client.post('/hello', {
//       data: widget
//     })
//   };
// }
