import { BiTrash } from 'react-icons/bi';

const AppointmentInfo = ({ appointment, onDeleteAppt }) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-[#78b8bc]">{appointment.petName}</span>
          <span className="flex-grow text-right font-bold text-[#007890]">{appointment.aptDate}</span>
        </div>
        <div><b className="flex-none font-medium text-md text-[#007890]">Owner: </b>{appointment.ownerName}</div>
        <div><b className="flex-none font-medium text-md text-[#007890]">Email: </b>{appointment.email}</div>
        <div><b className="flex-none font-medium text-md text-[#007890] leading-tight">Grooming Needs:</b> {appointment.aptServices}</div>
      </div>
      <button onClick={() => onDeleteAppt(appointment.id)} type="button"
        className="p-1.5 ml-1.5 mt-1 rounded text-white bg-[#78b8bc] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
    </li>
  )
}

export default AppointmentInfo;