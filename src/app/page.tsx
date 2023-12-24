import MainPage from "../components/pages/main-page";
import Perfect from "../assets/images/perfect.png";
import Whatif from "../assets/images/whatif.png";
import Party from "../assets/images/partyweekend.png";
import Money from "../assets/images/countingmoney.png";
import Main from "public/assets/images/dukedrizzz.webp";
import Group from "../assets/images/ddgroup.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainPage additionalClasses="">
      {/* <div className="relative bg-[url('/assets/images/dukedrizzz.JPG')] -translate-x-72 w-screen bg-no-repeat bg-cover bg-center"> */}
      <div className="h-screen w-screen">
        {/* left-0 right-0 -z-50 */}
        <Image
          className="absolute object-cover h-screen w-screen -z-50 -rotate-90 md:rotate-0 overflow-x-visible"
          src={Main}
          alt="DukeDrizzz Group Picture"
        />
        <h3
          className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-4xl  md:text-6xl  lg:text-7xl text-center w-screen"
          style={{ color: "#DD9046" }}>
          DUKEDRIZZZ ENT.
        </h3>
      </div>
      <div className="flex justify-center mt-5 md:mt-15 lg:mt-40 w-full">
        <p className="w-1/2 my-60 text-center text-1xl">
          <span className="text-[#DD9046]">DUKEDRIZZZ ENT.</span> is more than a
          record label. we’re a movement. We believe in the power of music to
          inspire, uplift, and unite. Together, we’re forging a new path in the
          music industry, and we invite you to be a part of it.
        </p>
      </div>
      {/* bg-[url('../assets/images/ddgroup.png')] h-screen bg-no-repeat bg-cover bg-center */}
      <span className="flex h-screen justify-center items-center bg-[url('../assets/images/ddgroup.png')] w-screen bg-no-repeat bg-cover bg-center   align-middle">
        <div className="flex">
          <ul className="flex flex-col text-5xl text-center  gap-3 cursor-auto ">
            <li>
              <Link
                className="hover:text-[#DD9046] "
                href="artists/artist/duke">
                Duke
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#DD9046]"
                href="artists/artist/drizz">
                Drizzz
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#DD9046]"
                href="artists/artist/gbunny">
                G-bunny
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#DD9046]"
                href="artists/artist/jesse">
                Jesse
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#DD9046]" href="artists/artist/mj">
                MJ
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#DD9046]" href="artists/artist/yero">
                Yero
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#DD9046]"
                href="artists/artist/pavel">
                Pavel
              </Link>
            </li>
          </ul>
        </div>
      </span>
      <span className="flex justify-center mt-96 mx-28 ">
        <ul className="flex flex-col md:flex-row align-middle w-auto gap-14">
          <li>
            <Image src={Perfect} alt="perfect" />
          </li>
          <li>
            <Image src={Party} alt="perfect" />
          </li>
          <li>
            <Image src={Whatif} alt="perfect" />
          </li>
          <li>
            <Image src={Money} alt="perfect" />
          </li>
        </ul>
      </span>
      <div className="flex justify-center align-middle my-20">
        <button
          className="flex justify-center w-40 text-2xl p-1 rounded-md hover:bg-[#DE9046]"
          style={{ border: "solid #DD9046" }}>
          <Link href="/soon">more</Link>
        </button>
      </div>
      <div className="flex justify-center w-full mt-16 mb-72">
        <p className="w-1/2 mt-20 md:mt-36 mb-4 text-center text-1xl">
          <span className="text-[#DD9046]">DUKEDRIZZZ ENT.</span> is more than a
          record label. we’re a movement. We believe in the power of music to
          inspire, uplift, and unite. Together, we’re forging a new path in the
          music industry, and we invite you to be a part of it.
        </p>
      </div>
    </MainPage>
  );
}
