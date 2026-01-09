import React from "react";

export default function HomeView() {
  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
        Welcome to Eternity Ministries
      </h2>

      <p style={{ fontSize: "16px", lineHeight: 1.6, marginBottom: "12px" }}>
        We are a Christ-centered ministry committed to the Gospel, discipleship,
        and raising believers who walk in truth and power.
      </p>

      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "12px",
          background: "#ffffff",
        }}
      >
        <strong>Quick Links</strong>
        <ul style={{ marginTop: "8px", paddingLeft: "18px" }}>
          <li>Teachings</li>
          <li>Training</li>
          <li>Upcoming Events</li>
          <li>Give</li>
        </ul>
      </div>
    </div>
  );
}
