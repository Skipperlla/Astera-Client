import { useReport } from "hooks/ReportContext";
import React, { Dispatch, SetStateAction, useRef } from "react";
interface IMenu {
  setqueue?: Dispatch<SetStateAction<string>>;
  setagent?: Dispatch<SetStateAction<string>>;
  setqueu?: Dispatch<SetStateAction<string>>;
  setagentId?: Dispatch<SetStateAction<string>>;
}
const Menu: React.FC<IMenu> = ({ items }) => {
  return (
    <select className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
      {items.map((items, index) => {
        return (
          <option key={index} value={items}>
            {items}
          </option>
        );
      })}
    </select>
  );
};

export default Menu;
