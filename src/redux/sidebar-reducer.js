import { SET_SIDEBAR_STATUS } from "./types";

const initialState = {
  isActive: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_STATUS: {
      return {
        ...state,
        isActive: action.payload,
      };
    }
    default:
      return state;
  }
};


export const setIsActive = (isActive) => ({type: SET_SIDEBAR_STATUS, payload: isActive})