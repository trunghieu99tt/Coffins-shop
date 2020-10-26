import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import faker from "faker";

import { Home, ProductDetail, Introduction, Category, NotFound } from "./pages";

import BaseView from "./layout/View/BaseView";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./static/css/main.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./App.css";
// import { uploadData } from "./utils/helper";
import Admin from "./pages/Admin/Admin";
import { Loader } from "react-feather";
import AdminProduct from "./pages/Admin/AdminProduct";
import AdminCategory from "./pages/Admin/AdminCategory";
import { useApp } from "./talons/useApp";

const App = () => {
    const { loading } = useApp();
    // if (loading) return <Loader />;

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/quan-tri" component={Admin}></Route>
                <Route
                    exact
                    path="/quan-tri/san-pham/:id"
                    component={AdminProduct}
                ></Route>
                <Route
                    exact
                    path="/quan-tri/chuyen-muc/:name"
                    component={AdminCategory}
                ></Route>
                <Route
                    exact
                    path="/san-pham/:id"
                    component={ProductDetail}
                ></Route>
                <Route
                    exact
                    path="/chuyen-muc/:name"
                    component={Category}
                ></Route>
                <Route
                    exact
                    path="/gioi-thieu"
                    component={Introduction}
                ></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </React.Fragment>
    );
};

export default BaseView(App);
