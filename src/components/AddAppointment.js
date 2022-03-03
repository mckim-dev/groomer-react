import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const clearData = {
    ownerName: '',
    petName: '',
    aptDate: '',
    aptTime: '',
    aptServices: '',
    email: '',
    image: ''
  };

  let [formData, setFormData] = useState(clearData);

  function formDataPublish() {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + ' ' + formData.aptTime,
      aptServices: formData.aptServices,
      email: formData.email,
      image: formData.petName
    }
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
  }

  return (
    <div className="ml-0 mt-3 md:mt-0 md:ml-3">
      <div
        className="bg-[#8e7ea3] text-white font-bold text-md px-2 py-2 w-full">
        <div><BiCalendarPlus className="inline-block text-lg align-text-top" />  Add Appointment  </div>
      </div>
      <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 py-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Owner Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="ownerName" id="ownerName" required="true"
              onChange={(event) => { setFormData({ ...formData, ownerName: event.target.value }) }}
              value={formData.ownerName}
              className="max-w-lg block w-full shadow-sm focus:ring-[#007890] focus:border-[#007890] sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-5">
          <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Pet Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="petName" id="petName" required="true"
              onChange={(event) => { setFormData({ ...formData, petName: event.target.value, image: event.target.value }) }}
              value={formData.petName}
              className="max-w-lg block w-full shadow-sm focus:ring-[#007890] focus:border-[#007890] sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-5">
          <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Appt. Date
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="date" name="aptDate" id="aptDate" required="true"
              onChange={(event) => { setFormData({ ...formData, aptDate: event.target.value }) }}
              value={formData.aptDate}
              className="max-w-lg block w-full shadow-sm focus:ring-[#007890] focus:border-[#007890] sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-5">
          <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Appt. Time
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="time" name="aptTime" id="aptTime" required="true"
              onChange={(event) => { setFormData({ ...formData, aptTime: event.target.value }) }}
              value={formData.aptTime}
              className="max-w-lg block w-full shadow-sm focus:ring-[#007890] focus:border-[#007890] sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-5">
          <label htmlFor="aptServices" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Appt. Services
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="aptServices" name="aptServices" rows="3" required="true"
              onChange={(event) => { setFormData({ ...formData, aptServices: event.target.value }) }}
              value={formData.aptServices}
              className="shadow-sm focus:ring-[#007890] focus:border-[#007890] mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Include Grooming Service Details"></textarea>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Email
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="email" name="email" id="email" required="true"
              onChange={(event) => { setFormData({ ...formData, email: event.target.value }) }}
              value={formData.email}
              className="max-w-lg block w-full shadow-sm focus:ring-[#007890] focus:border-[#007890] sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-[#8e7ea3] hover:bg-[#007890] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Submit
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AddAppointment;