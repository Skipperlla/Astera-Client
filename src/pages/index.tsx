import React, { useState } from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";
import SignIn from "@components/Auth/SignIn";
import { useAuth } from "hooks/UserContext";
import Menu from "@components/Menus/Menu";

const Home: React.FC = () => {
  const { user } = useAuth();
  const [test, setest] = useState("");
  const agentId = [
    "Agent",
    "112 Alper Yilmaz",
    "113 Fahri Acar",
    "114 Safak Turan",
    "115 115",
    "120 Serdar Ikikardesler",
    "133 Tuncay Bilgin",
    "433 433",
    "444 Agent - Alper",
  ];
  const kuyruk = [
    "Kuyruk",
    "8000 Operator",
    "8001 Teknik",
    "8002 Muhasebe",
    "8011 Teknik Mesaidisi",
    "8012 Satis Mesaidisi",
    "8013 TEST",
    "8100 Call center",
  ];
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
          elementItems={[<Menu items={agentId} />]}
          title="Dashboard"
        />
      )}
      <select
        onChange={(event) => {
          setest(event.target.value);
          console.log(test)
        }}
      >
        {agentId.map((items, key) => {
          return <option>{items}</option>;
        })}
      </select>
    </>
  );
};

export default withAuth(Home);
