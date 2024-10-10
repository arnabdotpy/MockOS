import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="fixed bottom-10 right-10 calendar-container">
      <Calendar onChange={setDate} value={date} />
      <div className="text-center mt-4 text-white">
        <p>{format(date, 'EEEE, MMMM do, yyyy')}</p>
      </div>
    </div>
  );
};

export default CalendarComponent;
