import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { IAuthContextType } from "types/user";
import { IProps } from "types/events";

const authContextDefaultValues: IAuthContextType = {
  user: Cookies.get("token") || null,
};

const AuthContext = createContext<IAuthContextType>(authContextDefaultValues);

export function AuthProvider({ children, token }: IProps) {
  const [user, setUser] = useState<string | null>(Cookies.get("token") || null);

  return (
    <>
      <AuthContext.Provider value={{ user, token }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
