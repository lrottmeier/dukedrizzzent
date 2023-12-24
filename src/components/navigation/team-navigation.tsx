"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

const TeamNavigation: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex justify-center text-xs md:text-2xl text-center mt-48 ml-8 mb-6">
      <ul className="flex flex-row gap-16 md:gap-32 lg:gap-52">
        <li>
          <Link
            className={`${
              pathname === "/artists" ? "text-[#DE9046]" : "text-white"
            } hover:text-[#DE9046]`}
            href="/artists">
            Artists
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/producers" ? "text-[#DE9046]" : "text-white"
            } hover:text-[#DE9046]`}
            href="/producers">
            Production
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname === "/partners" ? "text-[#DE9046]" : "text-white"
            } hover:text-[#DE9046]`}
            href="/partners">
            Partners
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamNavigation;
