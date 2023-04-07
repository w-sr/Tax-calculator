import { combineReducers } from "redux";
import tax from "./tax/reducer";

const rootReducer = combineReducers({
  tax,
});

export default rootReducer;
