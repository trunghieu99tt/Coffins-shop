import React from "react";
import Skeleton from "react-loading-skeleton";

import "./productDetail.scss";

const ProductMainSkeleton = () => {
    return (
        <section className="productDetail">
            <div className="productDetail-main">
                <div className="productDetail-left">
                    <div className="productDetail__imageGalleryContainer">
                        <Skeleton width="100%" height="400px" />
                    </div>

                    <div className="productDetail-additionalInfo">
                        <div className="productDetail-tabHeaders">
                            <Skeleton width="100%" height="50px" />
                        </div>

                        <div className="productDetail-tabContents">
                            <Skeleton width="100%" height="100px" />
                        </div>
                    </div>
                </div>
                <div className="productDetail__details">
                    <h2 className="productDetail__name">
                        <Skeleton width="100%" height="30px" />
                    </h2>

                    <p className="productDetail__sku">
                        <Skeleton width="100%" height="20px" />
                    </p>

                    <h3 className="productDetail__price">
                        <Skeleton width="100%" height="40px" />
                    </h3>

                    <p className="productDetail__attribute">
                        <Skeleton width="100%" height="30px" />
                    </p>

                    <p className="productDetail__attribute">
                        <Skeleton width="100%" height="30px" />
                    </p>

                    <div className="productDetail-addToCart">
                        <Skeleton width="100%" height="50px" />
                    </div>

                    <div className="productDetail-share">
                        <Skeleton
                            width="50px"
                            height="40px"
                            className="productDetail__socialBtn"
                        />
                        <Skeleton
                            width="50px"
                            height="40px"
                            className="productDetail__socialBtn"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductMainSkeleton;
