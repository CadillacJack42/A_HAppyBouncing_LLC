export const dayBuilder = (date, handleClick) => {
  // Create HTML element to represent day
  const newDay = document.createElement("td");

  const today = new Date();

  // Assign classes to element
  // Check date to see if date === today
  newDay.setAttribute(
    "class",
    today.toDateString() === date.toDateString() ? "today day-cell" : "day-cell"
  );
  const eventDateId = date.toDateString().replaceAll(" ", "");
  newDay.setAttribute("id", `event-date-${eventDateId}`);

  const dayOfMonth = document.createElement("span");

  dayOfMonth.innerText = date.getDate();

  newDay.prepend(dayOfMonth);

  newDay.addEventListener("click", () => handleClick(date.getDate()));

  return newDay;
};
