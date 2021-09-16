import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IAuthContextType } from "types/user";
import { IProps } from "types/events";

const authContextDefaultValues: IAuthContextType = {};

const AuthContext = createContext<IAuthContextType>(authContextDefaultValues);

export function AuthProvider({ children }: IProps) {
  const [user, setUser] = useState<string | null>(Cookies.get("token") || null);
  const [token, setToken] = useState<any>("");
  const [authUser, setauthUser] = useState<any>([]);
  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setToken(Cookies.get("token"));
      setauthUser(JSON.parse(localStorage.getItem("authUser") || "{}"));
      // dispatch(Test());
      // dispatch(Whoami());
      // dispatch(Agents());
      // dispatch(Queues());}
    }
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ user, token, authUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
