import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./AboutNewsContent.module.css";
import map from "./../../cammon/map.png";
import time from "./../../cammon/Time.png";

const AboutNewsContent = () => {
  const newsCard = [
    {
      id: 0,
      time: "18 Mart, 2021",
      title: "Kirib kelayotgan “ Navruz ” ayyomi muborak bo‘lsin!",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.",
    },
    {
      id: 1,
      time: "18 Mart, 2021",
      title: "Kirib kelayotgan “ Navruz ” ayyomi muborak bo‘lsin!",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder.",
    },
    {
      id: 2,
      time: "18 Mart, 2021",
      title: "Kirib kelayotgan “ Navruz ” ayyomi muborak bo‘lsin!",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.",
    },
    {
      id: 3,
      time: "18 Mart, 2021",
      title: "Kirib kelayotgan “ Navruz ” ayyomi muborak bo‘lsin!",
      text: "In publishing and graphic design, Lorem ipsum is a.",
    },
  ];

  return (
    <div className={style.wrapper}>
      <Container>
        <Row>
          <Col className={style.newsBlock}>
            <h4 className={style.newsTitle}>Yangiliklar</h4>
            <Row>
              {newsCard.map((el) => {
                return (
                  <Col lg={6} key={el.id} className={style.card}>
                    <div className={style.timeBlock}>
                      <img src={time} alt="time" />
                      <span className={style.timeText}>{el.time}</span>
                    </div>
                    <h5 className={style.cardTitle}>{el.title}</h5>
                    <p className={style.newsDescription}>{el.text}</p>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={12}>
            <h4 className={style.newsTitle}>Mashhur hududlar</h4>
            <p className={style.newsDescription}>
              In publishing and graphic design, Lorem ipsum is a placeholder.
            </p>
            <div className={style.mapBack}>
              <img src={map} alt="map" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutNewsContent;
