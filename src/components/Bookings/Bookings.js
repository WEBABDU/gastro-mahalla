import React, { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBookings } from "../../redux/booking-reducer";
import BookingStatus from "../../utilities/BookingStatus/BookingStatus";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Bookings.module.css";

const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);
  const fetchBookings = useSelector((state) => state.booking.fetchBookings);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <Container>
        <Row>
          <Col lg={4} className={style.customCol}>
            <Sidebar />
            <div className={style.closer}></div>
          </Col>
          <Col lg={8} className={style.customCol}>
            {fetchBookings ? (
              <div className={style.spinner}>
                <Spinner animation="border" variant="warning" size="xxl" />
              </div>
            ) : (
              <div className={style.manegerFoodMenu}>
                <div className={style.filterRow}>
                  <div className={style.forFilter}>
                    <div className={style.eName}>Taom nomi</div>
                    <div className={style.ePerson}>Mehmon</div>
                    <div className={style.ePortion}>Portsiya</div>
                    <div className={style.eTime}>Vaqti</div>
                    <div className={style.eStatus}>Holat</div>
                  </div>
                </div>
                {bookings.map((el) => (
                  <BookingStatus key={el.id} booking={el} />
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bookings;
