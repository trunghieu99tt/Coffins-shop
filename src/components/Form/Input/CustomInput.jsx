import React from "react";

import "./customInput.scss";

const CustomInput = ({ value, onChange, name, title, type }) => {
    return (
        <div className="form-group">
            <label className="customInput__label" htmlFor={name}>
                {title}
            </label>
            <input
                type={type}
                className="form-control customInput__input"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default CustomInput;
