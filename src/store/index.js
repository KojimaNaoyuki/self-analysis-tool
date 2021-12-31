import { createStore } from "redux";

const initialState = {
  answerData: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ANSWERDATA':
      return {
        answerData: state.answerData + action.payload.text,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;