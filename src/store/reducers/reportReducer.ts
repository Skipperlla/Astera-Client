import { IBekleyenCagrilar, UserAction, ReportState } from "../../types/report";

const defaultState: ReportState = {
  data: {} as IBekleyenCagrilar,
  loading: false,
  error: "",
  status: null,
};

const userReducer = (state: ReportState = defaultState, action: UserAction) => {
  switch (action.type) {
    case "REPORT_START":
      return { ...state, loading: true, error: "", status: null };

    case "REPORT_SUCCESS":
      return { ...state, loading: false, data: action.payload, status: 200 };
    case "REPORT_ERROR":
      return {
        ...state,
        loading: false,
        error: "Giriş Bilgileri Hatalı",
        status: 400,
      };

    default:
      return state;
  }
};

export default userReducer;
