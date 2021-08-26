import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";

const NPS1: React.FC = () => {
  return (
    <>
      <Main
        headers={[
          "Agent ID",
          "Agent Adı",
          "0",
          "%",
          "1",
          "%",
          "2",
          "%",
          "3",
          "%",
          "4",
          "%",
          "5",
          "%",
          "6",
          "%",
          "7",
          "%",
          "8",
          "%",
          "9",
          "%",
          "10",
          "%",
          "Boş",
          "%",
          "Toplam",
        ]}
        choice="table"
        title="NPS1"
      />
    </>
  );
};

export default withAuth(NPS1);
