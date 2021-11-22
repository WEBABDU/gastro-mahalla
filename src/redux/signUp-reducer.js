import { SET_RADIO_VALUE } from "./types";

const initialState = {
  radioValue: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RADIO_VALUE: {
      return {
        ...state,
        radioValue: action.payload,
      };
    }

    default:
      return state;
  }
};


export const setRadioValue = (value) => ({
    type: SET_RADIO_VALUE,
    payload: value
})