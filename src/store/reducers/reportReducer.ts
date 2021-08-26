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
      return { ...state, loading: true, error: "", status: null };

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
        error: action.payload,
        status: 400,
      };
    case "KACAN_CAGRI_START":
      return { ...state, loading: true, error: "", status: null };
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
        error: action.payload,
        status: 400,
      };
    case "CEVAPLANAN_CAGRI_START":
      return { ...state, loading: true, error: "", status: null };
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
        error: action.payload,
        status: 400,
      };

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
        error: action.payload,
        status: 400,
      };
    default:
      return state;
  }
};

export default reportReducer;
