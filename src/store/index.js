import { createStore } from "redux";

const initialState = {
  answerData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ANSWERDATA':
      state.answerData[action.payload.index] = action.payload.text;
      let result = state.answerData;
      return {
        answerData: result
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;