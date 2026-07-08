import { useState } from "react";

import { CalendarIcon, Plus } from "lucide-react";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";

function AddTaskDialog({ open, onOpenChange, onSubmit }) {
  const [date, setDate] = useState();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    priority: "Medium",
    time: "",
  });

  function handleChange(name, value) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit?.({
      ...form,
      dueDate: date,
    });

    onOpenChange(false);

    setForm({
      title: "",
      description: "",
      category: "",
      priority: "Medium",
      time: "",
    });

    setDate(undefined);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>

          <DialogDescription>Create a new task for today.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}

          <div>
            <label className="mb-2 block text-sm font-medium">Title</label>

            <Input
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Finish Dashboard UI"
              className="w-full min-h-12 input-theme"
            />
          </div>

          {/* Description */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <Textarea
              rows={4}
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Write something..."
              className="input-theme"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium">Category</label>

            <Select
              value={form.category}
              onValueChange={(value) => handleChange("category", value)}
              className="input-theme"
            >
              <SelectTrigger className="w-full min-h-12">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent className="">
                <SelectItem value="React">React</SelectItem>

                <SelectItem value="Algorithm">Algorithm</SelectItem>

                <SelectItem value="Health">Health</SelectItem>

                <SelectItem value="Reading">Reading</SelectItem>

                <SelectItem value="Work">Work</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Priority */}

          <div>
            <label className="mb-2 block text-sm font-medium">Priority</label>

            <Select
              value={form.priority}
              onValueChange={(value) => handleChange("priority", value)}
            >
              <SelectTrigger className="w-full min-h-12 ">
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="">
                <SelectItem value="High">🔴 High</SelectItem>

                <SelectItem value="Medium">🟡 Medium</SelectItem>

                <SelectItem value="Low">🟢 Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Date */}
          <label className="text-sm font-medium mb-20">Due Date</label>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Due Date */}
            <div className="">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "min-h-12 w-full justify-start text-left font-normal",
                      !date && "text-secondary",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />

                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0 glass" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time */}
            <div className="">
              <Input
                type="time"
                value={form.time}
                onChange={(e) => handleChange("time", e.target.value)}
                className="min-h-12 input-theme"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-10"
            >
              Cancel
            </Button>

            <Button type="submit" className=" h-10">
              <Plus className="mr-2 h-4 w-4 cursor-pointer" />
              Add Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskDialog;
