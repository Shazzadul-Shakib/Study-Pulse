import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { GiBurningRoundShot } from "react-icons/gi";
import {sidebarLink} from '@/utils/types/types'

export const SidebarLinks: sidebarLink[] = [
  {
    title: "Home",
    icon: <IoHome />,
    path:'/'
  },
  {
    title: "Study Groups",
    icon: <FaGroupArrowsRotate />,
    path:'/study_groups'
  },
  {
    title: "Practice Ground",
    icon: <GiBurningRoundShot />,
    path:'/practice_ground'
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    path:'/settings'
  },
];
