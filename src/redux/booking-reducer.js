import { BookingAPI } from "../api/api";
import { activeLoading } from "./auth-reducer";
import {
  CANCEL_BOOKING,
  SET_BOOKINGS,
  SET_DISHES,
  SET_FETCHING_BOOKINGS,
} from "./types";

const initialState = {
  dishes: {},
  bookings: [],
  fetchBookings: false,
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISHES: {
      return {
        ...state,
        dishes: { ...action.payload },
      };
    }

    case SET_BOOKINGS: {
      return {
        ...state,
        bookings: [...action.payload],
      };
    }

    case SET_FETCHING_BOOKINGS: {
      return {
        ...state,
        fetchBookings: action.payload,
      };
    }

    case CANCEL_BOOKING: {
      return {
        ...state,
        bookings: state.bookings.map((el) => {
          if (el.id === action.payload) {
            return { ...el, status: 3 };
          }
          return el;
        }),
      };
    }

    default:
      return state;
  }
};

const setDishes = (dishes) => ({
  type: SET_DISHES,
  payload: dishes,
});

const setBookings = (bookings) => ({
  type: SET_BOOKINGS,
  payload: bookings,
});

const cancelBooking = (id) => ({
  type: CANCEL_BOOKING,
  payload: id,
});

const setFetchingBookings = (fetchBookings) => ({
  type: SET_FETCHING_BOOKINGS,
  payload: fetchBookings,
});

export const setDishesAsync =
  (date, people, portion, product_id) => async (dispatch) => {
    dispatch(activeLoading(true));
    const response = await BookingAPI.setDish(
      date,
      people,
      portion,
      product_id
    );

    if (response.code === 1) {
      console.log(response.data);
      dispatch(setDishes(response.data));
      dispatch(activeLoading(false));
    }
  };

export const getBookings = () => async (dispatch) => {
  dispatch(setFetchingBookings(true));
  const response = await BookingAPI.getBookings();
  if (response.code === 1) {
    console.log(response.data);
    dispatch(setBookings(response.data));
    dispatch(setFetchingBookings(false));
  }
};

export const cancelBookingAsync = (id) => async (dispatch) => {
  const response = await BookingAPI.cancelBooking(id);
  if (response.code === 1) {
    console.log(response.data);
    dispatch(cancelBooking(id));
  }
};
