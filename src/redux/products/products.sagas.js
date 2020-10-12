import { call, put, takeLatest } from "redux-saga/effects";
import { queryProducts } from "./products.queries";

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
