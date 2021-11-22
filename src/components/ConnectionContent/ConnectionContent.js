import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./ConnectionContent.module.css";
import message from "./../../cammon/mes.9e45b50e.svg";
import SocialNetworks from "../../shared/SocialNetworks/SocialNetworks";

const ConnectionContent = () => {
  return (
    <div>
      <Container>
        <Row className={style.contentWrapper}>
          <Col lg={5}>
            <div className={style.sub}>
              <p className={style.subText}>
                Mobil ilovaga o'z ma’lumotlaringizni joylab, sayyoxlarga xizmat
                ko'rsatishni istaysizmi ? Unda bizga murojaat eting!
              </p>
            </div>
          </Col>
          <Col lg={5}>
            <h5 className={style.address}>
              Manzilimiz: Toshkent shahar, Labzak ko'chasi, 12/1
            </h5>
            <p className={style.orientir}>Mo'ljal: Navro'z bog'i</p>
            <div className={style.appLinks}>
              <div className={style.emailBlock}>
                <img src={message} alt="message" />
                <span className={style.email}>gastromahall@email.com</span>
              </div>
              <SocialNetworks />
            </div>
            <div>
              <p className={style.time}>09:00 dan 18:00 gacha</p>
              <a href="tel:+998 97 442 14 45" className={style.telNumber}>
                +998 97 442 14 45
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConnectionContent;
