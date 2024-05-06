import React, { useEffect, useState } from "react";
import moment from "moment";

const Calendar = ({
  onSelect,
  selected = null,
  disabled = false,
  availableDays = [],
}) => {
  const [currentTime, setCurrentTime] = useState(moment().format("hh:mm A"));
  const [selectedDate, setSelectedDate] = useState(selected);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstDayIndex = firstDay.getDay();
    const days = [];
    for (let x = 0; x < firstDayIndex; x++) {
      days.push(null);
    }

    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      days.push(new Date(day));
    }

    return days;
  };

  const handleDateClick = (date) => {
    if (moment(date).format("YYYY-MM-DD") < moment().format("YYYY-MM-DD"))
      return;
    setSelectedDate(date);
    // Add any other logic you want to perform on date selection
    onSelect(date);
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
            disabled={
              availableDays.length
                ? !availableDays.includes(moment(date).format("dddd")) ||
                  moment(date).format("YYYY-MM-DD") <
                    moment().format("YYYY-MM-DD")
                : moment(date).format("YYYY-MM-DD") <
                  moment().format("YYYY-MM-DD")
            }
            key={index}
            onClick={() => {
              handleDateClick(date);
            }}
            className={`p-2 text-sm ${
              !availableDays.includes(moment(date).format("dddd")) ||
              moment(date).format("YYYY-MM-DD") < moment().format("YYYY-MM-DD")
                ? "cursor-not-allowed text-gray-400"
                : moment(date).format("YYYY-MM-DD") ==
                    moment().format("YYYY-MM-DD") &&
                  moment(selectedDate).format("YYYY-MM-DD") !=
                    moment().format("YYYY-MM-DD")
                ? "cursor-pointer bg-primary3 rounded-full"
                : "cursor-pointer"
            }  text-center ${
              date && date.getMonth() !== currentMonth.getMonth()
                ? "text-gray-400"
                : ""
            } ${
              selectedDate &&
              date &&
              date.toDateString() === selectedDate.toDateString()
                ? "bg-primary text-white rounded-full"
                : ""
            }`}
          >
            {date && date.getDate()}
          </div>
        ))}
      </div>
    );
  };

  const renderTimezone = () => {
    return (
      <div className=" text-primary">
        <p>Time zone</p>
        <p>India Standard Time ({currentTime})</p>
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("hh:mm A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
