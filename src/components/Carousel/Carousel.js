import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import "./Carousel.css";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";


SwiperCore.use([Pagination, EffectCoverflow]);

const Carousel = () => {
  const { t } = useTranslation()
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      direction={"vertical"}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {[1, 2, 3].map((el) => (
        <SwiperSlide key={el}>
          <Container>
            <Row className="align-items-center carousel-content">
              <Col lg={8} md={12} className="slide-block">
                <h3 className="slide-title">
                  {t("have_you_eaten.first_line")}          <br />
                  {t("have_you_eaten.second_line")}   <br />
                  {t("have_you_eaten.third_line")}
                </h3>
                <p className="slide-description">
                  In publishing and graphic design, Lorem <br />
                  ipsum is a placeholder text commonly used <br />
                  to demonstrate the visual.
                </p>
                <button className="more-button">{t("more")}</button>
              </Col>
              <Col lg={4} className="img-content">
                {/* <img src={somsa} alt="somsa" /> */}
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
