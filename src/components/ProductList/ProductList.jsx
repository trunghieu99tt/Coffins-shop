import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Pagination } from "antd";
import { useProductList } from "./useProductList";

import Item from "./Item";
import ItemSkeleton from "./ItemSkeleton";

import "./ProductList.scss";

const ProductList = ({ items, name, isSlide, isLoading, isFull }) => {
    const { products, currentPage, pageSize, handleOnChange } = useProductList({
        items,
    });

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const upperBound = (!isFull && 4) || 10000;

    const itemsDOM =
        (isLoading && [...Array(pageSize)].map(() => <ItemSkeleton />)) ||
        (products?.length > 0 &&
            products
                .slice(0, Math.min(products.length, upperBound))
                .map((product) => <Item {...product} key={product.id} />));

    let innerContent = itemsDOM;

    // if (isSlide) {
    //     console.log("Go here");
    //     innerContent = <Slider {...settings}>{itemsDOM}</Slider>;
    // }

    return (
        <section className="productList">
            <header className="productList-header">
                <Link to="/" className="productList-header__link">
                    <p className="productList-header__name">
                        {name || "QUAN - QUÁCH - TIỂU"}
                    </p>
                </Link>
            </header>
            <div className="productList-main">{innerContent}</div>

            {isFull && items.length > pageSize && (
                <div className="pagination">
                    <Pagination
                        key={items?.length || 0}
                        defaultCurrent={1}
                        current={currentPage}
                        total={items?.length || 0}
                        onChange={handleOnChange}
                        pageSize={pageSize}
                    />
                </div>
            )}
        </section>
    );
};

export default ProductList;
