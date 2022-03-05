import React from 'react';
import { Link } from 'react-router-dom';

const Headerblock = () => {
  return (
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">

        <div className="max-w-lg md:mx-12 md:order-2">
          <h1 className="text-3xl font-medium tracking-wide text-[#78b8bc] dark:text-white md:text-4xl">The Pampered Pup</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">A Simple React Application using Tailwind CSS</p>
          An initial set of JSON data is provided via a fetch request function for
          evaluating the properly functioning sort and search features.
          <div className="mt-6">
            <Link to='/appts' className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-[#78b8bc] rounded-md md:inline hover:bg-[#188087]">
              Check Appointment Schedule
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://placedog.net/1280/g?id=124" alt="Happy pups" />
      </div>
    </div>
  )
}

export default Headerblock;