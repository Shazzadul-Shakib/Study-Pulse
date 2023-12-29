import { ReactNode } from "react";

export type sidebarLink = {
  title: string;
  icon: ReactNode;
  path: string;
};

export type ModalBodyProps ={
  card: ReactNode;
}