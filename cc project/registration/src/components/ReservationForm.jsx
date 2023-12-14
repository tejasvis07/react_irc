import React, { useState } from 'react';
import './ReservationTable.css'; // Make sure to import your CSS file

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState({
    days: 'day-select',
    hours: 'hour-select',
    fullName: '',
    phoneNumber: '',
    persons: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, for example, send data to a server or perform local actions
    console.log('Form submitted:', reservationData);
  };

  return (
    <section className="banner">
      <h2>BOOK YOUR TABLE NOW</h2>
      <div className="card-container">
        <div className="card-img">
          {/* image here */}
        </div>

        <div className="card-content">
          <h3>Reservation</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <select name="days" value={reservationData.days} onChange={handleInputChange}>
                <option value="day-select">Select Day</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </select>

              <select name="hours" value={reservationData.hours} onChange={handleInputChange}>
                <option value="hour-select">Select Hour</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
                <option value="20:00">20:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={reservationData.fullName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={reservationData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <input
                type="number"
                placeholder="How Many Persons?"
                min="1"
                name="persons"
                value={reservationData.persons}
                onChange={handleInputChange}
              />
              <input type="submit" value="BOOK TABLE" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
