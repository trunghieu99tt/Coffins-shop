import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Item from "./Item";
import ItemSkeleton from "./ItemSkeleton";

import "./ProductList.scss";

const ProductList = ({ items, name, isSlide, isLoading }) => {
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

    const itemsDOM =
        (isLoading && [...Array(12)].map(() => <ItemSkeleton />)) ||
        (items?.length > 0 &&
            items
                .map((item) => <Item {...item} key={item.id} />)
                .slice(0, Math.min(12, items.length)));
    let innerContent = itemsDOM;

    if (isSlide) {
        innerContent = <Slider {...settings}>{itemsDOM}</Slider>;
    }

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
        </section>
    );
};

export default ProductList;
