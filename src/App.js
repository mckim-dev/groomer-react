import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
import AppointmentInfo from "./components/AppointmentInfo";


function App() {

  let [appointmentList, setAppointmentList] = useState([]);
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
    <div className="App container mx-auto mt-5 font-thin">
      <img src="../cutedogsbanner.jpg" alt="Cute Dogs"></img>
      <h1 className="text-5xl my-8">
        <BiCalendar className="inline-block text-[#78b8bc] align-top" />Schedule Grooming</h1>
      <div className="gap-12 columns-2">
        <AddAppointment
          onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
          lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}

        />

        <Search query={query}
          onQueryChange={myQuery => setQuery(myQuery)}
          orderBy={orderBy}
          onOrderByChange={mySort => setOrderBy(mySort)}
          sortBy={sortBy}
          onSortByChange={mySort => setSortBy(mySort)}
        />

        <ul className="divide-y divide-gray-200">
          {filteredAppts
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
    </div>
  );
}

export default App;
