# Kanban Board Component
A interactive and responsive "Kanban Board" created with "React, TypeScript, and Tailwind CSS".  
Including drag-and-drop functions, task management, and Storybook documentation.

##  Live Storybook
[(https://6905e96d4ef7c8cbaf0e3d2f-bunnljrzcy.chromatic.com/)]

##  Installation
\`\`\`bash
npm install
npm run storybook
\`\`\`

##  Architecture
This Project has a modular structure:
- KanbanBoard.tsx, the main board that manages all columns and the drag-and-drop logic.
- KanbanColumn.tsx, an individual column that displays tasks.
- KanbanCard.tsx, a task card that shows the priority color and assignee initials.
- TaskModal.tsx, an optional modal for creating or editing tasks.
- Tailwind CSS is used for a responsive and modern user interface.
- Storybook is used for documenting and testing components.

##  Features
- Drag and drop tasks between columns.
- Task creation and editing interface.
- Responsive layout for mobile and desktop.
- Keyboard and accessibility support.
- Clean, minimal design elements.

##  Storybook Stories
- Default board : 4 columns, sample tasks
- Empty state : blank board with no tasks
- Large dataset : 30+ tasks for performance testing
- Mobile view : responsive layout demonstration
- Interactive playground : adjustable controls for testing

##  Technologies
- React + TypeScript
- Tailwind CSS
- Storybook
- Vite

##  Contact
Sneha Pavaskar
Email : pavaskarsneha82@gmail.com
GitHub : https://github.com/Snehap28