import React, { useState } from "react";
import { Link } from "react-router-dom";

import MiniCart from "../../components/MiniCart/MiniCart";
import { Menu, X } from "react-feather";

import { links } from "./header.data";

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => setIsOpen(true);

    const handleCloseMenu = () => setIsOpen(false);

    return (
        <React.Fragment>
            {isOpen && <div className="navMobile-mask"></div>}
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
                        {links.map((item) => {
                            const { name, link } = item;
                            return (
                                <li
                                    className={`header-linkItem`}
                                    link-name={name}
                                >
                                    <Link to={link}>{name}</Link>
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
