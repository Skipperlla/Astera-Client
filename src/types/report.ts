import { ThunkDispatch } from "redux-thunk";

export interface IReports {
  data: any;
  bekleyen?: number;
  kacan?: number;
  count?: number;
  beklemeSuresi?: string;
  adet?: number;
}

export interface ReportState {
  BekleyenCagri: IReports;
  KacanCagri: IReports;
  CevaplananCagri: IReports;
  ToplamGidenCagri: IReports;
  AktifCagrilar: IReports;
  ToplamBeklemeSüresi: IReports;
  MaxBeklemeSuresi: IReports;
  ToplamGelenCagri: IReports;
  ToplamMusretiTemsilcisi: IReports;
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
  type: "CEVAPLANAN_CAGRI_ERROR";
}

interface TOPLAM_GELEN_CAGRI_START {
  type: "TOPLAM_GELEN_CAGRI_START";
}
interface TOPLAM_GELEN_CAGRI_SUCCESS {
  type: "TOPLAM_GELEN_CAGRI_SUCCESS";
  payload: IReports;
}

interface TOPLAM_GELEN_CAGRI_ERROR {
  type: "TOPLAM_GELEN_CAGRI_ERROR";
}
interface TOPLAM_BEKLEME_SURESI_START {
  type: "TOPLAM_BEKLEME_SURESI_START";
}
interface TOPLAM_BEKLEME_SURESI_SUCCESS {
  type: "TOPLAM_BEKLEME_SURESI_SUCCESS";
  payload: IReports;
}

interface TOPLAM_BEKLEME_SURESI_ERROR {
  type: "TOPLAM_BEKLEME_SURESI_ERROR";
}

interface MAX_BEKLEME_SURESI_START {
  type: "MAX_BEKLEME_SURESI_START";
}
interface MAX_BEKLEME_SURESI_SUCCESS {
  type: "MAX_BEKLEME_SURESI_SUCCESS";
  payload: IReports;
}

interface MAX_BEKLEME_SURESI_ERROR {
  type: "MAX_BEKLEME_SURESI_ERROR";
}

interface TOPLAM_GORUSME_SURESI_START {
  type: "TOPLAM_GORUSME_SURESI_START";
}
interface TOPLAM_GORUSME_SURESI_SUCCESS {
  type: "TOPLAM_GORUSME_SURESI_SUCCESS";
  payload: IReports;
}

interface TOPLAM_GORUSME_SURESI_ERROR {
  type: "TOPLAM_GORUSME_SURESI_ERROR";
}

interface ORTALAMA_GORUSME_SURESI_START {
  type: "ORTALAMA_GORUSME_SURESI_START";
}
interface ORTALAMA_GORUSME_SURESI_SUCCESS {
  type: "ORTALAMA_GORUSME_SURESI_SUCCESS";
  payload: IReports;
}

interface ORTALAMA_GORUSME_SURESI_ERROR {
  type: "ORTALAMA_GORUSME_SURESI_ERROR";
}

interface TOPLAM_GIDEN_CAGRI_START {
  type: "TOPLAM_GIDEN_CAGRI_START";
}
interface TOPLAM_GIDEN_CAGRI_SUCCESS {
  type: "TOPLAM_GIDEN_CAGRI_SUCCESS";
  payload: IReports;
}

interface TOPLAM_GIDEN_CAGRI_ERROR {
  type: "TOPLAM_GIDEN_CAGRI_ERROR";
}

interface AKTIF_CAGRILAR_START {
  type: "AKTIF_CAGRILAR_START";
}
interface AKTIF_CAGRILAR_SUCCESS {
  type: "AKTIF_CAGRILAR_SUCCESS";
  payload: IReports;
}

interface AKTIF_CAGRILAR_ERROR {
  type: "AKTIF_CAGRILAR_ERROR";
}

interface TOPLAM_MUSRETI_TEMSILCISI_START {
  type: "TOPLAM_MUSRETI_TEMSILCISI_START";
}
interface TOPLAM_MUSRETI_TEMSILCISI_SUCCESS {
  type: "TOPLAM_MUSRETI_TEMSILCISI_SUCCESS";
  payload: IReports;
}

interface TOPLAM_MUSRETI_TEMSILCISI_ERROR {
  type: "TOPLAM_MUSRETI_TEMSILCISI_ERROR";
}

export type ReportsAction =
  | BEKLEYEN_CAGRI_START
  | BEKLEYEN_CAGRI_SUCCESS
  | BEKLEYEN_CAGRI_ERROR
  | KACAN_CAGRI_START
  | KACAN_CAGRI_SUCCESS
  | KACAN_CAGRI_ERROR
  | CEVAPLANAN_CAGRI_START
  | CEVAPLANAN_CAGRI_SUCCESS
  | CEVAPLANAN_CAGRI_ERROR
  | TOPLAM_GELEN_CAGRI_START
  | TOPLAM_GELEN_CAGRI_SUCCESS
  | TOPLAM_GELEN_CAGRI_ERROR
  | TOPLAM_BEKLEME_SURESI_START
  | TOPLAM_BEKLEME_SURESI_SUCCESS
  | TOPLAM_BEKLEME_SURESI_ERROR
  | MAX_BEKLEME_SURESI_START
  | MAX_BEKLEME_SURESI_SUCCESS
  | MAX_BEKLEME_SURESI_ERROR
  | TOPLAM_GORUSME_SURESI_START
  | TOPLAM_GORUSME_SURESI_SUCCESS
  | TOPLAM_GORUSME_SURESI_ERROR
  | ORTALAMA_GORUSME_SURESI_START
  | ORTALAMA_GORUSME_SURESI_SUCCESS
  | ORTALAMA_GORUSME_SURESI_ERROR
  | TOPLAM_GIDEN_CAGRI_START
  | TOPLAM_GIDEN_CAGRI_SUCCESS
  | TOPLAM_GIDEN_CAGRI_ERROR
  | AKTIF_CAGRILAR_START
  | AKTIF_CAGRILAR_SUCCESS
  | AKTIF_CAGRILAR_ERROR
  | TOPLAM_MUSRETI_TEMSILCISI_START
  | TOPLAM_MUSRETI_TEMSILCISI_SUCCESS
  | TOPLAM_MUSRETI_TEMSILCISI_ERROR;

export type UserDispatch = ThunkDispatch<ReportState, void, ReportsAction>;
