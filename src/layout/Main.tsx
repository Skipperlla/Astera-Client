import React, { useState } from "react";
import Table from "@components/Tags/Table";
import Input from "@components/Tags/Input";
import AccordionHeader from "@components/AccordionHeader";
import CalendarDate from "@components/CalendarDate";
import Button from "@components/Tags/Button";
import Menu from "@components/Menus/Menu";
import { ITable } from "types/types";
import CardItem from "../../config/CardItem.json";
import DashboardCard from "@components/DashboardCard";
import { useAuth } from "hooks/UserContext";
const Main = ({ headers, choice, title }: ITable) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isOpenTable, setisOpenTable] = useState<boolean>(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  function openTable() {
    setisOpenTable(true);
  }
  const { token } = useAuth();
  return (
    <>
      {token ? (
        <>
          {" "}
          <h2 className="my-6 px-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            {title}
          </h2>
          <div className={`w-full bg-white dark:bg-gray-900 my-4  `}>
            <div className={`trigger h-auto`}>
              <AccordionHeader handleChange={handleChange} isOpen={isOpen} />
              <div
                className={`border-t ${
                  isOpen ? "block" : "hidden"
                } py-2 px-4   `}
              >
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 mb-4">
                  <CalendarDate />
                  <CalendarDate />
                  <Input />
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
                  <Menu />
                  <Menu />
                  <Menu />
                  <Menu />
                  <Button openTable={openTable} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            {/* <Chart /> <Chart /> */}
          </div>
          {choice === "table" ? (
            <>{isOpenTable && <Table headers={headers} />}</>
          ) : (
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {CardItem.Items.map((data, index) => {
                return (
                  <DashboardCard
                    key={index}
                    title={data.title}
                    svgTitle={data.svgTitle}
                    BGcolor={data.BGcolor}
                    Textcolor={data.Textcolor}
                  />
                );
              })}
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default Main;
