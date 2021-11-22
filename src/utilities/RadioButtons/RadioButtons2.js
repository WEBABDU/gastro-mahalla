import React from "react";
import style from "./RadioButtons.module.css";

export const RadioButtons2 = ({ value, informText, radioText }) => {
 
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
          />
          <span className={style.fake}></span>
        </label>
        <div className={style.labelBefore}>{informText}</div>
      </div>
    </>
  );
};

