import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const WithLabel: Story = {
  render: () => <TextField label="Text" />,
};

export const WithoutLabel: Story = {
  render: () => <TextField />,
};

export const WithError: Story = {
  render: () => <TextField label="Text" helper="Text is required" />,
};
