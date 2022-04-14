import { fr } from "date-fns/locale";
import React, { useState } from "react";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { IoIosCalendar } from "react-icons/io";

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
            <div className="flex  justify-center items-center">
              <div className="relative z-10 left-[142px] ">
                <IoIosCalendar />
              </div>
            </div>
            <input
              className={
                "input rounded-sm border border-gray-500 w-44" +
                (focus === START_DATE ? " -focused" : "")
              }
              {...startDateInputProps}
              placeholder="Arrivée"
            />
            <span className="date-range_arrow" />
            <div className="flex  justify-center items-center">
              <div className="relative left-[150px] z-10">
                <IoIosCalendar />
              </div>
              <input
                className={
                  "input  rounded-sm border border-gray-500 w-44" +
                  (focus === END_DATE ? " -focused" : "")
                }
                {...endDateInputProps}
                placeholder="Départ"
              />
            </div>
          </div>
        </>
      )}
    </DateRangePicker>
  );
}

export default Datepickers;
