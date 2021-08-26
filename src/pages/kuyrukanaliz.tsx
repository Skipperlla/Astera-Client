import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";

const KuyrukAnaliz: React.FC = () => {
  return (
    <>
      <Main
        headers={[
          "Saat",
          "0-5",
          "0-5%",
          "6-10",
          "6-10%",
          "11-15",
          "11-15%",
          "16-20",
          "16-20%",
          "21-25",
          "21-25%",
          "26-30",
          "26-30",
          "26-30%",
          "30>",
          "30%",
          "Ortlama Bekleme",
          "En Az Bekleme",
          "En Uzun Bekleme",
          "Toplam",
        ]}
        choice="table"
        title="Kuyruk Analiz"
      />
    </>
  );
};

export default withAuth(KuyrukAnaliz);
