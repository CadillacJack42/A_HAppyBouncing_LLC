import { blankDayFiller } from "./BlankDayFiller";
import { dayBuilder } from "./DayBuilder";
import { eventFiller } from "./EventFiller";

export const weekBuilder = (firstDay, month, year, handleClick, eventList) => {
  //  CLEAR ALL DAY CELLS
  const rows = document.getElementsByClassName(`day-cell`);
  Array.from(rows).forEach((element) => {
    element.remove();
  });

  for (let i = 0, j = 1; i < month.days; i++) {
    const dateBasedOnValueOfI = new Date(year, month.index, i + 1);

    if ((i + firstDay) % 7 === 0) {
      j++;
    }

    const thisWeek = document.getElementById(`week-${j}`);
    if (i === 0) {
      const startMonth = blankDayFiller(firstDay, "before", j);
      thisWeek?.append(...startMonth);
      const dayOne = dayBuilder(dateBasedOnValueOfI, handleClick);
      thisWeek?.append(dayOne);
    } else {
      const newDay = dayBuilder(dateBasedOnValueOfI, handleClick);
      thisWeek?.append(newDay);
    }
  }

  const secondToLastWeek = document.getElementById(`week-5`);
  const finalWeek = document.getElementById(`week-6`);

  secondToLastWeek?.childElementCount > 0 &&
    secondToLastWeek?.append(
      ...blankDayFiller(7 - secondToLastWeek?.childElementCount, "after", 5)
    );

  finalWeek?.childElementCount !== 0 &&
    finalWeek?.childElementCount < 7 &&
    finalWeek?.append(
      ...blankDayFiller(7 - finalWeek?.childElementCount, "after", 6)
    );
  eventFiller(eventList);
};
