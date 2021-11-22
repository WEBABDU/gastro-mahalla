import React from "react";
import { Card, Col } from "react-bootstrap";
import style from "./FoodCards.module.css";

const FoodCard = ({ src, text }) => {
  return (
    <Col lg={3} md={6} sm={6}>
      <Card className={style.card}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FoodCard;
