import React, { useState, useEffect } from "react";
import ImageSkeleton from "../ProductList/ImageSkeleton";

const CustomImage = ({ src, alt, height }) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoaded = () => setLoaded(true);

    return (
        <figure className="customImage__container">
            <img
                src={src}
                alt={alt}
                className="w-100 customImage__image"
                onLoad={handleLoaded}
                style={{
                    display: `${(loaded && "block") || "none"}`,
                    maxHeight: `${height}px`,
                    objectFit: "cover",
                }}
            />
            {!loaded && <ImageSkeleton height={height} />}
        </figure>
    );
};

export default CustomImage;
