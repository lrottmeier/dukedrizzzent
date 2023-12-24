"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import BurgerMenu from "../burger-menu/burger-menu";
import { useState } from "react";

const Navigation: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [firstIconVisible, setFirstIconVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setFirstIconVisible((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="hidden lg:flex justify-around text-3xl align-center">
      <ul className="flex text-right flex-col gap-3 w-24">
        <li>
          <Link
            className={`${
              pathname === "/artists" ? "text-[#DD9046]" : "text-white"
            } hover:text-[#DD9046]`}
            href="/artists">
            Team
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/soon" ? "text-[#DD9046]" : "text-white"
            } hover:text-[#DD9046]`}
            href="/soon">
            Music
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/soon2" ? "text-[#DD9046]" : "text-white"
            } hover:text-[#DD9046]`}
            href="/soon2">
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/soon3" ? "text-[#DD9046]" : "text-white"
            } hover:text-[#DD9046]`}
            href="/soon3">
            Future
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
