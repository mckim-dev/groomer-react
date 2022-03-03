import React from 'react';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pt-5 text-center font-thin">
        <h1 className="text-6xl md:text-7xl mt-3 pt-4 text-[#78b8bc]">Pet Profiles</h1>
      </div>
      <ProfileCard />
    </>
  );
}

export default About;