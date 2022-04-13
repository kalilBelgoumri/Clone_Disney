import { fr } from "date-fns/locale";
import React, { useState } from "react";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { IoIosCalendar } from "react-icons/io";
import { IconButton } from "@mui/material/IconButton";

function Datepickers() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format="dd MMM yyyy"
      locale={fr}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <>
          <div className="text-left">
            <span className="text-[12px] text-[rgb(37, 48, 80)] font-avenir">
              Sélectionnez vos dates
            </span>
          </div>
          <div className="date-range flex">
            <input
              className={
                "input rounded-sm border border-gray-500 w-44" +
                (focus === START_DATE ? " -focused" : "")
              }
              {...startDateInputProps}
              placeholder="Arrivée"
            />
            <span className="date-range_arrow" />

            <input
              className={
                "input  rounded-sm border border-gray-500 w-44" +
                (focus === END_DATE ? " -focused" : "")
              }
              {...endDateInputProps}
              placeholder="Départ"
            />
            <IoIosCalendar />
          </div>
        </>
      )}
    </DateRangePicker>
  );
}

export default Datepickers;
