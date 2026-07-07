import { motion, AnimatePresence } from "framer-motion";

import GlassCard from "@/components/common/GlassCard";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { CalendarX2, CheckCircle2, Clock3, Plus } from "lucide-react";

function EventList() {
  const events = [
    {
      id: 1,
      title: "Finish React Dashboard",
      description:
        "Complete reusable dashboard components and responsive layout.",
      category: "Frontend",
      start: "09:00",
      end: "10:30",
      priority: "HIGH",
      completed: false,
      isNow: true,
    },
    {
      id: 2,
      title: "Merge Sort",
      description: "Practice sorting algorithms.",
      category: "Algorithm",
      start: "11:30",
      end: "12:30",
      priority: "MEDIUM",
      completed: false,
      isNow: false,
    },
    {
      id: 3,
      title: "Workout",
      description: "Gym & Cardio.",
      category: "Health",
      start: "18:00",
      end: "19:00",
      priority: "LOW",
      completed: false,
      isNow: false,
    },
  ];

  const priorityColor = {
    HIGH: "bg-red-500",
    MEDIUM: "bg-yellow-500",
    LOW: "bg-green-500",
  };

  const priorityBadge = {
    HIGH: "bg-red-500/10 text-red-500 border-red-500/20",
    MEDIUM: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    LOW: "bg-green-500/10 text-green-500 border-green-500/20",
  };

  const completed = events.filter((e) => e.completed).length;

  const live = events.filter((e) => e.isNow).length;

  return (
    <GlassCard className="flex h-full flex-col">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Today's Schedule</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Tuesday • {events.length} Events
          </p>
        </div>

        <Button size="sm" className="rounded-xl">
          <Plus className="h-4 w-4" />

          <span className="hidden md:inline ml-2">Add Event</span>
        </Button>
      </div>

      {/* Stats */}

      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant="secondary" className="rounded-full">
          {completed} Completed
        </Badge>

        <Badge className="rounded-full bg-primary/10 text-primary">
          {live} Live
        </Badge>

        <Badge variant="outline" className="rounded-full">
          {events.length - completed} Remaining
        </Badge>
      </div>

      <ScrollArea className="h-[600px] pr-2">
        <div className="space-y-5">
          <AnimatePresence>
            {events.length ? (
              events.map((event) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 22,
                  }}
                >
                  {/* EVENT CARD HERE */}
                  <div
                    className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-border/50
    bg-background/40
    p-5
    transition-all
    duration-300

    md:hover:border-primary/20
    md:hover:bg-primary/5
    md:hover:shadow-xl
    md:hover:shadow-primary/5

    active:scale-[0.99]
  "
                  >
                    {/* Glow */}

                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 blur-3xl" />

                    {/* Priority Line */}

                    <div
                      className={`absolute left-0 top-5 bottom-5 w-1 rounded-full ${priorityColor[event.priority]}`}
                    />

                    <div className="relative ml-3">
                      {/* Top */}

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-primary" />

                            <span className="text-sm text-muted-foreground">
                              {event.start} - {event.end}
                            </span>

                            {event.isNow && (
                              <Badge className="rounded-full bg-primary text-white">
                                LIVE
                              </Badge>
                            )}
                          </div>

                          <h3 className="mt-3 text-xl font-semibold leading-tight">
                            {event.title}
                          </h3>
                        </div>

                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-xl"
                        >
                          <Plus className="h-4 w-4 rotate-45" />
                        </Button>
                      </div>

                      {/* Description */}

                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {event.description}
                      </p>

                      {/* Footer */}

                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        <Badge variant="outline" className="rounded-full">
                          {event.category}
                        </Badge>

                        <Badge
                          variant="outline"
                          className={`rounded-full ${priorityBadge[event.priority]}`}
                        >
                          {event.priority}
                        </Badge>

                        {event.completed && (
                          <Badge className="rounded-full bg-green-500 text-white">
                            <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="flex h-[400px] flex-col items-center justify-center">
                <CalendarX2 className="mb-4 h-10 w-10 text-muted-foreground" />

                <h3 className="text-lg font-semibold">Nothing planned today</h3>

                <p className="mt-2 max-w-xs text-center text-sm text-muted-foreground">
                  Enjoy your free time or create a new event.
                </p>

                <Button className="mt-5 rounded-xl">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Event
                </Button>
              </div>
            )}
          </AnimatePresence>
        </div>

        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </GlassCard>
  );
}

export default EventList;
