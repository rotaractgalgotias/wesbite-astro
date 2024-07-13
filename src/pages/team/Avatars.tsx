import React from "react";
import { TeamData } from "../../config/team";

export default function Avatars({
  group,
}: {
  group: "Board of Directors" | "Board Council";
}) {
  return (
    <div className="flex -space-x-4">
      {TeamData.filter((i) => i.name === group)
        .flatMap((i) => i.subGroups.flatMap((j) => j.members))
        .slice(0, 7)
        .map((member) => (
          <img
            key={member.fullName}
            height={20}
            width={20}
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
            src={`/team/${member.fullName.replaceAll(" ", "%20")}.jpg`}
            alt={member.fullName}
          />
        ))}
    </div>
  );
}
