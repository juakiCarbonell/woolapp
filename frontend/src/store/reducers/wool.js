import {
  WOOL_LIST_REQUEST,
  WOOL_LIST_SUCCESS,
  WOOL_LIST_FAIL,
  WOOL_DETAILS_REQUEST,
  WOOL_DETAILS_SUCCESS,
  WOOL_DETAILS_FAIL,
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
    default:
      return state;
  }
};
