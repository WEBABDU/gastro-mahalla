import React from "react";
import { Container } from "react-bootstrap";
import { MiniCards } from "../../shared/MiniCards/MiniCards";
import Carousel from "../Carousel/Carousel";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Carousel />
        <MiniCards />
      </Container>
    </div>
  );
};

export default Header;
