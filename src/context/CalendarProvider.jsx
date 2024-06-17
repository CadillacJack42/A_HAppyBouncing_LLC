/* eslint-disable indent */
import { createContext, useState, useEffect } from "react";

export const CalendarContext = createContext(null);

export const CalendarProvider = ({ children }) => {
  const [timeNow, setTimeNow] = useState(null);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(null);
  const [firstDay, setFirstDay] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [eventDate, setEventDate] = useState();
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setTimeNow(new Date());
  }, []);

  //   useEffect(() => {
  //     const collapsedList = profile?.attending_event?.map(
  //       (event) => event.events
  //     );
  //     setEventList(collapsedList);
  //   }, [profile]);

  useEffect(() => {
    timeNow && setYear(timeNow.getFullYear());
    timeNow &&
      setFirstDay(new Date(timeNow.getMonth(), timeNow.getFullYear()).getDay());
    timeNow && setMonth(months[timeNow.getMonth()]);
  }, [timeNow]);

  const months = [
    { month: "January", days: 31, index: 0, monthNumber: "01" },
    { month: "February", days: 28, index: 1, monthNumber: "02" },
    { month: "March", days: 31, index: 2, monthNumber: "03" },
    { month: "April", days: 30, index: 3, monthNumber: "04" },
    { month: "May", days: 31, index: 4, monthNumber: "05" },
    { month: "June", days: 30, index: 5, monthNumber: "06" },
    { month: "July", days: 31, index: 6, monthNumber: "07" },
    { month: "August", days: 31, index: 7, monthNumber: "08" },
    { month: "September", days: 30, index: 8, monthNumber: "09" },
    { month: "October", days: 31, index: 9, monthNumber: "10" },
    { month: "November", days: 30, index: 10, monthNumber: "11" },
    { month: "December", days: 31, index: 11, monthNumber: "12" },
  ];

  //   const calendar = {
  //     tabs:
  //       useCase === "public"
  //         ? ["View Events"]
  //         : ["View My Events", "Create Event"],
  //     content: [
  //       <CalendarEvents
  //         dateOfEvent={eventDate}
  //         eventList={eventList}
  //         useCase={useCase}
  //         key={`${useCase}-events`}
  //       />,
  //       useCase !== "public" && (
  //         <CreateEventForm key={"create-event-form"} eventDate={eventDate} />
  //       ),
  //     ],
  //   };

  //   const listEvents = () => {
  //     return (
  //       <ul>
  //         {profile.attending_event.map((event) => {
  //           return (
  //             <li
  //               key={`event-list-item-${event.events.id}`}
  //               style={{ listStyle: "none" }}
  //               onClick={() => {
  //                 navigate(`../event/${event.events.id}/${false}`);
  //               }}
  //             >
  //               <span>{event.events.event_name}</span>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     );
  //   };

  const handleClick = (day) => {
    const newDate = new Date(year, month?.index, day);

    setEventDate(newDate);

    setHidden(false);
  };

  const handleMonthToggle = (direction) => {
    direction === "-"
      ? setTimeNow(new Date(timeNow.setMonth(timeNow.getMonth() - 1)))
      : setTimeNow(new Date(timeNow.setMonth(timeNow.getMonth() + 1)));
  };

  const handleYearToggle = (direction) => {
    direction === "-"
      ? setTimeNow(new Date(timeNow.setFullYear(timeNow.getFullYear() - 1)))
      : setTimeNow(new Date(timeNow.setFullYear(timeNow.getFullYear() + 1)));
  };

  //   const blankDayFiller = (length, position, week) => {
  //     return [...Array(length)].map(() => {
  //       const fillDay = document.createElement("td");
  //       fillDay.setAttribute("class", `day-cell ${position}-month week-${week}`);
  //       return fillDay;
  //     });
  //   };

  //   const weekBuilder = () => {
  //     //  CLEAR ALL DAY CELLS
  //     const rows = document.getElementsByClassName(`day-cell`);
  //     Array.from(rows).forEach((element) => {
  //       element.remove();
  //     });

  //     for (let i = 0, j = 1; i < month.days; i++) {
  //       const dateBasedOnValueOfI = new Date(year, month.index, i + 1);

  //       if ((i + firstDay) % 7 === 0) {
  //         j++;
  //       }

  //       const thisWeek = document.getElementById(`week-${j}`);
  //       if (i === 0) {
  //         const startMonth = blankDayFiller(firstDay, "before", j);
  //         thisWeek?.append(...startMonth);
  //         const dayOne = dayBuilder(dateBasedOnValueOfI, handleClick);
  //         thisWeek?.append(dayOne);
  //       } else {
  //         const newDay = dayBuilder(dateBasedOnValueOfI, handleClick);
  //         thisWeek?.append(newDay);
  //       }
  //     }

  //     const secondToLastWeek = document.getElementById(`week-5`);
  //     const finalWeek = document.getElementById(`week-6`);

  //     secondToLastWeek?.childElementCount > 0 &&
  //       secondToLastWeek?.append(
  //         ...blankDayFiller(7 - secondToLastWeek?.childElementCount, "after", 5)
  //       );

  //     finalWeek?.childElementCount !== 0 &&
  //       finalWeek?.childElementCount < 7 &&
  //       finalWeek?.append(
  //         ...blankDayFiller(7 - finalWeek?.childElementCount, "after", 6)
  //       );
  //     eventFiller(eventList);
  //   };

  return (
    <CalendarContext.Provider
      value={{
        timeNow,
        setTimeNow,
        month,
        setMonth,
        year,
        setYear,
        firstDay,
        setFirstDay,
        hidden,
        setHidden,
        eventDate,
        setEventDate,
        eventList,
        setEventList,
        handleMonthToggle,
        handleYearToggle,
        handleClick,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
