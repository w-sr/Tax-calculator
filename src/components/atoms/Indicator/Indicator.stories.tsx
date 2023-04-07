import type { Meta, StoryObj } from "@storybook/react";

import { Indicator } from "./Indicator";

const meta: Meta<typeof Indicator> = {
  title: "Indicator",
  component: Indicator,
};

export default meta;

type Story = StoryObj<typeof Indicator>;

export const WithLoading: Story = {
  render: () => <Indicator loading />,
};
