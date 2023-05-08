import Image from "next/image";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "../assets/logo2.png";
import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#120C1D]"}`}>
      <div className="flex items-center sp ace-x-2 md:space-x-10">
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            alt="Netlifx-Logo"
          />
        </Link>
        <ul className="hidden space-x-4 md:flex">
          <Link href="/">
            <li className="headerLink">Home</li>
          </Link>
          <Link href={`/genre/${28}`}>
            <li className="headerLink">Action Movies</li>
          </Link>
          <Link href={`/genre/${35}`}>
            <li className="headerLink">Comedy Movies</li>
          </Link>
          <Link href={`/genre/${10749}`}>
            <li className="headerLink">Romance Movies</li>
          </Link>
          <Link href={`/genre/${99}`}>
            <li className="headerLink">Documantaries</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Image
          src="https://www.svgrepo.com/show/794/male-user.svg"
          alt="userImage"
          className="cursor-pointer rounded bg-white"
          width={30}
          height={30}
        ></Image>
      </div>
    </header>
  );
};

export default Header;
