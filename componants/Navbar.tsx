import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-500 flex flex-row items-center justify-between pt-4 pb-4 px-4 sm:px-6 lg:px-8">
      <nav>
        <ul className=" flex flex-row items-center justify-end gap-4 lg:gap-12 h-12">
          <li className="text-white font-bold cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/furkanxny28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-logo.png"
                alt="Linkedin"
                width={80}
                height={75}
              />
            </Link>
          </li>
          <li className="text-white font-bold cursor-pointer">
            <Link
              href="https://github.com/furkanxny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="Github"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li className="text-white font-bold cursor-pointer">
            <Link href="https://docs.google.com/document/d/1iQjbrz_VAyZUfhtEFMYtmR_dvUlZ_R-QW9AA5g6HV9M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <h3 className="text-white font-bold cursor-pointer text-2xl">Resume</h3>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className=" flex flex-row items-center justify-start gap-4 lg:gap-12 h-12">
        <ul className="flex flex-row items-center justify-start gap-4 lg:gap-12 h-12">

          <li className="text-white font-bold cursor-pointer">
            <Link href="#hero">Home</Link>
          </li>
          <li className="text-white font-bold cursor-pointer">
            About
          </li>
          <li className="text-white font-bold cursor-pointer">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="text-white font-bold cursor-pointer">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
