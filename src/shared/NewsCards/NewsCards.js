import React from "react";
import style from "./NewsCards.module.css";
import time from "./../../cammon/Time.png";

export const NewsCards = () => {
  return (
    <div>
      <a href="/" className={style.newsCards}>
        <div className={style.nDate}>
          <img src={time} alt="time" />
          18 Mart, 2021
        </div>
        <div className={style.newsdescription}>
          "Gastro mahalla" loyihasi taqdimoti
        </div>
      </a>
    </div>
  );
};
