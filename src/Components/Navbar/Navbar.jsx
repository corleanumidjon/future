import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import Logo from "../../Assets/Imgs/Logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav__wrap">
        <div className="nav__logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <FaBookOpen className="nav__icon" />
            <Link to="/courses">
              <p className="nav__text">Все курсы</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link>
              <p className="nav__text">Мероприятия</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link>
              <p className="nav__text">Базы знаний</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link>
              <p className="nav__text">Карьера</p>
            </Link>
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__item">
            <FaMapMarkerAlt className="nav__icon" />
            <select className="nav__select" name="" id="">
              <option value="Нижний Новгород">Нижний Новгород</option>
              <option value="Ташкент">Ташкент</option>
            </select>
          </li>
          <li className="nav__item">
            <Link to="tel: +8 800 950-33-98">
              <p className="nav__text">8 800 950-33-98</p>
            </Link>
          </li>
          <li className="nav__item">
            <FaUserAlt className="nav__icon" />
            <Link>
              <p className="nav__text">Войти</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
