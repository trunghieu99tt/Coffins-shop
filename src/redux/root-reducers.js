import products from "./products/products.reducer";

import { combineReducers } from "redux";

const reducers = {
    products,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
