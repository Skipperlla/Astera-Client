import React from "react";
const Menu = () => {
  return (
    <select className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
      <option>$1,000</option>
      <option>$5,000</option>
      <option>$10,000</option>
      <option>$25,000</option>
    </select>
  );
};

export default Menu;
