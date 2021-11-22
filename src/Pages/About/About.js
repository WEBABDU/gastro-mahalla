import React from "react";
import AboutContent from "../../components/AboutContent/AboutContent";
import { Inform } from "../../shared/Inform/Inform";
import { MiniCards } from "../../shared/MiniCards/MiniCards";
import { PhoneForm } from "../../shared/PhoneForm/PhoneForm";
import style from "./About.module.css";

const About = () => {
  return (
    <div>
      <Inform text={"Haqida"} />
      <AboutContent />
      <div className={style.wrapper}>
        <MiniCards color="#f8f8f8" />
      </div>
      <div className={style.goFlyWrapper}>
        <PhoneForm />
      </div>
    </div>
  );
};

export default About;
