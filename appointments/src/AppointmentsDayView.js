import React from 'react';

const appointmentTimeofDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment, i) => (
        <li key={i}>{appointmentTimeofDay(appointment.startsAt)}</li>
      ))}
    </ol>
  </div>
);
