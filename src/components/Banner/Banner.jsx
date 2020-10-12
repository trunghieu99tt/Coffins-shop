import React from "react";

import Slider from "react-slick";

import Banner1 from "../../static/images/b1.jpg";
import Banner2 from "../../static/images/b2.jpg";

import "./Banner.scss";

const Banner = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
    };

    return (
        <section className="banner">
            <Slider {...settings}>
                <article className="banner-item">
                    <figure className="banner-item__imageContainer">
                        <img
                            src={Banner1}
                            alt="banner1"
                            className="banner-item__image"
                        />
                        <figcaption className="banner-item__details">
                            <h1 className="banner-item__heading">
                                Hãy đến với chúng tôi để trải nghiệm dịch vụ tốt
                                nhất
                            </h1>
                            <p className="banner-item__description">
                                Tận tình và uy tín là phương châm hàng đầu của
                                chúng tôi
                            </p>

                            <button className="banner-item__btn">
                                Xem các sản phẩm của chúng tôi{" "}
                            </button>
                        </figcaption>
                    </figure>
                </article>
                <article className="banner-item">
                    <figure className="banner-item__imageContainer">
                        <img
                            src={Banner2}
                            alt="banner1"
                            className="banner-item__image"
                        />
                    </figure>
                </article>
            </Slider>
        </section>
    );
};

export default Banner;
