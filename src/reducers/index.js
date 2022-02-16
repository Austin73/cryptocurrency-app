import { combineReducers } from "redux";


import currencyDataReducer from "./currencyDataReducer";

const allReducers=combineReducers({
    currencyData:currencyDataReducer,

})
export default allReducers