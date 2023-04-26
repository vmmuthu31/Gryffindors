import React from "react";
import Navbar from "./components/Navbar";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import deepak from "../Assets/deepak.jpeg";
import nishant from "../Assets/nishanat.jpeg";
const teamlist = [
  {
    // Add our team here
    id: 8,
    name: "Rajan",
    href: "#",
    position: "Co-Founder",
    role: "Frontend-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1648988540968251392/tZAYjQeT_400x400.jpg",
    imageAlt: "",
    githublink: "https://github.com/Rajan-007",
    discordLink: "https://discordapp.com/users/Rajan#3503",
    linkedin: "http://www.linkedin.com/in/rajan-r-kkt2002",
    twitterLink: "https://twitter.com/Aravinth_Rajan_",
  },
  {
    id: 7,
    name: "Ganesh",
    href: "#",
    position: "Co-Founder",
    role: "UI/UX Desinger",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1642018654920519682/jGhQ3fHe_400x400.jpg",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 6,
    name: "Karthik",
    href: "#",
    position: "Co-Founder",
    role: "Content Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641603-89a2cdef-9bc9-4dfd-a1d3-170e84ba3ba7.png",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 5,
    name: "Maheshwaran",
    href: "#",
    position: "Co-Founder",
    role: "UI/UX Designer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234640975-ef13d445-759b-4e47-b865-3907d3bea4c5.png",
    imageAlt: "mahesh",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 4,
    name: "Prashant",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641528-8b770b1e-c5a7-42ee-bbeb-588f2545f266.png",
    imageAlt: "",
    githublink: "https://github.com/prashantexe",
    discordLink: "https://discordapp.com/users/Prashant.exe#5894",
    linkedin: "https://www.linkedin.com/in/prashant-d-7a3915249/",
    twitterLink: "https://twitter.com/prashantdp7",
  },
  {
    id: 3,
    name: "Thiru Murugan",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1601831104033755139/AUNQ0wR7_400x400.jpg",
    imageAlt: "thiru-pic",
    githublink: "https://github.com/Thirumurugan7",
    discordLink: "https://discordapp.com/users/thiru7#4702",
    linkedin: "https://www.linkedin.com/in/thiru-murugan-935464218/",
    twitterLink: "https://twitter.com/Thiru_levi",
  },
  {
    id: 2,
    name: "Nagi Pragalathan",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641142-3992c45e-a462-43d3-8f6e-d2f248b225cf.png",
    imageAlt: "",
    githublink: "https://github.com/nagipragalathan",
    discordLink: "https://discordapp.com/users/nagipragalathan#5182",
    linkedin: "https://www.linkedin.com/in/nagi-pragalathan-n-a03a55230",
    twitterLink: "https://twitter.com/nagipragalathan",
  },
  {
    id: 1,
    name: "Vairamuthu M",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc: "https://avatars.githubusercontent.com/u/88650559?v=4",
    imageAlt: "",
    githublink: "https://github.com/vmmuthu31",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 1,
    name: "Vishal Aakash H",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641084-63c387e8-5b8c-420a-9c87-a7cbf5a8e514.png",
    imageAlt: "",
    githublink: "https://github.com/vishalmet",
    discordLink: "https://discordapp.com/users/Vishal18#1505",
    linkedin: "https://www.linkedin.com/in/vishal-aakash-644810249",
    twitterLink: "https://twitter.com/VishalAakash18",
  },
  {
    id: 1,
    name: "Manikandan",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641406-feba761f-44ad-4c1d-bfaf-6218d60bd87d.png",
    imageAlt: "",
    githublink: "https://github.com/manicdon7",
    discordLink: "https://discord.gg/m7E8pAXb",
    linkedin: "https://www.linkedin.com/in/mani-kandan-1b0846248/",
    twitterLink: "https://twitter.com/manicdon7",
  },
  {
    id: 1,
    name: "Deepak Raja",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641328-d5c6fe2f-06ca-4e75-ae6e-995d1888ebeb.png",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 1,
    name: "Nishant SPK",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641238-a537846b-a094-4350-9c9f-d91986a757a8.png",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 1,
    name: "Ravindran ",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "data:image/jpeg;base64,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",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 1,
    name: "Sunil S",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641238-a537846b-a094-4350-9c9f-d91986a757a8.png",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
  {
    id: 1,
    name: "Santhosh Kumar S",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/234641238-a537846b-a094-4350-9c9f-d91986a757a8.png",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
  },
];

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
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
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
                    <p className="text-md text-center text-gray-200">
                      {team.position}
                    </p>
                    <p className="text-sm text-center text-gray-200">
                      {team.role}
                    </p>
                    <p className="text-sm text-center text-gray-200">
                      {team.contributor}
                    </p>
                    <div className=" text-2xl space-x-3 flex flex-1 justify-center z-40">
                      <a href={team.githublink} target="_blank">
                        {" "}
                        <AiFillGithub />
                      </a>
                      <a href={team.discordLink} target="_blank">
                        {" "}
                        <FaDiscord />
                      </a>
                      <a href={team.linkedin} target="_blank">
                        {" "}
                        <FaLinkedinIn />
                      </a>
                      <a href={team.twitterLink} target="_blank">
                        {" "}
                        <AiOutlineTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
