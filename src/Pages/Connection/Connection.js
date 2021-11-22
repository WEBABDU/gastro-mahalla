import React from "react";
import ConnectionContent from "../../components/ConnectionContent/ConnectionContent";
import { Inform } from "../../shared/Inform/Inform";
import { PhoneForm } from "../../shared/PhoneForm/PhoneForm";
import style from "./Connection.module.css";

const Connection = () => {
  return (
    <div>
      <Inform text="Aloqa" />
      <ConnectionContent />
      <div className={style.phoneWrapper}>
        <PhoneForm />
      </div>
    </div>
  );
};

export default Connection;
