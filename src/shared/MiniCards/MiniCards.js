import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import arrow from "./../../cammon/arrow.png";
import style from "./MiniCards.module.css";

export const MiniCards = ({ color = "#fff" }) => {
  const content = [
    {
      id: 1,
      titleText: "Mahalliy taomlar",
      description: "Turist sifatida ro‘yhatdan o‘ting ",
    },
    {
      id: 2,
      titleText: "Milliy taomlar pishirasizmi?",
      description: "Oshxona sifatida ro‘yhatdan o‘ting ",
    },
  ];

  let styleCss = { backgroundColor: color };

  return (
    <Container>
      <Row className={style.cards}>
        {content.map((el) => {
          return (
            <Col lg={6} className={style.miniCard} key={el.id}>
              <Link
                to="/signUp"
                className={style.miniCardLink}
                style={styleCss}
              >
                <div>
                  <h4 className={style.cardTitle}>{el.titleText}</h4>
                  <p className={style.cardDescription}>{el.description}</p>
                </div>
                <div className={style.cardButton}>
                  <img src={arrow} alt="arrow" />
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
