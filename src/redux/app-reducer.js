import { getLogin } from "./auth-reducer";
import { INITIALIZED_SUCCESS } from "./types";

const intialState = {
  initialized: false,
};

export const appReducer = (state = intialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export let initilizedSucces = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getLogin());
  Promise.all([promise]).then(() => {
    dispatch(initilizedSucces());
  });
};
