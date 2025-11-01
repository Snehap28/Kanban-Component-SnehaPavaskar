import React from "react";
import type { KanbanTask } from "./KanbanBoard";

export const KanbanCard: React.FC<{ task: KanbanTask }> = ({ task }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const priorityColorMap: Record<
    NonNullable<KanbanTask["priority"]>,
    string
  > = {
    low: "border-l-4 border-green-400",
    medium: "border-l-4 border-yellow-400",
    high: "border-l-4 border-orange-500",
    urgent: "border-l-4 border-red-500",
  };

  const priorityColor =
    priorityColorMap[task.priority || "low"] || "border-l-4 border-gray-300";

  const initials = task.assignee
    ? task.assignee
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "NA";

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`bg-neutral-50 rounded-lg p-3 shadow hover:shadow-md cursor-grab ${priorityColor}`}
    >
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-medium text-sm text-neutral-900 line-clamp-2">
          {task.title}
        </h4>
        {task.priority && (
          <span className="text-xs bg-neutral-200 px-2 rounded capitalize">
            {task.priority}
          </span>
        )}
      </div>

      {task.description && (
        <p className="text-xs text-neutral-600 mb-2 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex justify-between items-center">
        <div className="flex gap-1 flex-wrap">
          {task.tags?.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="text-xs bg-neutral-100 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
          {initials}
        </div>
      </div>
    </div>
  );
};
