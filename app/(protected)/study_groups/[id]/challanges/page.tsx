"use client";

import CreateChallangeCard from "@/app/components/cards/createChallangeCard";
import ModalBody from "@/app/components/modals/modalbody";
import { useToggleModal } from "@/hooks/useToggleModal";

export default function Challanges({ params }:{params:{id:string}}) {
  const { id } = params;
  const [isOpen, toggleModal] = useToggleModal();
  return (
    <main>
      <div className=" flex justify-end">
        <button
          onClick={toggleModal}
          className="px-2 py-1 rounded-md text-xs text-white bg-gradient-to-tr from-gradientRightBlue to-gradientLeftBlue "
        >
          Create Challange
        </button>
        {isOpen && (
          <ModalBody card={<CreateChallangeCard toggleModal={toggleModal} />} />
        )}
      </div>
      <section></section>
    </main>
  );
}