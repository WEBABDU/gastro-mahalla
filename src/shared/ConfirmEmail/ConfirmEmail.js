import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendConfirmEmail } from "../../redux/auth-reducer";
import { ButtonMore } from "../../utilities/BottonMore/BottonMore";
import style from "./ConfirmEmail.module.css";
const ConfirmEmail = () => {
  const [code, setCode] = useState("");
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault();
   dispatch(sendConfirmEmail(email, code));
  };
  return (
    <form className={style.confirmEmail} onSubmit={onSubmit}>
      <label htmlFor="emailCode">Enter Confirmation code</label>
      <div className={style.fLogin}>
        <input
          type="text"
          placeholder="enter code"
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <ButtonMore type="submit" value="Send" />
    </form>
  );
};

export default ConfirmEmail;
