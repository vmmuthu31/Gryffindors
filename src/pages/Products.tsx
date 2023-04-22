import React from 'react'
import Navbar from './components/Navbar'

const products = [
    {
      id: 1,
      name: 'Starknet India CC Hackathon',
      href: '#',
      description: 'Team Gryffindors won Starknet global hackathon, impressing judges with their innovative projects and showcasing their skills to the world. They learned the importance of perseverance and teamwork.',
      imageSrc: 'https://pbs.twimg.com/profile_banners/1425813537381773314/1674114637/1080x360',
      imageAlt: '',
    },
  ]

function Products() {
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
        <p className="text-3xl text-center font-bold mt-16">Products</p>
       
      </div>
    </div>
  )
}

export default Products