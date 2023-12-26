import { SidebarLinks } from "@/utils/data/sidebarLinks";
import Link from "next/link";

export default function Sidebar() {
  return (
    <main className=" bg-deepestBlue border-t-2 px-2 py-4 ">
      <div>
        {SidebarLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="flex items-center text-white bg-gradient-to-r from-gradientLeftBlue to-gradientRightBlue rounded-full p-1.5 my-4"
          >
            <span className="h-7 w-7 rounded-full bg-gradient-to-b from-white to-iconColor flex items-center justify-center text-deeperBlue">{link.icon}</span>
            <span className=" text-xs font-bold ml-1.5">{link.title}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
