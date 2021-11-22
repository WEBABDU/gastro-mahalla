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

const SignUp = () => {
  const radioValue = useSelector((state) => state.signUp.radioValue);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [image, setImage] = useState(null);
  const radioButton = [
    {
      id: 1,
      value: "turist",
      informText: "Agar siz turist bo’lsangiz:",
      radioText: "Turist",
    },
    {
      id: 2,
      value: "cheef",
      informText: "Agar siz oshpaz bo’lsangiz:",
      radioText: "Oshpaz",
    },
  ];
  const radioButton2 = [
    {
      id: 1,
      value: "guest",
      informText: "Mehmon uyi",
      radioText: "Mehmon uyi",
    },
    {
      id: 2,
      value: "kitchen",
      informText: "Uy oshxonasi",
      radioText: "Uy oshxonasi",
    },
  ];
  const regions = useSelector((state) => state.regions.regions);
   

  useEffect(() => {
    dispatch(getRegions())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
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

  if(localStorage.token) {
   return  <Redirect to='/'/>
  }

  return (
    <div>
      <Container>
        <Row className={style.wrapper}>
          <Col lg={6} md={12}>
            <div className={style.NewsCards}>
              <h3 className={style.signUpTitle}>Ro‘yhatdan o‘tish</h3>
              <div className={style.nSub}>
                <span>Ro’yhatdan o‘tgan bo’lsangiz</span>
                <span>
                  <Link className={style.enter} to="signIn">
                    Kirish
                  </Link>
                </span>
                <span> tugmasini bosing</span>
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
                />
              </div>
            </div>
          </Col>
          <Col lg={4} md={12}>
            <div className={style.aboutUs}>
              <div className={style.sub}>
                {radioValue === "cheef" ? (
                  <p>
                    Siz o‘z hovlingizda sayyohlarni kutib olib, o‘z-o‘zingizni
                    band qilib yaxshigina daromad qilishni istaysizmi? Unda
                    ertalabki nonushta, tushlik va kechki ovqat xizmatlari uchun
                    har bir sayyohga maksimal 8$ dan oshmagan set laringizni
                    tuzing va sahifangizga joylashtiring. Sahifangizni kerakli
                    ma’lumotlar bilan to‘ldiring va ilovaga ulanish shartlari
                    bilan tanishib chiqing! <br />
                    Buning uchun: <br /> <br />
                    1. Ro‘yxatdan o‘ting <br /> <br />
                    2. Shaharni tanlang <br /> <br />
                    3. O‘z uy adresingiz va hovlingiz haqidagi ma’lumotlarni
                    kiriting <br /> <br />
                    4. Qanday gastronomik xizmatlar ko‘rsatishingiz haqidagi
                    ma’lumotlarni to‘ldiring
                  </p>
                ) : (
                  <p>
                    Siz bu loyihada o‘zingiz tashrif buyuradigan turistik
                    inshoatlar yaqinida joylashgan hududdan oddiy odamlarning
                    honadoniga tashrif buyurib, uy sharoitida tayyorlangan
                    milliy taomlarni tanovvul qilishingiz mumkin. Ovqatlanishga
                    ajratilgan vaqtingizda madaniyatimiz, turmush tarzimiz bilan
                    ham yaqinroq tanishing. <br />
                    Buning uchun: &nbsp; <br />
                    1. Ro‘yxatdan o‘ting <br />
                    2. Shaharni tanlang <br />
                    3. Shahardagi mahallalarni tanlang <br />
                    4. Xonadon egalarining sahifalariga o‘tib, taomlarni
                    buyurtma qiling
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
          />
        </>
      ) : (
        !isConfirm && (
          <form className={style.logForm} onSubmit={handleSubmit}>
            <Field
              name="first_name"
              component={Input}
              validate={required}
              placeholder="Ismingiz"
            />

            <Field
              name="last_name"
              component={Input}
              placeholder="Familyangiz"
              validate={required}
            />

            <Field
              name="phone"
              component={Input}
              validate={[required, telephone]}
              placeholder="Telefon raqamingiz"
            />

            <Field
              name="email"
              component={Input}
              placeholder="E-mail"
              validate={[required, email]}
            />

            <Field
              component={Input}
              validate={required}
              name="password"
              type="password"
              placeholder="Parol"
              value="jjj"
            />

            <div className={style.fLogin}>
              <Field
                component="input"
                name="password_confirm"
                type="password"
                placeholder="Parolni tasdiqlang"
              />
            </div>

            <div className={style.moreButton}>
              <ButtonMore
                value={radioValue === "cheef" ? "Ro'yhatdan o'tish" : "Kirish"}
                type="submit"
              />
            </div>
          </form>
        ) || <ConfirmEmail />
      )}
    </>
  );
};

const SignUpReduxForm = reduxForm({
  form: "signUp",
})(SignUpForm);

export default SignUp;
