"use client";

import { ToggleModalHook } from "@/utils/types/types";
import { useState } from "react";

export const useToggleModal: ToggleModalHook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return [isOpen, toggleModal];
};
