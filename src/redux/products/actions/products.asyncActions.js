import actions from "./products.actions";

export const fetchProducts = () => (dispatch) =>
    dispatch(actions.fetchProducts());

export const fetchProductsSuccess = (products) => (dispatch) => {
    dispatch(actions.fetchProductsSuccess(products));
};

export const setCategories = (categories) => (dispatch) =>
    dispatch(actions.setCategories(categories));
