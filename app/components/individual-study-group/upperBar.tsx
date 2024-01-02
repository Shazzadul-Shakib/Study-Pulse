'use client'
import Link from "next/link";
  import {usePathname} from "next/navigation";


export default function GroupUpperBar() {
  const pathname = usePathname();
  const isChallengesPage = pathname.endsWith("/challanges");
  return (
    <main className=" flex items-center gap-5 text-white p-2 bg-deepBlue bg-opacity-40 mb-2">
      <Link
        href={isChallengesPage ? "#" : `${pathname}/challanges`}
        className={`text-xs px-2 cursor-pointer ${
          isChallengesPage ? "pointer-events-none text-gradientRightBlue" : ""
        }`}
      >
        Challanges
      </Link>
      <div className=" text-xs px-2 cursor-pointer">Leaderboard</div>
      <div className=" text-xs px-2 cursor-pointer">Settings</div>
    </main>
  );
}