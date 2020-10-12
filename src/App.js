import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import faker from "faker";

import { Home, ProductDetail, Introduction } from "./pages";

import BaseView from "./layout/View/BaseView";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./static/css/main.min.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./App.css";
// import { uploadData } from "./utils/helper";
import { useProductsContext } from "./context/products.context";

const App = () => {
    const [
        { products },
        { fetchProducts, setCategories },
    ] = useProductsContext();

    useEffect(() => {
        if (!products) fetchProducts();
    }, []);

    useEffect(() => {
        if (products) {
            const productCategories = [
                ...new Set(products.map((e) => e.category)),
            ];
            const categories = productCategories.map((category) => {
                const productsOfCategory = products.filter(
                    (product) => product.category === category
                );
                return {
                    name: category,
                    products: productsOfCategory,
                };
            });
            setCategories(categories);
        }
    }, [products]);

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route
                    exact
                    path="/san-pham/:id"
                    component={ProductDetail}
                ></Route>
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

// createMockData();

// const fakeData = [...Array(100)].map(() => {
//     const productPrice = parseInt(
//         `${Math.round(faker.commerce.price()) * 1000000}`
//     );
//     let minimalPrice = productPrice;
//     const isSale = Math.random() >= 0.5;
//     const isContactForPrice = Math.random() < 0.5;
//     if (isSale) {
//         do {
//             minimalPrice = Math.round(Math.random() * productPrice);
//         } while (minimalPrice >= productPrice);
//     }

//     return {
//         name: faker.commerce.productName(),
//         material: faker.commerce.productMaterial(),
//         price: productPrice,
//         minimalPrice,
//         description: faker.commerce.productDescription(),
//         id: faker.random.uuid(),
//         image: `${faker.image.image()}?random=${Date.now()}`,
//         category: faker.commerce.department(),
//         isSale,
//         isContactForPrice,
//     };
// });

// const categories = [
//     ...new Set(
//         fakeData.map((e) => ({
//             name: e.category,
//         }))
//     ),
// ];

// const createMockData = async () => {
//     fakeData.forEach(async (item) => {
//         await uploadData("products", item);
//     });
//     categories.forEach(async (category) => {
//         console.log("category", category);
//         await uploadData("categories", category);
//     });
// };
