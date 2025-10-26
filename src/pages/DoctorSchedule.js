import React, { useState } from 'react';
import './DoctorSchedule.css';

const DoctorSchedule = () => {
  const [schedule, setSchedule] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  });

  const [selectedDay, setSelectedDay] = useState('Monday');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const addTimeSlot = () => {
    if (!startTime || !endTime) return;
    
    setSchedule(prev => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], {
        start: startTime,
        end: endTime,
        isBooked: false
      }]
    }));

    setStartTime('');
    setEndTime('');
  };

  const removeTimeSlot = (day, index) => {
    setSchedule(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="schedule-container">
      <h2>Manage Your Schedule</h2>
      
      <div className="add-slot">
        <select 
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {Object.keys(schedule).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Start Time"
        />
        
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder="End Time"
        />
        
        <button onClick={addTimeSlot}>Add Slot</button>
      </div>

      <div className="schedule-display">
        {Object.entries(schedule).map(([day, slots]) => (
          <div key={day} className="day-schedule">
            <h3>{day}</h3>
            {slots.map((slot, index) => (
              <div 
                key={index} 
                className={`time-slot ${slot.isBooked ? 'booked' : ''}`}
              >
                {slot.start} - {slot.end}
                <button 
                  onClick={() => removeTimeSlot(day, index)}
                  className="remove-slot"
                >
                  
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSchedule;