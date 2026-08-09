import React from 'react';

export default function BookingBar() {
  function handleSubmit(e) {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="booking-wrap">
      <form className="booking-bar" onSubmit={handleSubmit}>
        <div className="booking-field">
          <label htmlFor="checkin">Check-in</label>
          <input type="date" id="checkin" name="checkin" required />
        </div>
        <div className="booking-field">
          <label htmlFor="checkout">Check-out</label>
          <input type="date" id="checkout" name="checkout" required />
        </div>
        <div className="booking-field">
          <label htmlFor="guests">Guests</label>
          <select id="guests" name="guests" defaultValue="2">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4+ Guests</option>
          </select>
        </div>
        <div className="booking-field" style={{ borderRight: 0 }}>
          <label htmlFor="roomsCount">Rooms</label>
          <select id="roomsCount" name="roomsCount" defaultValue="1">
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
          </select>
        </div>
        <button type="submit" className="booking-submit">Check Availability</button>
      </form>
    </div>
  );
}
