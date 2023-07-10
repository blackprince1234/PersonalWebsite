import React, { useState } from 'react';
import Calendar from 'react-calendar';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ position:'fixed', marginTop: '15vh', zIndex: -1}}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default MyCalendar;

