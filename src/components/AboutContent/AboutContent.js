import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./AboutContent.module.css";
import time from "./../../cammon/Time.png";
import { NewsCards } from "../../shared/NewsCards/NewsCards";

const AboutContent = () => {
  return (
    <div>
      <Container>
        <Row className={style.wrapper}>
          <Col lg={6}>
            <div className={style.aboutUs}>
              <div className={style.sub}>
                <p>
                  &nbsp; &nbsp;Mazkur loyiha O‘zbekiston Respublikasi
                  Prezidentining 2020 yilgi parlamentga murojaatnomasidagi
                  vazifalar ijrosi, O‘zbekiston Respublikasi Prezidentining
                  PF-5611-sonli Farmoni hamda O‘zbekistonda turizmni jadal
                  rivojlantirishga oid chora-tadbirlar rejasida turizm sohasida
                  xizmat ko‘rsatish sifatini oshirish bo‘yicha bir qator
                  belgilab berilgan vazifalar ijrosini ta’minlashga qartilgan
                  “Gastro mahalla” loyihasi &nbsp; doirasida O‘zbekiston
                  Respublikasi Mahalla va oilani qo‘llab-quvvatlash vazirligi
                  huzuridagi “Mahalla va oila” ilmiy-tadqiqot instituti va
                  O‘zbekiston Gastronomik turizmi assosiasiyasi tomonidan
                  tayyorlandi. &nbsp; <br /> Loyiha maqsadi mahallalarda
                  turistik muhitni yaratish, fuqarolarning oilaviy
                  tadbirkorlikni yo‘lga qo‘yishlari va o‘z-o‘zini band
                  etishlariga amaliy ko‘mak berish. Sayyohlarni milliy
                  taomlarimizni tayyorlash an’analari bilan yaqindan
                  tanishtirish, milliy donalik taom savdosi bilan
                  shug‘ullanadigan fuqarolarni sayyohlarga xizmat ko‘rsatish
                  sohasiga jalb etishdan iborat. <br /> Loyihaning dastlabki
                  bosqichida Toshkent va Buxoro shaharlaridagi mahallalar jalb
                  etildi.
                </p>
              </div>
              <div className={style.date}>
                <img src={time} alt="time" />
                <p className={style.dateText}>18 Mart, 2021</p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={style.myNewsCards}>
              <Row>
                <Col lg={12}>
                  <NewsCards />
                </Col>
                <Col lg={12}>
                  <NewsCards />
                </Col>
                <Col lg={12}>
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

export default AboutContent;
