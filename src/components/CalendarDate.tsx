import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
const CalendarDate: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");

  return (
    <DatePicker
      selected={new Date()}
      className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-calendar focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
      onChange={() => setStartDate(new Date().toISOString())}
    />
  );
};

export default CalendarDate;
