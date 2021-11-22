import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./PhoneForm.module.css";

export const PhoneForm = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <h4 className={style.formTitle}>Raqamingizni qoldiring</h4>
        <div className={style.contactForm}>
          <form>
            <Row>
              <Col lg={6}>
                <div className={style.formCard}>
                  <label htmlFor="Tel" className={style.phoneLabel}>+998</label>
                  <div className={style.numInputBorder}>
                    <input className={style.numInput} type="tel" placeholder="90 123 45 67" />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className={style.formCard + " " + style.teleg}>
                  <input type="submit" value="yuborish" />
                  <span className={style.goFly}></span>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
};
