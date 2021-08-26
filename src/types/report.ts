import { ThunkDispatch } from "redux-thunk";

export interface IBekleyenCagrilar {
  data: any;
  bekleyen: number;
}

export interface ReportState {
  data: IBekleyenCagrilar;
  loading: boolean;
  error: string;
  status: null | number;
}

interface REPORT_START {
  type: "REPORT_START";
}

interface REPORT_SUCCESS {
  type: "REPORT_SUCCESS";
  payload: IBekleyenCagrilar;
}

interface REPORT_ERROR {
  type: "REPORT_ERROR";
}

export type UserAction = REPORT_START | REPORT_SUCCESS | REPORT_ERROR;

export type UserDispatch = ThunkDispatch<ReportState, void, UserAction>;
