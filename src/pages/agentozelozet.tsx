import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";

const AgentOzelOzet: React.FC = () => {
  return (
    <>
      <Main
        headers={[
          "Tarih",
          "Adı Soyadı",
          "Mesai Süresi",
          "Toplam Mola Süresi",
          "Ofis Calismasi",
          "Sigara",
          "Yemek",
          "Toplam Görüşme Süresi",
          "Ortalama Görüşme Süresi",
          "Cevaplanan Çağrı Adedi",
          "Kaçan Çağrılar",
          "Toplam Çagri",
        ]}
        choice="table"
        title="Agent Özet"
      />
    </>
  );
};

export default withAuth(AgentOzelOzet);
