import { call, put, takeLatest } from "redux-saga/effects";
import { queryCategories, queryProducts } from "./products.queries";

import actions from "./actions";

function* fetchProducts() {
    try {
        const response = yield call(queryProducts);

        if (response) {
            yield put({
                type: actions.fetchProductsSuccess,
                payload: response || [],
            });
        }
    } catch (err) {}
}

export function* getAllProducts() {
    yield takeLatest(actions.fetchProducts, fetchProducts);
}

function* fetchCategories() {
    try {
        const response = yield call(queryCategories);
        if (response) {
            yield put({
                type: actions.fetchCategoriesSuccess,
                payload: response || [],
            });
        }
    } catch (error) {}
}

export function* getAllCategories() {
    yield takeLatest(actions.fetchCategories, fetchCategories);
}
