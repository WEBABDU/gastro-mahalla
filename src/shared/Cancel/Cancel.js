import React from "react";
import { useDispatch } from "react-redux";
import { cancelBookingAsync } from "../../redux/booking-reducer";
import style from "./Cancel.module.css"

export const Cancel = ({isActive, id}) => {
  const dispatch = useDispatch()


  const handleClick = () => {
    dispatch(cancelBookingAsync(id))
  }

  return (
    <div className={isActive ? `${style.canceling} ${style.active}` : style.canceling}>
      <span>
        In publishing and graphic design, Lorem ipsum is a placeholder text...
      </span>
      <button onClick={handleClick}>
        <p>Buyurtmani bekor qilish</p>
      </button>
    </div>
  );
};

