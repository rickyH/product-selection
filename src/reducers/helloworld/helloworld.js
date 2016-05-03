const MESSAGE = 'component/helloworld/Message';

const initialState = {
  message: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        message: action.passedMessage
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
