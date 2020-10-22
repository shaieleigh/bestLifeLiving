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

    const appointmentList = appointmentsLi.map((apt) => {
    const date = apt.date.slice(2)
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday']
    const wDay = weekday[apt.date[0]]
      return (
        <div key={apt.id}>
          <strong>Appointment:</strong> {apt.notes}<br />
          <strong>Date:</strong> {wDay} {date}<br />
          <strong>Time:</strong> {apt.time}<br />
          <hr />
        </div>
      )
    })

    return (
        <>
            <h1>Appointments List: </h1>
            {appointmentList}
        </>
        );

}
