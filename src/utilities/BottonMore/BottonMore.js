import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./BottonMore.module.css";
import spinner from "./../../cammon/spinner.gif";

export const ButtonMore = ({
  value,
  type = "button",
  checkedStatus = true,
  handleClick,
}) => {
  const loading = useSelector((state) => state.auth.loading);
  
  return (
    <>
      <button
        type={type}
        className={
          !checkedStatus
            ? `${style.bttonMore} ${style.disabled}`
            : style.bttonMore
        }
        disabled={!checkedStatus}
        onClick={handleClick}
      >
        {loading ? <img src={spinner} alt="" /> : value}
      </button>
    </>
  );
};
