import React from 'react';
import Testimonial from '../components/Testimonial';
import ReviewCard from '../components/ReviewCard';
import Starlist from '../components/Stars';

const Contact = () => {
  return (

    <div className="max-w-6xl mx-auto px-4 pt-5 font-thin">


      <h1 className="text-3xl md:text-5xl my-14 font-medium text-center text-[#8e7ea3]">
        What people are saying...</h1>
      <ReviewCard />
    </div>
  );
}

export default Contact;