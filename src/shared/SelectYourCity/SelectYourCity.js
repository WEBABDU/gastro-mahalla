import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Select } from "../../utilities/Select/Select";
import style from "./SelectYourCity.module.css";


export const SelectYourCity = ({ city, setCity, regions }) => {
  const { t } = useTranslation(); 
  return (
    <div>
      <Container>
        <Row className={style.foodMenu}>
          <Col lg={6}>
            <h4>{t("national_dishes")}</h4>
            <p>{t("enter_the_region")}</p>
          </Col>
          <Col md={12} lg={6} className={style.slectBlock}>
            <div className={style.selectWrapper}>
              <Select>
                <select onChange={(e) => setCity(e.target.value)}>
                  <option value="" defaultValue defaultChecked>
                    {t("select_the_region")}
                  </option>
                  {regions.map((region) => (
                    <option key={region.id} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </Select>
            </div>
            <div className={style.selectWrapper}>
              <Select>
                <select>
                  <option value="Regionni tanlang">{t("select_tourist_area")}</option>
                  <option value="Yunusobod">Yunusobod</option>
                  <option value="Olmazor">Olmazor</option>
                </select>
              </Select>
            </div>
          </Col>
        </Row>
        <Row className={style.selectedContent}>
          <Col className={style.bottomBorder}>
            {city && (
              <>
                <h5 className={style.cityTitle}>{city}</h5>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
