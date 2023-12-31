"use client";

import { useToggleModal } from "@/hooks/useToggleModal";
import ModalBody from "./modals/modalbody";
import CreateGroupCard from "./cards/createGroupCard";

export default function UpperBar() {
  const [isOpen, toggleModal] = useToggleModal();
  return (
    <main
      className={`flex justify-end items-center text-white z-10`}
    >
      <button className=" bg-deepBlue px-4 py-2 rounded-md mx-2 text-xs font-bold ">
        Join Group
      </button>
      <button
        onClick={toggleModal}
        className=" bg-deepBlue px-4 py-2 rounded-md mx-2 text-xs font-bold "
      >
        Create Group
      </button>
      {isOpen && (
        <ModalBody card={<CreateGroupCard toggleModal={toggleModal} />} />
      )}
    </main>
  );
}
