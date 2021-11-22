import React from "react";
import { ButtonMore } from "../../utilities/BottonMore/BottonMore";
import { CheckBox } from "../../utilities/CheckBox/CheckBox";
import { ProductDropdown } from "../../utilities/ProductDropdown/ProductDropdown";
import style from "./Products.module.css";
import calendar from "./../../cammon/Calendar.png";
import { Field, reduxForm } from "redux-form";
import {
  FieldDatePicker,
  MyCustomInput,
} from "../../shared/formsControls/FormsControls";
import { required } from "../../utilities/validators/validators";
import { useHistory } from "react-router-dom";

const ProductForm = ({
  plus,
  minus,
  setIsActive,
  isActive,
  setIsActive2,
  isActive2,
  setCheckedStatus,
  checkedStatus,
  handleSubmit,
}) => {
  const history = useHistory();

  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      history.push('/signIn')
    }
  };

  return (
    <form className={style.zakazForm} onSubmit={handleSubmit}>
      <div className={style.info}>
        <p>
          Taomlarga eng kami bir kun oldin buyurtma berishingiz mumkin.
          Yuborilgan buyurtma ko‘rsatilgan sanadan faqatgina bir kun oldin bekor
          qilinishi mumkin!
        </p>
      </div>
      <div className={style.functions}>
        <label>Odam soni</label>
        <div className={style.controllers}>
          <Field
            component={MyCustomInput}
            name="odam"
            func={minus}
            func2={plus}
            isActive={isActive}
            activeChange={setIsActive}
          />
        </div>
      </div>
      <div className={style.functions}>
        <label>Portsia</label>
        <div className={style.controllers}>
          <Field
            component={MyCustomInput}
            name="portsia"
            func={minus}
            func2={plus}
            isActive={isActive2}
            activeChange={setIsActive2}
          />
        </div>
      </div>
      <div className={style.calendar}>
        <div className={style.data}>
          <img src="" alt="" />
          <div className={style.vdatetime}>
            <img src={calendar} alt="calendar" />
            <div>
              <Field
                component={FieldDatePicker}
                name="datepicker"
                placeholder="Vaqtni tanlang"
                validate={required}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.dropdown}>
        <ProductDropdown />
      </div>

      <div className={style.checkBox}>
        <label className={style.ckeckBoxCon}>
          <CheckBox setCheckedStatus={setCheckedStatus} />
          <span className={style.conText}>
            Buyurtmani yaxshilab o‘qib chiqdim, tasdiqlayman.{" "}
          </span>
        </label>
      </div>

      <div className={style.buttonSubmit}>
        <ButtonMore
          type="submit"
          value="Yuborish"
          checkedStatus={checkedStatus}
          handleClick={handleClick}
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "productForm",
  initialValues: { portsia: 1, odam: 1 },
})(ProductForm);
