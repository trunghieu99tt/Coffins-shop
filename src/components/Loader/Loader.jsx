import React from "react";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

import "./loader.scss";

const Loader = () => {
    useLockBodyScroll();
    return (
        <div className="loader">
            <div className="donut"></div>
        </div>
    );
};

export default Loader;
