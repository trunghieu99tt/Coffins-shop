import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

import ImageGallery from "react-image-gallery";

import ImageZoom from "./ImageZoom";

import ProductImage from "../../static/images/b1.jpg";

import "./productCarousel.scss";

const zoomProps = {
    zoomScale: 3,
    height: 450,
    width: 450,
};

const ProductImageCarousel = (props) => {
    const { images } = props;
    const [mouseX, setMouseX] = useState(null);
    const [mouseY, setMouseY] = useState(null);
    const [zoom, setZoom] = useState(false);
    const [image, setImage] = useState(null);

    const windowSize = useWindowSize();
    const isDesktop = windowSize?.width > 1024;

    const { height, zoomScale, width } = zoomProps;

    const innerDivStyle = {
        height: `${height}px`,
        width: `${width}px`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: `transform 0.3s ease-out`,
        backgroundImage: `url('${image}')`,
        backgroundSize: `${height * zoomScale}px ${height * zoomScale}px`,
        WebkitPrintColorAdjust: "exact",
    };

    const galleryImages = [
        {
            original: images,
            thumbnail: images,
            renderItem: () => (
                <ImageZoom
                    img={images}
                    {...zoomProps}
                    setMouseX={setMouseX}
                    setMouseY={setMouseY}
                    setImage={setImage}
                    setZoom={setZoom}
                    isDesktopLarge={isDesktop}
                    innerDivStyle={innerDivStyle}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    zoom={zoom}
                />
            ),
        },
    ];

    return (
        <div className="productCarousel">
            <div className="productCarousel-imageContainer">
                <ImageGallery
                    lazyload={true}
                    showPlayButton={false}
                    items={galleryImages}
                    showBullets={false}
                    showFullscreenButton={false}
                    thumbnailPosition={(isDesktop && "left") || "bottom"}
                />

                {zoom && isDesktop && (
                    <div className="zoomContainer">
                        <div
                            style={{
                                ...innerDivStyle,
                                backgroundPosition: `-${
                                    (mouseX * zoomScale * 2) / 3
                                }px -${(mouseY * zoomScale * 2) / 3}px`,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductImageCarousel;
