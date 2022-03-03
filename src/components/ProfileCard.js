import React from 'react';
import { MdPets } from "react-icons/md";
import pets from "../utils/pets";

const ProfileCard = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Pet Profile</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {pets.map((pet) => (
            <a key={pet.id} href={pet.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={pet.imageSrc}
                  alt={pet.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <span className="font-medium text-2xl text-[#78b8bc]">{pet.petName} &nbsp;</span><MdPets className="inline-block text-[#8e7ea3] text-2xl align-top mt-1" />
              <div><b className="flex-none font-medium text-md text-[#007890]">Owner: </b><span className="text-sm text-gray-700">{pet.ownerName}</span></div>
              <div><b className="flex-none font-medium text-md text-[#007890]">Breed: </b><span className="text-sm text-gray-700">{pet.breed}</span></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard