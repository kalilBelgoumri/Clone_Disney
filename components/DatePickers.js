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
          <div className="date-range flex">
            <div className="flex  justify-center items-center">
              <div className="relative left-[40px]  md:left-[30px] ">
                <IoIosCalendar size="25" color="rgb(37, 48, 80)" />
              </div>
            </div>
            <div className="flex overflow-hidden">
              <input
                className={
                  "input pl-10 rounded-sm border border-gray-500 w-32 md:w-44" +
                  (focus === START_DATE ? " -focused" : "")
                }
                {...startDateInputProps}
                placeholder="Arrivée"
              />

              <span className="date-range_arrow" />
              <div className="flex  justify-center items-center">
                <div className="relative left-[40px] md:left-[30px] z-10">
                  <IoIosCalendar size="25" color="rgb(37, 48, 80)" />
                </div>
                <input
                  className={
                    "input pl-10  rounded-sm border border-gray-500 w-32 md:w-44" +
                    (focus === END_DATE ? " -focused" : "")
                  }
                  {...endDateInputProps}
                  placeholder="Départ"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </DateRangePicker>
  );
}

export default Datepickers;
