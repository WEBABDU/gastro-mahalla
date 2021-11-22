import { CalendarContainer } from "react-datepicker";

export const MyContainer = ({ className, children }) => {
  return (
    <CalendarContainer className={className}>
        <div></div>
      <div>{children}</div>
    </CalendarContainer>
  );
};
