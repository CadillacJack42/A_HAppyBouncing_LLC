import { useEffect } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { RenderCaption } from "./RenderCaption";
import { RenderTableHead } from "./RenderTableHead";
import { RenderTableBody } from "./RenderTableBody";
import { weekBuilder } from "./weekBuilder";

export const RenderCalendar = () => {
  const { firstDay, setFirstDay, month, year, eventList, handleClick } =
    useCalendar();

  useEffect(() => {
    firstDay && setFirstDay(new Date(year, month?.index).getDay());
    month && weekBuilder(firstDay, month, year, handleClick, eventList);
  }, [month, firstDay, year]);

  return (
    <table className="calendar-table">
      <RenderCaption />
      <colgroup>
        <col className="weekend-calendar-cell" span="1" />
        <col className="weekday-calendar-cell" span="5" />
        <col className="weekend-calendar-cell" span="1" />
      </colgroup>
      <RenderTableHead />
      <RenderTableBody />
    </table>
  );
};
