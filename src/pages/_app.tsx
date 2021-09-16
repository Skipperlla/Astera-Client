import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layout/Layout";
import { ThemeProvider } from "next-themes";
import "@lib/Icons";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { AuthProvider } from "hooks/UserContext";
import "react-toastify/dist/ReactToastify.css";

import { ReportProvider } from "hooks/ReportContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Provider store={store}>
        <AuthProvider>
          <ReportProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ReportProvider>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
