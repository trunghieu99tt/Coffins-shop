import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const BaseView = (WrappedComponent) => (props) => {
    return (
        <React.Fragment>
            <Header />
            <WrappedComponent {...props} />
            <Footer />
        </React.Fragment>
    );
};

export default BaseView;
