import React from "react";
import Navbar from "./components/Navbar";
import { AiFillGithub, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const teamlist = [
  {
    id: 9,
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
    portfolioLink: "",
  },
  {
    id: 10,
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
    portfolioLink: "",
  },
  {
    id: 11,
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
    portfolioLink: "",
  },
  {
    id: 12,
    name: "Nishant SPK",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/235293917-4672cd4a-f63b-41ac-bb48-0506baa4dc38.jpeg",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
    portfolioLink: "",
  },
  {
    id: 13,
    name: "Ravindran ",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/235293916-ae7e3496-ab44-4a6d-b735-8d2f38d0546c.jpeg",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
    portfolioLink: "",
  },
  {
    id: 14,
    name: "Sunil S",
    href: "#",
    position: "Co-Founder",
    role: "Web3-Developer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/235293614-2e9f611a-4908-40c0-93be-ac78715f0601.png",
    imageAlt: "",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
    portfolioLink: "",
  },
  {
    id: 15,
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
    portfolioLink: "",
  },
  {
    // Add our team here
    id: 1,
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
    portfolioLink: "",
  },
  {
    id: 2,
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
    portfolioLink: "",
  },
  {
    id: 3,
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
    portfolioLink: "",
  },
  {
    id: 4,
    name: "Maheshwaran",
    href: "#",
    position: "Co-Founder",
    role: "UI/UX Designer",
    contributor: "Open Source Contributor",
    imageSrc:
      "https://user-images.githubusercontent.com/67679146/235293913-51a485d7-5678-45f2-b249-27e16fca1e35.jpeg",
    imageAlt: "mahesh",
    githublink: "",
    discordLink: "",
    linkedin: "",
    twitterLink: "",
    portfolioLink: "",
  },
  {
    id: 5,
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
    portfolioLink: "",
  },
  {
    id: 6,
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
    portfolioLink: "https://thiru-dev-portfolio.netlify.app/",
  },
  {
    id: 7,
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
    portfolioLink: "",
  },
  {
    id: 8,
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
    portfolioLink: "https://vm-portfolio3.netlify.app/",
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
                      <a href={team.portfolioLink} target="_blank">
                        {" "}
                        <BsGlobe className="w-4 h-5 mt-0.5" />
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
