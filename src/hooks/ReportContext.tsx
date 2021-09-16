import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IAuthContextType } from "types/user";
import { IProps } from "types/events";
import { useDispatch } from "react-redux";
import {
  AktifCagrilar,
  BekleyenCagrilar,
  CevaplananCagrilar,
  KacanCagrilar,
  MaxBeklemeSuresi,
  OrtalamaGorusmeSuresi,
  ToplamBeklemeSuresi,
  ToplamGelenCagrilar,
  ToplamGidenCagri,
  ToplamGorusmeSuresi,
  ToplamMusretiTemsilcisi,
} from "store/actions/reportActions";

const reportContextDefaultValues: IAuthContextType = {};

const ReportContext = createContext<IAuthContextType>(
  reportContextDefaultValues
);

export function ReportProvider({ children }: IProps) {
  const [agentId, setagentId] = useState("");

  const [startDate, setstartDate] = useState(new Date().toISOString());
  const [endDate, setendDate] = useState(new Date().toISOString());
  const [queu, setqueu] = useState("443");
  const [agent, setagent] = useState("");
  const [queue, setqueue] = useState("8001");

  // console.log("agentId", agentId);
  // console.log("agent", agent);
  // console.log("onlyDate", onlyDate);
  // console.log("onlyQueue", onlyQueue);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      dispatch(BekleyenCagrilar(queue));
      dispatch(KacanCagrilar(agentId, startDate, endDate, queu));
      dispatch(CevaplananCagrilar(agentId, startDate, endDate, queu));
      dispatch(ToplamGelenCagrilar(agentId, startDate, endDate, queu));
      dispatch(ToplamBeklemeSuresi(queue));

      dispatch(MaxBeklemeSuresi(queue));
      dispatch(ToplamGorusmeSuresi(agent, startDate, endDate, queue));
      dispatch(OrtalamaGorusmeSuresi(agent, startDate, endDate, queue));
      dispatch(ToplamGidenCagri(startDate, endDate));
      dispatch(AktifCagrilar(queue));
      dispatch(ToplamMusretiTemsilcisi(queue));
    }
  }, []);
  return (
    <>
      <ReportContext.Provider
        value={{
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
        }}
      >
        {children}
      </ReportContext.Provider>
    </>
  );
}
export function useReport() {
  return useContext(ReportContext);
}
