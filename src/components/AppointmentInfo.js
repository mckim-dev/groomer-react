import { BsFillCalendarDateFill } from 'react-icons/bs'
import { MdPets, MdDeleteForever } from 'react-icons/md'
import pets from '../utils/pets'
import { useState } from 'react'

const AppointmentInfo = ({ appointment, onDeleteAppt }) => {

  return (
    <li className="p-2 flex items-start bg-slate-50 border-2 mb-5">
      <div className="flex-grow">
        <div className="flex items-center border-b-2 border-gray-200 mb-2">
          <span className="flex-grow text-left font-medium text-[#78b8bc]"> <b>Appointment:</b> {appointment.aptDate}</span>
          <span className="flex-grow text-right font-bold text-sm">
            <button onClick={() => onDeleteAppt(appointment.id)} type="button"
              className="p-2 m-2 flex-grow text-right rounded text-white bg-[#78b8bc] hover:bg-[#8e7ea3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007890]">
              <MdDeleteForever className="inline-block text-lg align-text-bottom" /> <b>CANCEL</b> &nbsp;</button>
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex-none text-left font-medium text-[#78b8bc] mr-4">
            <img src={appointment.image}
              alt="pet photo"
              className="w-24 h-24 object-center object-cover"
            />
          </div>
          <div className="flex-none text-left font-medium text-[#78b8bc]">
            <span className="flex-none font-medium text-2xl text-[#78b8bc]">{appointment.petName} &nbsp;</span><MdPets className="inline-block text-[#8e7ea3] text-2xl align-top" />
            <div><b className="flex-none font-medium text-md text-[#007890]">Owner: </b>{appointment.ownerName}</div>
            <div><b className="flex-none font-medium text-md text-[#007890]">Email: </b>{appointment.email}</div>
          </div>
        </div>


      </div>
    </li>
  )
}

export default AppointmentInfo;