import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Item from "./Item";

import "./ProductList.scss";

const ProductList = ({ data, name, isSlide }) => {
    let innerContent = null;

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

    if (isSlide) {
        innerContent = (
            <Slider {...settings}>
                {[...Array(8)].map(() => {
                    const isSale = Math.random() >= 0.5;
                    const isContactForPrice = Math.random() <= 0.5;

                    return (
                        <Item
                            isSale={isSale}
                            isContactForPrice={isContactForPrice}
                        />
                    );
                })}
            </Slider>
        );
    } else {
        innerContent = [...Array(8)].map(() => {
            const isSale = Math.random() >= 0.5;
            const isContactForPrice = Math.random() <= 0.5;

            return (
                <Item isSale={isSale} isContactForPrice={isContactForPrice} />
            );
        });
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
