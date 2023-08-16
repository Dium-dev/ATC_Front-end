import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/cards/landingCard';

const meta = {
  title: 'folder/landingCard',
  component: Card,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '',
    price: '',
    nota: '',
    imageSrc: '',
  },
};
