import { RegistrationAPI } from "../api/api";
import { SET_LOADING, SET_USER_DATA } from "./types";

const initialState = {
  first_name: null,
  last_name: null,
  phone: null,
  email: null,
  password: null,
  image: null,
  cheef: null,
  isConfirm: false,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};

export const activeLoading = (loading) => ({ type: SET_LOADING, payload:loading });

const setUserData = (
  email,
  password,
  phone,
  first_name,
  last_name,
  image = null,
  cheef,
  isConfirm
) => ({
  type: SET_USER_DATA,
  payload: { email, password, phone, first_name, last_name, image, cheef, isConfirm },
});

export const sendConfirmEmail = (email, code) => async (dispatch) => {
  const response = await RegistrationAPI.confirmEmail(email, code);
  console.log(response.token);
  if (response.code === 1) {
    localStorage.setItem("token", response.data.token);
  }
};

export const setLogin =
  (email, password, password_confirm, first_name, last_name, phone) =>
  async (dispatch) => {
    const response = await RegistrationAPI.setRegister(
      email,
      password,
      password_confirm,
      first_name,
      last_name,
      phone
    );

    if (response.code === 101) {
      dispatch(
        setUserData(email, password, phone, first_name, last_name, true)
      );
    }
  };

export const login = (email, password) => async (dispatch) => {
  dispatch(activeLoading(true));
  setTimeout(async () => {
    const response = await RegistrationAPI.login(email, password);

    if (response.code === 1) {
      const { email, password, phone, first_name, last_name, image, token } =
        response.data;
        
      dispatch(
        setUserData(email, password, phone, first_name, last_name, image, false)
      );
      localStorage.setItem("token", token);
      dispatch(activeLoading(false));
      // eslint-disable-next-line no-restricted-globals
      location.reload()
    }
  }, 2000);
};

export const getLogin = () => async (dispatch) => {
  const response = await RegistrationAPI.me();
  if (response.code === 1) {
    console.log(response.data);
    const { email, password, phone, first_name, last_name, image, cheef } =
      response.data;
    dispatch(
      setUserData(email, password, phone, first_name, last_name, image, cheef,  false)
    );
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
