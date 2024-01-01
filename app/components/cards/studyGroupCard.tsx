'use client';

import backgroundImageSrc from "@/public/sp.png";
import { StudyGroupCardProps } from "@/utils/types/types";
import Image from "next/image";
import Link from "next/link";


export default function StudyGroupCard({
  group,
}: {
  group: StudyGroupCardProps;
}) {
  const { _id, groupName, topicName } = group;

  return (
    <Link
      href={`study_groups/${_id}`}
      className="relative h-44 w-72 rounded-md shadow-lg overflow-hidden"
    >
      <Image
        fill
        objectFit="cover"
        src={backgroundImageSrc}
        alt="Background Image"
        className="opacity-50 bg-gradient-to-b from-white to-black rounded-md"
      />

      <section className="absolute inset-0 flex flex-col justify-end ">
        <div className=" w-full backdrop-blur-md p-4 text-center">
          <h1 className="  text-white text-lg font-bold">{groupName}</h1>
          <h3 className="text-white text-xs font-bold ">{topicName}</h3>
        </div>
      </section>
    </Link>
  );
}
