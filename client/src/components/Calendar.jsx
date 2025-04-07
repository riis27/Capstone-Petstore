import React, { useState } from 'react';
import '../styles/Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderDays = () => {
    const days = [];
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const firstDayIndex = date.getDay();
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let x = 0; x < firstDayIndex; x++) {
      days.push(<div className="calendar-day empty" key={`empty-start-${x}`}></div>);
    }

    for (let day = 1; day <= lastDay; day++) {
      days.push(
        <div className="calendar-day" key={day}>
          {day}
        </div>
      );
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button" onClick={prevMonth}>«</button>
        <div className="calendar-month-year">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button className="nav-button" onClick={nextMonth}>»</button>
      </div>
      <div className="calendar-weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="calendar-days">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
