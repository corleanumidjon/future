import React from "react";
import "./Chess.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Sava from "../../Assets/Imgs/Sava.svg";
import chess1 from "../../Assets/Imgs/chess1.svg";
import chess2 from "../../Assets/Imgs/chess2.svg";
import chess3 from "../../Assets/Imgs/chess3.svg";
import chess4 from "../../Assets/Imgs/chess4.svg";
import chess from "../../Assets/Imgs/chess.svg";
import family from "../../Assets/Imgs/family.svg";
import youtube from "../../Assets/Imgs/youtube.svg";
import person from "../../Assets/Imgs/person.svg";
import tourn from "../../Assets/Imgs/turnir.svg";
import radio from "../../Assets/Imgs/radio.svg";
import Footer from "../../Components/Footer/Footer";

const Chess = () => {
  return (
    <>
      <Navbar />
      <section className="chess">
        <div className="chess__hero">
          <div className="container">
            <h1 className="chess__hero-title">Шахматная школа</h1>
            <h4 className="chess__hero-title4">Развитие мышления и логики</h4>
            <div className="chess__hero-texts">
              <p className="chess__hero-text2">Срок обучения: 5 лет</p>
              <p className="chess__hero-text2">
                Режим занятий: 2 раза в неделю по 2 академических часа
              </p>
            </div>
            <div className="chess__hero-titles">
              <h3 className="chess__hero-title3">от 4 350 ₽ в месяц</h3>
              <h3 className="chess__hero-title3">1 занятие бесплатное</h3>
            </div>
            <p className="chess__hero-text">
              Прежде чем начать обучение советуем записаться на пробное заниятие
            </p>
            <button className="chess__hero-btn">
              Записаться на пробное занятие
            </button>
          </div>
        </div>
        <div className="container">
          <div className="chess__sect-wrap">
            <div className="chess__sect-box">
              <img className="chess__sect-img" src={Sava} alt="Image" />
              <p className="chess__sect-text">
                Вы полюбите шахматы, и вам этого будет не хватать всегда!
              </p>
            </div>
            <ul className="chess__sect-list">
              <li className="chess__sect-item">
                <img src={chess1} alt="Chess" />
                <h4 className="chess__sect-title-l">Цель 1</h4>
                <p className="chess__sect-text-l">
                  Привить любовь и интерес к шахматам
                </p>
              </li>
              <li className="chess__sect-item">
                <img src={chess2} alt="Chess" />
                <h4 className="chess__sect-title-l">Цель 2</h4>
                <p className="chess__sect-text-l">
                  Получить удовольствие от процесса игры, от факта победы в
                  партии, от спасения
                </p>
              </li>
              <li className="chess__sect-item">
                <img src={chess3} alt="Chess" />
                <h4 className="chess__sect-title-l">Цель 3</h4>
                <p className="chess__sect-text-l">
                  Научить анализировать свои и чужие ошибки, учиться на них с
                  помощью GM мирового уровня
                </p>
              </li>
              <li className="chess__sect-item">
                <img src={chess4} alt="Chess" />
                <h4 className="chess__sect-title-l">Цель 4</h4>
                <p className="chess__sect-text-l">
                  Получить удовольствие от процесса игры, от факта победы в
                  партии, от спасения
                </p>
              </li>
            </ul>
          </div>
          <div className="chess__sect-video">
            <iframe
              width="780"
              height="436"
              style={{ borderRadius: "20px" }}
              src="https://www.youtube.com/embed/Kyds0WbIZqs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
          <div className="chess__sect-box2">
            <h2 className="chess__sect-title2">Школа шахмат</h2>
            <p className="chess__sect-text2">
              Шахматы - это отличная идея для времяпрепровождения с родителями,
              детьми и друзьями. Игра дает полезные в жизни навыки: учит
              побеждать и проигрывать, развивает творческие способности,
              вырабатывает стрессо-устойчивость, терпение, помогает
              сосредоточиться, а так же помогает осознать последствия своих
              действий.
            </p>
            <ul className="chess__sect-list2">
              <li className="chess__sect-item2">
                <img src={chess} alt="Icon" />
                <p className="chess__sect-text-l2">
                  Интересные уроки по шахматам
                </p>
              </li>
              <li className="chess__sect-item2">
                <img src={family} alt="Icon" />
                <p className="chess__sect-text-l2">
                  Шахматы для взрослых и детей
                </p>
              </li>
              <li className="chess__sect-item2">
                <img src={youtube} alt="Icon" />
                <p className="chess__sect-text-l2">Обучение шахмат онлайн</p>
              </li>
              <li className="chess__sect-item2">
                <img src={person} alt="Icon" />
                <p className="chess__sect-text-l2">
                  Профессиональное обучение шахматам
                </p>
              </li>
              <li className="chess__sect-item2">
                <img src={tourn} alt="Icon" />
                <p className="chess__sect-text-l2">Шахматные турниры</p>
              </li>
              <li className="chess__sect-item2">
                <img src={radio} alt="Icon" />
                <p className="chess__sect-text-l2">
                  Сеанс одновременной игры с GM
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </section>
      <Footer />
    </>
  );
};

export default Chess;
