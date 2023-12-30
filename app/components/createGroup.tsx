"use client";

import { useToggleModal } from "@/hooks/useToggleModal";
import svg from "@/public/Group-study.svg";
import Image from "next/image";
import ModalBody from "./modals/modalbody";
import CreateGroupCard from "./cards/createGroupCard";

export default function CreateGroup() {
  const [isOpen, toggleModal] = useToggleModal();

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
        <button className=" bg-deepBlue px-4 py-2 rounded-md mx-2 text-xs font-bold ">
          Join Group
        </button>
        <button
          onClick={toggleModal}
          className=" bg-deepBlue px-4 py-2 rounded-md mx-2 text-xs font-bold "
        >
          Create Group
        </button>
      </div>
      {isOpen && (
        <ModalBody card={<CreateGroupCard toggleModal={toggleModal} />} />
      )}
    </main>
  );
}
