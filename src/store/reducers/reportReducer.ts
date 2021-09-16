import { IReports, ReportsAction, ReportState } from "../../types/report";

const defaultState: ReportState = {
  BekleyenCagri: {} as IReports,
  KacanCagri: {} as IReports,
  CevaplananCagri: {} as IReports,
  loading: false,
  error: "",
  status: null,
};

const reportReducer = (
  state: ReportState = defaultState,
  action: ReportsAction
) => {
  switch (action.type) {
    case "BEKLEYEN_CAGRI_START":
      return { ...state, loading: true, error: "" };

    case "BEKLEYEN_CAGRI_SUCCESS":
      return {
        ...state,
        loading: false,
        BekleyenCagri: action.payload,
        status: 200,
      };
    case "BEKLEYEN_CAGRI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };
    case "KACAN_CAGRI_START":
      return { ...state, loading: true, error: "" };
    case "KACAN_CAGRI_SUCCESS":
      return {
        ...state,
        loading: false,
        KacanCagri: action.payload,
        status: 200,
      };
    case "KACAN_CAGRI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };
    case "CEVAPLANAN_CAGRI_START":
      return { ...state, loading: true, error: "" };
    case "CEVAPLANAN_CAGRI_SUCCESS":
      return {
        ...state,
        loading: false,
        CevaplananCagri: action.payload,
        status: 200,
      };
    case "CEVAPLANAN_CAGRI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };
    case "TOPLAM_GELEN_CAGRI_START":
      return { ...state, loading: true, error: "" };
    case "TOPLAM_GELEN_CAGRI_SUCCESS":
      return {
        ...state,
        loading: false,
        ToplamGelenCagri: action.payload,
        status: 200,
      };
    case "TOPLAM_GELEN_CAGRI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };
    case "TOPLAM_BEKLEME_SURESI_START":
      return { ...state, loading: true, error: "" };
    case "TOPLAM_BEKLEME_SURESI_SUCCESS":
      return {
        ...state,
        loading: false,
        ToplamBeklemeSüresi: action.payload,
        status: 200,
      };
    case "TOPLAM_BEKLEME_SURESI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };

    case "MAX_BEKLEME_SURESI_START":
      return { ...state, loading: true, error: "" };
    case "MAX_BEKLEME_SURESI_SUCCESS":
      return {
        ...state,
        loading: false,
        MaxBeklemeSuresi: action.payload,
        status: 200,
      };
    case "MAX_BEKLEME_SURESI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };

    case "TOPLAM_GORUSME_SURESI_START":
      return { ...state, loading: true, error: "" };
    case "TOPLAM_GORUSME_SURESI_SUCCESS":
      return {
        ...state,
        loading: false,
        ToplamGorusmeSuresi: action.payload,
        status: 200,
      };
    case "TOPLAM_GORUSME_SURESI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };

    case "ORTALAMA_GORUSME_SURESI_START":
      return { ...state, loading: true, error: "" };
    case "ORTALAMA_GORUSME_SURESI_SUCCESS":
      return {
        ...state,
        loading: false,
        OrtalamaGorusmeSuresi: action.payload,
        status: 200,
      };
    case "ORTALAMA_GORUSME_SURESI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };

    case "TOPLAM_GIDEN_CAGRI_START":
      return { ...state, loading: true, error: "" };
    case "TOPLAM_GIDEN_CAGRI_SUCCESS":
      return {
        ...state,
        loading: false,
        ToplamGidenCagri: action.payload,
        status: 200,
      };
    case "TOPLAM_GIDEN_CAGRI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };

    case "AKTIF_CAGRILAR_START":
      return { ...state, loading: true, error: "" };
    case "AKTIF_CAGRILAR_SUCCESS":
      return {
        ...state,
        loading: false,
        AktifCagrilar: action.payload,
        status: 200,
      };
    case "AKTIF_CAGRILAR_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };

    case "TOPLAM_MUSRETI_TEMSILCISI_START":
      return { ...state, loading: true, error: "" };
    case "TOPLAM_MUSRETI_TEMSILCISI_SUCCESS":
      return {
        ...state,
        loading: false,
        ToplamMusretiTemsilcisi: action.payload,
        status: 200,
      };
    case "TOPLAM_MUSRETI_TEMSILCISI_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
        status: 400,
      };

    default:
      return state;
  }
};

export default reportReducer;
