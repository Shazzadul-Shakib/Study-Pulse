import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import { GiBurningRoundShot } from "react-icons/gi";
import {sidebarLink} from '@/utils/types/types'

export const SidebarLinks: sidebarLink[] = [
  {
    title: "Home",
    icon: <IoHome />,
    path:'/home'
  },
  {
    title: "Course Dashboard",
    icon: <MdSpaceDashboard />,
    path:'/home'
  },
  {
    title: "Study Groups",
    icon: <FaGroupArrowsRotate />,
    path:'/home'
  },
  {
    title: "Practice Ground",
    icon: <GiBurningRoundShot />,
    path:'/home'
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    path:'/home'
  },
];
