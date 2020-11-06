import axios from "axios";
import {
  WOOL_LIST_REQUEST,
  WOOL_LIST_SUCCESS,
  WOOL_LIST_FAIL,
  WOOL_DETAILS_REQUEST,
  WOOL_DETAILS_SUCCESS,
  WOOL_DETAILS_FAIL,
} from "../costants/costants";

 // ############## FETCH ALL WOOLS ##############
export const fetchWoolsStart = () => {
  return {
    type: WOOL_LIST_REQUEST,
  };
};

export const fetchWoolsSuccess = (data) => {
  return {
    type: WOOL_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchWoolsError = (error) => {
  return {
    type: WOOL_LIST_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

export const fetchWools = () => async (dispatch) => {
  try {
    dispatch(fetchWoolsStart());

    const { data } = await axios.get("/wools");
    dispatch(fetchWoolsSuccess(data));
  } catch (error) {
    dispatch(fetchWoolsError(error));
  }
};
// ############## END FETCH ALL WOOLS ##############



// ############## FETCH SINGLE WOOL ##############
export const fetchWoolStart = () => {
  return {
    type: WOOL_DETAILS_REQUEST,
  };
};

export const fetchWoolSuccess = (data) => {
  return {
    type: WOOL_DETAILS_SUCCESS,
    payload: data,
  };
};
export const fetchWoolError = (error) => {
  return {
    type: WOOL_DETAILS_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

export const fetchWool = (id) => async (dispatch) => {
  try {
    dispatch(fetchWoolStart());

    const { data } = await axios.get(`/wools/${id}`);
    dispatch(fetchWoolSuccess(data));
  } catch (error) {
    dispatch(fetchWoolError(error));
  }
};
 // ############## END FETCH SINGLE WOOL ##############
