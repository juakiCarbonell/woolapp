import {
  WOOL_SET_FILTER,
  WOOL_RESET_FILTER,
} from "../costants/costants";

const initialFilter = {
  thickness: null, 
  left: null,
  keyword: null
};

export const woolFilter = (state = initialFilter, action) => {
  switch (action.type) {
    case WOOL_SET_FILTER:
      return { ...action.payload };
    case WOOL_RESET_FILTER:
      return { ...initialFilter };
    default:
      return state;
  }
};
