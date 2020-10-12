/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { createRef } from "react";
import PropTypes from "prop-types";

import defaultClasses from "./imageZoom.module.css";

const ImageMagnify = (props) => {
    const {
        height,
        img,
        setImage,
        setMouseX,
        setMouseY,
        setZoom,
        isDesktopLarge,
    } = props;

    const classes = defaultClasses;

    const outerDivStyle = {
        width: `${height}px`,
        overflow: "hidden",
    };

    const imageRef = createRef();

    const handleMouseOver = () => {
        setZoom(true);
    };

    const handleMouseOut = () => {
        setZoom(false);
    };

    const getPosition = (e) => {
        const {
            left: offsetLeft,
            top: offsetTop,
        } = imageRef.current.getBoundingClientRect();

        return {
            x: e.pageX - offsetLeft,
            y: e.pageY - offsetTop,
        };
    };

    const handleMouseMovementDesktop = (e) => {
        let { x, y } = getPosition(e);

        x -= window.pageXOffset;
        y -= window.pageYOffset;

        setImage(img);
        setMouseX(x);
        setMouseY(y);
    };

    const handleMouseMovement = (e) => {
        let { x, y } = getPosition(e);

        const {
            current: {
                style: { height, width },
            },
        } = imageRef;

        x = (x / parseInt(width, 10)) * 100;
        y = ((y / parseInt(height, 10)) * 200) / 3;

        setMouseX(x);
        setMouseY(y);
    };

    return (
        <section className={classes.rootContainer}>
            <div
                style={outerDivStyle}
                className={classes.root}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onMouseMove={
                    (!isDesktopLarge && handleMouseMovement) ||
                    handleMouseMovementDesktop
                }
                ref={imageRef}
            >
                <figure className={classes.mainImage}>
                    <img src={img} alt="" />
                </figure>
            </div>
        </section>
    );
};

ImageMagnify.propTypes = {
    img: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

ImageMagnify.defaultProps = {
    transitionTime: 0.1,
};

export default ImageMagnify;
