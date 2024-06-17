import { useContext } from "react";
import { CalendarContext } from "../context/CalendarProvider";

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (context === null) {
    throw new Error("Calendar context must come from CalendarProvider");
  }
  return context;
};
