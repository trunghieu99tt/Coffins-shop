import React from "react";
import { message, Table } from "antd";
import { useProductsContext } from "../../context/products.context";
import { Link, useHistory } from "react-router-dom";
import { encodeStr } from "../../utils/helper";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useCategory } from "./useCategory";
import { useEffect } from "react";

const AdminCategories = () => {
    const [{ categories }] = useProductsContext();
    const history = useHistory();
    const talonsProps = useCategory();
    const { handleDelete, loading, isSuccess } = talonsProps;

    const [status, setStatus] = useState(false);

    const handleOnDelete = async (record) => {
        await handleDelete(record);
    };

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

    const columns = [
        {
            title: "Tên chuyên mục",
            dataIndex: "name",
            key: "name",
            render: (text) => <a>{text}</a>,
            width: 150,
        },

        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
            render: (text) => <a>{text}</a>,
            width: 300,
        },

        {
            title: "Số lượng sản phẩm hiện có",
            dataIndex: "productCounter",
            key: "productCounter",
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.productCounter - b.productCounter,
            width: 200,
        },

        {
            title: "Action",
            key: "action",
            fixed: "right",
            render: (value, record) => (
                <React.Fragment>
                    <Link
                        to={`/quan-tri/chuyen-muc/${encodeStr(record.name)}`}
                        className="admin-btn"
                    >
                        Sửa
                    </Link>
                    <button
                        onClick={() => handleOnDelete(value)}
                        className="admin-btn"
                    >
                        Xóa
                    </button>
                </React.Fragment>
            ),
            width: 200,
        },
    ];

    if (loading) return <Loader />;

    const data = categories
        ?.map((category) => {
            return {
                ...category,
                productCounter: category?.products?.length || 0,
            };
        })
        .sort((a, b) => b.productCounter - a.productCounter);

    return (
        <section className="adminCategory">
            <Link to={`/quan-tri/chuyen-muc/create`} className="admin-btn">
                Thêm mới
            </Link>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: 1440, y: 800 }}
            />
        </section>
    );
};

export default AdminCategories;
