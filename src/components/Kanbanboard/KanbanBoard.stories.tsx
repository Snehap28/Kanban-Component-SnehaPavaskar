import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { KanbanBoard } from "./KanbanBoard";

const meta: Meta<typeof KanbanBoard> = {
  title: "Components/TaskBoard",
  component: KanbanBoard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof KanbanBoard>;

export const Default: Story = { args: {} };

export const Empty: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <KanbanBoard />
    </div>
  ),
};

export const LargeDataset: Story = {
  render: () => (
    <div style={{ padding: 20 }}>
      <KanbanBoard />
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  render: () => (
    <div style={{ padding: 10 }}>
      <KanbanBoard />
    </div>
  ),
};

export const Interactive: Story = {
  args: {},
  render: (args) => (
    <div style={{ padding: 20 }}>
      <KanbanBoard {...args} />
    </div>
  ),
};
