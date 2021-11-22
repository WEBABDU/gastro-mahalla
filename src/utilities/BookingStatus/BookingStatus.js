import React, { useState } from "react";
import style from "./BookingStatus.module.css";
import calendar from "./../../cammon/Calendar.png";
import clock from "./../../cammon/Time.png";
import { Cancel } from "../../shared/Cancel/Cancel";

const BookingStatus = ({ booking }) => {
  const [isActive, setIsActive] = useState(false)


  const date = new Date(booking.details.date * 1000).toLocaleDateString(
    "en-GB"
  );
  const time = new Date(booking.details.date * 1000)
    .toLocaleTimeString("en-GB")
    .substr(0, 5);

  const { status, id } = booking;

  const handleClick = () => {
    if(status === 1) {
      setIsActive(!isActive)
    }
  }

  return (
    <>
      <span>
        <div className={style.filterRow}>
          <div className={style.forFilter}>
            <div
              className={
                status > 1 ? `${style.eName} ${style.notActive}` : style.eName
              }
            >
              {booking.product.title}
            </div>
            <div
              className={
                status > 1
                  ? `${style.ePerson} ${style.notActive}`
                  : style.ePerson
              }
            >
              {booking.details.people}
            </div>
            <div
              className={
                status > 1
                  ? `${style.ePortion} ${style.notActive}`
                  : style.ePortion
              }
            >
              {booking.details.portion}
            </div>
            <div
              className={
                status > 1 ? `${style.eTime} ${style.notActive}` : style.eTime
              }
            >
              <div className={style.calendar}>
                <div className={style.data}>
                  <img src={calendar} alt="calendar" />
                  <span>{date}</span>
                </div>
                <div className={style.data}>
                  <img src={clock} alt="time" />
                  <span>{time}</span>
                </div>
              </div>
            </div>
            <div className={status > 1 ? `${style.eStatus} ${style.notActive}` : style.eStatus} onClick={handleClick}>
                <Cancel isActive={isActive} id={id}/>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default BookingStatus;
