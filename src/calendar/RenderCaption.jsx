import { useCalendar } from "../hooks/useCalendar";

export const RenderCaption = () => {
  const { month, year, handleMonthToggle, handleYearToggle } = useCalendar();

  return (
    <caption id="calendar-caption">
      <span
        className="carot-calendar-caption year"
        onClick={() => handleYearToggle("-")}
      >
        {" << "}
      </span>
      <span
        className="carot-calendar-caption month"
        onClick={() => handleMonthToggle("-")}
      >
        {" < "}
      </span>
      {month.month}
      {" " + year}
      <span
        className="carot-calendar-caption month"
        onClick={() => handleMonthToggle("+")}
      >
        {" > "}
      </span>
      <span
        className="carot-calendar-caption year"
        onClick={() => handleYearToggle("+")}
      >
        {" >> "}
      </span>
    </caption>
  );
};
