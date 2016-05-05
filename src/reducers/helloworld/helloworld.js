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
      return {
        ...state,
        loading: false,
        loaded: true,
        message: action.result,
        error: null
      };
    case GETTING_MESSAGE_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function message(passedMessage) {
  return {
    type: MESSAGE,
    message: passedMessage
  };
}
