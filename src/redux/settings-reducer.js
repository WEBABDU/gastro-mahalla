import { UpdateProfileAPI } from "../api/api";
import { UPDATE_IMAGE } from "./types";

const initialState = {
  data: {},
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IMAGE: {
      return {
        data: { ...action.payload },
      };
    }

    default:
      return state;
  }
};

const setImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: image,
});

export const updateImage = (image) => async (dispatch) => {
  const response = await UpdateProfileAPI.uploadImage(image);
  if (response.code === 1) {
    dispatch(setImage(image));
    console.log(response.data);
  }
};

export const updateProfile =
  (email, first_name, last_name, phone) => async (dispatch) => {
    const response = await UpdateProfileAPI.updateProfile(
      email,
      first_name,
      last_name,
      phone
    );
    if (response.code === 1) {
      // eslint-disable-next-line no-restricted-globals
        location.reload();
      console.log(response.data);
    }
  };
