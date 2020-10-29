import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { message } from "antd";

import Loader from "../../components/Loader/Loader";
import { useProductsContext } from "../../context/products.context";
import CustomInput from "../../components/Form/Input/CustomInput";
import CustomButton from "../../components/Form/Button/CustomButton";
import { useProduct } from "./useProduct";
import CustomSelect from "../../components/Form/Select/CustomSelect";
import CustomSwitch from "../../components/Form/Switch/CustomSwitch";

const AdminProduct = () => {
    const { id } = useParams();
    const [{ products, categories }] = useProductsContext();
    const { loading, isSuccess, handleCreate, handleEdit } = useProduct();

    const history = useHistory();
    const [isEdit, setIsEdit] = useState(true);
    const [status, setStatus] = useState(false);
    const [formValue, setFormValue] = useState({
        category: "",
        description: "",
        id: products?.length,
        image: "",
        isContactForSale: false,
        isContactForPrice: false,
        isSale: true,
        material: "",
        minimalPrice: 0,
        name: "",
        price: 0,
    });

    useEffect(() => {
        if (products) {
            const product = products?.find((pr) => pr.dbID === id);
            if (product) {
                setFormValue(product);
            } else {
                setIsEdit(false);
            }
        }
    }, [products]);

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
                handleCreate(formValue);
            } else {
                handleEdit(formValue);
            }
        } else {
            message.error("Please input all fields");
        }
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        let finalValue = value;
        if (name == "minimalPrice" || name == "price") finalValue = ~~value;
        setFormValue({
            ...formValue,
            [name]: finalValue,
        });
    };

    const handleChangeSwitch = (value, key) => {
        setFormValue({
            ...formValue,
            [key]: value,
        });
    };

    const handleChangeSelect = (value) => {
        setFormValue({
            ...formValue,
            category: value,
        });
    };

    if (!products || loading) return <Loader />;

    const {
        category,
        description,
        name,
        image,
        isContactForPrice,
        isSale,
        material,
        minimalPrice,
        price,
    } = formValue;

    if (!categories || !categories.length) return <Loader />;
    const categoriesName =
        categories?.length > 0 && categories.map((c) => c.name);

    return (
        <section className="adminProducts">
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <CustomInput
                        title="Ten san pham"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                    />

                    <CustomSelect
                        defaultValue={category}
                        onChange={handleChangeSelect}
                        placeholder="Chon chuyen muc"
                        style={{ width: 200 }}
                        options={categoriesName}
                    />

                    <CustomInput
                        title="Mo ta"
                        type="text"
                        name="description"
                        value={description}
                        onChange={handleOnChange}
                    />
                    <CustomInput
                        title="Hinh anh"
                        type="text"
                        name="image"
                        value={image}
                        onChange={handleOnChange}
                    />

                    <CustomInput
                        title="Chat lieu"
                        type="text"
                        name="material"
                        value={material}
                        onChange={handleOnChange}
                    />

                    <CustomInput
                        title="Gia thap nhat"
                        type="number"
                        name="minimalPrice"
                        value={minimalPrice}
                        onChange={handleOnChange}
                    />
                    <CustomInput
                        title="Gia binh thuong"
                        type="number"
                        name="price"
                        value={price}
                        onChange={handleOnChange}
                    />

                    <CustomSwitch
                        title="Lien he de biet gia"
                        name="isContactForPrice"
                        value={isContactForPrice}
                        onChange={(value) =>
                            handleChangeSwitch(value, "isContactForPrice")
                        }
                    />

                    <CustomSwitch
                        title="Dang giam gia"
                        name="isSale"
                        value={isSale}
                        onChange={(value) =>
                            handleChangeSwitch(value, "isSale")
                        }
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

export default AdminProduct;
