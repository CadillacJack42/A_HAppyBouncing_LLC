export const blankDayFiller = (length, position, week) => {
  return [...Array(length)].map(() => {
    const fillDay = document.createElement("td");
    fillDay.setAttribute("class", `day-cell ${position}-month week-${week}`);
    return fillDay;
  });
};
