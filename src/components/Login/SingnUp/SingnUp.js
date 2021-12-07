import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { RadioButtons } from "../../../utilities/RadioButtons/RadioButtons";
import style from "./SingnUp.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonMore } from "../../../utilities/BottonMore/BottonMore";
import { Field, reduxForm } from "redux-form";
import SignUpForOrgan from "../SignUpForOrgan/SignUpForOrgan";
import { Input } from "../../../shared/formsControls/FormsControls";
import {
  email,
  required,
  telephone,
} from "../../../utilities/validators/validators";
import { setLogin } from "../../../redux/auth-reducer";
import ConfirmEmail from "../../../shared/ConfirmEmail/ConfirmEmail";
import { getRegions } from "../../../redux/regions-reducer";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const radioValue = useSelector((state) => state.signUp.radioValue);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [image, setImage] = useState(null);
  const radioButton = [
    {
      id: 1,
      value: "turist",
      informText: t("if_tourist"),
      radioText: t("status"),
    },
    {
      id: 2,
      value: "cheef",
      informText: t("if_cheef"),
      radioText: t("who"),
    },
  ];
  const radioButton2 = [
    {
      id: 1,
      value: "guest",
      informText: t("guest_house"),
      radioText: t("guest_house"),
    },
    {
      id: 2,
      value: "kitchen",
      informText: t("private_meal"),
      radioText: t("private_meal"),
    },
  ];
  const regions = useSelector((state) => state.regions.regions);

  useEffect(() => {
    dispatch(getRegions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setImageValue = (e) => {
    setValue(e.target.files[0]);
    console.log(value);
  };

  useEffect(() => {
    if (value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(value);
    } else {
      setImage(null);
    }
  }, [value]);

  const onSubmit = ({
    email,
    phone,
    first_name,
    last_name,
    password,
    password_confirm,
  }) => {
    dispatch(
      setLogin(email, password, password_confirm, first_name, last_name, phone)
    );
  };

  if (localStorage.token) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Container>
        <Row className={style.wrapper}>
          <Col lg={6} md={12}>
            <div className={style.NewsCards}>
              <h3 className={style.signUpTitle}>{t("sign_up")}</h3>
              <div className={style.nSub}>
                <span>{t("if_you_register")}</span>
                <span>
                  <Link className={style.enter} to="signIn">
                    {t("sign_in")}
                  </Link>
                </span>
                {/* <span> tugmasini bosing</span> */}
              </div>

              <div>
                <div className={style.radioButtons}>
                  {radioButton.map((e) => (
                    <RadioButtons
                      key={e.id}
                      value={e.value}
                      informText={e.informText}
                      radioText={e.radioText}
                    />
                  ))}
                </div>
                <SignUpReduxForm
                  radioButton2={radioButton2}
                  radioValue={radioValue}
                  regions={regions}
                  setImageValue={setImageValue}
                  image={image}
                  onSubmit={onSubmit}
                  t={t}
                />
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className={style.aboutUs}>
              <div className={style.sub}>
                {radioValue === "cheef" ? (
                  <p>
                    { t("inform_for_sign_up_cheef.first_line")} <br />
                    { t("inform_for_sign_up_cheef.second_line")} <br /> <br />
                    { t("inform_for_sign_up_cheef.third_line")} <br /> <br />
                    { t("inform_for_sign_up_cheef.forthy_line")} <br /> <br />
                    { t("inform_for_sign_up_cheef.fifty_line")} <br /> <br />
                    { t("inform_for_sign_up_cheef.sixty_line")}
                  </p>
                ) : (
                  <p>
                   { t("inform_for_sign_up.first_line")} <br />
                    {t("inform_for_sign_up.second_line")} &nbsp; <br />
                    {t("inform_for_sign_up.third_line")} <br />
                    {t("inform_for_sign_up.forthy_line")} <br />
                    {t("inform_for_sign_up.fifty_line")} <br />
                    {t("inform_for_sign_up.sixty_line")}
                  </p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const SignUpForm = ({
  radioValue,
  regions,
  setImageValue,
  image,
  radioButton2,
  handleSubmit,
  t
}) => {
  const isConfirm = useSelector((state) => state.auth.isConfirm);

  return (
    <>
      {radioValue === "cheef" ? (
        <>
          <SignUpForOrgan
            radioValue={radioValue}
            regions={regions}
            setImageValue={setImageValue}
            image={image}
            radioButton2={radioButton2}
            t={t}
          />
        </>
      ) : (
        (!isConfirm && (
          <form className={style.logForm} onSubmit={handleSubmit}>
            <Field
              name="first_name"
              component={Input}
              validate={required}
              placeholder={t("first_name")}
            />

            <Field
              name="last_name"
              component={Input}
              placeholder={t("last_name")}
              validate={required}
            />

            <Field
              name="phone"
              component={Input}
              validate={[required, telephone]}
              placeholder={t("tel_number")}
            />

            <Field
              name="email"
              component={Input}
              placeholder={t("email")}
              validate={[required, email]}
            />

            <Field
              component={Input}
              validate={required}
              name="password"
              type="password"
              placeholder={t("password")}
            />

            <div className={style.fLogin}>
              <Field
                component="input"
                name="password_confirm"
                type="password"
                placeholder={t("confirm_password")}
              />
            </div>

            <div className={style.moreButton}>
              <ButtonMore
                value={t("sign_up")}
                type="submit"
              />
            </div>
          </form>
        )) || <ConfirmEmail />
      )}
    </>
  );
};

const SignUpReduxForm = reduxForm({
  form: "signUp",
})(SignUpForm);

export default SignUp;
