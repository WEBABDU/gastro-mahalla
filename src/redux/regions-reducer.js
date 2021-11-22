import { OrganizationAPI, RegionsApi } from "../api/api";
import { SET_ORGANIZATION, SET_ORGANIZATION_BY_ID, SET_REGIONS } from "./types";

const intialState = {
  regions: [],
  organization: [],
  organizationById: {},
};

export const regionsReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_REGIONS: {
      return {
        ...state,
        regions: action.payload,
      };
    }
    case SET_ORGANIZATION: {
      return {
        ...state,
        organization: action.payload,
      };
    }

    case SET_ORGANIZATION_BY_ID: {
      return {
        ...state,
        organizationById: { ...action.payload },
      };
    }

    default:
      return state;
  }
};

const setRegions = (regions) => ({ type: SET_REGIONS, payload: regions });
const setOrganization = (organizations) => ({
  type: SET_ORGANIZATION,
  payload: organizations,
});
const setOrganizationById = (organization) => ({
  type: SET_ORGANIZATION_BY_ID,
  payload: organization,
});

export const getRegions = () => {
  return async (dispatch) => {
    const response = await RegionsApi.getRegions();
    dispatch(setRegions(response.data));
  };
};

export const getOrganization = () => {
  return async (dispatch) => {
    const response = await OrganizationAPI.getOrganization();
    dispatch(setOrganization(response.data));
  };
};

export const getOrganizationById = (userId) => {
  return async (dispatch) => {
    const response = await OrganizationAPI.getOrganizationByID(userId);
    console.log(response);
    dispatch(setOrganizationById(response.data));
  };
};
