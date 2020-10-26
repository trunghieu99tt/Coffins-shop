import React, { useEffect } from "react";
import { useParams } from "react-router";
import ProductList from "../../components/ProductList/ProductList";
import { useProductsContext } from "../../context/products.context";
import scrollToTop from "../../hooks/scrollToTop";
import { encodeStr } from "../../utils/helper";

const Category = () => {
    const [{ categories }] = useProductsContext();
    const { name } = useParams();

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        scrollToTop();
    }, [name]);

    if (!categories) return null;

    const category =
        categories && categories.find((e) => encodeStr(e.name) === name);

    const products = category?.products;

    return <ProductList name={category.name} items={products} isFull />;
};

export default Category;
