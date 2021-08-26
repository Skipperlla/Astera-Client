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
  data: User[];
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

interface TEST_START {
  type: "TEST_START";
}

interface TEST_SUCCESS {
  type: "TEST_SUCCESS";
  payload: User;
}

interface TEST_ERROR {
  type: "TEST_ERROR";
}

interface WHOAMI_START {
  type: "WHOAMI_START";
}

interface WHOAMI_SUCCESS {
  type: "WHOAMI_SUCCESS";
  payload: User;
}

interface WHOAMI_ERROR {
  type: "WHOAMI_ERROR";
}

interface QUEUES_START {
  type: "QUEUES_START";
}

interface QUEUES_SUCCESS {
  type: "QUEUES_SUCCESS";
  payload: User;
}

interface QUEUES_ERROR {
  type: "QUEUES_ERROR";
}

interface AGENTS_START {
  type: "AGENTS_START";
}

interface AGENTS_SUCCESS {
  type: "AGENTS_SUCCESS";
  payload: User;
}

interface AGENTS_ERROR {
  type: "AGENTS_ERROR";
}

export type UserAction =
  | LOGIN_START
  | LOGIN_SUCCESS
  | LOGIN_ERROR
  | TEST_START
  | TEST_SUCCESS
  | TEST_ERROR
  | WHOAMI_START
  | WHOAMI_SUCCESS
  | WHOAMI_ERROR
  | QUEUES_START
  | QUEUES_SUCCESS
  | QUEUES_ERROR
  | AGENTS_START
  | AGENTS_SUCCESS
  | AGENTS_ERROR;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
