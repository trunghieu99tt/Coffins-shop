import { all, call } from "redux-saga/effects";

import { getAllProducts } from "./products/products.sagas";

export default function* rootSaga() {
    yield all([call(getAllProducts)]);
}
