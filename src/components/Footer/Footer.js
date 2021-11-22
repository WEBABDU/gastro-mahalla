import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppLinks } from "../../shared/AppLinks/AppLinks";
import style from "./Footer.module.css";
import playMarket from "./../../cammon/play-market-link.png";
import apple from "./../../cammon/apple-link.png";
import location from "./../../cammon/location.png";
import message from "./../../cammon/Message.png";
import call from "./../../cammon/Call.png";
import rTeco from "./../../cammon/Rteco.png";


const Footer = () => {
  const appLinks = [
    {
      id: 0,
      img: playMarket,
      title: "Google Play",
      text: "GET IT ON",
      href: "https://play.google.com/apps/com.rteco.gastromahalla",
    },
    {
      id: 1,
      img: apple,
      title: "App Store",
      text: "Available on the",
      href: "https://play.google.com/apps/com.rteco.gastromahalla",
    },
  ];

  const footerContacts = [
      {id:0, img: location, text: `Toshkent shahar, Mustaqillik ko’chasi Amir Temur 65A`},
      {id:1, img: message, text: '+998 71 123-45-67'},
      {id:2, img: call, text: 'taomlar@gmail.com'},
]
  return (
    <footer className={style.footer}>
      <div className={style.myFooter}>
        <div className={style.footerFirst}>
          <Container>
            <Row>
              <Col lg={7}>
                <div className={style.footerLink}>
                  In publishing and graphic design, is a placeholder text <br />
                  commonly used to demonstrate.
                </div>
              </Col>
              <Col lg={5}>
                <div className={style.footerAppLinks}>
                  <div className={style.appLinks}>
                    {appLinks.map((el) => {
                      return (
                        <div key={el.id} className={style.app}>
                          <AppLinks
                            href={el.href}
                            img={el.img}
                            text={el.text}
                            title={el.title}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.footerSecond}>
          <Container>
            <Row>
              <Col lg={7} md={12}>
                <div className={style.footerNav}>
                  <a href="/sfg/">Region</a>
                  <a href="/sfg/">Toshkent</a>
                  <a href="/sfg/">Kabob</a>
                  <a href="/sfg/">Kabob</a>
                  <a href="/sfg/">Taomlar</a>
                  <a href="/sfg/">Samarqand</a>
                  <a href="/sfg/">Manti</a>
                  <a href="/sfg/">Manti</a>
                  <a href="/sfg/">Biz haqimizda</a>
                  <a href="/sfg/">Buxoro</a>
                  <a href="/sfg/">Somsa</a>
                  <a href="/sfg/">Somsa</a>
                  <a href="/sfg/">Yangiliklar</a>
                  <a href="/sfg/">Andijon</a>
                  <a href="/sfg/">Osh</a>
                  <a href="/sfg/">Osh</a>
                </div>
              </Col>
              <Col lg={5}>
                  <div className={style.footerContacts}>
                      {footerContacts.map(el => {
                          return (
                            <a className={style.regInfo} key={el.id} href="#/">
                                <img src={el.img} alt={el.img} />
                                <p>{el.text}</p>
                            </a>                              
                          )
                      })}
                  </div>
              </Col>
            </Row>
          </Container>
          
        </div>
        <div className={style.copyright}>
            <Container>
                <div className={style.copyrightWrapper}>
                    <p>Copyright 2021 All rights reserved</p>
                    <a href="#/">
                        <img src={rTeco} alt="Rteco"/>
                    </a>
                </div>
            </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
