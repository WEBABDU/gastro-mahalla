import React, { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MyContainer } from "../../shared/MyContainer/MyContainer";
import style from "./DatePicker.module.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

export const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <ReactDatePicker
      withPortal
      selected={selectedDate}
      placeholderText="Vaqtni tanlang"
      onChange={(date) => setSelectedDate(date)}
      calendarContainer={MyContainer}
      locale="ru"
      showTimeInput
      timeFormat="p"
      timeIntervals={1}
      timeInputLabel='Время:'
      dateFormat="d MMM YYY p"
      className={style.datePicker}
    />
  );
};
