import React from 'react';
import Form from '../components/Form';
import Testimonial from '../components/Testimonial';
import { FaDog } from 'react-icons/fa';

const Schedule = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-5 font-thin">
      <h1 className="text-4xl md:text-6xl my-14 font-medium text-center text-[#8e7ea3]">
        Schedule Service <FaDog className="inline-block text-[#8e7ea3] align-top" /></h1>

      <div className="flex flex-row flex-wrap mx-auto mt-6 pt-2 overflow-hidden">
        <div className="basis-full lg:basis-2/5 pt-3 pb-8 px-8 mb-5 space-y-0 bg-[#8e7ea358]">
          <Form />
        </div>
        <div className="basis-full lg:basis-3/5 px-3 space-y-1">

          <div className="flex-1 px-5">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#8e7ea3] bg-opacity-90 bgServDelux p-8 flex flex-col shadow-lg relative undefined">
                <div className="text-white text-lg font-medium my-2">Deluxe Bath
                </div>
                <div className="text-white font-normal">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                  Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet?
                </div>
              </div>

              <div className="bg-[#8e7ea3] bg-opacity-90 bgServNailTrim p-8 flex flex-col shadow-lg relative undefined">
                <div className="text-white text-lg font-medium my-2">Nail Trim
                </div>
                <div className="text-white font-normal">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                  Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet?
                </div>
              </div>

              <div className="bg-[#8e7ea3] bg-opacity-90 bgServFace p-8 flex flex-col shadow-lg relative undefined">
                <div className="text-white text-lg font-medium my-2">Facial Trim
                </div>
                <div className="text-white font-normal">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                  Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet?
                </div>
              </div>

              <div className="bg-[#8e7ea3] bg-opacity-90 bgServArea p-8 flex flex-col shadow-lg relative undefined">
                <div className="text-white text-lg font-medium my-2">Area Specific Trim
                </div>
                <div className="text-white font-normal">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                  Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet?
                </div>
              </div>

              <div className="bg-[#8e7ea3] bg-opacity-90 bgServFull p-8 flex flex-col shadow-lg relative undefined">
                <div className="text-white text-lg font-medium my-2">Full Body Trim
                </div>
                <div className="text-white font-normal">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                  Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet?
                </div>
              </div>

              <div className="bg-[#8e7ea3] bg-opacity-90 bgServCombo p-8 flex flex-col shadow-lg relative undefined">
                <div className="text-white text-lg font-medium my-2">Deluxe Bath and Nail Trim
                </div>
                <div className="text-white font-normal">Cicero famously orated against his political opponent Lucius Sergius Catilina.
                  Quo usque tandem abutere, Catilina, patientia nostra? Quam diu etiam furor iste tuus nos eludet?
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Schedule;