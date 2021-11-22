import React from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  FieldFileInput,
  SettingsInput,
} from "../../../shared/formsControls/FormsControls";
import style from "./SettingsForm.module.css";

let SettingsForm = ({
  setValue,
  image,
  profile,
  imagePerson,
  first_name,
  last_name,
  handleSubmit
}) => {
  return (
    <form className={style.settingsForm} onSubmit={handleSubmit}>
      <div className={style.imgSec}>
        <label htmlFor="userImgUpload" className={style.avatar}>
          <Field
            setValue={setValue}
            component={FieldFileInput}
            type="file"
            name="image"
            id="userImgUpload"
          />
          <img
            src={image ? image : imagePerson.thumb || profile}
            alt="profile"
          />
          <span>Avatar</span>
        </label>
        <div>
          <h5 className={style.pName}>{first_name}</h5>
          <p className={style.pStatus}>{last_name}</p>
        </div>
      </div>
      <div className={style.infoSec}>
        <div className={style.infoCard}>
          <Field type="text" component={SettingsInput} name="first_name" />
        </div>
        <div className={style.infoCard}>
          <Field type="text" component={SettingsInput} name="last_name" />
        </div>
        <div className={style.infoCard}>
          <Field type="text" component={SettingsInput} name="email" />
        </div>
        <div className={style.infoCard}>
          <Field type="number" component={SettingsInput} name="phone" />
        </div>
        <div className={`${style.infoCard} ${style.infoButtons}`}>
          <div className={style.buttons}>
            <input type="button" value="Bekor qilish" />
            <input type="submit" value="Saqlash" className={style.buttonSave} />
          </div>
        </div>
      </div>
    </form>
  );
};

SettingsForm = reduxForm({
  form: "initializeFromState", // a unique identifier for this form
})(SettingsForm);

// You have to connect() to any reducers that you wish to connect to yourself
SettingsForm = connect(
  (state) => ({
    initialValues: state.auth, // pull initial values from account reducer
  }),
  {} // bind account loading action creator
)(SettingsForm);

export default SettingsForm;
