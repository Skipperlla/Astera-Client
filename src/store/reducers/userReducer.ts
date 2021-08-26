import { User, UserAction, UserState } from "../../types/user";

const defaultState: UserState = {
  data: [],
  loading: false,
  error: "",
  status: null,
};

const userReducer = (state: UserState = defaultState, action: UserAction) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: "", status: null };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
        status: 200,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: "Giriş Bilgileri Hatalı",
        status: 400,
      };

    case "TEST_START":
      return { ...state, loading: true, error: "", status: null };

    case "TEST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
        status: 200,
      };
    case "TEST_ERROR":
      return {
        ...state,
        loading: false,
        error: "Giriş Bilgileri Hatalı",
        status: 400,
      };

    case "WHOAMI_START":
      return { ...state, loading: true, error: "", status: null };

    case "WHOAMI_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
        status: 200,
      };
    case "WHOAMI_ERROR":
      return {
        ...state,
        loading: false,
        error: "Giriş Bilgileri Hatalı",
        status: 400,
      };

    case "AGENTS_START":
      return { ...state, loading: true, error: "", status: null };

    case "AGENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
        status: 200,
      };
    case "AGENTS_ERROR":
      return {
        ...state,
        loading: false,
        error: "Giriş Bilgileri Hatalı",
        status: 400,
      };

    case "QUEUES_START":
      return { ...state, loading: true, error: "", status: null };

    case "QUEUES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
        status: 200,
      };
    case "QUEUES_ERROR":
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
