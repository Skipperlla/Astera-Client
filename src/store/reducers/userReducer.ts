import { User, UserAction, UserState } from "../../types/user";

const defaultState: UserState = {
  data: {} as User,
  loading: false,
  error: "",
  status: null,
};

const userReducer = (state: UserState = defaultState, action: UserAction) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: "", status: null };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, data: action.payload, status: 200 };
    case "LOGIN_ERROR":
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
