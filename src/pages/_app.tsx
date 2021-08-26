import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layout/Layout";
import { ThemeProvider } from "next-themes";
import "@lib/Icons";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { AuthProvider } from "hooks/UserContext";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import {
  BekleyenCagrilar,
  CevaplananCagrilar,
  KacanCagrilar,
  ToplamGelenCagrilar,
} from "store/actions/reportActions";
import { Agents, Queues, Test, Whoami } from "store/actions/userActions";
function MyApp({ Component, pageProps }: AppProps) {
  const [token, setToken] = useState<any>("");
  const [authUser, setauthUser] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setToken(Cookies.get("token"));
    setauthUser(JSON.parse(localStorage.getItem("authUser") || "{}"));
    if (Cookies.get("token") !== undefined) {
      dispatch(BekleyenCagrilar());
      dispatch(KacanCagrilar());
      dispatch(CevaplananCagrilar());
      dispatch(Test());
      dispatch(Whoami());
      dispatch(Agents());
      dispatch(Queues());
      // dispatch(ToplamGelenCagrilar());
    }
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Provider store={store}>
        <AuthProvider token={token}>
          <Layout token={token} adi={authUser?.adi} soyadi={authUser?.soyadi}>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
