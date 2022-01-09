import React from 'react';

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment, i) => (
        <div key={i}></div>
      ))}
    </ol>
  </div>
);
