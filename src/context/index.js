import React from "react";

import ProductContextProvider from "./products.context";

const ContextProviders = [ProductContextProvider];

const ContextProvider = ({ children }) => {
    return ContextProviders.reduceRight(
        (memo, ContextProvider) => <ContextProvider>{memo}</ContextProvider>,
        children
    );
};

export default ContextProvider;
