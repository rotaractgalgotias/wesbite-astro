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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <motion.div
                      className="text-4xl font-bold text-foreground"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                  <p className="truncate text-sm font-medium text-muted-foreground">
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
