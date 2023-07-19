import React from "react";
import { Link } from "react-router-dom";
import {
  FaVk,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from "../../Assets/Imgs/logo-light.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__wrap">
        <div className="footer__info">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="footer__contact">
            <Link to="tel: +8 800 950-33-98">
              <strong className="footer__tel">8 800 950-33-98</strong>
            </Link>
            <Link>
              <span className="footer__text">г. Москва, ул. Ленина, д. 50</span>
            </Link>
            <Link to="mailto: info@hodfutureacademy.ru">
              <span className="footer__text">info@hodfutureacademy.ru</span>
            </Link>
          </div>
          <div className="footer__s-m">
            <Link to="https://vk.com">
              <FaVk className="footer__icon" />
            </Link>
            <Link to="https://www.instagram.com">
              <FaInstagram className="footer__icon" />
            </Link>
            <Link to="https://ru-ru.facebook.com">
              <FaFacebook className="footer__icon" />
            </Link>
            <Link to="https://www.youtube.com/?hl=RU">
              <FaYoutube className="footer__icon" />
            </Link>
            <Link to="https://web.telegram.org">
              <FaTelegramPlane className="footer__icon" />
            </Link>
          </div>
          <small className="footer__text-end">© ХОД, Future Academy</small>
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <h4 className="footer__title-l">Детям</h4>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Робототехника</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Создание игр</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Программирование</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Мультимедиа</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Soft skills</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Шахматы</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Блогинг</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Создание игр</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Программирование</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Мультимедиа</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Soft skills</p>
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">
            <h4 className="footer__title-l">Подросткам</h4>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Web-разработка</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Прикладное программирование</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Графическое моделирование</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Game Development</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Soft skills</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Разработчик мобильных приложений</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Блогинг</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Создание игр</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Программирование</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Мультимедиа</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Soft skills</p>
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">
            <h4 className="footer__title-l">Взрослым</h4>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Разработчик игр на Unity</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Разработка ПО</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Графический Дизайн</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Тестировщик ПО</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Интернет Маркетинг</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Java-разработчик</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Python–разработчик</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">IOS-разработчик</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Программирование</p>
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">
            <h4 className="footer__title-l">Информация</h4>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Об академии</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Мероприятия</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Новости</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">База знаний</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Карьера</p>
            </Link>
          </li>
          <li className="footer__item">
            <Link>
              <p className="footer__text-l">Контакты</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
