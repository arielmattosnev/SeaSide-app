import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto px-4 py-16">
      <div className="flex items-center justify-center flex-col gap-4 md:gap-0  md:flex-row md:justify-between">
        <h1>SeaSide</h1>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/ariel-mattos-03908022b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={38} className="fill-black hover:scale-125 duration-300 " />
          </a>
          <a
            href="https://github.com/arielmattosnev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={38} className="fill-black hover:scale-125 duration-300 " />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
