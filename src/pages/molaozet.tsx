import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";
const MolaOzet: React.FC = () => {
  return (
    <>
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
        choice="table"
        title="Mola Özet"
      />
    </>
  );
};

export default withAuth(MolaOzet);
