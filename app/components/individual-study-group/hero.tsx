import backgroundImageSrc from "@/public/sp.png";
import { StudyGroupCardProps } from "@/utils/types/types";
import Image from "next/image";

export default function Hero({ group }: { group: StudyGroupCardProps }) {
  const { groupName, topicName } = group;
  return (
    <main className="relative h-36 rounded-md">
      <Image
        fill
        objectFit="cover"
        src={backgroundImageSrc}
        alt="Background Image"
        className="opacity-50 bg-gradient-to-b from-white to-black rounded-md"
      />
      <section className="absolute inset-0 flex flex-col justify-end ">
        <div className=" w-full backdrop-blur-sm p-4 text-center flex flex-col items-end gap-2">
          <h1 className="  text-white text-2xl font-bold">{groupName}</h1>
          <h3 className="text-white text-xs font-bold ">{topicName}</h3>
        </div>
      </section>
    </main>
  );
}
