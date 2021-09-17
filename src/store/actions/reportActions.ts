import { IReports, UserDispatch } from "../../types/report";
import api from "@lib/api";

export const BekleyenCagrilar =
  (queue: string | undefined) => async (dispatch: UserDispatch) => {
    dispatch({ type: "BEKLEYEN_CAGRI_START" });
    try {
      const response = await api().post<IReports>("/Report/BekleyenCagrilar", {
        queue,
      });

      dispatch({
        type: "BEKLEYEN_CAGRI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "BEKLEYEN_CAGRI_ERROR" });
    }
  };

export const KacanCagrilar =
  (
    agentId: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    queu: string | undefined
  ) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "KACAN_CAGRI_START" });
    try {
      const response = await api().post<IReports>("/Report/KacanCagrilar", {
        agentId,
        startDate,
        endDate,
        queu,
      });
      dispatch({
        type: "KACAN_CAGRI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "KACAN_CAGRI_ERROR" });
    }
  };
export const CevaplananCagrilar =
  (
    agentId: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    queu: string | undefined
  ) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "CEVAPLANAN_CAGRI_START" });
    try {
      const response = await api().post<IReports>("Report/CevaplananCagrilar", {
        agentId,
        startDate,
        endDate,
        queu,
      });
      dispatch({
        type: "CEVAPLANAN_CAGRI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "CEVAPLANAN_CAGRI_ERROR" });
    }
  };
export const ToplamGelenCagrilar =
  (
    agentId: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    queu: string | undefined
  ) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "TOPLAM_GELEN_CAGRI_START" });
    try {
      const response = await api().post<IReports>(
        "Report/ToplamGelenCagrilar",
        { agentId, startDate, endDate, queu }
      );
      dispatch({
        type: "TOPLAM_GELEN_CAGRI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "TOPLAM_GELEN_CAGRI_ERROR" });
    }
  };
export const ToplamBeklemeSuresi =
  (queue: string | undefined) => async (dispatch: UserDispatch) => {
    dispatch({ type: "TOPLAM_BEKLEME_SURESI_START" });
    try {
      const response = await api().post<IReports>(
        "Report/ToplamBeklemeSuresi",
        { queue }
      );

      dispatch({
        type: "TOPLAM_BEKLEME_SURESI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "TOPLAM_BEKLEME_SURESI_ERROR" });
    }
  };
export const MaxBeklemeSuresı =
  (queue: string | undefined) => async (dispatch: UserDispatch) => {
    dispatch({ type: "MAX_BEKLEME_SURESI_START" });
    try {
      const response = await api().post<IReports>("Report/MaxBeklemeSuresi", {
        queue,
      });

      dispatch({
        type: "MAX_BEKLEME_SURESI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "MAX_BEKLEME_SURESI_ERROR" });
    }
  };
export const ToplamGorusmeSuresi =
  (
    agent: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    queue: string | undefined
  ) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "TOPLAM_GORUSME_SURESI_START" });
    try {
      const response = await api().post<IReports>(
        "Report/ToplamGorusmeSuresi",
        { agent, startDate, endDate, queue }
      );

      dispatch({
        type: "TOPLAM_GORUSME_SURESI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "TOPLAM_GORUSME_SURESI_ERROR" });
    }
  };
export const OrtalamaGorusmeSuresi =
  (
    agent: string | undefined,
    startDate: string | undefined,
    endDate: string | undefined,
    queue: string | undefined
  ) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "ORTALAMA_GORUSME_SURESI_START" });
    try {
      const response = await api().post<IReports>(
        "Report/OrtalamaGorusmeSuresi",
        { agent, startDate, endDate, queue }
      );

      dispatch({
        type: "ORTALAMA_GORUSME_SURESI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "ORTALAMA_GORUSME_SURESI_ERROR" });
    }
  };
export const ToplamGidenCagrı =
  (startDate: string | undefined, endDate: string | undefined) =>
  async (dispatch: UserDispatch) => {
    dispatch({ type: "TOPLAM_GIDEN_CAGRI_START" });
    try {
      const response = await api().post<IReports>("Report/ToplamGidenCagri", {
        startDate,
        endDate,
      });

      dispatch({
        type: "TOPLAM_GIDEN_CAGRI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "TOPLAM_GIDEN_CAGRI_ERROR" });
    }
  };
export const AktifCagrılar =
  (queue: string | undefined) => async (dispatch: UserDispatch) => {
    dispatch({ type: "AKTIF_CAGRILAR_START" });
    try {
      const response = await api().post<IReports>("Report/AktifCagrilar", {
        queue,
      });

      dispatch({
        type: "AKTIF_CAGRILAR_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "AKTIF_CAGRILAR_ERROR" });
    }
  };
export const ToplamMusretiTemsilcisı =
  (queue: string | undefined) => async (dispatch: UserDispatch) => {
    dispatch({ type: "TOPLAM_MUSRETI_TEMSILCISI_START" });
    try {
      const response = await api().post<IReports>(
        "Report/ToplamMusteriTemsilcisi",
        { queue }
      );

      dispatch({
        type: "TOPLAM_MUSRETI_TEMSILCISI_SUCCESS",
        payload: response.data?.data,
      });
    } catch {
      dispatch({ type: "TOPLAM_MUSRETI_TEMSILCISI_ERROR" });
    }
  };
