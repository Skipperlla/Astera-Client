import AccordionHeader from "@components/AccordionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import withAuth from "../../PrivateRoute/withAuth";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import { useReport } from "hooks/ReportContext";
import DropdownItems from "../../config/DropdownItems.json";
import Table from "@components/Table";
registerLocale("tr", tr);
const KuyrukDetay: React.FC = () => {
  const { setstartDate, setendDate } = useReport();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  const [startDated, setStartDated] = useState(new Date());
  const [endedDated, setendedDated] = useState(new Date());
  const [isOpenTable, setisOpenTable] = useState<boolean>(false);
  const headers = [
    "Tarih",
    "Kuyruk",
    "Kuyruk Adı",
    "Durum",
    "Bekl. Süre",
    "Telefon",
    "Agent",
    "Giriş Sıra",
    "Çıkış Sıra",
    "Geri Dönüldü",
    "Dönüş Tarihi",
    "Geri Dönen",
    "Açıklama",
  ];
  const durum = ["Durum", "CEVAPLANDI", "KAÇAN", "TRANSFER"];
  return (
    <>
      <h2 className="my-6 px-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Kuyruk Detay
      </h2>
      <div className={`w-full bg-white dark:bg-gray-900 my-4  `}>
        <div className={`trigger h-auto`}>
          <AccordionHeader handleChange={handleChange} isOpen={isOpen} />
          <div
            className={`border-t ${isOpen ? "block" : "hidden"} py-2 px-4   `}
          >
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 mb-4">
              <DatePicker
                selected={startDated}
                dateFormat="dd/MM/yyyy"
                className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-calendar focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                locale="tr"
                onChange={(date: any) => {
                  const ISOdate = date.toISOString();
                  setstartDate(ISOdate);
                  setStartDated(date);
                  // do stuff with ISOdate
                }}
              />

              <DatePicker
                selected={endedDated}
                dateFormat="dd/MM/yyyy"
                className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-calendar focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                locale="tr"
                onChange={(date: any) => {
                  const ISOdate = date.toISOString();
                  setendDate(ISOdate);
                  setendedDated(date);
                }}
              />
              <input
                type="text"
                className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-input focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              />

              <select className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                {DropdownItems.kuyruk.map((items, index) => {
                  return (
                    <option key={index} value={items.value}>
                      {items.label}
                    </option>
                  );
                })}
              </select>
              <select className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
                {durum.map((items, index) => {
                  return (
                    <option key={index} value={items}>
                      {items}
                    </option>
                  );
                })}
              </select>
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

export default withAuth(KuyrukDetay);
