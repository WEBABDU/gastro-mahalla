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
}) => {
  return (
    <>
      <form className={style.logForm}>
        <div className={style.fLogin}>
          <Field name="name" component="input" placeholder="Ismingiz" />
        </div>
        <div className={style.fLogin}>
          <Field name="surName" component="input" placeholder="Familyangiz" />
        </div>
        <div className={style.fLogin}>
          <Field
            name="contact"
            component="input"
            placeholder="Telefon raqamingiz"
          />
        </div>
        <div className={style.fLogin}>
          <Field name="email" component="input" placeholder="E-mail" />
        </div>
        <div className={style.fSelect}>
          <Select>
            <select style={{ backgroundColor: "#fff" }}>
              <option value="" defaultChecked defaultValue>
                Viloyatni tanlang
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
              <option value="">Turistik hududni tanlang</option>
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
            <span className={image ? style.activeImg : null}>Rasm yuklash</span>
          </label>
        </div>

        <div className={style.uploaderRight}>
          <div className={style.fLogin + " " + style.forEditor}>
            <input required type="text" placeholder="Organizatsiya nomi" />
          </div>
          <div className={style.fLogin + " " + style.forEditor}>
            <input required type="text" placeholder="Manzilingizni kiriting" />
          </div>
          <div className={style.fLogin + " " + style.forEditor}>
            <input
              required
              type="text"
              placeholder="Plastik karta raqamingiz"
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
          <Field component='input' name='password' type="text" placeholder="Parol" />
        </div>
        <div className={style.fLogin}>
          <Field component='input' name='ConfirmPassword' type="text" placeholder="Parolni tasdiqlang" />
        </div>

        <div className={style.moreButton}>
          <ButtonMore
            value={radioValue === "cheef" ? "Ro'yhatdan o'tish" : "Kirish"}
          />
        </div>
      </form>
    </>
  );
};

export default reduxForm({form: 'signUpForOrgan'})(SignUpForOrgan);
