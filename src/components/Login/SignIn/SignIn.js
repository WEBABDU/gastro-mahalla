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
import style from "./SignIn.module.css";

const SignIn = () => {
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
              GastroMahalla-ga xush kelibsiz
            </p>
          </Col>
          <Col lg={4} md={12}>
            <div className={style.newCards}>
              <h3 className={style.signInTitle}>Kirish</h3>
              <div className={style.nSub}>
                <span>Ro’yhatdan o’tmagan bo’lsangiz </span>
                <span>
                  <Link to="/signUp" className={style.signUpText}>
                    Ro’yhatdan o’tish
                  </Link>
                </span>
                <ReduxSignInForm onSubmit={onSubmit} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const SignInForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className={style.signInForm} onSubmit={handleSubmit}>
      <Field
        name="email"
        placeholder="Kirish"
        component={Input}
        validate={[required, email]}
        width="100%"
      />

      <Field
        name="password"
        type="password"
        placeholder="Parol"
        component={Input}
        validate={required}
        width="100%"
      />

      <div className={style.formButton}>
        <ButtonMore value="Kirish" type="submit" />
      </div>
    </form>
  );
};

const ReduxSignInForm = reduxForm({ form: "signIn" })(SignInForm);

export default SignIn;
