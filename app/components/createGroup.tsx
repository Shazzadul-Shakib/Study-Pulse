import svg from "@/public/Group-study.svg";
import Image from "next/image";

export default function CreateGroup() {
  return (
    <main className=" flex flex-col justify-center items-center gap-3">
      <div>
        <Image width={250} height={250} src={svg} alt="Group study svg"></Image>
      </div>
      <div>
        <h1 className="text-white">
          "Create a collaborative Study Group to Empower Your Intellect"
        </h1>
      </div>
      <div className=" text-white">
        <button className=" bg-deepBlue px-4 py-2 rounded-md mx-2 text-xs font-bold ">Join Group</button>
        <button className=" bg-deepBlue px-4 py-2 rounded-md mx-2 text-xs font-bold ">Create Group</button>
      </div>
    </main>
  );
}
