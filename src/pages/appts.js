import { useState, useEffect, useCallback } from 'react';
import { FaDog } from 'react-icons/fa';
import Search from "../components/Search";
import AppointmentInfo from "../components/AppointmentInfo";

const Appointments = () => {
    let [appointmentList, setAppointmentList] = useState([]);
    let [query, setQuery] = useState("");
    let [sortBy, setSortBy] = useState("petName");
    let [orderBy, setOrderBy] = useState("asc");

    const filteredAppts = appointmentList.filter(
        item => {
            return (
                item.petName.toLowerCase().includes(query.toLowerCase()) ||
                item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
                item.email.toLowerCase().includes(query.toLowerCase()) ||
                item.aptServices.toLowerCase().includes(query.toLowerCase())
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
        <div className="max-w-6xl mx-auto px-4 pt-5 font-thin">

            <h1 className="text-3xl md:text-5xl my-14 font-medium text-center text-[#8e7ea3]">
                Grooming Schedule <FaDog className="inline-block text-[#8e7ea3] align-top" /></h1>


            <div className="w-2/3 mx-auto px-3 my-8 space-y-8">
                <Search query={query}
                    onQueryChange={myQuery => setQuery(myQuery)}
                    orderBy={orderBy}
                    onOrderByChange={mySort => setOrderBy(mySort)}
                    sortBy={sortBy}
                    onSortByChange={mySort => setSortBy(mySort)}
                />
            </div>


            <div className="flex flex-row flex-wrap mx-auto mt-6 overflow-hidden">
                <div className="basis-full md:basis-1/2 px-3 space-y-4">

                    <ul className="divide-gray-200 mb-2">
                        {filteredAppts.slice(0, 6)
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
                <div className="basis-full md:basis-1/2 px-3 space-y-4">
                    <ul className=" divide-gray-200 mb-2">
                        {filteredAppts.slice(6, 12)
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
        </div>
    );
}

export default Appointments
