// import React from 'react'
// import pets from '../utils/pets'
// import { useState } from 'react'



// const findPetImage = (name) => {
//   const found = pets.filter(pet => pet.petName === name);
//   setImage(found.imgSrc)
//   return found;
// }

// const ApptImage= ({}) => {
//   const clearImgData = {
//     id: '',
//     ownerName: '',
//     href: '#',
//     petName: '',
//     breed: '',
//     imageSrc: '',
//     imageAlt: '',
//     extNum: ''
//   };

//   const [imgData, setImgData] = useState(clearImgData);

//   function imgDataStore() {
//     const imgInfo = {
//       id: imgData.pet.id,
//       ownerName: imgData.pet.ownerName,
//       href: '#',
//       petName: imgData.pet.petName,
//       breed: imgData.pet.breed,
//       imageSrc: imgData.pet.imgSrc,
//       imageAlt: imgData.pet.petName,
//       extNum: imgData.pet.extNum
//     }
//     onSendAppointment(imgInfo);
//     setImgData(clearimgData);
//   }



//     let image = ;
//     setImage({ ...image, petName: pet.petName }) }}

//     return (

//     pets.filter(pet => petName === name);
//     findPet.imgSrc
//         (pet) => (
//         <span className="flex-none text-left">
//         <a key={pet.imageSrc} href={pet.imageSrc} className="inline-block w-1/3 px-3 mr-3"></a></span>

//         <div className="flex flex-wrap justify-center">
//   <div className="w-6/12 sm:w-4/12 px-4">
//     <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
//   </div>
// </div>

// <button type="submit" onClick={imgDataStore} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-[#8e7ea3] hover:bg-[#007890] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
//               Submit
//             </button>



//          ">
//           <div className="rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
//             <img
//               src={pet.imageSrc}
//               alt={pet.imageAlt}
//               className="w-full h-full object-center object-cover group-hover:opacity-75"
//             />
//           </div>
//         </a>
//     ))}
//   return (
//     <div>ApptImage</div>

// }

// export default ApptImage