import { CheckCircle2, Clock3, ListTodo, Sparkles } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = [
  {
    value: "all",
    label: "All",
    icon: ListTodo,
  },
  {
    value: "today",
    label: "Today",
    icon: Clock3,
  },
  {
    value: "completed",
    label: "Completed",
    icon: CheckCircle2,
  },
  {
    value: "important",
    label: "Important",
    icon: Sparkles,
  },
];

function TaskFilters({ value, onChange }) {
  return (
    <Tabs value={value} onValueChange={onChange}>
      <TabsList
        className="
          min-h-14
          w-full
          justify-start
          gap-2
          overflow-x-auto
          rounded-2xl
          bg-transparent
          p-0
        "
      >
        {filters.map((filter) => {
          const Icon = filter.icon;

          return (
            <TabsTrigger
              key={filter.value}
              value={filter.value}
              className="
                flex
                h-11
                items-center
                gap-2
                rounded-xl
                border
                border-border/50
                bg-card
                px-5
                text-sm
                transition-all

                data-[state=active]:border-primary
                data-[state=active]:bg-primary
                data-[state=active]:text-white
              "
            >
              <Icon className="h-4 w-4" />
              {filter.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}

export default TaskFilters;
