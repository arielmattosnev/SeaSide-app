import { BsFillPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { buttonText, navbarLinks } from "../constants/index";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-20 px-6 absolute z-10 text-white w-full">
      <h1>SeaSide</h1>
      <ul className={"hidden md:flex gap-4"}>
        {navbarLinks.map(({ id, content }) => (
          <li
            key={id}
            className="font-bold capitalize hover:scale-110 duration-300 hover:text-slate-300 cursor-pointer text-[19px]"
          >
            {content}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-2 z-10">
        <FaSearch
          size={25}
          className="mr-3 hover:scale-125 duration-300 cursor-pointer"
        />
        <BsFillPersonFill
          size={25}
          className="hover:scale-125 duration-300 cursor-pointer"
        />
      </div>

      {/* Mobile menu */}

      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden z-10"
      >
        {isOpen ? (
          <AiOutlineClose size={40} className="fill-black" />
        ) : (
          <AiOutlineMenu size={40} className="fill-white" />
        )}
      </div>

      {isOpen && (
        <div className="absolute left-0 top-0 w-full h-screen bg-slate-200 py-6 md:hidden text-black">
          <h1 className="px-6">SeaSide</h1>
          <ul className="flex flex-col items-center justify-center md:hidden w-full  ">
            {navbarLinks.map(({ id, content }) => (
              <li
                key={id}
                className="font-bold capitalize cursor-pointer text-[22px] text-center w-11/12 m-auto p-4 border-b border-black "
              >
                {content}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center my-3">
            {buttonText.map(({ id, text }) => (
              <button
                key={id}
                className="rounded-md my-2 bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700  w-11/12 p-4 font-extrabold capitalize"
              >
                {text}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/ariel-mattos-03908022b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} className="fill-cyan-700 " />
            </a>
            <a
              href="https://github.com/arielmattosnev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} className="fill-cyan-700 " />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
