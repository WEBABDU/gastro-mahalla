import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import style from "./FormsControls.module.css";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

export const Input = ({ input, meta, width = "50%-15px", ...props }) => {
  const hashError = meta.touched && meta.error;
  return (
    <>
      <div
        style={{ width }}
        className={
          hashError ? `${style.fomControl} ${style.error}` : style.fomControl
        }
      >
        <input {...input} {...props} />
        {hashError && <span className={style.errorMessage}>{meta.error}</span>}
      </div>
    </>
  );
};

export const SettingsInput = ({ input, meta, ...props }) => {
  const hashError = meta.touched && meta.error;
  return (
    <>
      <label>{props.label}</label>
      <input type="text" {...input} {...props} />
    </>
  );
};

export const FieldDatePicker = ({
  input,
  placeholder,
  meta: { touched, error },
  ...props
}) => {
  return (
    <>
      <ReactDatePicker
        withPortal
        selected={!input.value ? null : new Date(input.value)}
        placeholderText={placeholder}
        onChange={input.onChange}
        calendarContainer={input.Container}
        locale="ru"
        showTimeInput
        value={input.value || new Date()}
        timeFormat="p"
        timeIntervals={1}
        timeInputLabel={"Время:"}
        dateFormat="d MMM YYY p"
        className={style.datePicker}
      />
    </>
  );
};

export const MyCustomInput = ({
  input: { value, onChange },
  func,
  func2,
  isActive,
  activeChange,
  ...props
}) => {
  const handleChange = (func) => {
    func(value, onChange);
    activeChange(true);
  };

  return (
    <>
      <button
        type="button"
        className={style.minus}
        onClick={() => handleChange(func)}
      >
        -
      </button>
      <div
        className={
          isActive
            ? style.controlInput
            : `${style.controlInput} ${style.notActive}`
        }
      >
        {value}
      </div>
      <button
        type="button"
        className={style.plus}
        onClick={() => handleChange(func2)}
      >
        +
      </button>
    </>
  );
};

export const FieldFileInput = ({
  input: { value, onChange },
  label,
  required,
  meta,
  setValue,
  id,
}) => {
  const handleChange = (e) => {
    onChange(e.target.files[0]);
    setValue(e.target.files[0]);
  };
  return (
    <input
      id={id}
      type="file"
      accept=".jpg, .png, .jpeg"
      onChange={handleChange}
    />
  );
};
