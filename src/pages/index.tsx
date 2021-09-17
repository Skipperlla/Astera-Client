import React, { useState } from "react";
import SignIn from "@components/Auth/SignIn";
import { useAuth } from "hooks/UserContext";
import { useReport } from "hooks/ReportContext";
import AccordionHeader from "@components/AccordionHeader";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
registerLocale("tr", tr);
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardCard from "@components/DashboardCard";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import {
  AktifCagrılar,
  BekleyenCagrilar,
  CevaplananCagrilar,
  KacanCagrilar,
  MaxBeklemeSuresı,
  OrtalamaGorusmeSuresi,
  ToplamBeklemeSuresi,
  ToplamGelenCagrilar,
  ToplamGidenCagrı,
  ToplamGorusmeSuresi,
  ToplamMusretiTemsilcisı,
} from "store/actions/reportActions";
import DropdownItems from "../../config/DropdownItems.json";
import withAuth from "../../PrivateRoute/withAuth";
const Home: React.FC = () => {
  const { user } = useAuth();

  const { token } = useAuth();
  const {
    agentId,
    setagentId,
    setstartDate,
    queu,
    setqueu,
    agent,
    setagent,
    queue,
    setqueue,
    setendDate,
    startDate,
    endDate,
  } = useReport();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  const {
    BekleyenCagri,
    KacanCagri,
    CevaplananCagri,
    ToplamGidenCagri,
    AktifCagrilar,
    ToplamBeklemeSüresi,
    MaxBeklemeSuresi,
    ToplamGelenCagri,
    ToplamMusretiTemsilcisi,
  } = useSelector((state: AppState) => state.reports);
  const dispatch = useDispatch();
  function sendData() {
    dispatch(BekleyenCagrilar(queue));
    dispatch(KacanCagrilar(agentId, startDate, endDate, queu));
    dispatch(CevaplananCagrilar(agentId, startDate, endDate, queu));
    dispatch(ToplamGelenCagrilar(agentId, startDate, endDate, queu));
    // dispatch(ToplamBeklemeSuresi(queue));
    // dispatch(MaxBeklemeSuresı(queue));
    // dispatch(ToplamGorusmeSuresi(agent, startDate, endDate, queue));
    // dispatch(OrtalamaGorusmeSuresi(agent, startDate, endDate, queue));
    dispatch(ToplamGidenCagrı(startDate, endDate));
    dispatch(AktifCagrılar(queue));
    dispatch(ToplamMusretiTemsilcisı(queue));
  }
  const [startDated, setStartDated] = useState(new Date());
  const [endedDated, setendedDated] = useState(new Date());
  return (
    <>
      {user === null ? (
        <SignIn />
      ) : (
        <>
          {token && (
            <>
              <h2 className="my-6 px-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Dashboard
              </h2>
              <div className={`w-full bg-white dark:bg-gray-900 my-4  `}>
                <div className={`trigger h-auto`}>
                  <AccordionHeader
                    handleChange={handleChange}
                    isOpen={isOpen}
                  />
                  <div
                    className={`border-t ${
                      isOpen ? "block" : "hidden"
                    } py-2 px-4   `}
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
                      <select
                        className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                        onChange={(event) => {
                          let data = event.target.value.split(" ")[0];
                          setagentId(data);
                          setagent(data);
                        }}
                      >
                        {DropdownItems.agentIdList.map((items, index) => {
                          return (
                            <option key={index} value={items}>
                              {items}
                            </option>
                          );
                        })}
                      </select>
                      <select
                        className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                        onChange={(event) => {
                          let data = event.target.value.split(" ")[0];
                          setqueu(data);
                          setqueue(data);
                        }}
                      >
                        {DropdownItems.kuyruk.map((items, index) => {
                          return (
                            <option key={index} value={items}>
                              {items}
                            </option>
                          );
                        })}
                      </select>
                      <button
                        onClick={sendData}
                        className="block px-4 py-2 w-full mt-1 text-sm font-medium  leading-5  text-white transition-colors duration-150 bg-purple-600   active:bg-purple-600 hover:bg-purple-700  focus:shadow-outline-purple border border-transparent rounded focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                      >
                        <FontAwesomeIcon
                          icon={["fas", "list"]}
                          className="mr-2"
                        />
                        Listele
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                />
                <DashboardCard
                  title="Toplam Gelen Çağrı"
                  svgTitle="chart-line"
                  BGcolor="dark:bg-purple-500 bg-purple-100"
                  Textcolor="dark:text-purple-100 text-purple-500"
                  data={ToplamGelenCagri?.kacan}
                />
                <DashboardCard
                  title="Toplam Görüşme Süresi"
                  svgTitle="tachometer-alt"
                  BGcolor="dark:bg-green-500 bg-green-100"
                  Textcolor="dark:text-green-100 text-green-500"
                  data={ToplamBeklemeSüresi?.beklemeSuresi}
                />{" "}
                <DashboardCard
                  title="Max Bekleme Süresi"
                  svgTitle="stopwatch"
                  BGcolor="dark:bg-green-500 bg-green-100"
                  Textcolor="dark:text-green-100 text-green-500"
                  data={MaxBeklemeSuresi?.beklemeSuresi}
                />
                {/* <DashboardCard
                  title="Toplam Görüşme Süresi"
                  svgTitle="stopwatch"
                  BGcolor="dark:bg-green-500 bg-green-100"
                  Textcolor="dark:text-green-100 text-green-500"
                  data={MaxBeklemeSuresi?.beklemeSuresi}
                /> */}
                {/* <DashboardCard
                  title="Ortalama Görüşme Süresi"
                  svgTitle="paper-plane"
                  BGcolor="dark:bg-green-500 bg-green-100"
                  Textcolor="dark:text-green-100 text-green-500"
                  data={BekleyenCagri?.bekleyen}
                />{" "} */}
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
                  data={ToplamMusretiTemsilcisi?.adet}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default withAuth(Home);
