import Menu from "@components/Menus/Menu";
import Input from "@components/Tags/Input";
import React from "react";
import withAuth from "../../PrivateRoute/withAuth";
import Main from "../layout/Main";
const AgentDetay: React.FC = () => {
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
        title="Agent Detay"
        elementItems={[
          <Input />,
          <Menu items={agentId} />,
          <Menu items={kuyruk} />,
          <Menu items={["DURUM", "CEVAPLANDI", "KAÇAN", "TRANSFER"]} />,
          <Menu items={["TÜMÜ", "GELEN", "GİDEN"]} />,
        ]}
      />
    </>
  );
};

export default withAuth(AgentDetay);
