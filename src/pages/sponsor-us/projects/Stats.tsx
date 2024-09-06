"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, CheckCircle, Clock, Calendar, Group } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { name: "Date", value: "August 2023", icon: Calendar }, // Replace Calendar with your desired icon
  { name: "Number of Volunteers", value: "150+", icon: Users }, // Replace Users with your desired icon
  { name: "People Impacted", value: "1,200+", icon: Group }, // Replace Group with your desired icon
  { name: "Duration of Event", value: "3 days", icon: Clock }, // Replace Clock with your desired icon
];


export default function Stats() {
  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-2 gap-3 lg:gap-6 lg:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="px-3 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="size-5 lg:size-6 text-primary" />
                    <motion.div
                      className="lg:text-lg text-sm font-bold text-foreground"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                  <p className="truncate text-xs lg:text-sm font-medium text-muted-foreground">
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
