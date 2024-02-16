import React, { useState, useEffect } from "react";

const TimePicker = ({ label, value, onChange }) => {
  const [hour, setHour] = useState(12); // Default to 12
  const [minute, setMinute] = useState(0); // Default to 0
  const [ampm, setAmPm] = useState("AM"); // Default to AM

  // Parse the value to set initial state
  useEffect(() => {
    if (value) {
      const time = value.split(":");
      const parsedHour = parseInt(time[0]);
      const parsedMinute = parseInt(time[1]);
      const parsedAmPm = parsedHour >= 12 ? "PM" : "AM";
      setHour(parsedHour > 12 ? parsedHour - 12 : parsedHour);
      setMinute(parsedMinute);
      setAmPm(parsedAmPm);
    }
  }, [value]);

  // Handle changes in hour, minute, and AM/PM
  const handleHourChange = (e) => {
    setHour(parseInt(e.target.value));
    onChange(`${e.target.value}:${minute < 10 ? "0" : ""}${minute} ${ampm}`);
  };

  const handleMinuteChange = (e) => {
    setMinute(parseInt(e.target.value));
    onChange(
      `${hour}:${e.target.value < 10 ? "0" : ""}${e.target.value} ${ampm}`
    );
  };

  const handleAmPmChange = (e) => {
    setAmPm(e.target.value);
    onChange(`${hour}:${minute < 10 ? "0" : ""}${minute} ${e.target.value}`);
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="flex items-center">
        <select
          value={hour}
          onChange={handleHourChange}
          className="text-primary p-2 border rounded-md mr-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          {[...Array(12).keys()].map((h) => (
            <option key={h + 1} value={h + 1}>
              {h + 1}
            </option>
          ))}
        </select>
        <span className="text-primary mr-2">:</span>
        <select
          value={minute}
          onChange={handleMinuteChange}
          className="text-primary p-2 border rounded-md mr-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          {[...Array(60).keys()].map((m) => (
            <option key={m} value={m < 10 ? `0${m}` : m}>
              {m < 10 ? `0${m}` : m}
            </option>
          ))}
        </select>
        <select
          value={ampm}
          onChange={handleAmPmChange}
          className="text-primary p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
