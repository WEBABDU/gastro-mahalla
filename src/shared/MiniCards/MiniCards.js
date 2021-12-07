import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import arrow from "./../../cammon/arrow.png";
import style from "./MiniCards.module.css";

export const MiniCards = ({ color = "#fff" }) => {
  const { t } = useTranslation();
  const token = localStorage.getItem("token");
  const content = [
    {
      id: 1,
      titleText: t("national.titleText"),
      description: t("national.description"),
    },
    {
      id: 2,
      titleText: t("local_dishes.titleText"),
      description: t("local_dishes.description"),
    },
  ];

  let styleCss = { backgroundColor: color };

  return (
    <Container>
      <Row className={token ? style.tokenActive : style.cards}>
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
