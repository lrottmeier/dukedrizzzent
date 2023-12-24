import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import DD from "../assets/svg/dd_logo_website.svg";

type BugerMenuProps = {
  isOpen: boolean;
  firstIconVisible: boolean;
  toggleMenu: () => void;
};

const BurgerMenu = ({
  isOpen,
  firstIconVisible,
  toggleMenu,
}: BugerMenuProps) => {
  return (
    <div className="text-3xl flex lg:hidden">
      {firstIconVisible === true && ( // Zeige das erste Icon, wenn der Zustand dafür true ist
        <button onClick={toggleMenu}>
          <Link className="text-[#DD9046]" href="">
            <FaBars />
          </Link>
        </button>
      )}

      {/* Das Burger-Menü */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50">
          {/* Hier fügst du die Inhalte deines Menüs ein */}
          <div className="flex justify-end align-middle p-4">
            <button onClick={toggleMenu}>
              <Link
                className="text-[#DD9046] text-5xl absolute right-[10%] mt-20 lg:hidden"
                href="">
                <IoCloseSharp />
              </Link>
            </button>
          </div>
          <div className="flex justify-center">
            <ul className="absolute top-[30%] flex text-3xl  text-center flex-col gap-6 w-24">
              <li>
                <Link className="" href="/artists">
                  Team
                </Link>
              </li>
              <li>
                <Link className="" href="/soon">
                  Music
                </Link>
              </li>
              <li>
                <Link className="" href="/soon2">
                  About
                </Link>
              </li>
              <li>
                <Link className="" href="/soon3">
                  Future
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
