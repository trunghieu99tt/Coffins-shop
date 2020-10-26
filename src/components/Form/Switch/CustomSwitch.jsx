import React from "react";
import { Switch } from "antd";

const CustomSwitch = ({ name, value, onChange, title }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{title}</label>
            <Switch id={name} checked={value} onChange={onChange} />
        </div>
    );
};

export default CustomSwitch;
