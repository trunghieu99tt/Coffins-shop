import React from "react";
import { Link } from "react-router-dom";

import ProductImage from "../../static/images/b1.jpg";

import "./Item.scss";

const Item = ({ isContactForPrice, isSale }) => {
    return (
        <article className="item">
            <figure className="item__imageContainer">
                <img
                    src={ProductImage}
                    alt="product"
                    className="w-100 item__image"
                />
            </figure>

            <figcaption className="item__details">
                <Link to="/detail" className="item__link">
                    <p className="item__name">QUAN GỖ VÀNG TÂM – 216</p>
                </Link>

                {(isContactForPrice && (
                    <p className="item__contact">Liên hệ</p>
                )) || (
                    <div className="item__price">
                        {(isSale && (
                            <React.Fragment>
                                <p className="item__price--latestPrice">
                                    42.000.000VND
                                </p>
                                <span className="device">|</span>
                                <p className="item__price--initialPrice">
                                    39.000.000VND
                                </p>
                            </React.Fragment>
                        )) || (
                            <p className="item__price--latestPrice">
                                42.000.000VND
                            </p>
                        )}
                    </div>
                )}
            </figcaption>
        </article>
    );
};

export default Item;
