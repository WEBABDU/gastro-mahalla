import { ProductsAPI } from "../api/api";
import { SET_PRODUCTS, SET_PRODUCT_BY_ID } from "./types";

const initialState = {
  products: [],
  productById: {},
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: [...action.payload],
      };
    }

    case SET_PRODUCT_BY_ID: {
      return {
        ...state,
        productById: { ...action.payload },
      };
    }

    default:
      return state;
  }
};

const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
const setProductById = (product) => ({
  type: SET_PRODUCT_BY_ID,
  payload: product,
});

export const getProducts = (userId) => async (dispatch) => {
  const response = await ProductsAPI.getProducts(userId);
  console.log(response);
  if (response.code === 1) {
    dispatch(setProducts(response.data));
  }
};

export const getProductById = (productId, userId) => async (dispatch) => {
  const response = await ProductsAPI.getProductById(productId, userId);
  console.log(response);
  if (response.code === 1) {
    dispatch(setProductById(response.data));
  }
};
