import { compose } from "recompose";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducers";
import rootSaga from "./root-sagas";
import thunk from "redux-thunk";
import log from "./middlewares/log";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, thunk];

if (process.env.NODE_ENV !== "production") {
    middleware.push(log);
}

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
export default store;
