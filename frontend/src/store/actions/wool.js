import axios from "axios";
import {
  WOOL_LIST_REQUEST,
  WOOL_LIST_SUCCESS,
  WOOL_LIST_FAIL,
  WOOL_DETAILS_REQUEST,
  WOOL_DETAILS_SUCCESS,
  WOOL_DETAILS_FAIL,
  WOOL_DETAILS_RESET,
  WOOL_DELETE_REQUEST,
  WOOL_DELETE_RESET,
  WOOL_DELETE_SUCCESS,
  WOOL_DELETE_FAIL,
  WOOL_UPDATE_REQUEST,
  WOOL_UPDATE_SUCCESS,
  WOOL_UPDATE_RESET,
  WOOL_UPDATE_FAIL,
  WOOL_CREATE_REQUEST,
  WOOL_CREATE_SUCCESS,
  WOOL_CREATE_FAIL,
  WOOL_CREATE_RESET,
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

export const fetchWools = (field, order) => async (dispatch) => {
  try {
    dispatch(fetchWoolsStart());

    const { data } = await axios.get(`/wools?field=${field}&order=${order}`);
    dispatch(fetchWoolsSuccess(data));
  } catch (error) {
    dispatch(fetchWoolsError(error));
  }
};
// ############## END FETCH ALL WOOLS ##############



// ############## FETCH SINGLE WOOL ##############
export const fetchWoolReset = () => {
  return {
    type: WOOL_DETAILS_RESET,
  };
};
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



// ############## DELETE WOOL ##############
export const deleteWoolReset = () => {
  return {
    type: WOOL_DELETE_RESET,
  };
};
export const deleteWoolStart = () => {
  return {
    type: WOOL_DELETE_REQUEST,
  };
};

export const deleteWoolSuccess = () => {
  return {
    type: WOOL_DELETE_SUCCESS
  };
};
export const deleteWoolError = (error) => {
  return {
    type: WOOL_DELETE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

export const deleteWool = (id) => async (dispatch) => {
  try {
    dispatch(deleteWoolStart());

    await axios.delete(`/wools/${id}`);
    dispatch(deleteWoolSuccess());
  } catch (error) {
    dispatch(deleteWoolError(error));
  }
};
 // ############## END DELETE WOOL ##############


 // ############## CREATE WOOL ##############
export const createWoolReset = () => {
  return {
    type: WOOL_CREATE_RESET,
  };
};

export const createWoolStart = () => {
  return {
    type: WOOL_CREATE_REQUEST,
  };
};

export const createWoolSuccess = (data) => {
  return {
    type: WOOL_CREATE_SUCCESS,
    payload: data,
  };
};
export const createWoolError = (error) => {
  return {
    type: WOOL_CREATE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

export const createWool = (wool) => async (dispatch) => {
  try {
    dispatch(createWoolStart());

    const { data } = await axios.post(`/wools`, wool );
    dispatch(createWoolSuccess(data));
  } catch (error) {
    dispatch(createWoolError(error));
  }
};
// ############## END CREATE WOOL ##############


 // ############## UPDATE WOOL ##############
export const updateWoolReset = () => {
  return {
    type: WOOL_UPDATE_RESET,
  };
};

export const updateWoolStart = () => {
  return {
    type: WOOL_UPDATE_REQUEST,
  };
};

export const updateWoolSuccess = (data) => {
  return {
    type: WOOL_UPDATE_SUCCESS,
    payload: data,
  };
};
export const updateWoolError = (error) => {
  return {
    type: WOOL_UPDATE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};

export const updateWool = (wool) => async (dispatch) => {
  try {
    dispatch(updateWoolStart());

    const { data } = await axios.put(`/wools/${wool._id}`, wool);
    dispatch(updateWoolSuccess(data));
  } catch (error) {
    dispatch(updateWoolError(error));
  }
};
// ############## END UPDATE WOOL ##############
