import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./SignModeContent.module.css";
import mobi from "./../../cammon/mobileWeb.png";
import download from "./../../cammon/Download.png";
import profile from "./../../cammon/Profile2.png";
import image from "./../../cammon/Image.png";
import editSquare from "./../../cammon/EditSquare.png";
import logo from "./../../cammon/logo.png";

const SignModeContent = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Row className={style.innerContent}>
          <Col lg={5} className={style.leftContent}>
            <div className={style.modeBlock}>
              <h4 className={style.modeTitle}>
                Turist sifatida ro’yhatdan <br /> o‘tish tartibi
              </h4>
            </div>
            <div className={style.textContent}>
              <img src={mobi} alt="mobi" />
              <p className={style.mobiText}>
                Mobil ilova yoki veb saytimizdan ro’yhatdan <br /> o’tish
                tugmasini bosasiz
              </p>
            </div>
            <div className={style.textContent}>
              <img src={profile} alt="mobi" />
              <p className={style.mobiText}>
                Ism sharifingizni va telefon raqamingizni <br /> kiriting
              </p>
            </div>
            <div className={style.textContent}>
              <img src={download} alt="mobi" />
              <p className={style.mobiText}>
                Mobil ilovamizni yuklab oling va taomlarga <br /> buyurtma
                bering
              </p>
            </div>
            <div className={style.logo}> <img src={logo} alt="logo"/></div>
          </Col>
          <Col lg={5} className={style.leftContent}>
            <div className={style.modeBlock + " " + style.opacity}>
              <h4 className={style.modeTitle}>
                Oshxona sifatida ro’yhatdan <br /> o‘tish tartibi
              </h4>
            </div>
            <div className={style.textContent}>
              <img src={mobi} alt="mobi" />
              <p className={style.mobiText}>
                Mobil ilova yoki veb saytimizdan ro’yhatdan <br /> o’tish
                tugmasini bosasiz
              </p>
            </div>
            <div className={style.textContent}>
              <img src={editSquare} alt="mobi" />
              <p className={style.mobiText}>
                Oshxona nomi aloqa vositasi va joylashgan hududini kiriting
              </p>
            </div>
            <div className={style.textContent}>
              <img src={image} alt="mobi" />
              <p className={style.mobiText}>
                Taom turi, nomi va suratini kiriting
              </p>
            </div>
            <div className={style.textContent}>
              <img src={download} alt="mobi" />
              <p className={style.mobiText}>
                Mobil ilovamizni yuklab oling va taomlarga buyurtma bering
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignModeContent;
