import React from "react";

import Skeleton from "react-loading-skeleton";

import "./Item.scss";

const ImageSkeleton = ({ height }) => {
    return (
        <figure className="item__imageContainer">
            <Skeleton
                height={`${height || 350}px`}
                className="w-100 item__image"
            />
        </figure>
    );
};

export default ImageSkeleton;
