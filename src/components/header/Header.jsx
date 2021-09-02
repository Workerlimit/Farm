import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import logo from '../../images/logo.png';
import "../../styles/Header-media.css";
import "../../styles/Header.css";

const HiddenCompanyNav = () => {
    return (
        <div className="hidden">
            <div className="hidden-title">Компания</div>
            <div>
                <a href="#">О компании</a>
                <a href="#">История компании</a>
                <a href="#">Руководство</a>
                <a href="#">Галерея</a>
                <a href="#">Наши сертификаты</a>
            </div>
        </div>
    )
}

const CompanyLink = () => {
    return (
        <span>Компания</span>
    );
}
const HoverableNavItem = ({ handleMouseOver }) => {
    return (
        <a onMouseOver={handleMouseOver} href="#">
            <CompanyLink />
        </a>
    )
}

const Nav = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMainLink, setIsMainLink] = useState(false);
    const [isNewsLink, setIsNewsLink] = useState(false);
    const [isProductLink, setIsProductLink] = useState(false);
    const [isGalleryLink, setIsGalleryLink] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1019px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const mainLink = () => {
        return (
            <a href="#" onMouseOver={() => { setIsMainLink(true) }} onMouseLeave={() => { setIsMainLink(false) }}>
                <span className="char-link" >
                    <div className={`${isMainLink ? "char-hide" : "char"}`}>Г</div>
                    <div className={`${isMainLink ? "char-hide" : "char"}`}>л</div>
                    <div className={`${isMainLink ? "char-hide" : "char"}`}>а</div>
                    <div className={`${isMainLink ? "char-hide" : "char"}`}>в</div>
                    <div className={`${isMainLink ? "char-hide" : "char"}`}>н</div>
                    <div className={`${isMainLink ? "char-hide" : "char"}`}>а</div>
                    <div className={`${isMainLink ? "char-hide" : "char"}`}>я</div>
                </span>
                <span className="char-link">
                    <div className={`${isMainLink ? "char-show" : "char-initial"}`}>Г</div>
                    <div className={`${isMainLink ? "char-show" : "char-initial"}`}>л</div>
                    <div className={`${isMainLink ? "char-show" : "char-initial"}`}>а</div>
                    <div className={`${isMainLink ? "char-show" : "char-initial"}`}>в</div>
                    <div className={`${isMainLink ? "char-show" : "char-initial"}`}>н</div>
                    <div className={`${isMainLink ? "char-show" : "char-initial"}`}>а</div>
                    <div className={`${isMainLink ? "char-show" : "char-initial"}`}>я</div>
                </span>
            </a>
        );
    };
    const newsLink = () => {
        return (
            <a href="#" onMouseOver={() => { setIsNewsLink(true) }} onMouseLeave={() => { setIsNewsLink(false) }}>
                <span className="char-link" >
                    <div className={`${isNewsLink ? "char-hide" : "char"}`}>Н</div>
                    <div className={`${isNewsLink ? "char-hide" : "char"}`}>о</div>
                    <div className={`${isNewsLink ? "char-hide" : "char"}`}>в</div>
                    <div className={`${isNewsLink ? "char-hide" : "char"}`}>о</div>
                    <div className={`${isNewsLink ? "char-hide" : "char"}`}>с</div>
                    <div className={`${isNewsLink ? "char-hide" : "char"}`}>т</div>
                    <div className={`${isNewsLink ? "char-hide" : "char"}`}>и</div>
                </span>
                <span className="char-link">
                    <div className={`${isNewsLink ? "char-show" : "char-initial"}`}>Н</div>
                    <div className={`${isNewsLink ? "char-show" : "char-initial"}`}>о</div>
                    <div className={`${isNewsLink ? "char-show" : "char-initial"}`}>в</div>
                    <div className={`${isNewsLink ? "char-show" : "char-initial"}`}>о</div>
                    <div className={`${isNewsLink ? "char-show" : "char-initial"}`}>с</div>
                    <div className={`${isNewsLink ? "char-show" : "char-initial"}`}>т</div>
                    <div className={`${isNewsLink ? "char-show" : "char-initial"}`}>и</div>
                </span>
            </a>
        );
    }
    
    const productLink = () => {
        return (
            <a href="#" onMouseOver={() => { setIsProductLink(true) }} onMouseLeave={() => { setIsProductLink(false) }}>
                <span className="char-link" >
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>Н</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>а</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>ш</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>а</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>&nbsp;</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>п</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>р</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>о</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>д</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>у</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>к</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>ц</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>и</div>
                    <div className={`${isProductLink ? "char-hide" : "char"}`}>я</div>
                </span>
                <span className="char-link">
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>Н</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>а</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>ш</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>а</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>&nbsp;</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>п</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>р</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>о</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>д</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>у</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>к</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>ц</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>и</div>
                    <div className={`${isProductLink ? "char-show" : "char-initial"}`}>я</div>
                </span>
            </a>
        );
    }
    const galleryLink = () => {
        return (
            <a href="#" onMouseOver={() => { setIsGalleryLink(true) }} onMouseLeave={() => { setIsGalleryLink(false) }}>
                <span className="char-link" >
                    <div className={`${isGalleryLink ? "char-hide" : "char"}`}>Г</div>
                    <div className={`${isGalleryLink ? "char-hide" : "char"}`}>а</div>
                    <div className={`${isGalleryLink ? "char-hide" : "char"}`}>л</div>
                    <div className={`${isGalleryLink ? "char-hide" : "char"}`}>е</div>
                    <div className={`${isGalleryLink ? "char-hide" : "char"}`}>р</div>
                    <div className={`${isGalleryLink ? "char-hide" : "char"}`}>е</div>
                    <div className={`${isGalleryLink ? "char-hide" : "char"}`}>я</div>
                </span>
                <span className="char-link">
                    <div className={`${isGalleryLink ? "char-show" : "char-initial"}`}>Г</div>
                    <div className={`${isGalleryLink ? "char-show" : "char-initial"}`}>а</div>
                    <div className={`${isGalleryLink ? "char-show" : "char-initial"}`}>л</div>
                    <div className={`${isGalleryLink ? "char-show" : "char-initial"}`}>е</div>
                    <div className={`${isGalleryLink ? "char-show" : "char-initial"}`}>р</div>
                    <div className={`${isGalleryLink ? "char-show" : "char-initial"}`}>е</div>
                    <div className={`${isGalleryLink ? "char-show" : "char-initial"}`}>я</div>
                </span>
            </a>
        );
    }
    return (
        <div onMouseLeave={handleMouseOut} className={`${isHovering ? "show" : ""}`} >
            <div className="container">
                <div className="nav">
                    <div className="nav__column">
                        <div className="nav__logo">
                            <img src={logo}></img>
                        </div>
                    </div>
                    <div className="nav__column">
                        <div className="search-block icon"></div>
                    </div>
                    <div className="nav__column">
                        <div className="menu">
                            {mainLink()}
                            <HoverableNavItem
                                handleMouseOver={handleMouseOver}
                                handleMouseOut={handleMouseOut}
                            />
                            {newsLink()}
                            {productLink()}
                            {galleryLink()}
                        </div>
                    </div>
                    <div className="nav__column">
                        <div className="language-block icon">
                            <div className={`language-content ${isLangOpen ? "lang-open" : "lang-close"}`}></div>
                            <div className={`arrow-down ${isLangOpen ? "lang-arrow-up" : ""}`}></div>
                        </div>
                    </div>
                    <div className={`burger_btn ${isOpen ? "open" : ""}`} onClick={() => { setOpen(!isOpen); }}>
                    <span className={`${isSmallScreen ? "show-menu" : "hide-menu"}`}>Меню</span>
                    <div className="burger"></div>
                </div>
                </div>
                {isHovering && <HiddenCompanyNav />}
                <CSSTransition
                    in={isOpen}
                    timeout={200}
                    unmountOnExit
                    className="hidden_nav"
                >
                    <div className="menu">
                        {mainLink()}
                        <HoverableNavItem
                            handleMouseOver={handleMouseOver}
                            handleMouseOut={handleMouseOut}
                        />
                        {newsLink()}
                        {productLink()}
                        {galleryLink()}
                    </div>
                </CSSTransition>
            </div>
            <CSSTransition
                in={isLangOpen}
                timeout={200}
                unmountOnExit
            >

            </CSSTransition>
        </div>
    );
}

const Header = () => {
    return (
        <Nav ></Nav>
    );
}

export default Header;