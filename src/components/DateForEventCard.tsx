import React from "react";
import format from "date-fns/format/index.js";

export default function DateForEventCard({ eventDate }: { eventDate: Date }) {
  return (
    <span className="line-clamp-1 text-sm font-semibold text-white">
      {format(eventDate ? new Date(eventDate) : new Date(), "dd MMM, yyyy")}
    </span>
  );
}
