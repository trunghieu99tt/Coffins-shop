import React, { useState } from "react";
import { Link } from "react-router-dom";

import { formatMoney } from "../../utils/helper";

import "./Item.scss";
import CustomImage from "../CustomImage/CustomImage";

const Item = (props) => {
    const {
        isContactForPrice,
        isSale,
        name,
        image,
        price,
        minimalPrice,
        id,
    } = props;

    return (
        <article className="item">
            <CustomImage src={image} alt={name} height={200} />

            <figcaption className="item__details">
                <Link to={`/san-pham/${id}`} className="item__link">
                    <p className="item__name">{name}</p>
                </Link>

                {(isContactForPrice && (
                    <p className="item__contact">Liên hệ</p>
                )) || (
                    <div className="item__price">
                        {(isSale && (
                            <React.Fragment>
                                <p className="item__price--latestPrice">
                                    {formatMoney(minimalPrice)}VND
                                </p>
                                <span className="device">|</span>
                                <p className="item__price--initialPrice">
                                    {formatMoney(price)}VND
                                </p>
                            </React.Fragment>
                        )) || (
                            <p className="item__price--latestPrice">
                                {formatMoney(price)}VND
                            </p>
                        )}
                    </div>
                )}
            </figcaption>
        </article>
    );
};

export default Item;
