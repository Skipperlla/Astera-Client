import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";
const LoginLogout: React.FC = () => {
  return (
    <>
      <Main
        headers={[
          "Agent",
          "Adı Soyadı",
          "Durum",
          "Login Tarihi",
          "Logof Tarihi",
          "Süre",
          "Kuyruk",
        ]}
        choice="table"
        title="Login / Logout"
      />
    </>
  );
};

export default withAuth(LoginLogout);
