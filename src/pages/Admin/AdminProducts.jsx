import React, { useEffect, useState } from "react";
import { Switch, Table, message } from "antd";

import { useProductsContext } from "../../context/products.context";
import Loader from "../../components/Loader/Loader";
import { Link, useHistory } from "react-router-dom";
import { encodeStr, formatMoney } from "../../utils/helper";
import { useProduct } from "./useProduct";
import CustomImage from "../../components/CustomImage/CustomImage";

const AdminProducts = () => {
    const [{ products }] = useProductsContext();
    const { loading, isSuccess, handleDelete, handleEdit } = useProduct();
    const history = useHistory();

    const [status, setStatus] = useState(false);

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

    const successMessage = () => message.success("Update successfully");

    const failMessage = () => message.error("Update failed");

    const handleChangeSwitch = async (record, key) => {
        const currentValue = record[key];
        const updatedData = {
            ...record,
            [key]: !currentValue,
        };
        await handleEdit(updatedData);
    };

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
            width: 200,
            render: (text, record) => (
                <Link to={`/san-pham/${record.id}`}>{text}</Link>
            ),
        },
        {
            title: "Hình ảnh",
            dataIndex: "image",
            key: "image",
            width: 300,
            render: (image, record) => (
                <CustomImage src={image} alt={record?.name} height={200} />
            ),
        },

        {
            title: "Chuyên mục",
            dataIndex: "category",
            key: "category",
            width: 150,

            render: (text, record) => (
                <Link to={`/chuyen-muc/${encodeStr(record.category)}`}>
                    {text}
                </Link>
            ),
        },
        {
            title: "Lien he de bao gia",
            dataIndex: "isContactForPrice",
            key: "isContactForPrice",
            width: 150,
            render: (value, record) => (
                <Switch
                    checked={value}
                    onChange={() =>
                        handleChangeSwitch(record, "isContactForPrice")
                    }
                />
            ),
        },

        {
            title: "Đang giảm giá",
            dataIndex: "isSale",
            key: "isSale",
            width: 150,
            render: (value, record) => (
                <Switch
                    checked={value}
                    onChange={() => handleChangeSwitch(record, "isSale")}
                />
            ),
        },

        {
            title: "Chất liệu",
            dataIndex: "material",
            key: "minimalPrice",
            width: 200,

            render: (text) => <p>{text}</p>,
        },

        {
            title: "Giá ưu đãi",
            dataIndex: "minimalPrice",
            key: "minimalPrice",
            width: 200,
            render: (value) => <p>{formatMoney(value)} VND</p>,
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            width: 200,
            render: (value) => <p>{formatMoney(value)} VND</p>,
        },

        {
            title: "Action",
            key: "action",
            fixed: "right",
            width: 200,
            render: (value, record) => (
                <React.Fragment>
                    <Link
                        to={`/quan-tri/san-pham/${record.id}`}
                        className="admin-btn"
                    >
                        Sửa
                    </Link>
                    <button
                        className="admin-btn"
                        onClick={() => handleDelete(value)}
                    >
                        Xóa
                    </button>
                </React.Fragment>
            ),
        },
    ];

    return (
        <section className="adminProducts">
            {loading && <Loader />}
            <Table
                columns={columns}
                dataSource={products}
                scroll={{ x: 1440, y: 800 }}
            />
        </section>
    );
};

export default AdminProducts;
