import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReport } from "hooks/ReportContext";
import React from "react";
import { IButton } from "types/events";

const Button = ({ setisOpenTable }: IButton) => {
  const { agentId, agent, onlyDate, onlyQueue } = useReport();
  return (
    <button
      onClick={() => {
        setisOpenTable(true);
        console.log(agentId);
      }}
      className="block px-4 py-2 w-full mt-1 text-sm font-medium  leading-5  text-white transition-colors duration-150 bg-purple-600   active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline-purple border border-transparent rounded focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
    >
      <FontAwesomeIcon icon={["fas", "list"]} className="mr-2" />
      Listele
    </button>
  );
};

export default Button;
