import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: () => <Button>Button</Button>,
};

export const DisabledButton: Story = {
  render: () => <Button disabled>Button</Button>,
};
