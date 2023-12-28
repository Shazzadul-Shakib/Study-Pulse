import Image from "next/image";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <main className="flex border-b-[.1px] border-deepBlue">
      <div className=" bg-deepestBlue basis-1/6 flex  items-center gap-3 pl-5 py-2">
        <Image src="/Study Pulse.png" width={38} height={38} alt="Logo"></Image>
        <h1 className="text-white font-bold hidden lg:flex">Study Pulse</h1>
      </div>
      <div className=" bg-deeperBlue basis-5/6 pr-5 flex justify-end items-center gap-4">
        <div className=" relative h-7 w-7 rounded-full bg-deepBlue flex justify-center items-center">
          <IoIosNotifications className=" text-lg text-iconColor" />
          <span className="absolute h-1.5 w-1.5 rounded-full bg-notifyColor right-0 -mb-5 mr-0.5 lg:mr-0 lg:right-0.5"></span>
        </div>
        <div className="h-9 w-9 border-2 border-iconColor rounded-full flex justify-center items-center">
          <Image
            src="/profile.png"
            width={32}
            height={32}
            alt="profile"
            className="overflow-hidden rounded-full border-2 border-deeperBlue"
          ></Image>
        </div>
      </div>
    </main>
  );
}