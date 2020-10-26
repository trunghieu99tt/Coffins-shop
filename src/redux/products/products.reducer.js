import { handleActions } from "redux-actions";
import actions from "./actions";

const INITIAL_STATE = {
    products: null,
    categories: null,
    categoriesInfo: null,
};

const reducerMap = {
    [actions.fetchProductsSuccess]: (state, { payload }) => {
        return {
            ...state,
            products: payload,
        };
    },
    [actions.fetchCategoriesSuccess]: (state, { payload }) => {
        return {
            ...state,
            categoriesInfo: payload,
        };
    },
    [actions.setCategories]: (state, { payload }) => {
        return {
            ...state,
            categories: payload,
        };
    },
};

export default handleActions(reducerMap, INITIAL_STATE);
