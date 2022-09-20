import {
    ALL_VEHICLE_REQUEST,
    ALL_VEHICLE_SUCCESS,
    ALL_VEHICLE_FAIL,
    NEW_VEHICLE_REQUEST,
    NEW_VEHICLE_SUCCESS,
    NEW_VEHICLE_FAIL,
    DELETE_VEHICLE_REQUEST,
    DELETE_VEHICLE_SUCCESS,
    DELETE_VEHICLE_FAIL,
  } from "../actions/actionType";
  
  export const vehiclessReducer = (state = { vehicles: [] }, action) => {
    switch (action.type) {
      case ALL_VEHICLE_REQUEST:
        return {
          loading: true,
          vehicles: [],
        };
      case ALL_VEHICLE_SUCCESS:
        return {
          loading: false,
          vehicles: action.payload,
        };
      case ALL_VEHICLE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const deleteVehicleReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_VEHICLE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_VEHICLE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDelete: action.payload,
        };
      case DELETE_VEHICLE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const newVehicleReducer = (state = { vehicles: {} }, action) => {
    switch (action.type) {
      case NEW_VEHICLE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_VEHICLE_SUCCESS:
        return {
          loading: false,
          vehicle: action.payload,
        };
      case NEW_VEHICLE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  

  