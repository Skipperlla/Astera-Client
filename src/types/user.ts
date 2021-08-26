import { ThunkDispatch } from "redux-thunk";

import { ReactNode } from "react";
export interface IAuthContextType {
  user: string | null;
  children?: ReactNode;
  token?: string;
}
export interface User {
  data: any;
  token: string;
  id: number;
  username: string;
  isadmin: number;
  adi: string;
  soyadi: string;
  isview: number;
  diger: number;
  dahili: null;
  issupervisor: null;
  isAgent: null;
  callcenter: null;
  loginkey: null;
  numaragizle: null;
}

export interface LoginForm {
  userName: string;
  password: string;
}

export interface UserState {
  data: User;
  loading: boolean;
  error: string;
  status: null | number;
}

interface LOGIN_START {
  type: "LOGIN_START";
}

interface LOGIN_SUCCESS {
  type: "LOGIN_SUCCESS";
  payload: User;
}

interface LOGIN_ERROR {
  type: "LOGIN_ERROR";
}

export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
