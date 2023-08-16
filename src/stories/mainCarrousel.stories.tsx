import type { Meta, StoryObj } from '@storybook/react';
import MainCarousel from '../components/carousels/mainCarousel';

const meta = {
  title: 'Carrousels',
  component: MainCarousel,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof MainCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Carrousel: Story = {
  args: {},
};
