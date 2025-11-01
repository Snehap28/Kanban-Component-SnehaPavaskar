import React from "react";
import { KanbanBoard } from "./components/Kanbanboard/KanbanBoard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2 text-center">Kanban Board</h1>
      <div className="w-full max-w-[1400px]">
      <KanbanBoard />
    </div>
    </div>
  );
}

export default App;