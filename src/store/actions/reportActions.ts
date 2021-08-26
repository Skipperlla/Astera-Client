import { LoginForm, User, UserDispatch } from "../../types/user";
import Cookies from "js-cookie";
import api from "@lib/api";
export const BekleyenCagrilar = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await api().post<User>("/Report/BekleyenCagrilar", {
      queue: "string",
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data?.data });
  } catch {
    dispatch({ type: "LOGIN_ERROR" });
  }
};

export const KacanCagrilar = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await api().post<User>("/Report/KacanCagrilar", {
      agentId: "string",
      startDate: "2021-08-25T17:10:17.393Z",
      endDate: "2021-08-25T17:10:17.393Z",
      queu: "string",
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "LOGIN_ERROR" });
  }
};
export const CevaplananCagrilar = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await api().post<User>("​/Report​/CevaplananCagrilar", {
      agentId: "string",
      startDate: "2021-08-25T17:10:57.284Z",
      endDate: "2021-08-25T17:10:57.284Z",
      queu: "string",
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "LOGIN_ERROR" });
  }
};
export const ToplamGelenCagrilar = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await api().post<User>("/Report/ToplamGelenCagrilar", {
      agentId: "string",
      startDate: "2021-08-25T17:11:22.394Z",
      endDate: "2021-08-25T17:11:22.394Z",
      queu: "string",
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "LOGIN_ERROR" });
  }
};
