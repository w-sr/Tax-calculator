import type { Meta, StoryObj } from "@storybook/react";

import { LanguageSwitcher } from "./LanguageSwitcher";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "LanguageSwitcher",
  component: LanguageSwitcher,
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const DefaultSwitcher: Story = {
  render: () => <LanguageSwitcher />,
};
