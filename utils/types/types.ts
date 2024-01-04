import { ReactNode } from "react";

export type sidebarLink = {
  title: string;
  icon: ReactNode;
  path: string;
};

export type ModalBodyProps ={
  card: ReactNode;
}
export type ToggleModalHook = () => [boolean, () => void];

export type StudyGroupCardProps = {
  _id: string;
  groupName: string;
  topicName: string;
  entranceKey:string,
};