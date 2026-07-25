import React from "react";

const Hours = React.forwardRef(function Hours(props, ref) {
  const today = new Date().getDay(); // 0=Sun,1=Mon...6=Sat

  const schedule = [
    { day: "Monday",    hours: "9:00 am – 7:00 pm",  dayNum: 1 },
    { day: "Tuesday",   hours: "9:00 am – 7:00 pm",  dayNum: 2 },
    { day: "Wednesday", hours: "9:00 am – 7:00 pm",  dayNum: 3 },
    { day: "Thursday",  hours: "9:00 am – 7:00 pm",  dayNum: 4 },
    { day: "Friday",    hours: "9:00 am – 6:00 pm",  dayNum: 5 },
    { day: "Saturday",  hours: "10:00 am – 5:00 pm", dayNum: 6 },
    { day: "Sunday",    hours: "By appointment only", dayNum: 0 },
  ];

  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <header className="page-header">
          <span className="brand-label">Availability</span>
          <h1>Opening Hours</h1>
        </header>

        <div className="ornament-divider"><span>✦</span></div>

        <table className="hours-table">
          <tbody>
            {schedule.map(({ day, hours, dayNum }) => (
              <tr key={day} className={dayNum === today ? "today" : ""}>
                <td>{day}</td>
                <td>{dayNum === today ? `${hours} ← Today` : hours}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="hours-note">
          All times are subject to availability. We recommend booking at least 48 hours in advance to
          secure your preferred appointment slot. Same-day and emergency bookings may be available —
          please call to enquire.
        </div>

        <p style={{ fontSize: "0.75rem", color: "var(--ink-light)", marginTop: "0.75rem", fontStyle: "italic" }}>
          Bank holidays and special occasions may affect availability.
          Gift vouchers are available for all services — a perfect present for a loved one.
        </p>

        <div className="page-footer">
          <span>PURLS Mobile Wellness</span>
          <span>Opening Hours</span>
        </div>
      </div>
    </div>
  );
});

export default Hours;
