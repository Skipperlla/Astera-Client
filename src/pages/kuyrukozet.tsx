import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";

const KuyrukOzet: React.FC = () => {
  return (
    <>
      <Main
        headers={["Kuyruk", "Kuyruk Adı", "Cevaplanan", "Kaçan", "Transfer"]}
        choice="table"
        title="Kuyruk Özet"
      />
    </>
  );
};

export default withAuth(KuyrukOzet);
