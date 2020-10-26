import React from "react";
import { Select } from "antd";

const { Option } = Select;

const CustomSelect = ({
    options,
    defaultValue,
    onChange,
    title,
    placeholder,
    name,
    style,
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{title}</label>
            <div>
                <Select
                    defaultValue={defaultValue}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={style}
                >
                    {options?.map((option) => (
                        <Option value={option}>{option}</Option>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default CustomSelect;
