import { createActions } from "redux-actions";

import { actionTypes } from "./products.types";

const prefix = "PRODUCTS";

const actionMap = {};

export default createActions(actionMap, ...actionTypes, { prefix });
