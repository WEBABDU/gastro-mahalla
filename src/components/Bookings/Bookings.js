import React, { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsActive } from "../../redux/sidebar-reducer";
import { getBookings } from "../../redux/booking-reducer";
import BookingStatus from "../../utilities/BookingStatus/BookingStatus";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Bookings.module.css";

const Bookings = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const fetchBookings = useSelector((state) => state.booking.fetchBookings);
  const isActive = useSelector((state) => state.sidebar.isActive);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <Container>
        <Row className={style.customRow}>
          <Col xl={4} lg={4} md={6} sm={4} className={style.customCol}>
            <Sidebar />
            <div
              onClick={() => dispatch(setIsActive(false))}
              className={isActive ? style.closer : ""}
            ></div>
          </Col>
          <Col xl={8} lg={8} md={6} sm={8} className={style.customCol}>
            {fetchBookings ? (
              <div className={style.spinner}>
                <Spinner animation="border" variant="warning" size="xxl" />
              </div>
            ) : (
              <div className={style.manegerFoodMenu}>
                <div className={`${style.filterRow} ${style.hideInSm}`}>
                  <div className={style.forFilter}>
                    <div className={style.eName}>{t("food_name")}</div>
                    <div className={style.ePerson}>{t("guest")}</div>
                    <div className={style.ePortion}>{t("portion")}</div>
                    <div className={style.eTime}>{t("time")}</div>
                    <div className={style.eStatus}>{t("case")}</div>
                  </div>
                </div>
                <span>
                  {bookings.map((el) => (
                    <BookingStatus key={el.id} booking={el} />
                  ))}
                </span>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bookings;
