import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
import AppointmentInfo from "./components/AppointmentInfo";


function App() {

  let [appointmentList, setAppointmentList] = useState([]);
  let [listLength, setListLength] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppts = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App max-w-6xl mx-auto px-4 pt-5 font-thin">
      <img src="../cutedogsbanner.jpg" alt="Cute Dogs"></img>
      <h1 className="text-3xl md:text-5xl my-8">
        <BiCalendar className="inline-block text-[#78b8bc] align-top" />Schedule Grooming</h1>
      <div class="flex flex-row flex-wrap mx-auto overflow-hidden">
        <div class="basis-full md:basis-3/5 px-3 space-y-4">
          <Search query={query}
            onQueryChange={myQuery => setQuery(myQuery)}
            orderBy={orderBy}
            onOrderByChange={mySort => setOrderBy(mySort)}
            sortBy={sortBy}
            onSortByChange={mySort => setSortBy(mySort)}
          />
          <p>The following list provides the first 5 appointments found within the search criteria</p>
          <ul className="divide-y divide-gray-200">
            {filteredAppts.slice(0, 5)
              .map(appointment => (
                <AppointmentInfo key={appointment.id}
                  appointment={appointment}
                  onDeleteAppt={
                    appointmentId =>
                      setAppointmentList(appointmentList.filter(appointment =>
                        appointment.id !== appointmentId))
                  }
                />
              ))
            }
          </ul>
        </div>
        <div class="basis-full md:basis-2/5 px-3 pt-1 mb-6">
          <AddAppointment
            onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
            lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}

          />
        </div>
      </div>
    </div>
  );
}

export default App;
