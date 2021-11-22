import React from "react";
import style from "./AppLinks.module.css"; 

export const AppLinks = ({href, img, text, title}) => {
  return (
    <a className={style.appLinkText} href={href}>
      <div className={style.appLinkTextBlock}>
        <div className={style.linksImg}>
          <img src={img} alt={img} />
        </div>
        <div>
          <div>{text}</div>
          <div>{title}</div>
        </div>
      </div>
    </a>
  );
};
