import {
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_HIGHLIGHTS_REQUEST,
} from "./HighlightsTypes";

const initialState = {
  loading: false,
  highlights: [],
  errors: "",
};

export const highlightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HIGHLIGHTS_SUCCESS:
      return {
        ...state,
        loading: false,
        highlights: action.payload,
      };
    case FETCH_HIGHLIGHTS_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
