import React from 'react';
import { useForm } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="container mx-auto">
      <div className="max-w-xl p-5 mx-auto my-5 bg-white rounded-md shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h4 className="font-medium text-[#8e7ea3] text-lg mb-4">Appointment For:</h4>
            <input type="text" id="petName" name="petName"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Pet Name" {...register("petName", { required: true, min: 0, maxLength: 80 })}
            />
            {errors.petName?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Pet's name is required</div>
            )}
          </div>
          <div className="mb-6 ">
            <h4 className="font-medium text-[#8e7ea3] text-lg mb-4">Your Contact Information:</h4>
            <input type="text" id="firstName" name="firstName"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none 
              focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="First Name" {...register("firstName", { required: true, maxLength: 30 })}
            />
            {errors.firstName?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />First name is required</div>
            )}
          </div>
          <div className="mb-6">
            <input type="text" id="lastName" name="lastName"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Last Name" {...register("lastName", { required: true, maxLength: 100 })}
            />
            {errors.lastName?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Last name is required</div>
            )}
          </div>
          <div className="mb-6">
            <input type="text" id="email" name="email"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />An email is required</div>
            )}
            {errors.email?.type === 'pattern' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />A valid email is required</div>
            )}
          </div>
          <div className="mb-6">
            <input type="tel" id="phone" name="phone"
              className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Phone" {...register("phone", { required: true, maxLength: 10, pattern: /^\d{10}$/ })} />
            {errors.phone?.type === 'required' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Phone number is required</div>
            )}
            {errors.phone?.type === 'maxLength' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Phone number can not exceed 12 digits in length</div>
            )}
            {errors.phone?.type === 'pattern' && (
              <div className="mb-3 mt-2 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Phone number can only contain numbers</div>
            )}
          </div>
          <div className="mb-6">
            <h4 className="font-medium text-[#8e7ea3] text-lg">Select Appointment Date and Time:</h4>
          </div>
          <div className="mb-6">
            <input type="datetime-local" id="dateTimeAppt" name="dateTimeAppt"
              className="w-full px-3 py-2 mb-3 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              placeholder="Appointment Date" {...register("dateTimeAppt", { required: true })} />
            {errors.dateTimeAppt?.type === 'required' && (
              <div className="mb-3 text-base font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Please choose an appointment date and time</div>
            )}
          </div>

          <div className="mt-4 space-y-4">
            <h4 className="font-medium text-[#8e7ea3] text-lg">Select Grooming Service:</h4>
            <div className="flex items-center">
              <div className="mb-1">
                <input type="checkbox" id="deluxeBathNailTrim"
                  className="focus:ring-[#007890] h-4 w-4 text-[#007890] border-gray-300"
                  name="deluxeBathNailTrim" {...register("deluxeBathNailTrim", {})} />
                <label htmlfor="deluxeBathNailTrim" className="ml-3 inline-block text-sm font-medium text-gray-700">Deluxe Bath and Nail Trim</label>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mb-1">
                <input type="checkbox" id="deluxeBath"
                  className="focus:ring-[#007890] h-4 w-4 text-[#007890] border-gray-300"
                  name="deluxeBath" {...register("deluxeBath", {})} />
                <label htmlfor="deluxeBath" className="ml-3 inline-block text-sm font-medium text-gray-700">Deluxe Bath</label>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mb-8">
                <input type="checkbox" id="nailTrim"
                  className="focus:ring-[#007890] h-4 w-4 text-[#007890] border-gray-300"
                  name="nailTrim" {...register("nailTrim", {})} />
                <label htmlfor="nailTrim" className="ml-3 inline-block text-sm font-medium text-gray-700">Nail Trim</label>
              </div>
            </div>
          </div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-[#8e7ea3] text-lg">Coat Trim Services:</h4>
            <select className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              id="coatTrimService" name="coatTrimService"
              {...register("coatTrimService", {})}>
              <option value="">- select -</option>
              <option value="Facial Trim">Facial Only</option>
              <option value="Specific Area Trim">Specific Area Only</option>
              <option value="Full Body Trim">Full Body Trim</option>
            </select>
          </div>
          <div className="mb-6 space-y-2">
            <h4 className="font-medium text-[#8e7ea3] text-lg">Appointment Notes:</h4>
            <textarea className="w-full px-3 py-2 placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
              {...register("Appointment Notes", {})} />
          </div>
          <div className="mb-6 space-x-2">
            <button type="submit" className="py-2 px-4 border border-transparent rounded-md shadow-sm text-medium font-bold text-white bg-[#8e7ea3] hover:bg-[#007890] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">SUBMIT</button>
            <button type="button" onClick={() => reset()} className="py-2 px-4 border border-transparent rounded-md shadow-sm text-medium font-bold text-white bg-[#78b8bc] hover:bg-[#8e7ea3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">RESET</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;