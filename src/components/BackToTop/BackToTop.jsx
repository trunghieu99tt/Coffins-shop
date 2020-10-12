import React from "react";
import scrollToTop from "../../hooks/scrollToTop";

import { ArrowUp } from "react-feather";

import "./backToTop.scss";

const BackToTop = () => {
    const handleClick = () => {
        scrollToTop();
    };

    return (
        <button className="backToTop" onClick={handleClick}>
            <ArrowUp />
        </button>
    );
};

export default BackToTop;
