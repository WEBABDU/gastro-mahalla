import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./OrganizationCard.module.css";
import noImage from "./../../cammon/coming_soon.png"

export const OrganizationCard = ({ card }) => {
  return (
    <>
      <Col lg={5} md={12} className={style.cardBlock}>
        <Row className={style.cardDes}>
          <Col lg={6} sm={6}>
            <NavLink to={`/organization/${card.id}/${card.title}`} className={style.cardImg} onClick={()=>window.scroll(0,0)}>
              <img src={!card.image.thumbnails.medium ? noImage : card.image.thumbnails.medium} alt="img" />
            </NavLink>
          </Col>
          <Col lg={6} sm={6} className={style.cardBody}>
            <NavLink to={`/organization/${card.id}/${card.title}`} onClick={()=>window.scroll(0,0)}>
              <h5 className={style.cardTitle}>{card.title}</h5>
              <p className={style.cardAddress}>{card.address}</p>
              <span className={style.cardTel}>{card.contact}</span>
            </NavLink>
          </Col>
        </Row>
      </Col>
    </>
  );
};
