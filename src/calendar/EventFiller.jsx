export const eventFiller = (eventList) => {
  eventList &&
    eventList?.map((event) => {
      const eventDay = new Date(`${event?.date}T00:00`).toDateString();
      const eventDayElement = document.getElementById(
        `event-date-${eventDay.replaceAll(" ", "")}`
      );
      if (eventDayElement) {
        const eventNotice = document.createElement("span");
        eventNotice.innerText = "●";
        eventNotice.setAttribute("class", "event-scheduled");
        eventNotice.setAttribute("id", `event-scheduled-${event.date}`);
        eventDayElement.appendChild(eventNotice);
      }
    });
};
