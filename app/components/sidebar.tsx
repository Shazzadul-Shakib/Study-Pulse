'use client';
import { SidebarLinks } from "@/utils/data/sidebarLinks";
import { ImSwitch } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <main className="bg-deepestBlue px-3 py-4 h-full flex flex-col justify-between border-r-[.1px] border-deepBlue">
      <div>
        {SidebarLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`flex items-center text-white  rounded-lg p-2 mx-1 my-4 ${pathname==link.path ? 'bg-gradient-to-r from-gradientLeftBlue to-gradientRightBlue':'bg-deeperBlue'}`}
          >
            <span className="h-6 w-6 rounded-full bg-gradient-to-b from-white to-iconColor flex items-center justify-center text-deeperBlue">
              {link.icon}
            </span>
            <span className="text-xs font-bold ml-1.5">{link.title}</span>
          </Link>
        ))}
      </div>
      <button className="flex items-center text-white bg-deeperBlue p-2 rounded-lg">
        <span className="pl-2">
          <ImSwitch />
        </span>
        <span className="text-xs font-bold ml-2">Sign Out</span>
      </button>
    </main>
  );
}
