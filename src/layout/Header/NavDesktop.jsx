import React from "react";
import { Link } from "react-router-dom";

import MiniCart from "../../components/MiniCart/MiniCart";

import { links } from "./header.data";

const NavDesktop = ({ isActive }) => {
    return (
        <React.Fragment>
            <nav className="header-nav">
                <ul className="d-flex header-navInner">
                    {links.map((item) => {
                        const { name, link } = item;
                        return (
                            <li
                                className={`header-linkItem ${
                                    (isActive === link && "active") || ""
                                }`}
                                link-name={name}
                            >
                                <Link to={link}>{name}</Link>
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
