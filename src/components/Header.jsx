// Import section
import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Start",
  },
  {
    path: "/about",
    display: "O nas",
  },
  {
    path: "/cars",
    display: "Flota",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Kontakt",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/***** Top bar *****/}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Potrzebujesz pomocy?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +48 22 999-99-99
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Zaloguj się
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Załóż konto
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Wyszukaj" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;