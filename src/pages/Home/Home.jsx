import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductList from "../../components/ProductList/ProductList";
import SideBar from "../../components/SideBar/SideBar";

import "./Home.scss";

const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <div className="container-fluid home-main">
                <SideBar></SideBar>
                <div className="productLists">
                    <ProductList />
                    <ProductList />
                    <ProductList />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
