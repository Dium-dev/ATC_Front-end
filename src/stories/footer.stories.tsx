import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '~/components/footer/Footer';

const meta = {
  title: 'Footer',
  component: Footer,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterPage: Story = {
  args: {},
};
