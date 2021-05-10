import { combineReducers } from "redux";
import { highlightsReducer } from "./highlights/HighlightsReducers";

const rootReducer = combineReducers({
  highlights: highlightsReducer,
});

export default rootReducer;
