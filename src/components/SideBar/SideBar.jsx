import React from "react";
import { useProductsContext } from "../../context/products.context";

import Item from "../ProductList/Item";
import SideBarSkeleton from "./SideBarSkeleton";

import "./Sidebar.scss";

const SideBar = () => {
    const [{ categories }] = useProductsContext();

    if (!categories) {
        return <SideBarSkeleton />;
    }

    const selectedCategory =
        categories?.length > 0 &&
        categories.find((category) => category.products.length > 0);
    const products =
        selectedCategory?.products?.length > 0 && selectedCategory.products;
    const categoryName = selectedCategory?.name || "";

    return (
        <section className="sidebar">
            <header className="sidebar-header">{categoryName}</header>
            <div className="sidebar-main">
                {products?.length > 0 &&
                    products
                        .slice(0, Math.min(10, products.length))
                        .map((product, id) => (
                            <Item key={`sidebarItem-${id}`} {...product} />
                        ))}
            </div>
        </section>
    );
};

export default SideBar;
