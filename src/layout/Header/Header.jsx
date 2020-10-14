import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";

import Logo from "../../static/images/logo.png";

import { links } from "./header.data";

import "./Header.scss";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
    const [isActive, setIsActive] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);
    const [isHome, setIsHome] = useState(true);

    const windowSize = useWindowSize();
    const history = useHistory();
    const location = useLocation();
    const width = windowSize.width;

    const setActiveLink = (link) => setIsActive(link);

    const findActiveLink = (pathname) => {
        const active = links.find((e) => e.link === pathname);
        return active;
    };

    const handleActiveLink = () => {
        const {
            location: { pathname },
        } = history;
        const activeLink = findActiveLink(pathname);
        if (activeLink?.link) {
            setActiveLink(activeLink.link);
        }
    };

    const handleScroll = () => {
        const scrollTopYOffset =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollTopYOffset >= 50) {
            if (!isSticky) {
                setIsSticky(true);
            }
        } else {
            if (isSticky) {
                setIsSticky(false);
            }
        }
    };

    useEffect(() => {
        handleActiveLink();
        if (location.pathname === "/") {
            if (!isHome) setIsHome(true);
        } else {
            if (isHome) {
                setIsHome(false);
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSticky]);

    useEffect(() => {
        handleActiveLink();
        if (location.pathname === "/") {
            if (!isHome) setIsHome(true);
        } else {
            if (isHome) {
                setIsHome(false);
            }
        }
    }, [location]);

    useEffect(() => {
        if (isDesktop && width <= 1024) {
            setIsDesktop(false);
        } else if (!isDesktop && width > 1024) {
            setIsDesktop(true);
        }
    }, [width]);

    return (
        <React.Fragment>
            <address className="header-address">
                Chàng Sơn - Thạch Thất - Hà Nội. xưởng sản xuất : chùa tây
                phương - thạch thất - Hà Nội
            </address>
            <header
                className={`header-container ${
                    (isSticky && "sticky") || "" || ""
                } ${(isHome && "isHome") || ""}`}
            >
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <figure className="logo-container">
                            <img src={Logo} alt="logo" className="logo" />
                        </figure>
                        {(isDesktop && <NavDesktop isActive={isActive} />) || (
                            <NavMobile />
                        )}
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
