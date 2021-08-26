import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";

const AgentOzet: React.FC = () => {
  return (
    <>
      <Main
        headers={[
          "Agent",
          "Adı Soyadı",
          "Görş. Adedi",
          "Görş. Süresi",
          "Login Süresi",
          "Ortl. Görüşme",
          "Durum",
          "Kuyruk",
          "Arama Tipi",
        ]}
        choice="table"
        title="Agent Özet"
      />
    </>
  );
};

export default withAuth(AgentOzet);
