import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { IAuthContextType } from "types/user";
import { IProps } from "types/events";
import { useDispatch } from "react-redux";
import {
  AktifCagrılar,
  BekleyenCagrilar,
  CevaplananCagrilar,
  KacanCagrilar,
  MaxBeklemeSuresı,
  OrtalamaGorusmeSüresi,
  ToplamBeklemeSuresi,
  ToplamGelenCagrilar,
  ToplamGidenCagrı,
  ToplamGorusmeSüresi,
  ToplamMusretiTemsilcisı,
} from "store/actions/reportActions";

const reportContextDefaultValues: IAuthContextType = {};

const ReportContext = createContext<IAuthContextType>(
  reportContextDefaultValues
);

export function ReportProvider({ children }: IProps) {
  const [agentId, setagentId] = useState<string>("");
  const [startDate, setstartDate] = useState<string>(new Date().toISOString());
  const [endDate, setendDate] = useState<string>(new Date().toISOString());
  const [queu, setqueu] = useState<string>("");
  const [agent, setagent] = useState<string>("");
  const [queue, setqueue] = useState<string>("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      dispatch(BekleyenCagrilar(queue));
      dispatch(KacanCagrilar(agentId, startDate, endDate, queu));
      dispatch(CevaplananCagrilar(agentId, startDate, endDate, queu));
      dispatch(ToplamGelenCagrilar(agentId, startDate, endDate, queu));
      dispatch(ToplamBeklemeSuresi(queue));
      dispatch(MaxBeklemeSuresı(queue));
      dispatch(ToplamGorusmeSüresi(agent, startDate, endDate, queue));
      dispatch(OrtalamaGorusmeSüresi(agent, startDate, endDate, queue));
      dispatch(ToplamGidenCagrı(startDate, endDate));
      dispatch(AktifCagrılar(queue));
      dispatch(ToplamMusretiTemsilcisı(queue));
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
          setendDate,
          endDate,
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
