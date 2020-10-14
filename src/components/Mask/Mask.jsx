import React from "react";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

import "./mask.scss";

const Mask = ({ handleOnClick }) => {
    useLockBodyScroll();

    return <div className="mask" onClick={handleOnClick}></div>;
};

export default Mask;
