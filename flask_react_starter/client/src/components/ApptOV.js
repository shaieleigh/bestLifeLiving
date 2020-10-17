import React, { useEffect, useState } from 'react';

export default function  AppointmentOV () {
  const [appointmentsLi, setAppointments] = useState([]);

  useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/appointments');
            const data = await response.json();
            setAppointments(data.appointments);
        }
        fetchData();
    }, []);

    const appointmentList = appointmentsLi.map((appointment) => {
      const date = new Date();
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      const nowDate = month + ' ' + day + ' ' + year
      const apptDate = appointment.date.slice(2)
      const demoDate = '10 30 2020'
      if (demoDate === apptDate) {

        return (
          <p key={appointment.id}>{appointment.notes} {appointment.time}</p>
          )
        }
    })
    console.log("____Rendering To Do Overview List____")
    return (
        <>
            <h1>Today's Appointments: </h1>
            {appointmentList}
        </>
        );

}
