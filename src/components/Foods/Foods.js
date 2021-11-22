import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import FoodCard from "./FoodCards/FoodCard";
import style from "./Foods.module.css";
import cardImg from "./../../cammon/card-img.png";
import { SelectYourCity } from "../../shared/SelectYourCity/SelectYourCity";
import { ButtonMore } from "../../utilities/BottonMore/BottonMore";
import { useDispatch } from "react-redux";
import { getRegions } from "../../redux/regions-reducer";
import { useSelector } from "react-redux";

const Foods = () => {
  const [city, setCity] = useState("");
  let cards = [
    { id: 0, src: cardImg, text: "Makaron qovurma" },
    { id: 1, src: cardImg, text: "Makaron qovurma" },
    { id: 2, src: cardImg, text: "Makaron qovurma" },
    { id: 3, src: cardImg, text: "Makaron qovurma" },
    { id: 4, src: cardImg, text: "Makaron qovurma" },
    { id: 5, src: cardImg, text: "Makaron qovurma" },
    { id: 6, src: cardImg, text: "Makaron qovurma" },
    { id: 7, src: cardImg, text: "Makaron qovurma" },
  ];
  let cardsSplice = cards.splice(4);
  const regions = useSelector((state) => state.regions.regions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container>
        <div className={style.selectWrapper}>
          <SelectYourCity regions={regions} city={city} setCity={setCity} />
        </div>
        <Row className={style.cardPartOne}>
          {cards.map((el) => (
            <FoodCard key={el.id} src={el.src} text={el.text} />
          ))}
        </Row>
        <Row className={style.cardPartTwo}>
          {cardsSplice.map((el) => (
            <FoodCard key={el.id} src={el.src} text={el.text} />
          ))}
          <div className={style.moreButton}>
            <ButtonMore value="Barchasi" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Foods;
