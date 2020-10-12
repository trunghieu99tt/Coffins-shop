import React from "react";

import ProductImage from "../../static/images/b1.jpg";

import "./Sidebar.scss";

const SideBar = () => {
    return (
        <section className="sidebar">
            <header className="sidebar-header">QUAN GỖ RỔI</header>
            <div className="sidebar-main">
                {[...Array(10)].map((_, idx) => {
                    return (
                        <article className="sidebar-item">
                            <figure className="sidebar-item__imageContainer">
                                <img
                                    src={ProductImage}
                                    alt="product"
                                    className="w-100 sidebar-item__image"
                                />

                                <figcaption className="sidebar-item__details">
                                    <p className="sidebar-item__name">
                                        QUAN GỖ RỔI
                                    </p>
                                </figcaption>
                            </figure>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default SideBar;
