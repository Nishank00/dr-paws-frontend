import React, { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];

    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      days.push(new Date(day));
    }

    return days;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Add any other logic you want to perform on date selection
  };

  const handleMonthChange = (change) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + change);
    setCurrentMonth(newMonth);
  };

  const renderHeader = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <div className="flex justify-between items-center mb-10 text-primary font-bold">
        <button onClick={() => handleMonthChange(-1)}>{"<"}</button>
        <h2 className="text-lg font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button onClick={() => handleMonthChange(1)}>{">"}</button>
      </div>
    );
  };

  const renderDaysOfWeek = () => {
    const dayOfWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="grid grid-cols-7 gap-1 text-center mb-8 text-primary font-bold">
        {dayOfWeekNames.map((day, index) => (
          <div key={index} className="text-sm font-semibold">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCalendar = () => {
    const days = daysInMonth(currentMonth);

    return (
      <div className="grid grid-cols-7 gap-1 mb-10 bg-primary4 text-primary">
        {days.map((date, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(date)}
            className={`p-2 text-sm cursor-pointer text-center ${
              date.getMonth() !== currentMonth.getMonth() ? "text-gray-400" : ""
            } ${
              selectedDate &&
              date.toDateString() === selectedDate.toDateString()
                ? "bg-primary text-white rounded-full"
                : ""
            }`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    );
  };

  const renderTimezone = () => {
    return (
      <div className=" text-primary">
        <p>Time zone</p>
        <p>India Standard Time (2:30pm)</p>
      </div>
    );
  };

  return (
    <div className="w-full border p-10 rounded shadow bg-primary4 text-primary">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderCalendar()}
      {renderTimezone()}
    </div>
  );
};

export default Calendar;