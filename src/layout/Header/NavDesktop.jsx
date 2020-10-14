import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import MiniCart from "../../components/MiniCart/MiniCart";
import { useProductsContext } from "../../context/products.context";

import { links } from "./header.data";

const NavDesktop = ({ isActive }) => {
    const [{ categories }] = useProductsContext();

    if (!categories) {
        return (
            <nav className="header-nav">
                <ul className="d-flex header-navInner">
                    <Skeleton height="50px" width="40vw" />
                </ul>
            </nav>
        );
    }

    return (
        <React.Fragment>
            <nav className="header-nav">
                <ul className="d-flex header-navInner">
                    {links.map((item) => {
                        const { name, link, flag } = item;
                        return (
                            <li
                                className={`header-linkItem ${
                                    (isActive === link && "active") || ""
                                }`}
                                link-name={name}
                                id="categoryLink"
                            >
                                <Link to={link}>{name}</Link>

                                {flag && (
                                    <ul className="subMenu">
                                        {categories?.length > 0 &&
                                            categories.map((category) => {
                                                const { name } = category;
                                                return (
                                                    <li className="subMenuItem">
                                                        <Link
                                                            to={`/chuyen-muc/${name}`}
                                                        >
                                                            <p>{name}</p>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <MiniCart />
        </React.Fragment>
    );
};

export default NavDesktop;
