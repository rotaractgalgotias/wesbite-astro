"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface LocationIndicatorProps {
  city: string;
}

export function UsLocationIndicator({
  city = "New York",
}: LocationIndicatorProps) {
  return (
    <Card className="absolute top-0 h-32 w-64 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
      <CardContent className="flex h-full flex-col justify-between p-4">
        <div className="flex items-center justify-between">
          <MapPin className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{city}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
