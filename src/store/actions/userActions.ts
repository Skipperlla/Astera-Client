import { LoginForm, User, UserDispatch } from "types/user";
import Cookies from "js-cookie";
import api from "@lib/api";

export const Login =
  (credentials: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api().post<User>("/Account/Login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data });
      Cookies.set("token", response.data?.data.token, { expires: 7 });
      localStorage.setItem("authUser", JSON.stringify(response.data.data));
      window.location.reload();
    } catch (err) {
      dispatch({ type: "LOGIN_ERROR", payload: 400 });
    }
  };

export const Agents = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "AGENTS_START" });
  try {
    const response = await api().post<User>("/Account/Agents");
    dispatch({ type: "AGENTS_SUCCESS", payload: response.data.data });
  } catch (err) {
    dispatch({ type: "AGENTS_ERROR", payload: 400 });
  }
};
export const Queues = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "QUEUES_START" });
  try {
    const response = await api().post<User>("/Account/Queues");
    dispatch({ type: "QUEUES_SUCCESS", payload: response.data.data });
  } catch (err) {
    dispatch({ type: "QUEUES_ERROR", payload: 400 });
  }
};
export const Test = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "TEST_START" });
  try {
    const response = await api().get<User>("/Account/Test");

    dispatch({ type: "TEST_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "TEST_ERROR", payload: 400 });
  }
};
export const Whoami = () => async (dispatch: UserDispatch) => {
  dispatch({ type: "WHOAMI_START" });
  try {
    const response = await api().get<User>("/Account/Whoami");
    dispatch({ type: "WHOAMI_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "WHOAMI_ERROR", payload: 400 });
  }
};
