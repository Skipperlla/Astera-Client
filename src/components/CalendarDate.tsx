import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
registerLocale("tr", tr);
import "react-datepicker/dist/react-datepicker.css";
import { useReport } from "hooks/ReportContext";
interface ICalendarDate {
  setstartDate?: Dispatch<SetStateAction<string>>;
  setendDate?: Dispatch<SetStateAction<string>>;
}
const CalendarDate: React.FC<ICalendarDate> = ({
  setstartDate,
  setendDate,
}) => {
  return (
    <DatePicker
      selected={new Date()}
      className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-calendar focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
    
      locale="tr"
    />
  );
};

export default CalendarDate;
