import React from "react";
import type { KanbanTask } from "./KanbanBoard";
import { KanbanCard } from "./KanbanCard";

interface KanbanColumnProps {
  id: string;
  title: string;
  color: string;
  taskIds: string[];
  tasks: Record<string, KanbanTask>;
  onDropTask: (taskId: string, targetColumnId: string) => void;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  id,
  title,
  color,
  taskIds,
  tasks,
  onDropTask,
}) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) onDropTask(taskId, id);
  };

  return (
    <div
  onDragOver={(e) => e.preventDefault()}
  onDrop={handleDrop}
  className="bg-white rounded-xl shadow-md w-[250px] sm:w-[280px] md:w-[300px] flex-shrink-0 p-3 flex flex-col"
  style={{ borderTop: `4px solid ${color}` }}
    >
      <h3 className="font-semibold mb-3 text-neutral-800">
        {title} ({taskIds.length})
      </h3>

      <div className="flex-1 space-y-2">
        {taskIds.length === 0 ? (
          <p className="text-sm text-neutral-400 italic">No tasks</p>
        ) : (
          taskIds.map((taskId: string) => (
            <KanbanCard key={taskId} task={tasks[taskId]} />
          ))
        )}
      </div>

      <button className="mt-3 bg-blue-500 text-white text-sm py-1 rounded hover:bg-blue-600 transition">
        + Add Task
      </button>
    </div>
  );
};
