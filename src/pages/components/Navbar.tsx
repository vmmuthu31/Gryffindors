import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { dmSans } from "@/Fonts/font";
import Image from "next/image";
import logo from "@Assets/logo.svg";
import Star from "@Assets/star.svg";

const navigation = [
  { name: "About", href: "About" },
  { name: "Our Services", href: "#" },
  { name: "Our Team", href: "#" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 py-14 lg:px-24"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 flex items-center gap-3 p-1.5">
              <Image
                src={logo}
                alt="Gryffindors"
                className="h-[61px] w-[54px]"
                width={100}
                height={100}
              />
              <p
                className={`text-[32px] text-[#770002] font-medium ${dmSans.className}`}
              >
                Gryffindors
              </p>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg  leading-6 text-[#770002] ${dmSans.className}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden text-2xl space-x-2 lg:flex items-center lg:flex-1 lg:justify-end">
            <Image
              src={Star}
              alt="star"
              className="bg-[#770002] rounded-full w-[43px] h-[43px] p-2"
              width={24}
              height={24}
            />
            <button
              className={`bg-[#770002] text-white uppercase px-8 text-lg py-2 rounded-full ${dmSans.className}`}
            >
              Contact Us
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className="text-xl text-black font-bold">Gryffindors</p>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className=" text-2xl space-x-3 flex  text-black lg:justify-end">
                  <a href="https://github.com/GryffindorsDAO" target="_blank">
                    {" "}
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCAvUOFGXknT8ueKQQp6SRKQ"
                    target="_blank"
                  >
                    {" "}
                    <AiFillYoutube />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gryffindors-guild-177295260/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedinIn />
                  </a>
                  <a href="https://twitter.com/Gryffindors_W3" target="_blank">
                    {" "}
                    <AiOutlineTwitter />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;
