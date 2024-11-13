import React from "react";
import format from "date-fns/format/index.js";

export default function DateComp({ eventDate }: { eventDate: Date }) {
  const dateObj = eventDate ? new Date(eventDate) : new Date();
  const date = {
    day: format(dateObj, "dd"),
    month: format(dateObj, "LLL"),
    year: format(dateObj, "yyyy"),
    dayOfWeek: format(dateObj, "EEEE"),
  };
  return (
    <div className="absolute -bottom-10 right-10 size-20 overflow-hidden rounded-lg bg-white shadow-lg lg:h-32 lg:w-32">
      <div className="relative flex h-full w-full flex-col justify-between">
        <div className="flex w-full flex-row items-center justify-center bg-red-600 py-1 text-center text-base font-bold text-white lg:text-2xl">
          {date.month.toUpperCase()}
        </div>
        <div className="flex w-full flex-col items-center justify-center bg-white text-center text-xl font-bold text-black lg:text-5xl ">
          {date.day}
        </div>
        <div className="flex w-full flex-col items-center justify-center bg-white text-center text-sm font-bold text-gray-400 lg:text-lg ">
          {date.dayOfWeek.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
