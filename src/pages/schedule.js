import React from 'react';
import Form from '../components/Form';
import Testimonial from '../components/Testimonial';
import { FaDog } from 'react-icons/fa';

const Schedule = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-5 font-thin">
      <h1 className="text-4xl md:text-6xl my-14 font-medium text-center text-[#8e7ea3]">
        Appointments <FaDog className="inline-block text-[#8e7ea3] align-top" /></h1>

      <div className="flex flex-row flex-wrap mx-auto mt-6 pt-2 overflow-hidden">
        <div className="basis-full lg:basis-2/5 pt-3 pb-8 px-8 mb-5 space-y-0 bg-[#8e7ea358]">
          <Form />
        </div>
        <div className="basis-full lg:basis-3/5 px-3 space-y-1">
          <h4 className="text-3xl font-thin italic text-left pl-6 text-[#8e7ea3]">What our pup parent friends are saying...</h4>
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default Schedule;