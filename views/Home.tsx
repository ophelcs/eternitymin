import React from "react";
import { BookOpen, GraduationCap, CalendarDays, HeartHandshake } from "lucide-react";
import type { View } from "../types";

type Props = {
  goToTab: (tab: View) => void;
};

export default function HomeView({ goToTab }: Props) {
  const cards: Array<{
    title: string;
    subtitle: string;
    tab: View;
    Icon: React.ElementType;
  }> = [
    { title: "Teachings", subtitle: "Sermons & Bible studies", tab: "teachings", Icon: BookOpen },
    { title: "Training", subtitle: "Discipleship & courses", tab: "training", Icon: GraduationCap },
    { title: "Upcoming Events", subtitle: "See what’s next", tab: "events", Icon: CalendarDays },
    { title: "Give", subtitle: "Support the mission", tab: "give", Icon: HeartHandshake },
  ];

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>
        Welcome to Eternity Ministries
      </h2>

      <p style={{ fontSize: "16px", lineHeight: 1.6, marginBottom: "16px" }}>
        We are a Christ-centered ministry committed to the Gospel, discipleship,
        and raising believers who walk in truth and power.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {cards.map(({ title, subtitle, tab, Icon }) => (
          <button
            key={title}
            onClick={() => goToTab(tab)}
            style={{
              textAlign: "left",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "14px",
              background: "#ffffff",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon size={22} />
              <div>
                <div style={{ fontWeight: 800 }}>{title}</div>
                <div style={{ fontSize: "13px", opacity: 0.75 }}>{subtitle}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
