"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import BurgerMenu from "../burger-menu/burger-menu";
import { useState } from "react";

const BurgerNavigation: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [firstIconVisible, setFirstIconVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setFirstIconVisible((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <BurgerMenu
        isOpen={isOpen}
        firstIconVisible={firstIconVisible}
        toggleMenu={toggleMenu}
      />
    </div>
  );
};

export default BurgerNavigation;
