import React, { useState } from "react";
import { KanbanColumn } from "./KanbanColumn";

export interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority?: "low" | "medium" | "high" | "urgent";
  assignee?: string;
  tags?: string[];
  createdAt: Date;
  dueDate?: Date;
}

export interface KanbanColumnType {
  id: string;
  title: string;
  color: string;
  taskIds: string[];
  maxTasks?: number;
}

export const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumnType[]>([
    { id: "todo", title: "To Do", color: "#6b7280", taskIds: ["task-1", "task-2"], maxTasks: 10 },
    { id: "in-progress", title: "In Progress", color: "#3b82f6", taskIds: ["task-3"], maxTasks: 5 },
    { id: "review", title: "Review", color: "#f59e0b", taskIds: [], maxTasks: 3 },
    { id: "done", title: "Done", color: "#10b981", taskIds: ["task-4", "task-5"] },
  ]);

  const [tasks, setTasks] = useState<Record<string, KanbanTask>>({
    "task-1": {
      id: "task-1",
      title: "Implement drag and drop",
      description: "Add D&D functionality to kanban cards",
      status: "todo",
      priority: "high",
      assignee: "John Doe",
      tags: ["frontend", "feature"],
      createdAt: new Date(2024, 0, 10),
      dueDate: new Date(2024, 0, 20),
    },
    "task-2": {
      id: "task-2",
      title: "Design task modal",
      description: "Create modal for editing task details",
      status: "todo",
      priority: "medium",
      assignee: "Jane Smith",
      tags: ["design", "ui"],
      createdAt: new Date(2024, 0, 11),
      dueDate: new Date(2024, 0, 18),
    },
    "task-3": {
      id: "task-3",
      title: "Setup TypeScript",
      status: "in-progress",
      priority: "urgent",
      assignee: "John Doe",
      tags: ["setup", "typescript"],
      createdAt: new Date(2024, 0, 9),
    },
    "task-4": {
      id: "task-4",
      title: "Create project structure",
      description: "Setup folder structure and initial files",
      status: "done",
      priority: "low",
      assignee: "Jane Smith",
      tags: ["setup"],
      createdAt: new Date(2024, 0, 8),
      dueDate: new Date(2024, 0, 9),
    },
    "task-5": {
      id: "task-5",
      title: "Install dependencies",
      status: "done",
      priority: "low",
      assignee: "John Doe",
      tags: ["setup"],
      createdAt: new Date(2024, 0, 8),
    },
  });

  const handleTaskDrop = (taskId: string, targetColumnId: string) => {
    const sourceColumnIndex = columns.findIndex((col) =>
      col.taskIds.includes(taskId)
    );
    const targetColumnIndex = columns.findIndex(
      (col) => col.id === targetColumnId
    );

    if (sourceColumnIndex === -1 || targetColumnIndex === -1) return;
    if (sourceColumnIndex === targetColumnIndex) return;

    const updatedColumns = [...columns];
    updatedColumns[sourceColumnIndex].taskIds = updatedColumns[
      sourceColumnIndex
    ].taskIds.filter((id) => id !== taskId);
    updatedColumns[targetColumnIndex].taskIds.push(taskId);

    setColumns(updatedColumns);

    setTasks((prev) => ({
      ...prev,
      [taskId]: { ...prev[taskId], status: targetColumnId },
    }));
  };
return (
  <div className="w-full overflow-x-auto">
    <div className="flex gap-4 min-w-max p-4 md:p-6 bg-neutral-100">
      {columns.map((col) => (
        <KanbanColumn
          key={col.id}
          id={col.id}
          title={col.title}
          color={col.color}
          taskIds={col.taskIds}
          tasks={tasks}
          onDropTask={handleTaskDrop}
        />
      ))}
    </div>
  </div>
);
};
