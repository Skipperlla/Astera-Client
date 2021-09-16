import { useReport } from "hooks/ReportContext";
import React from "react";

const Menu = ({ items }) => {
  const {
    agentId,
    setagentId,
    startDate,
    setstartDate,
    queu,
    setqueu,
    agent,
    setagent,
    queue,
    setqueue,
  } = useReport();
  return (
    <select
      className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
     defaultValue={items}
      onChange={(event) => {
        setagentId(event.target.value);
        console.log(agentId);
      }}
    >
      {items.map((items, index) => {
        return <option key={index}>{items}</option>;
      })}
    </select>
  );
};

export default Menu;
