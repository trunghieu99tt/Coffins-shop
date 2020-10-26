import { useState } from "react";
import axios from "../../axios/axios";
import { useProductsContext } from "../../context/products.context";

const prefix = "products";

export const useProduct = () => {
    const [, { fetchProducts }] = useProductsContext();

    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleDelete = async (product) => {
        const { dbID } = product;
        setLoading(true);
        const response = await axios.delete(`/${prefix}/${dbID}.json`);
        await fetchProducts();
        setLoading(false);
        if (response.status === 200) setIsSuccess(true);
    };

    const handleCreate = async (newProduct) => {
        setLoading(true);
        const response = await axios.post(`${prefix}.json`, newProduct);
        await fetchProducts();
        if (response.status === 200) setIsSuccess(true);
        setLoading(false);
    };

    const handleEdit = async (updatedValues) => {
        try {
            const { dbID } = updatedValues;
            setLoading(true);
            const response = await axios.patch(
                `products/${dbID}.json`,
                updatedValues
            );
            if (response.status === 200) {
                await fetchProducts();
                setIsSuccess(true);
            } else {
                setIsSuccess(false);
            }
            setLoading(false);
        } catch (error) {
            setIsSuccess(false);
        }
    };

    return {
        loading,
        isSuccess,
        handleDelete,
        handleCreate,
        handleEdit,
    };
};
