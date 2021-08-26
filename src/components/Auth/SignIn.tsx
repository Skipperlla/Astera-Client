import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/actions/userActions";
import { LoginForm } from "types/user";
import { useAuth } from "hooks/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Error } from "@lib/messages";
import { useEffect } from "react";
import Toast from "@components/Toast";
import axios from "axios";
import Head from "next/head";

const SignIn = () => {
  const { status } = useSelector((state: any) => state.user);
  const userNameRef = useRef<any>();
  const passwordRef = useRef<any>();
  const [toastisActive, setToastIsActive] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<LoginForm>({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      userNameRef.current.value.length === 0 ||
      passwordRef.current.value.length === 0
    ) {
      setToastIsActive(true);
      Error("Bilgiler Eksik");
    } else {
      setToastIsActive(false);
      dispatch(login(credentials));
    }
  };
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    if (status === 400) {
      Error("Giriş Bilgileri Hatalı");
    }
    const getUser = async () => {
      await axios({
        method: "post",
        url: "http://31.169.69.116:5001/api/Account/Login",
        data: { userName: "admin", password: "password" },
      })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };
    getUser();
  }, [status]);
  const { user } = useAuth();
  return (
    <>
      {user === null && (
        <>
          <Head>
            <title>Login</title>
            <meta
              httpEquiv="Content-Security-Policy"
              content="upgrade-insecure-requests"
            />
          </Head>
          <div className="h-full  w-4/48 mx-auto overflow-hidden  rounded-lg shadow-xl bg-white dark:bg-gray-800">
            <div className="overflow-y-auto ">
              <div className=" p-6 ">
                <div className="w-full">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200 flex items-center justify-center">
                    Kullanıcı Girişi
                  </h1>
                  <form onSubmit={(event) => onLogin(event)} method="post">
                    <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                      <input
                        className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        type="text"
                        placeholder="Kullanıcı Adı"
                        onChange={(event) => {
                          onChangeInput(event);
                        }}
                        name="userName"
                        ref={userNameRef}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                        <FontAwesomeIcon
                          icon={["fas", "user"]}
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                      <input
                        className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        type="password"
                        placeholder="Şifre"
                        onChange={(event) => {
                          onChangeInput(event);
                        }}
                        name="password"
                        ref={passwordRef}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                        <FontAwesomeIcon
                          icon={["fas", "lock"]}
                          className="w-5 h-5"
                        />
                      </div>
                    </div>
                    {/* You should use a button here, as the anchor is only used for the example  */}
                    <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                      Giriş
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Toast status={status} toastisActive={toastisActive} />
    </>
  );
};

export default SignIn;
