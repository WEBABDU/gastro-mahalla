import React, { useEffect } from "react";
import { useState } from "react";
import Map from "../../components/Map/Map";
import { OrganizationCard } from "../../shared/OrganizationCard/OrganizationCard";
import { SelectYourCity } from "../../shared/SelectYourCity/SelectYourCity";
import style from "./Organization.module.css";
import { Container, Row } from "react-bootstrap";
import { MiniCards } from "../../shared/MiniCards/MiniCards";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOrganization, getRegions } from "../../redux/regions-reducer";

const Organization = (props) => {
  const [city, setCity] = useState("");
  const cards = useSelector((state) => state.regions.organization);
  const regions = useSelector((state) => state.regions.regions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getOrganization());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <SelectYourCity regions={regions} city={city} setCity={setCity} />
      <Map />

      <Container>
        <div className={style.cardBlock}>
          <h5 className={style.cardBlockTitle}>
            Kiritilgan parametr bo’yicha mavjud oshxonalar ro’yhati
          </h5>
          <Row className={style.cardsContent}>
            {cards.map((el) => (
              <OrganizationCard key={el.id} card={el} />
            ))}
          </Row>
        </div>
      </Container>
      <div className={style.miniCardsWrapper}>
        <MiniCards color="#f8f8f8" />
      </div>
    </div>
  );
};

export default Organization;
