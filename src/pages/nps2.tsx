import AccordionHeader from "@components/AccordionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import withAuth from "../../PrivateRoute/withAuth";

import { useReport } from "hooks/ReportContext";
import Table from "@components/Table";
const NPS2: React.FC = () => {
  const { setstartDate, setendDate } = useReport();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  const [startDated, setStartDated] = useState(new Date());
  const [endedDated, setendedDated] = useState(new Date());
  const [isOpenTable, setisOpenTable] = useState<boolean>(false);
  const headers = ["Kuyruk", "Kuyruk Adı", "Cevaplanan", "Kaçan", "Transfer"];
  return (
    <>
      <h2 className="my-6 px-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        NPS2
      </h2>
      <div className={`w-full bg-white dark:bg-gray-900 my-4  `}>
        <div className={`trigger h-auto`}>
          <AccordionHeader handleChange={handleChange} isOpen={isOpen} />
          <div
            className={`border-t ${isOpen ? "block" : "hidden"} py-2 px-4   `}
          >
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 mb-4">
              <button
                className="block px-4 py-2 w-full mt-1 text-sm font-medium  leading-5  text-white transition-colors duration-150 bg-purple-600   active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline-purple border border-transparent rounded focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                onClick={() => setisOpenTable(true)}
              >
                <FontAwesomeIcon icon={["fas", "list"]} className="mr-2" />
                Listele
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpenTable && <Table headers={headers} />}
    </>
  );
};

export default withAuth(NPS2);
