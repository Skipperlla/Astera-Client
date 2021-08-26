import { ThunkDispatch } from "redux-thunk";

import { ReactNode } from "react";
export interface IAuthContextType {
  user: string | null;
  children?: ReactNode;
  token?: string;
}
export interface IBekleyenCagrilar {
  data: any;
  bekleyen: number;
}

export interface BekleyenCagriForm {
  queue: string;
}

export interface BekleyenCagrilarState {
  data: IBekleyenCagrilar;
  loading: boolean;
  error: string;
}

interface BEKLEYEN_CAGRI_START {
  type: "LOGIN_START";
}

interface BEKLEYEN_CAGRI_SUCCESS {
  type: "LOGIN_SUCCESS";
  payload: IBekleyenCagrilar;
}

interface BEKLEYEN_CAGRI_ERROR {
  type: "LOGIN_ERROR";
}

interface BEKLEYEN_CAGRI_IN_START {
  type: "IS_LOGGED_IN_START";
}

interface BEKLEYEN_CAGRI_IN_SUCCESS {
  type: "IS_LOGGED_IN_SUCCESS";
  payload: IBekleyenCagrilar;
}

interface BEKLEYEN_CAGRI_IN_ERROR {
  type: "IS_LOGGED_IN_ERROR";
}

export type UserAction =
  | BEKLEYEN_CAGRI_START
  | BEKLEYEN_CAGRI_SUCCESS
  | BEKLEYEN_CAGRI_ERROR
  | BEKLEYEN_CAGRI_IN_START
  | BEKLEYEN_CAGRI_IN_SUCCESS
  | BEKLEYEN_CAGRI_IN_ERROR;

export type UserDispatch = ThunkDispatch<
  BekleyenCagrilarState,
  void,
  UserAction
>;
