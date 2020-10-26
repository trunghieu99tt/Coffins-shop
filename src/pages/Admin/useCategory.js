import { useState } from "react";
import axios from "../../axios/axios";
import { useProductsContext } from "../../context/products.context";

const prefix = "categories";

export const useCategory = () => {
    const [, { fetchProducts, fetchCategories }] = useProductsContext();

    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleDelete = async (category) => {
        const { dbID, products } = category;
        setLoading(true);
        const response = await axios.delete(`/${prefix}/${dbID}.json`);

        products.forEach(async (product) => {
            const { dbID } = product;
            await axios.delete(`products/${dbID}.json`);
        });

        await fetchProducts();
        await fetchCategories();
        setLoading(false);
        if (response.status === 200) setIsSuccess(true);
    };

    const handleCreate = async (newCategory) => {
        setLoading(true);
        const response = await axios.post(`${prefix}.json`, newCategory);
        await fetchProducts();
        if (response.status === 200) setIsSuccess(true);
        await fetchProducts();
        await fetchCategories();
        setLoading(false);
    };

    const handleEdit = async (category, updatedValues) => {
        try {
            debugger;
            const { dbID } = category;
            setLoading(true);
            await axios.patch(`${prefix}/${dbID}.json`, {
                name: updatedValues.name,
                description: updatedValues.description,
            });

            const { products } = category;
            products.forEach(async (product) => {
                const { dbID } = product;
                await axios.patch(`/products/${dbID}.json`, {
                    ...product,
                    category: updatedValues?.name,
                });
            });

            await fetchProducts();
            await fetchCategories();
            setIsSuccess(true);
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
