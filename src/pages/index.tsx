import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";
import SignIn from "@components/Auth/SignIn";
import { useAuth } from "hooks/UserContext";

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      {user === null ? (
        <SignIn />
      ) : (
        <Main
          headers={[
            "Tarih",
            "Agent",
            "Adı Soyadı",
            "Telefon",
            "Durum",
            "Kuyruk",
            "Kuy.Ad",
            "Bekl.Sür",
            "Görş.Sür",
            "Yön",
            "Ses kaydı",
          ]}
          choice="card"
          title="Dashboard"
        />
      )}
    </>
  );
};

export default withAuth(Home);
