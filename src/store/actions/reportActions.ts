import { LoginForm, User, UserDispatch } from "../../types/user";
import Cookies from "js-cookie";
import api from "@lib/api";
export const BekleyenCagrilar =
  (credentials: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api().post<User>(
        "/Report/BekleyenCagrilarn",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      Cookies.set("token", response.data.data.token);
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };

export const KacanCagrilar =
  (credentials: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api().post<User>(
        "/Report/KacanCagrilar",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      Cookies.set("token", response.data.data.token);
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };
export const CevaplananCagrilar =
  (credentials: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api().post<User>(
        "​/Report​/CevaplananCagrilar",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      Cookies.set("token", response.data.data.token);
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };
export const ToplamGelenCagrilar =
  (credentials: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api().post<User>(
        "/Report/ToplamGelenCagrilar",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      Cookies.set("token", response.data.data.token);
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };
