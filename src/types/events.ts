import React, { ReactNode } from "react";
export interface IButton {
  openTable?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface IAccordionHeader {
  handleChange?: React.MouseEventHandler<SVGSVGElement>;
  isOpen: boolean;
}
export interface IProps {
  children: ReactNode;
  token?: string;
  adi?: string;
  soyadi?: string;
}
export interface ISideBar {
  isSidebarOpen?: boolean;
  adi?: string;
  soyadi?: string;
  openSideBar: () => void;
}
export interface IToast {
  status: number;
  toastisActive: boolean;
}
