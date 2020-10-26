import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { message } from "antd";

import CustomButton from "../../components/Form/Button/CustomButton";
import CustomInput from "../../components/Form/Input/CustomInput";
import Loader from "../../components/Loader/Loader";
import { useProductsContext } from "../../context/products.context";
import { encodeStr } from "../../utils/helper";
import { useCategory } from "./useCategory";

const AdminCategory = () => {
    const { name: categoryName } = useParams();
    const history = useHistory();
    const [{ categories }] = useProductsContext();
    const { handleCreate, handleEdit, isSuccess, loading } = useCategory();

    const [isEdit, setIsEdit] = useState(true);
    const [formValue, setFormValue] = useState({
        name: "",
    });
    const [status, setStatus] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    useEffect(() => {
        if (categories) {
            const category = categories.find(
                (c) => encodeStr(c.name) === categoryName
            );
            if (category) {
                setFormValue({
                    name: category?.name,
                    description: category?.description,
                });
                setCurrentCategory(category);
            } else {
                setIsEdit(false);
            }
        }
    }, [categories]);

    useEffect(() => {
        if (isSuccess === true && status === false) {
            successMessage();
            setStatus(true);
            history.push("/quan-tri");
        } else if (isSuccess === false && status === true) {
            failMessage();
            setStatus(false);
        }
    }, [isSuccess]);

    const successMessage = () => message.success("OK");

    const failMessage = () => message.error("Failed");

    const validate = () => {
        const values = formValue && Object.values(formValue);
        for (const value of values) {
            if (value === "") return false;
        }
        return true;
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            if (!isEdit) {
                await handleCreate(formValue);
            } else {
                await handleEdit(currentCategory, formValue);
            }
        } else {
            message.error("Please input all fields");
        }
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    // if (!categories || loading) return <Loader />;

    const { name, description } = formValue;

    return (
        <section className="adminCategory">
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <CustomInput
                        type="text"
                        title="Tên chuyên mục"
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                    />

                    <CustomInput
                        type="text"
                        title="Mô tả"
                        name="description"
                        value={description}
                        onChange={handleOnChange}
                    />

                    <div className="form-group">
                        <CustomButton type="primary" onClick={handleFormSubmit}>
                            {(isEdit && "Sửa") || "Thêm mới"}
                        </CustomButton>
                        <CustomButton
                            type="danger"
                            onClick={() => history.back()}
                        >
                            Hủy
                        </CustomButton>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AdminCategory;
