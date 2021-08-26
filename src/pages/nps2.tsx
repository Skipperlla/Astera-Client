import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";

const NPS2: React.FC = () => {
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
        title="NPS2"
      />
    </>
  );
};

export default withAuth(NPS2);
