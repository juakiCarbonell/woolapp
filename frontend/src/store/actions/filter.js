import { WOOL_SET_FILTER, WOOL_RESET_FILTER } from "../costants/costants";

export const setFilterWools = (data) => {
  return {
    type: WOOL_SET_FILTER,
    payload: data,
  };
};
export const resetFilterWools = () => {
  return {
    type: WOOL_RESET_FILTER,
  };
};
