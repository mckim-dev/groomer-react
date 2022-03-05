import React from 'react';
import { useForm } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';
import { StarIcon } from '@heroicons/react/solid'
import { MdPets } from 'react-icons/md'
import reviews from '../utils/reviews';

const ReviewForm = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 7));
    console.log(data);
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-xl p-5 mx-auto my-5 bg-white rounded-md shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h4 className="font-medium text-[#8e7ea3] text-lg mb-4">Short Heading</h4>
            <input type="text" id="name" name="name"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Short Heading" {...register("name", { required: true, min: 0, maxLength: 40 })}
            />
            {errors.name?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Short Heading Required</div>
            )}
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-[#8e7ea3] text-lg mb-4">Your Review</h4>
            <input type="textarea" id="description" name="description"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Your Review" {...register("description", { required: true, min: 0, maxLength: 300 })}
            />
            {errors.description?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Review Required</div>
            )}
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-[#8e7ea3] text-lg mb-4">Your Name</h4>
            <input type="text" id="ownerName" name="ownerName"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Your Name" {...register("ownerName", { required: true, min: 0, maxLength: 40 })}
            />
            {errors.ownersName?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Name Required</div>
            )}
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-[#8e7ea3] text-lg mb-4">Your Rating</h4>
            <input type="checkbox" id="rating1" name="rating1"
              className="star w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="" {...register("rating1", { required: true, default: true })}
            />
            <input type="checkbox" id="rating2" name="rating2"
              className="star w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="" {...register("rating2", { required: true, default: true })}
            />
            <input type="checkbox" id="rating3" name="rating3"
              className="star w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="" {...register("rating3", { required: true, default: true })}
            />
            <input type="checkbox" id="rating4" name="rating4"
              className="star w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="" {...register("rating4", { required: true, default: true })}
            />
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-[#8e7ea3] text-lg mb-4">Upload Image File</h4>
            <input ref={register} type="file" name="image" />
          </div>
          <div className="mb-6 space-x-2">
            <button
              type="submit"
              className="bg-[#8e7ea3] w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-[#8e7ea358]">
              <MdPets className="h-6 mr-1 text-white" />SHARE REVIEW</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default ReviewForm