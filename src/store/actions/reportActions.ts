import { IReports, UserDispatch } from "../../types/report";
import api from "@lib/api";
export const BekleyenCagrilar = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "BEKLEYEN_CAGRI_START" });
  try {
    const response = await api().post<IReports>("/Report/BekleyenCagrilar", {
      queue: "string",
    });

    dispatch({
      type: "BEKLEYEN_CAGRI_SUCCESS",
      payload: response.data?.data,
    });
  } catch {
    dispatch({ type: "BEKLEYEN_CAGRI_ERROR" });
  }
};

export const KacanCagrilar = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "KACAN_CAGRI_START" });
  try {
    const response = await api().post<IReports>("/Report/KacanCagrilar", {
      agentId: "string",
      startDate: "2021-08-25T17:10:17.393Z",
      endDate: "2021-08-25T17:10:17.393Z",
      queu: "string",
    });
    dispatch({
      type: "KACAN_CAGRI_SUCCESS",
      payload: response.data?.data,
    });
  } catch {
    dispatch({ type: "KACAN_CAGRI_ERROR" });
  }
};
export const CevaplananCagrilar = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "CEVAPLANAN_CAGRI_START" });
  try {
    const response = await api().post<IReports>("Report/CevaplananCagrilar", {
      agentId: "string",
      startDate: "2021-08-25T17:10:17.393Z",
      endDate: "2021-08-25T17:10:17.393Z",
      queu: "string",
    });
    dispatch({
      type: "CEVAPLANAN_CAGRI_SUCCESS",
      payload: response.data?.data,
    });
  } catch {
    dispatch({ type: "CEVAPLANAN_CAGRI_ERROR" });
  }
};
export const ToplamGelenCagrilar = () => async (dispatch: UserDispatch) => {
  try {
    const response = await api().post<IReports>("Report/ToplamGelenCagrilar", {
      agentId: "string",
      startDate: "2021-08-25T17:10:17.393Z",
      endDate: "2021-08-25T17:10:17.393Z",
      queu: "string",
    });
    dispatch({
      type: "TOPLAM_GELEN_CAGRI_SUCCESS",
      payload: response.data?.data,
    });
  } catch {
    dispatch({ type: "TOPLAM_GELEN_CAGRI_ERROR" });
  }
};
export const ToplamBeklemeSuresi = () => async (dispatch: UserDispatch) => {
  try {
    const response = await api().post<IReports>("Report/ToplamBeklemeSuresi", {
      queue: "string",
    });
    dispatch({
      type: "TOPLAM__BEKLEME_SURESI_SUCCESS",
      payload: response.data?.data,
    });
  } catch {
    dispatch({ type: "TOPLAM__BEKLEME_SURESI_ERROR" });
  }
};
