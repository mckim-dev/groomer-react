import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import reviews from '../utils/reviews';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Testimonial = () => {
    return (
        <div className="py-2 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10">
                    <dl className="space-y-10">
                        {reviews.map((review) => (
                            <div key={review.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#8e7ea3] text-white">
                                        <review.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-[#8e7ea3]">{review.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{review.description}</dd>
                                <dd className="mt-2 ml-16 text-lg font-medium italic text-[#8e7ea3] flex flex-items items-center">--{review.ownerName}  &nbsp; | &nbsp;
                                    {[0, 1, 2, 3].map((stars) => (
                                        <StarIcon
                                            key={stars}
                                            className={classNames(
                                                review.rating > stars ? 'text-[#78b8bc]' : 'text-[#d7e8e9]',
                                                'h-6 w-6 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </dd>
                                <p className="sr-only">{review.rating} out of 5 stars</p>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}


export default Testimonial