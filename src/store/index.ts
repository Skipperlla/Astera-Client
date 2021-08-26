import { combineReducers } from "redux";
import { ReportState } from "types/report";
import { UserState } from "types/user";
import reportReducer from "./reducers/reportReducer";
import userReducer from "./reducers/userReducer";

export interface AppState {
  user: UserState;
  reports: ReportState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  reports: reportReducer,
});

export default rootReducer;
