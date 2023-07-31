import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import events from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
  if(localStorage.getItem('Events') === null){
    console.log("Adding new Event");
    localStorage.setItem('Events', JSON.stringify(events));
  }
  

  const [value, onChange] = useState(new Date());
  const [showTime, setShowTime] = useState(false);


  // let myEvents = localStorage.getItem('Events');
  // console.log(JSON.parse(myEvents));
  console.log(JSON.parse(localStorage.getItem('Events')));
  const [eventsData, setEventsData] = useState(JSON.parse(localStorage.getItem('Events')));


  


  moment.locale('ko-KR');
  const localizer = momentLocalizer(moment);
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
      localStorage.setItem('Events', JSON.stringify(eventsData));
  };
  localStorage.setItem('Events', JSON.stringify(eventsData));

  return (
    <div id="RyanCalendar" style={{ position: 'fixed', marginTop: '13vh', zIndex: 0, width: '100vw', height: '90vh' }}>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect} 
      />
    </div>
  );
}

export default MyCalendar;

