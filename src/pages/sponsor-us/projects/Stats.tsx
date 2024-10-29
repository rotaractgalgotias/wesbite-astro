"use client";

import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  CheckCircle,
  Clock,
  Calendar,
  Group,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

export default function Stats({ data }: any) {
  const formattedDate = format(new Date(data.date), "MMMM yyyy");
  const stats = [
    { name: "Date", value: formattedDate, icon: Calendar }, // Replace Calendar with your desired icon
    { name: "Number of Volunteers", value: `${data.nov}+`, icon: Users }, // Replace Users with your desired icon
    { name: "People Impacted", value: `${data.pi}+`, icon: Group }, // Replace Group with your desired icon
    { name: "Duration of Event", value: `${data.doe}+`, icon: Clock }, // Replace Clock with your desired icon
  ];
  console.log(data);
  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="px-3 py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <stat.icon className="size-5 text-primary lg:size-6" />
                    <motion.div
                      className="text-sm font-bold text-foreground lg:text-lg"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                  <p className="truncate text-xs font-medium text-muted-foreground lg:text-sm">
                    {stat.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
