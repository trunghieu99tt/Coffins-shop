import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useProductsContext } from "../../context/products.context";

import MiniCart from "../../components/MiniCart/MiniCart";
import Mask from "../../components/Mask/Mask";

import { ChevronUp, ChevronDown, Menu, X } from "react-feather";

import { links } from "./header.data";

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [{ categories }] = useProductsContext();
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleOpenMenu = () => setIsOpen(true);

    const handleCloseMenu = () => setIsOpen(false);

    const toggleExpand = () => setIsExpanded((value) => !value);

    const icon = (isExpanded && <ChevronUp />) || <ChevronDown />;

    return (
        <React.Fragment>
            {isOpen && <Mask handleOnClick={handleCloseMenu} />}
            {!isOpen && (
                <button className="menu--open" onClick={handleOpenMenu}>
                    <Menu />
                </button>
            )}
            <section
                className={`navMobile-container ${(isOpen && "active") || ""}`}
            >
                <button className="menu--close" onClick={handleCloseMenu}>
                    <X />
                </button>
                <nav className="header-nav">
                    <ul className="d-flex header-navInner">
                        {links.map((item, idx) => {
                            const { name, link, flag } = item;
                            return (
                                <li
                                    key={`menu-mobile-${idx}`}
                                    className={`header-linkItem`}
                                    link-name={name}
                                >
                                    {(flag && (
                                        <button onClick={toggleExpand}>
                                            {name} {flag && <div>{icon}</div>}
                                        </button>
                                    )) || <Link to={link}>{name}</Link>}

                                    {isExpanded && flag && (
                                        <ul>
                                            {categories?.length > 0 &&
                                                categories.map((category) => {
                                                    const {
                                                        name,
                                                        dbID,
                                                    } = category;
                                                    return (
                                                        <li
                                                            className="subMenuItem"
                                                            key={`menu-category-${dbID}`}
                                                        >
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
            </section>
        </React.Fragment>
    );
};

export default NavMobile;
