import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./ProjectName.module.css";
import phone from "./../../cammon/iphone.png";
import apple from "./../../cammon/apple-link.png";
import playMarket from "./../../cammon/play-market-link.png";
import { AppLinks } from "../../shared/AppLinks/AppLinks";
import { useTranslation } from "react-i18next";

const ProjectName = () => {
  const { t } = useTranslation()
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

  return (
    <Container>
      <Row className={style.projectBlock}>
        <Col>
          <h4 className={style.projectTitle}>Gastro Mahalla</h4>
          <p className={style.projectDescription}>
           {t("objective_project")}
          </p>
          <div className={style.appLinks}>
            {appLinks.map((el) => {
              return (
                <div className={style.app} key={el.id}>
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
        </Col>
        <Col className={style.projectPhone}>
          <img src={phone} alt="phone" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectName;
