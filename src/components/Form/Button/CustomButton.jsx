import React from "react";

import "./customButton.scss";

const CustomButton = ({ type, onClick, children }) => {
    let buttonTypeClass = "";

    switch (type) {
        case "primary":
            buttonTypeClass = "btn-primary";
            break;
        case "danger":
            buttonTypeClass = "btn-danger";
            break;
        default:
            break;
    }

    return (
        <button
            className={`btn customButton ${buttonTypeClass}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
