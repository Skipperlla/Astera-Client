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
import { useSelector } from "react-redux";
import { AppState } from "store";
import { useReport } from "hooks/ReportContext";
const Main = ({ headers, choice, title, elementItems }: ITable) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isOpenTable, setisOpenTable] = useState<boolean>(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }

  const { token } = useAuth();
  const {
    BekleyenCagri,
    KacanCagri,
    CevaplananCagri,
    ToplamGidenCagri,
    AktifCagrilar,
    ToplamBeklemeSüresi,
    MaxBeklemeSuresi,
  } = useSelector((state: AppState) => state.reports);
  const { setstartDate, setendDate, startDate, endDate } = useReport();
  console.log("startDate", startDate);
  console.log("endDate", endDate);
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
                  <CalendarDate setstartDate={setstartDate} />
                  <CalendarDate setstartDate={setstartDate} />

                  <Button setisOpenTable={setisOpenTable} />
                </div>
                {/* <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
                  <Menu />
                  <Menu />
                  <Menu />

                  <Button openTable={openTable} />
                </div> */}
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
              <DashboardCard
                title="Bekleyen Çağrılar"
                svgTitle="chart-line"
                BGcolor="dark:bg-blue-500 bg-blue-100 "
                Textcolor="dark:text-blue-100 text-blue-500 "
                data={BekleyenCagri?.bekleyen}
              />{" "}
              <DashboardCard
                title="Kaçan Çağrılar"
                svgTitle="times"
                BGcolor="dark:bg-green-500 bg-green-100"
                Textcolor="dark:text-green-100 text-green-500"
                data={KacanCagri?.kacan}
              />{" "}
              <DashboardCard
                title="Cevaplanan Çağrılar"
                svgTitle="user-plus"
                BGcolor="dark:bg-indigo-500 bg-indigo-100"
                Textcolor="dark:text-indigo-100 text-indigo-500"
                data={CevaplananCagri?.kacan}
              />{" "}
              <DashboardCard
                title="Toplam Bekleme Süresi"
                svgTitle="chart-line"
                BGcolor="dark:bg-purple-500 bg-purple-100"
                Textcolor="dark:text-purple-100 text-purple-500"
                data={ToplamGidenCagri?.adet}
              />
              <DashboardCard
                title="Max Bekleme Süresi"
                svgTitle="stopwatch"
                BGcolor="dark:bg-green-500 bg-green-100"
                Textcolor="dark:text-green-100 text-green-500"
                data={MaxBeklemeSuresi?.beklemeSuresi}
              />
              <DashboardCard
                title="Toplam Görüşme Süresi"
                svgTitle="tachometer-alt"
                BGcolor="dark:bg-green-500 bg-green-100"
                Textcolor="dark:text-green-100 text-green-500"
                data={ToplamBeklemeSüresi?.beklemeSuresi}
              />{" "}
              <DashboardCard
                title="Ortalama Görüşme Süresi"
                svgTitle="paper-plane"
                BGcolor="dark:bg-green-500 bg-green-100"
                Textcolor="dark:text-green-100 text-green-500"
                data={BekleyenCagri?.bekleyen}
              />{" "}
              <DashboardCard
                title="Toplam Giden Çağrı"
                svgTitle="paper-plane"
                BGcolor="dark:bg-green-500 bg-green-100"
                Textcolor="dark:text-green-100 text-green-500"
                data={ToplamGidenCagri?.adet}
              />{" "}
              <DashboardCard
                title="Aktif Çağrı"
                svgTitle="phone-alt"
                BGcolor="dark:bg-green-500 bg-green-100"
                Textcolor="dark:text-green-100 text-green-500"
                data={AktifCagrilar?.adet}
              />{" "}
              <DashboardCard
                title="Toplam Müşteri Temsilcisi"
                svgTitle="smile"
                BGcolor="dark:bg-green-500 bg-green-100"
                Textcolor="dark:text-green-100 text-green-500"
                data={BekleyenCagri?.bekleyen}
              />
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default Main;
