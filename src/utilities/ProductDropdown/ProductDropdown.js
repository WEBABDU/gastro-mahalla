import React, { useState } from "react";
import { CheckBox } from "../CheckBox/CheckBox";
import arrow from "./../../cammon/dropdownArrow.png";
import style from "./ProductDropdown.module.css";

export const ProductDropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [checkedStatus, setCheckedStatus] = useState(false)
  return (
    <div className={style.dropInfo}>
      <div className={style.myDropDown} onClick={() => setIsActive(!isActive)}>
        <div>Oshpaz uchun eslatma qoldiring</div>
        <img
          src={arrow}
          alt="arrow"
          className={isActive ? style.activeArrow : ""}
        />
      </div>
      <div
        className={
          isActive
            ? `${style.dropdownContent} ${style.active}`
            : `${style.dropdownContent}`
        }
      >
        <div className={style.dmContent}>
          <label className={style.ckeckBoxCon}>
            <CheckBox setCheckedStatus={setCheckedStatus}/>
            <span className={style.conText}>Ovqat iloji boricha yog‘sizroq bo‘lsin.</span>
          </label>
          <label className={style.ckeckBoxCon}>
            <CheckBox setCheckedStatus={setCheckedStatus}/>
            <span className={style.conText}>Ovqatlarni go‘sht solmasdan tayyorlab bering.</span>
          </label>
          <label className={style.ckeckBoxCon}>
            <CheckBox setCheckedStatus={setCheckedStatus}/>
            <span className={style.conText}>Ovqatni umumiy laganda (o‘zbekcha) suzing.</span>
          </label>
        </div>
      </div>
    </div>
  );
};
