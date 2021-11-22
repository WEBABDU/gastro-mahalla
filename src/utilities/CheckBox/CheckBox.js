import React from "react";
import style from "./CheckBox.module.css";

export const CheckBox = ({ setCheckedStatus }) => {
  return (
    <div className={style.checkBoxWrapper}>
      <label className={style.label}>
        <input
          type="checkbox"
          onChange={(e) => setCheckedStatus(e.target.checked)}
          name="login"
          className={style.checkBox}
        />
        <span className={style.fake}></span>
      </label>
    </div>
  );
};
