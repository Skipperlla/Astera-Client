import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IDashboardCard } from "types/types";
import { motion } from "framer-motion";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
const DashboardCard = ({
  title,
  svgTitle,
  BGcolor,
  Textcolor,
}: IDashboardCard) => {
  return (
    <motion.div
      whileHover={{ translateY: "-8px" }}
      className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-900 cursor-pointer"
    >
      <div className={`p-3 mr-4  ${BGcolor}  rounded-full  `}>
        <div className="w-5 h-5 flex items-center justify-center">
          <FontAwesomeIcon
            icon={["fas", svgTitle] as IconProp}
            className={`text-xl  ${Textcolor}  `}
          />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </p>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          100
        </p>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
