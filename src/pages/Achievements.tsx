import React from 'react'
import Navbar from './components/Navbar'

const Achievement = [
  {
    id: 1,
    name: 'Starknet India CC Hackathon',
    href: '#',
    description: 'Team Gryffindors won Starknet global hackathon, impressing judges with their innovative projects and showcasing their skills to the world. They learned the importance of perseverance and teamwork.',
    imageSrc: 'https://pbs.twimg.com/media/FjNoDKxXoAEgrdM?format=jpg&name=4096x4096',
    imageAlt: '',
  },
]

function Achievements() {
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
        <p className="text-3xl text-center font-bold mt-16">Achievements</p>
        <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {Achievement.map((achievement) => (
            <div
              key={achievement.id}
              className="group relative achievecard rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-80">
                <img
                  src={achievement.imageSrc}
                  alt={achievement.imageAlt}
                  className="w-full h-full object-center sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="font-mediumtext-white text-center text-xl font-bold">
                  <a href={achievement.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {achievement.name}
                  </a>
                </h3>
                <p className="text-md text-center text-gray-200">{achievement.description}</p>
                <div className=" flex justify-between">
                    <p></p>
                <a
                href="#"
                className="rounded-2xl border-2 border-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read more
              </a>
              <p></p>
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

export default Achievements