import {
  WOOL_LIST_REQUEST,
  WOOL_LIST_SUCCESS,
  WOOL_LIST_FAIL,
  WOOL_DETAILS_REQUEST,
  WOOL_DETAILS_SUCCESS,
  WOOL_DETAILS_FAIL,
  WOOL_DETAILS_RESET,
  WOOL_DELETE_REQUEST,
  WOOL_DELETE_SUCCESS,
  WOOL_DELETE_FAIL,
  WOOL_UPDATE_REQUEST,
  WOOL_UPDATE_SUCCESS,
  WOOL_UPDATE_FAIL,
  WOOL_UPDATE_RESET,
  WOOL_CREATE_REQUEST,
  WOOL_CREATE_SUCCESS,
  WOOL_CREATE_FAIL,
  WOOL_CREATE_RESET,
} from "../costants/costants";

const initialStateList = {
  wools: [],
  loading: false,
  error: null,
};
const initialStateDetails = {
  wool: {},
  loading: false,
  error: null,
  success: false
};
const initialStateDelete = {
  success: false,
  loading: false,
  error: null,
};

export const woolList = (state = initialStateList, action) => {
  switch (action.type) {
    case WOOL_LIST_REQUEST:
      return { ...state, loading: true };
    case WOOL_LIST_SUCCESS:
      return { ...state, loading: false, wools: action.payload };
    case WOOL_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const woolDetails = (state = initialStateDetails, action) => {
  switch (action.type) {
    case WOOL_DETAILS_REQUEST:
      return { ...state, loading: true };
    case WOOL_DETAILS_SUCCESS:
      return { ...state, loading: false, wool: action.payload };
    case WOOL_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case WOOL_DETAILS_RESET:
      return { ...initialStateDetails };
    default:
      return state;
  }
};

export const woolDelete = (state = initialStateDelete, action) => {
  switch (action.type) {
    case WOOL_DELETE_REQUEST:
      return { ...state, loading: true, success: false };
    case WOOL_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case WOOL_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const woolCreate = (state = initialStateDetails, action) => {
  switch (action.type) {
    case WOOL_CREATE_REQUEST:
      return { ...state, loading: true, success: false };
    case WOOL_CREATE_SUCCESS:
      return { ...state, loading: false, wool: action.payload, success: true };
    case WOOL_CREATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case WOOL_CREATE_RESET:
      return { ...initialStateDetails };
    default:
      return state;
  }
};

export const woolUpdate = (state = initialStateDetails, action) => {
  switch (action.type) {
    case WOOL_UPDATE_REQUEST:
      return { ...state, loading: true, success: false };
    case WOOL_UPDATE_SUCCESS:
      return { ...state, loading: false, wool: action.payload, success: true };
    case WOOL_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case WOOL_UPDATE_RESET:
      return { ...initialStateDetails };
    default:
      return state;
  }
};
