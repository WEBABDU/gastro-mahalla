import React from "react";
import { Redirect } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../../redux/auth-reducer";
import { Input } from "../../../shared/formsControls/FormsControls";
import { ButtonMore } from "../../../utilities/BottonMore/BottonMore";
import { email, required } from "../../../utilities/validators/validators";
import { useTranslation } from "react-i18next";
import style from "./SignIn.module.css";

const SignIn = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const onSubmit = ({ email, password }) => {
    dispatch(login(email, password));
  };



  if(localStorage.getItem('token')){
    return <Redirect to='/'/>
  }


  return (
    <div>
      <Container>
        <Row className={style.signInContent}>
          <Col lg={6} md={12}>
            <p className={style.signInWelcome}>
              {t("welcome")}
            </p>
          </Col>
          <Col lg={4} md={12}>
            <div className={style.newCards}>
              <h3 className={style.signInTitle}>{t("sign_in")}</h3>
              <div className={style.nSub}>
                <span>{t("if_don't_sign")}</span>
                <span>
                  <Link to="/signUp" className={style.signUpText}>
                    {t("sign_up")}
                  </Link>
                </span>
                <ReduxSignInForm onSubmit={onSubmit} t={t}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const SignInForm = (props) => {
  const { handleSubmit, t } = props;

  return (
    <form className={style.signInForm} onSubmit={handleSubmit}>
      <Field
        name="email"
        placeholder={t("email")}
        component={Input}
        validate={[required, email]}
        width="100%"
      />

      <Field
        name="password"
        type="password"
        placeholder={t("password")}
        component={Input}
        validate={required}
        width="100%"
      />

      <div className={style.formButton}>
        <ButtonMore value={t("sign_in")} type="submit" />
      </div>
    </form>
  );
};

const ReduxSignInForm = reduxForm({ form: "signIn" })(SignInForm);

export default SignIn;
