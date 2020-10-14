import React from "react";

import Skeleton from "react-loading-skeleton";

import "./Item.scss";

const ImageSkeleton = (props) => {
    return (
        <figure className="item__imageContainer">
            <Skeleton height="200px" className="w-100 item__image" />
        </figure>
    );
};

export default ImageSkeleton;
