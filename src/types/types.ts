export interface IDashboardCard {
  title: string;
  svgTitle: string;
  BGcolor: string;
  Textcolor: string;
  data: number | string | undefined;
}

export interface ISideBar {
  title: string;
  target: string;
  svg: string;
}
export interface ITable {
  headers: string[];
  choice?: "table" | "card";
  title?: string;
  token?: string;
  items?: any;
  elementItems?: JSX.Element | undefined;
}
