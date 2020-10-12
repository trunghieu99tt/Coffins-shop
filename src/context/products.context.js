import React, { createContext, useContext, useMemo } from "react";
import { connect } from "react-redux";

import actions from "../redux/products/actions";
import * as asyncActions from "../redux/products/actions/products.asyncActions";
import bindActionCreators from "../utils/bindActionCreators";

const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const { actions, productsState, asyncActions, children } = props;

    const productsApi = useMemo(
        () => ({
            actions,
            ...asyncActions,
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(() => [productsState, productsApi], [
        productsApi,
        productsState,
    ]);

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    );
};

const mapStateToProps = ({ products }) => ({ productsState: products });

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContextProvider);

export const useProductsContext = () => useContext(ProductsContext);
