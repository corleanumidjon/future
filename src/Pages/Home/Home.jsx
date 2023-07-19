import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Button } from "../../Utils/Components";
import { FaAngleRight, FaStar } from "react-icons/fa";
import sava from "../../Assets/Imgs/Sova.svg";
import children from "../../Assets/Imgs/children.svg";
import teenagers from "../../Assets/Imgs/teenagers.svg";
import adults from "../../Assets/Imgs/adults.svg";
import monitor from "../../Assets/Imgs/monitor.svg";
import newspaper from "../../Assets/Imgs/newspaper.svg";
import diagram from "../../Assets/Imgs/diagram.svg";
import logodemo from "../../Assets/Imgs/logo-demo.svg";
import person1 from "../../Assets/Imgs/person1.svg";
import person2 from "../../Assets/Imgs/person2.svg";
import person3 from "../../Assets/Imgs/person3.svg";
import person4 from "../../Assets/Imgs/person4.svg";
import person5 from "../../Assets/Imgs/person5.svg";
import xod1 from "../../Assets/Imgs/xod1.svg";
import xod2 from "../../Assets/Imgs/xod2.svg";
import xod3 from "../../Assets/Imgs/xod3.svg";
import xod4 from "../../Assets/Imgs/xod4.svg";
import Footer from "../../Components/Footer/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="hero__wrap">
            <h1 className="hero__title">Образовательная платформа</h1>
            <h1 className="hero__title">ХОД Future Academy</h1>
            <p className="hero__text">
              Актуальные знания для новичков и профессионалов
            </p>
          </div>
        </div>
      </div>
      <div className="sect">
        <div className="container">
          <div className="sect__wrap">
            <div className="sect__left">
              <img src={sava} alt="Image" />
            </div>
            <div className="sect__right">
              <ul className="sect__list">
                <li className="sect__item">
                  <div>
                    <img src={children} alt="Children" />
                  </div>
                  <div>
                    <h4 className="sect__people">Дети</h4>
                    <small className="sect__ages">8 — 14 лет</small>
                  </div>
                </li>
                <li className="sect__item">
                  <div>
                    <img src={teenagers} alt="Teenagers" />
                  </div>
                  <div>
                    <h4 className="sect__people">Подростки</h4>
                    <small className="sect__ages">14 — 18 лет</small>
                  </div>
                </li>
                <li className="sect__item">
                  <div>
                    <img src={adults} alt="Adults" />
                  </div>
                  <div>
                    <h4 className="sect__people">Взрослые</h4>
                    <small className="sect__ages">18 — ∞</small>
                  </div>
                </li>
              </ul>
              <div className="sect__btns">
                <Button type="orange" text="Робототехника" />
                <Button type="blue" text="Создание игр" />
                <Button type="orange" text="Web-разработка" />
                <Button type="blue" text="Мультимедиа" />
                <Link to="/chess">
                  <Button type="orange" text="Шахматы" />
                </Link>
                <Button type="blue" text="3D-моделирование и дизайн" />
                <Button type="orange" text="Английский язык" />
                <Button type="blue" text="Блогинг" />
                <Button type="orange" text="Soft skills" />
              </div>
            </div>
          </div>
          <div className="sect__img">
            <iframe
              width="780"
              height="436"
              style={{ borderRadius: "20px" }}
              src="https://www.youtube.com/embed/x7uLj9NNzXk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
          <h2 className="sect__title">
            Актуальные знания от признанных экспертов рынка для новичков и
            практикующих специалистов.
          </h2>
          <ul className="sect__list-2">
            <li className="sect__item-2">
              <strong className="sect__num">
                6<span className="sect__num">00</span>
              </strong>
              <br />
              <small className="sect__desc">Курсов</small>
            </li>
            <li className="sect__item-2">
              <strong className="sect__num">
                8<span className="sect__num">2</span>
              </strong>
              <br />
              <small className="sect__desc">
                Ведущих
                <br />
                преподавателей
              </small>
            </li>
            <li className="sect__item-2">
              <strong className="sect__num">
                14 <span className="sect__num">795</span>
              </strong>
              <br />
              <small className="sect__desc">Выпускников</small>
            </li>
          </ul>
          <div className="sect__box">
            <div className="sect__box-l">
              <div className="sect__day">
                <strong className="sect__data">25</strong>
                <small className="sect__month">ноября</small>
              </div>
              <div className="sect__texts">
                <h2 className="sect__title-box">День открытых дверей</h2>
                <p className="sect__text-box">
                  Приглашаем всех желающих на бесплатную экскурсию в мир
                  востребованных профессий и полезных навыков
                </p>
              </div>
            </div>
            <button className="sect__btn-box">
              <p>Записаться</p>
              <FaAngleRight style={{ fontSize: "25px" }} />
            </button>
          </div>
          <div className="sect__boxes">
            <div className="sect__box-left">
              <img src={monitor} alt="Image" />
              <h3 className="sect__title-box2">Программы обучения</h3>
              <p className="sect__text-box2">
                В списке наших курсов вы сможете найти профессию и занятие по
                душе, изучить новое и получить практические знания, которые
                помогут получить работу мечты.
              </p>
              <button className="sect__btn-box2">
                <p>Подробнее</p>
                <FaAngleRight style={{ fontSize: "25px" }} />
              </button>
            </div>
            <div className="sect__box-right">
              <div className="sect__box-rt">
                <div className="sect__box-rl">
                  <img className="sect__box-img" src={newspaper} alt="Image" />
                  <h3 className="sect__title-box3">Новости Академии</h3>
                </div>
                <div className="sect__box-rr">
                  <img className="sect__box-img" src={diagram} alt="Image" />
                  <h3 className="sect__title-box3">Мир IT</h3>
                </div>
              </div>
              <div className="sect__box-rb">
                <img src={logodemo} alt="Image" />
                <div className="sect__box-texts">
                  <h3 className="sect__title-box4">Попробуй!</h3>
                  <p className="sect__text-box3">
                    Пройдите тест и узнайте свои способности в сфере
                    информационных технологий
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sect__reviews">
          <h2 className="sect__title-rev">Отзывы наших студентов</h2>
          <ul className="sect__list-rev">
            <li className="sect__item-rev">
              <div className="sect__user">
                <div>
                  <img src={person1} alt="User" />
                </div>
                <div className="sect__user-info">
                  <h4 className="sect__user-name">Имя Фамилия</h4>
                  <span className="sect__user-job">
                    Студент курса «WEB-
                    <br />
                    разработчик»
                  </span>
                </div>
              </div>
              <p className="sect__user-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                feugiat nisl at augue dapibus, id tristique lorem placerat.
                Curabitur pellentesque est bibendum urna facilisis varius. In
                hac habitasse platea dictumst. In ut dui sodales.
              </p>
              <div className="sect__user-star">
                <FaStar style={{ color: "#F7941D" }} />
                <small className="sect__user-num">4,87 / 5</small>
              </div>
            </li>
            <li className="sect__item-rev">
              <div className="sect__user">
                <div>
                  <img src={person2} alt="User" />
                </div>
                <div className="sect__user-info">
                  <h4 className="sect__user-name">Имя Фамилия</h4>
                  <span className="sect__user-job">
                    Студент курса «WEB-
                    <br />
                    разработчик»
                  </span>
                </div>
              </div>
              <p className="sect__user-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                feugiat nisl at augue dapibus, id tristique lorem placerat.
                Curabitur pellentesque est bibendum urna facilisis varius.
              </p>
              <div className="sect__user-star">
                <FaStar style={{ color: "#F7941D" }} />
                <small className="sect__user-num">4,87 / 5</small>
              </div>
            </li>
            <li className="sect__item-rev">
              <div className="sect__user">
                <div>
                  <img src={person3} alt="User" />
                </div>
                <div className="sect__user-info">
                  <h4 className="sect__user-name">Имя Фамилия</h4>
                  <span className="sect__user-job">
                    Студент курса «WEB-
                    <br />
                    разработчик»
                  </span>
                </div>
              </div>
              <p className="sect__user-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                feugiat nisl at augue dapibus, id tristique lorem placerat.
                Curabitur pellentesque est bibendum urna facilisis varius. In
                hac habitasse platea dictumst. In ut dui sodales, scelerisque
                eros non, ultrices magna.
              </p>
              <div className="sect__user-star">
                <FaStar style={{ color: "#F7941D" }} />
                <small className="sect__user-num">4,87 / 5</small>
              </div>
            </li>
            <li className="sect__item-rev">
              <div className="sect__user">
                <div>
                  <img src={person4} alt="User" />
                </div>
                <div className="sect__user-info">
                  <h4 className="sect__user-name">Имя Фамилия</h4>
                  <span className="sect__user-job">
                    Студент курса «WEB-
                    <br />
                    разработчик»
                  </span>
                </div>
              </div>
              <p className="sect__user-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                feugiat nisl at augue dapibus, id tristique lorem placerat!
              </p>
              <div className="sect__user-star">
                <FaStar style={{ color: "#F7941D" }} />
                <small className="sect__user-num">4,87 / 5</small>
              </div>
            </li>
            <li className="sect__item-rev">
              <div className="sect__user">
                <div>
                  <img src={person5} alt="User" />
                </div>
                <div className="sect__user-info">
                  <h4 className="sect__user-name">Имя Фамилия</h4>
                  <span className="sect__user-job">
                    Студент курса «WEB-
                    <br />
                    разработчик»
                  </span>
                </div>
              </div>
              <p className="sect__user-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                feugiat nisl at augue dapibus, id tristique lorem placerat.
                Curabitur pellentesque est bibendum urna facilisis varius. In
                hac habitasse platea dictumst. In ut dui sodales.
              </p>
              <div className="sect__user-star">
                <FaStar style={{ color: "#F7941D" }} />
                <small className="sect__user-num">4,87 / 5</small>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="sect__xod">
            <h2 className="sect__title-xod">
              Добро пожаловать в Академию будущего ХОД
            </h2>
            <ul className="sect__list-xod">
              <li className="sect__item-xod">
                <img className="sect__img-xod" src={xod1} alt="Icon" />
                <p className="sect__desc-xod">
                  Передовой подход к образовательному процессу
                </p>
              </li>
              <li className="sect__item-xod">
                <img className="sect__img-xod" src={xod2} alt="Icon" />
                <p className="sect__desc-xod">
                  Непрерывное усовершенствование и пополнение базы курсов
                </p>
              </li>
              <li className="sect__item-xod">
                <img className="sect__img-xod" src={xod3} alt="Icon" />
                <p className="sect__desc-xod">
                  Только практикующие преподаватели
                </p>
              </li>
              <li className="sect__item-xod">
                <img className="sect__img-xod" src={xod4} alt="Icon" />
                <p className="sect__desc-xod">
                  Сопровождение на всех этапах. От начала обучения до
                  трудоустройства
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
