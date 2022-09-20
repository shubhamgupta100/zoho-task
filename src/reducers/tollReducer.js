import {
    ALL_TOLL_REQUEST,
    ALL_TOLL_SUCCESS,
    ALL_TOLL_FAIL,
    NEW_TOLL_REQUEST,
    NEW_TOLL_SUCCESS,
    NEW_TOLL_FAIL,
    DELETE_TOLL_REQUEST,
    DELETE_TOLL_SUCCESS,
    DELETE_TOLL_FAIL,
  } from "../actions/actionType";
  
  export const tollsReducer = (state = { tolls: [] }, action) => {
    switch (action.type) {
      case ALL_TOLL_REQUEST:
        return {
          loading: true,
          tolls: [],
        };
      case ALL_TOLL_SUCCESS:
        return {
          loading: false,
          tolls: action.payload,
        };
      case ALL_TOLL_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const deleteTollReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_TOLL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_TOLL_SUCCESS:
        return {
          ...state,
          loading: false,
          isDelete: true,
        };
      case DELETE_TOLL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const newtollReducer = (state = { tolls: {} }, action) => {
    switch (action.type) {
      case NEW_TOLL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_TOLL_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          tolls: action.payload.product,
        };
      case NEW_TOLL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  

  