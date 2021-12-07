import { Field, reduxForm } from "redux-form";
import { QuillComponent } from "../../../shared/QullComponent/QuillComponent";
import { ButtonMore } from "../../../utilities/BottonMore/BottonMore";
import { RadioButtons2 } from "../../../utilities/RadioButtons/RadioButtons2";
import { Select } from "../../../utilities/Select/Select";
import camera from "./../../../cammon/Camera.png";
import style from "./SignUpForOrgan.module.css";

const SignUpForOrgan = ({
  radioValue,
  regions,
  setImageValue,
  image,
  radioButton2,
  t
}) => {
  return (
    <>
      <form className={style.logForm}>
        <div className={style.fLogin}>
          <Field name="name" component="input" placeholder={t("first_name")} />
        </div>
        <div className={style.fLogin}>
          <Field name="surName" component="input" placeholder={t("last_name")} />
        </div>
        <div className={style.fLogin}>
          <Field
            name="contact"
            component="input"
            placeholder={t("tel_number")}
          />
        </div>
        <div className={style.fLogin}>
          <Field name="email" component="input" placeholder={t("email")} />
        </div>
        <div className={style.fSelect}>
          <Select>
            <select style={{ backgroundColor: "#fff" }}>
              <option value="" defaultChecked defaultValue>
                {t("select_the_region")}
              </option>
              {regions.map((region) => (
                <option key={region.id} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </Select>
        </div>
        <div className={style.fSelect}>
          <Select>
            <select style={{ backgroundColor: "#fff" }}>
              <option value="">{t("select_tourist_area")}</option>
            </select>
          </Select>
        </div>
        <div className={style.fLogin}>
          <label htmlFor="regImgInput" className={style.imageUploader}>
            <input
              type="file"
              id="regImgInput"
              accept="image/*"
              className={style.imageinput}
              onChange={setImageValue}
            />
            <div className={image ? style.afterSelectedImg : style.fake}>
              <img
                src={image ? image : camera}
                alt="camera"
                className={image ? style.selectedImg : null}
              />
            </div>
            <span className={image ? style.activeImg : null}>{t("upload_image")}</span>
          </label>
        </div>

        <div className={style.uploaderRight}>
          <div className={style.fLogin + " " + style.forEditor}>
            <input required type="text" placeholder={t("organization_name")} />
          </div>
          <div className={style.fLogin + " " + style.forEditor}>
            <input required type="text" placeholder={t("enter_adress")} />
          </div>
          <div className={style.fLogin + " " + style.forEditor}>
            <input
              required
              type="text"
              placeholder={t("card_number")}
            />
          </div>
        </div>
        <div className={style.radioButtonWrapp}>
          {radioButton2.map((e) => (
            <RadioButtons2
              key={e.id}
              value={e.value}
              informText={e.informText}
              radioText={e.radioText}
            />
          ))}
        </div>

        <div className={style.fLogin + " " + style.forEditor}>
          <QuillComponent />
        </div>
        <div className={style.fLogin}>
          <Field component='input' name='password' type="text" placeholder={t("password")} />
        </div>
        <div className={style.fLogin}>
          <Field component='input' name='ConfirmPassword' type="text" placeholder={t("confirm_password")} />
        </div>

        <div className={style.moreButton}>
          <ButtonMore
            value={radioValue === "cheef" ? t("sign_up") : t("sign_in")}
          />
        </div>
      </form>
    </>
  );
};

export default reduxForm({form: 'signUpForOrgan'})(SignUpForOrgan);
