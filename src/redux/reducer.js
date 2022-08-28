const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "REST":
      return { ...state, counter: 0 };
    case "INCRBYVALUE":
      return { ...state, counter: state.counter +action.payload };
    case "DECRBYVALUE":
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};

export default counterReducer;
