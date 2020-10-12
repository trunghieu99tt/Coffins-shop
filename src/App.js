import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, ProductDetail, Introduction } from "./pages";

import BaseView from "./layout/View/BaseView";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./static/css/main.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss";

import "./App.css";

const App = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/detail" component={ProductDetail}></Route>
                <Route
                    exact
                    path="/gioi-thieu"
                    component={Introduction}
                ></Route>
            </Switch>
        </React.Fragment>
    );
};

export default BaseView(App);
