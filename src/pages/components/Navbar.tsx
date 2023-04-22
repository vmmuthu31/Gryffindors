import React,{ useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AiFillGithub, AiOutlineTwitter} from "react-icons/ai"
import {FaDiscord, FaLinkedinIn} from "react-icons/fa"
import Link from "next/link"


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: 'About' },
    { name: 'Team', href: 'Team' },
    { name: 'Products', href: 'Products' },
    { name: 'Achievements', href: 'Achievements' },
    { name: 'Contact Us', href: 'Contact' },
  ]

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
         <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            <p className='text-3xl font-bold'>Gryffindors</p>
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
              <Link key={item.name} href={item.href} className="text-md font-semibold leading-6 ">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden text-2xl space-x-3 lg:flex lg:flex-1 lg:justify-end">
          <AiFillGithub />
          <FaDiscord />
          <FaLinkedinIn />
          <AiOutlineTwitter />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className='text-xl font-bold'>Gryffindors</p>
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
          <AiFillGithub />
          <FaDiscord />
          <FaLinkedinIn />
          <AiOutlineTwitter />
          </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

export default Navbar