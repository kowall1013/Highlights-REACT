import {
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_HIGHLIGHTS_REQUEST,
} from "./HighlightsTypes";

export const fetchHighlights = () => {
  const API_URL = "https://www.scorebat.com/video-api/v1/";

  return (dispatch) => {
    dispatch(fetchHighlightsRequest());

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => dispatch(fetchHighlightsSuccess(data)))
      .catch((error) => fetchHighlightsFailure(error));
  };
};

export const fetchHighlightsRequest = () => {
  return {
    type: FETCH_HIGHLIGHTS_REQUEST,
  };
};

export const fetchHighlightsSuccess = (highlights) => {
  return {
    type: FETCH_HIGHLIGHTS_SUCCESS,
    payload: highlights,
  };
};

export const fetchHighlightsFailure = (error) => {
  return {
    type: FETCH_HIGHLIGHTS_FAILURE,
    payload: error,
  };
};
