import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Button } from "../../Utils/Components";
import banner from "../../Assets/Imgs/banner.svg";
import children from "../../Assets/Imgs/children.svg";
import teenagers from "../../Assets/Imgs/teenagers.svg";
import adults from "../../Assets/Imgs/adults.svg";
import mobile from "../../Assets/Imgs/mobile.svg";
import Footer from "../../Components/Footer/Footer";
import "./Courses.scss";

const Courses = () => {
  return (
    <>
      <Navbar />
      <section className="courses">
        <div className="container">
          <h2 className="courses__title">Все программы обучения</h2>
          <div className="courses__wrap">
            <div className="courses__left">
              <div className="courses__border"></div>
              <ul className="courses__list">
                <li className="courses__item">
                  <h4 className="courses__title-l">Уровень сложности</h4>
                </li>
                <li className="courses__item">
                  <input type="radio" name="radio" id="radio" />
                  <span className="courses__text-l">Новичок</span>
                </li>
                <li className="courses__item">
                  <input type="radio" name="radio" id="radio" />
                  <span className="courses__text-l">Пользователь</span>
                </li>
                <li className="courses__item">
                  <input type="radio" name="radio" id="radio" />
                  <span className="courses__text-l">Профессионал</span>
                </li>
                <li className="courses__item">
                  <input type="radio" name="radio" id="radio" />
                  <span className="courses__text-l">Читер</span>
                </li>
              </ul>
              <div className="courses__border"></div>
              <ul className="courses__list">
                <li className="courses__item">
                  <h4 className="courses__title-l">Тип обучения</h4>
                </li>
                <li className="courses__item">
                  <input type="radio" name="radio2" id="radio" />
                  <span className="courses__text-l">Любой</span>
                </li>
                <li className="courses__item">
                  <input type="radio" name="radio2" id="radio" />
                  <span className="courses__text-l">Профессия</span>
                </li>
                <li className="courses__item">
                  <input type="radio" name="radio2" id="radio" />
                  <span className="courses__text-l">Курс</span>
                </li>
              </ul>
              <div className="courses__border"></div>
              <div className="courses__list">
                <h4 className="courses__title-l">Длительность</h4>
                <p className="courses__text-l">от 1 до 24 месяцев</p>
                <input type="range" name="range" id="range" />
              </div>
              <div className="courses__banner">
                <img src={banner} alt="Image" />
              </div>
            </div>
            <div className="courses__right">
              <ul className="courses__list-r">
                <li className="courses__item-r">
                  <div>
                    <img src={children} alt="Children" />
                  </div>
                  <div>
                    <h4 className="courses__people">Дети</h4>
                    <small className="courses__ages">8 — 14 лет</small>
                  </div>
                </li>
                <li className="courses__item-r">
                  <div>
                    <img src={teenagers} alt="Teenagers" />
                  </div>
                  <div>
                    <h4 className="courses__people">Подростки</h4>
                    <small className="courses__ages">14 — 18 лет</small>
                  </div>
                </li>
                <li className="courses__item-r">
                  <div>
                    <img src={adults} alt="Adults" />
                  </div>
                  <div>
                    <h4 className="courses__people">Взрослые</h4>
                    <small className="courses__ages">18 — ∞</small>
                  </div>
                </li>
              </ul>
              <h4 className="courses__title-l">Направление</h4>
              <div className="courses__btns">
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
              <ul className="courses__list-rb">
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <strong className="courses__data-rb">24 месяца</strong>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <div>
                    <strong className="courses__data-rb">24 месяца</strong>
                    <div className="courses__discount">-10%</div>
                  </div>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <strong className="courses__data-rb">24 месяца</strong>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <strong className="courses__data-rb">24 месяца</strong>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <div>
                    <strong className="courses__data-rb">24 месяца</strong>
                    <div className="courses__discount">-10%</div>
                  </div>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <div>
                    <strong className="courses__data-rb">24 месяца</strong>
                    <div className="courses__discount">-10%</div>
                  </div>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <strong className="courses__data-rb">24 месяца</strong>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <strong className="courses__data-rb">24 месяца</strong>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <strong className="courses__data-rb">24 месяца</strong>
                </li>
                <li className="courses__item-rb">
                  <p className="courses__text-rb">Программа</p>
                  <div className="courses__box-rb">
                    <img src={mobile} alt="Icon" />
                    <h3 className="courses__title-rb">
                      «Разработка мобильных приложений»
                    </h3>
                  </div>
                  <p className="courses__text-rb">
                    Разработчик мобильных приложений создаёт приложения,
                    которыми люди ежедневно пользуются на смартфонах, умных
                    часах и планшетах.
                  </p>
                  <strong className="courses__data-rb">24 месяца</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
