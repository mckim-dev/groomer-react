import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import { MdPets } from 'react-icons/md'
import reviews from '../utils/reviews';


function Starlist(reviewRate) {
  const stars = Array(5).fill(0);

  return (
    <div className="flex flex-row">
      {stars.map((_, index) => {
        return (
          <StarIcon
            key={index}
            className={reviewRate > index ? "text-[#78b8bc] h-6 w-6 flex-shrink-0 mr-2" : "text-gray-200 h-6 w-6 flex-shrink-0 mr-2"}
          />
        )
      })}
    </div>
  )
}

const ReviewCard = () => {

  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-8 lg:grid-cols-3">
      {
        reviews.map((review) => (

          <div key={review.name}>
            <div className="bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
              <div>
                <img src={review.image} alt="happy customer" />
              </div>
              <div className="p-3 space-y-3">
                <h3 className="text-gray-700 font-semibold text-md">{review.name}</h3>
                <div className="h-16 text-ellipsis">
                  <p className="text-sm text-gray-900 leading-sm">
                    {review.description}
                  </p>
                </div>
                <p className="text-lg font-medium italic text-[#8e7ea3]">- {review.ownerName}</p>
                <div className="flex flex-row">
                  <span className="flex text-sm text-gray-900 leading-sm italic">Our Rating: </span>
                  <span className="flex"><StarIcon className={review.rating1 !== 'false' ? "text-[#78b8bc] h-6 w-6 flex-shrink-0" : "text-gray-200 h-6 w-6 flex-shrink-0"} /></span>
                  <span className="flex"><StarIcon className={review.rating2 !== 'false' ? "text-[#78b8bc] h-6 w-6 flex-shrink-0" : "text-gray-200 h-6 w-6 flex-shrink-0"} /></span>
                  <span className="flex"><StarIcon className={review.rating3 !== 'false' ? "text-[#78b8bc] h-6 w-6 flex-shrink-0" : "text-gray-200 h-6 w-6 flex-shrink-0"} /></span>
                  <span className="flex"><StarIcon className={review.rating4 !== 'false' ? "text-[#78b8bc] h-6 w-6 flex-shrink-0" : "text-gray-200 h-6 w-6 flex-shrink-0"} /></span>
                </div>
                <button
                  class="bg-[#8e7ea3] w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-[#8e7ea358]">
                  <MdPets className="h-6 mr-1 text-white" /> Share Review
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ReviewCard