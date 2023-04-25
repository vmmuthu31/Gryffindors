import React from 'react'
import Navbar from './components/Navbar'

const products = [
    {
      id:1,
      name: 'CodeslessCrypto',
      description: 'Codeless crypto refers to no-code tools in Web3 that allow users to integrate cryptocurrency and blockchain functionality into their applications without writing any code.',
      githublink: '',
      mediumlink: '',
    },
    {
      id:2,
      name: 'Green DAO',
      description: 'Building an DAO to help the farmers with the supplychain management, getting identity and apply for the loans.',
      githublink: '',
      mediumlink: '',
    },
    {
      id:3,
      name: 'NFT Media',
      description: 'A decentralised social media platform with account abstraction using Biconomy, storing images and videos in IPFS using NFT Storage and SQL queries using Tableland.',
      githublink: '',
      mediumlink: '',
    },
    {
      id:4,
      name: 'NFT Craft',
      description: 'Creating own world in a minecraft like environment. The players progress will be stored . Each new block is a NFT owned by the player.',
      githublink: '',
      mediumlink: '',
    },
    // Add our products/projects 
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
        <p className="text-3xl text-center font-bold mt-16">Products/Projects</p>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 mt-5  pb-10 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative productcard md:mt-0 mt-2  rounded-lg flex flex-col overflow-hidden"
            >
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className=" text-white text-center text-xl font-bold">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                </h3>
                <p className="text-md text-center text-gray-200">{product.description}</p>
                <div className="py-5 space-x-3">
                <a
                href={product.githublink}
                className="rounded-2xl border-2 border-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Github
              </a>
                <a
                href={product.mediumlink}
                className="rounded-2xl border-2 border-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Medium
              </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products