import React from 'react'
import Navbar from './components/Navbar'
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord, FaLinkedinIn } from 'react-icons/fa'

const teamlist = [
  {
    id: 8,
    name: 'Rajan',
    href: '#',
    position: 'Co-Founder',
    role: 'Frontend-Developer',
    contributor: "Open Source Contributor",
    imageSrc: 'https://pbs.twimg.com/profile_images/1648988540968251392/tZAYjQeT_400x400.jpg',
    imageAlt: '',
    githublink: '',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
    },
    {
    id: 7,
    name: 'Ganesh',
    href: '#',
    position: 'Co-Founder',
    role: 'UI/UX Desinger',
    contributor: "Open Source Contributor",
    imageSrc: 'https://pbs.twimg.com/profile_images/1642018654920519682/jGhQ3fHe_400x400.jpg',
    imageAlt: '',
    githublink: '',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
    },
    {
    id: 6,
    name: 'Karthik',
    href: '#',
    position: 'Co-Founder',
    role: 'Content Developer',
    contributor: "Open Source Contributor",
    imageSrc: 'https://pbs.twimg.com/profile_images/1596766356388487168/sRV5Urt8_400x400.jpg',
    imageAlt: '',
    githublink: '',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
    },
    {
    id: 5,
    name: 'Maheshwaran',
    href: '#',
    position: 'Co-Founder',
    role: 'UI/UX Designer',
    contributor: "Open Source Contributor",
    imageSrc: 'https://pbs.twimg.com/profile_images/1508358402535473160/JDM4Uun0_400x400.jpg',
    imageAlt: '',
    githublink: '',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
    },
    {
    id: 4,
    name: 'Prashant',
    href: '#',
    position: 'Co-Founder',
    role: 'Web3-Developer',
    contributor: "Open Source Contributor",
    imageSrc: 'https://media.licdn.com/dms/image/D5603AQGDBL7lhmCs6w/profile-displayphoto-shrink_800_800/0/1672680301344?e=1687392000&v=beta&t=93sTRun_BMpArlhKGGPJIik3FEeJl3decLXlvjt347A',
    imageAlt: '',
    githublink: '',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
    },
    {
    id: 3,
    name: 'Thiru Murugan',
    href: '#',
    position: 'Co-Founder',
    role: 'Web3-Developer',
    contributor: "Open Source Contributor",
    imageSrc: 'https://pbs.twimg.com/profile_images/1601831104033755139/AUNQ0wR7_400x400.jpg',
    imageAlt: '',
    githublink: '',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
    },
  {
    id: 2,
    name: 'Nagi Pragalathan',
    href: '#',
    position: 'Co-Founder',
    role: 'Web3-Developer',
    contributor: "Open Source Contributor",
    imageSrc: 'https://media.licdn.com/dms/image/D5603AQFHd3kG-7zwxw/profile-displayphoto-shrink_400_400/0/1672584349709?e=1687392000&v=beta&t=bm3h8sVtdgoOx5SR8UcZ0vR-T9lZkvSwdCT_3Nw_xDE',
    imageAlt: '',
    githublink: '',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
  },
  {
    id: 1,
    name: 'Vairamuthu M',
    href: '#',
    position: 'Co-Founder',
    role: 'Web3-Developer',
    contributor: "Open Source Contributor",
    imageSrc: 'https://avatars.githubusercontent.com/u/88650559?v=4',
    imageAlt: '',
    githublink: 'https://github.com/vmmuthu31',
    discordLink: '',
    linkedin: '',
    twitterLink: '',
  },
  
]

function Team() {
  return (
    <div>
        <Navbar />
        <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1055/428] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-[#001DFF] to-[#001DFF] opacity-80 sm:left-[calc(60%-20rem)] sm:w-[62.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <p className="text-3xl text-center font-bold mt-16">Team</p>
        <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-20">
          {teamlist.map((team) => (
            <div
              key={team.id}
              className="group relative teamcard rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-80">
                <img
                  src={team.imageSrc}
                  alt={team.imageAlt}
                  className="w-full h-full object-center sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="font-mediumtext-white text-center text-xl font-bold">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {team.name}
                </h3>
                <p className="text-md text-center text-gray-200">{team.position}</p>
                <p className="text-sm text-center text-gray-200">{team.role}</p>
                <p className="text-sm text-center text-gray-200">{team.contributor}</p>
                <div className=" text-2xl space-x-3 flex flex-1 justify-center">
          <a href={team.githublink}  target="_blank"> <AiFillGithub /></a>
          <a href={team.discordLink}  target="_blank">   <FaDiscord /></a>
          <a href={team.linkedin}  target="_blank">  <FaLinkedinIn /></a>
         <a href={team.twitterLink} target="_blank"> <AiOutlineTwitter /></a>
          </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Team