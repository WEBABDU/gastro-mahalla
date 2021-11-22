import React from "react";
import { useDispatch } from "react-redux";
import { setRadioValue } from "../../redux/signUp-reducer";
import style from "./RadioButtons.module.css";

export const RadioButtons = ({ value, informText, radioText }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.radioWrapper}>
        <label className={style.label}>
          <span className={style.radioText}>{radioText}</span>
          <input
            type="radio"
            name="login"
            value={value}
            className={style.radio}
            onChange={(e) => dispatch(setRadioValue(e.target.value))}
          />
          <span className={style.fake}></span>
        </label>
        <div className={style.labelBefore}>{informText}</div>
      </div>
    </>
  );
};
