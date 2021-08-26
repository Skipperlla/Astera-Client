import { ThunkDispatch } from "redux-thunk";

export interface IReports {
  data: any;
  bekleyen?: number;
  kacan?: number;
}

export interface ReportState {
  BekleyenCagri: IReports;
  KacanCagri: IReports;
  CevaplananCagri: IReports;
  loading: boolean;
  error: string;
  status: null | number;
}
interface BEKLEYEN_CAGRI_START {
  type: "BEKLEYEN_CAGRI_START";
}
interface BEKLEYEN_CAGRI_SUCCESS {
  type: "BEKLEYEN_CAGRI_SUCCESS";
  payload: IReports;
}

interface BEKLEYEN_CAGRI_ERROR {
  payload: any;
  type: "BEKLEYEN_CAGRI_ERROR";
}

interface KACAN_CAGRI_START {
  type: "KACAN_CAGRI_START";
}
interface KACAN_CAGRI_SUCCESS {
  type: "KACAN_CAGRI_SUCCESS";
  payload: IReports;
}

interface KACAN_CAGRI_ERROR {
  payload: any;
  type: "KACAN_CAGRI_ERROR";
}

interface CEVAPLANAN_CAGRI_START {
  type: "CEVAPLANAN_CAGRI_START";
}
interface CEVAPLANAN_CAGRI_SUCCESS {
  type: "CEVAPLANAN_CAGRI_SUCCESS";
  payload: IReports;
}

interface CEVAPLANAN_CAGRI_ERROR {
  payload: any;
  type: "CEVAPLANAN_CAGRI_ERROR";
}

interface TOPLAM_GELEN_CAGRI_SUCCESS {
  type: "TOPLAM_GELEN_CAGRI_SUCCESS";
  payload: IReports;
}

interface TOPLAM_GELEN_CAGRI_ERROR {
  payload: any;
  type: "TOPLAM_GELEN_CAGRI_ERROR";
}

export type ReportsAction =
  | BEKLEYEN_CAGRI_START
  | BEKLEYEN_CAGRI_SUCCESS
  | BEKLEYEN_CAGRI_ERROR
  | CEVAPLANAN_CAGRI_START
  | CEVAPLANAN_CAGRI_SUCCESS
  | CEVAPLANAN_CAGRI_ERROR
  | KACAN_CAGRI_START
  | KACAN_CAGRI_SUCCESS
  | KACAN_CAGRI_ERROR
  | TOPLAM_GELEN_CAGRI_SUCCESS
  | TOPLAM_GELEN_CAGRI_ERROR;

export type UserDispatch = ThunkDispatch<ReportState, void, ReportsAction>;
