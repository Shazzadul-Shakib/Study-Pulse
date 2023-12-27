import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

export default function IndividualChat() {
  return (
    <div className="flex flex-col bg-deeperBlue p-3 rounded-md h-[93px] my-1">
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <div>
          <Image
            src="/profile.png"
            width={32}
            height={32}
            alt="profile"
            className="overflow-hidden rounded-full border-2 border-deeperBlue h-8 w-8"
          ></Image>
        </div>
        <div className="text-white">
          <div className="flex justify-between">
            <h1 className="text-xs font-bold">Mount Astro</h1>
            <div>
              <BsThreeDots className="text-xs text-white" />
            </div>
          </div>
          <p className=" text-[9px] text-wrap text-clip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            enim.
          </p>
        </div>
      </div>
      <div className="text-end">
        <p className="text-[9px] text-white">1 min ago</p>
      </div>
    </div>
  );
}
