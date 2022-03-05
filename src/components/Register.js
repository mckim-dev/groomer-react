import React from 'react';
import { useForm } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';


const Register = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 8));
    console.log(data);
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12 ">

        <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg rounded-lg">

          <div className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover shadow-lg rounded-l-lg bgReg">
          </div>

          <div className="w-full lg:w-7/12 bg-[#8e7ea315] p-8 shadow-lg rounded-lg lg:rounded-l-none">

            <form className="px-8 pt-6 pb-8 mb-3 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="py-4 text-2xl text-[#8e7ea3] text-center font-medium">Register Your Best Friend</h3>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-4 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="petName">
                    Pet Name
                  </label>
                  <input type="text" id="petName" name="petName" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="Pet Name" {...register("petName", { required: true, min: 0, maxLength: 80 })}
                  />
                  {errors.petName?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Pet name is required</div>
                  )}
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="breed">
                    Breed
                  </label>
                  <input type="text" id="breed" name="breed" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="Breed" {...register("breed", { required: true, min: 0, maxLength: 80 })}
                  />
                  {errors.breed?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />If unknown, enter 'Mix'.</div>
                  )}
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-4 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input type="text" id="firstName" name="firstName" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="First Name" {...register("firstName", { required: true, maxLength: 30 })}
                  />
                  {errors.firstName?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />First name is required</div>
                  )}
                </div>
                <div className="mb-4 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input type="text" id="lastName" name="lastName" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="Last Name" {...register("lastName", { required: true, maxLength: 30 })}
                  />
                  {errors.lastName?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Last name is required</div>
                  )}
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-4 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input type="email" id="email" name="email" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.email?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />An email is required</div>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />A valid email is required</div>
                  )}
                </div>
                <div className="mb-4 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input type="tel" id="phone" name="phone" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="Phone" {...register("phone", { required: true, maxLength: 10, pattern: /^\d{10}$/ })} />
                  {errors.phone?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Phone number is required</div>
                  )}
                  {errors.phone?.type === 'maxLength' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Phone number can not exceed 12 digits in length</div>
                  )}
                  {errors.phone?.type === 'pattern' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Phone number can only contain numbers</div>
                  )}
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-4 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="password">
                    Password
                  </label>
                  <input type="password" id="password" name="password" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="Your Password Here" {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10,}$/ })} />
                  {errors.password?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Password is required</div>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Password must contain at least one number, uppercase letter and lowercase letter.</div>
                  )}

                </div>
                <div className="mb-4 md:mb-0 md:w-1/2">
                  <label className="block font-medium text-[#8e7ea3] text-sm mb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input type="password" id="confirmPassword" name="confirmPassword" autoComplete="on"
                    className="w-full px-3 py-2 shadow-inner placeholder-gray-600 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-[#0078902f] focus:border-[#6a8e95]"
                    placeholder="Confirm Password Here" {...register("confirmPassword", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10,}$/ })} />
                  {errors.confirmPassword?.type === 'required' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Password is required</div>
                  )}
                  {errors.confirmPassword?.type === 'pattern' && (
                    <div className="mb-1 mt-1 text-sm font-medium text-rose-400 "><HiExclamationCircle className='text-xl align-center text-rose-400 inline mr-1' />Password must contain at least one number, uppercase letter and lowercase letter.</div>
                  )}
                </div>
              </div>

              <div className="mt-8 text-center">
                <input id="submit"
                  className="w-full px-4 py-2 font-medium text-white bg-[#8e7ea3] rounded-md hover:bg-[#78b8bc] focus:outline-none focus:shadow-outline"
                  type="submit"
                  placeholder="Register"
                />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register