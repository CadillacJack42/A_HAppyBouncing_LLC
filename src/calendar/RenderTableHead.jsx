export const RenderTableHead = () => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <thead id="calendar-head">
      <tr id="calendar-day-name">
        {weekDays.map((day) => {
          return (
            <th key={day} className="day-name">
              {day}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
