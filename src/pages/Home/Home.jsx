import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";
import SideBar from "../../components/SideBar/SideBar";
import { useProductsContext } from "../../context/products.context";

import "./Home.scss";

const Home = () => {
    const [{ categories }] = useProductsContext();

    const [featureCategories, setFeatureCategories] = useState([]);

    useEffect(() => {
        const filteredCategories =
            categories?.length > 0 &&
            categories
                .filter((category) => category.products.length > 1)
                .sort((a, b) => b.products.length - a.products.length);
        setFeatureCategories(filteredCategories);
    }, [categories]);

    if (!categories)
        return (
            <React.Fragment>
                <Banner />
                <div className="container-fluid home-main">
                    <SideBar></SideBar>
                    <div className="productLists">
                        <ProductList isLoading={true} />
                    </div>
                </div>
            </React.Fragment>
        );

    return (
        <React.Fragment>
            <Banner />
            <div className="container-fluid home-main">
                <SideBar></SideBar>
                <div className="productLists">
                    {featureCategories?.length > 0 &&
                        featureCategories
                            .slice(0, Math.min(3, featureCategories.length))
                            .map((featureCategory, idx) => {
                                const { products, name } = featureCategory;
                                return (
                                    <ProductList
                                        key={`product-list-home-${idx}`}
                                        name={name}
                                        items={products}
                                    />
                                );
                            })}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
