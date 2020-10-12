import React from "react";

import Skeleton from "react-loading-skeleton";

import "./Item.scss";

const ItemSkeleton = (props) => {
    return (
        <article className="item">
            <figure className="item__imageContainer">
                <Skeleton height="200px" className="w-100 item__image" />
            </figure>

            <figcaption className="item__details">
                <Skeleton
                    width="100%"
                    height="50px"
                    style={{
                        marginBottom: "1rem",
                    }}
                />
                <Skeleton
                    width="100%"
                    height="30px"
                    className="item__contact"
                />
            </figcaption>
        </article>
    );
};

export default ItemSkeleton;
