import { ModalBodyProps } from "@/utils/types/types";
import React, { ReactNode } from "react";



const ModalBody: React.FC<ModalBodyProps> = ({ card }) => {
  return (
    <main className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-md overflow-hidden flex justify-center items-center">
      {card}
    </main>
  );
};

export default ModalBody;
