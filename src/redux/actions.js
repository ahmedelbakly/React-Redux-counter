export const Increment = async (dispatch) => {
  dispatch({
    type: "INCREMENT",
  });
};
export const Decrement = async (dispatch) => {
  dispatch({
    type: "DECREMENT",
  });
};
export const Rest = async (dispatch) => {
  dispatch({
    type: "REST",
  });
};
export const IncrByValue = async (dispatch, val) => {
  dispatch({
    type: "INCRBYVALUE",
    payload: val,
  });
};
export const DecrByValue = async (dispatch, val) => {
  dispatch({
    type: "DECRBYVALUE",
    payload: val,
  });
};
