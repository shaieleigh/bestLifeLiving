import React, { useEffect, useState } from 'react';

export default function Appointments () {
  const [appointmentsLi, setAppointments] = useState([]);

  useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/appointments');
            const data = await response.json();
            setAppointments(data.appointments);
        }
        fetchData();
    }, []);

    const appointmentList = appointmentsLi.map((aptdate) => {
      return (
        // <User key={user.id} user={user} />
      <p>{aptdate.date}</p>
      )
    })
    console.log("____Rendering Appointments List____")
    return (
        <>
            <h1>Appointments List: </h1>
            {appointmentList}
        </>
        );

}
