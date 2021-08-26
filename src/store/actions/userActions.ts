import { LoginForm, User, UserDispatch } from "../../types/user";
import Cookies from "js-cookie";
import api from "@lib/api";
export const login =
  (credentials: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api().post<User>("/Account/Login",{ credentials, timeout: 1000});
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });
      Cookies.set("token", response.data.data.token);
      localStorage.setItem("authUser", JSON.stringify(response.data.data));
      window.location.reload();
    } catch (err) {
      dispatch({ type: "LOGIN_ERROR", payload: 400 });
    }
  };
