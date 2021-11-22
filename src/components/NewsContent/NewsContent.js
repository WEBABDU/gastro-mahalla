import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NewsCards } from "../../shared/NewsCards/NewsCards";
import style from "./NewsContent.module.css";

const NewsContent = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <Row className={style.newsCardsLinks}>
          <Col lg={12}>
            <div>
              <Row>
                <Col lg={4} className={style.newsLinksAfter}>
                  <NewsCards />
                </Col>
                <Col lg={4} className={style.newsLinksAfter}>
                  <NewsCards />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsContent;
