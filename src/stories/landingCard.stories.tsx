import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../components/cards/ProductCard';

const meta = {
  title: 'folder/landingCard',
  component: ProductCard,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '',
    price: 0,
    nota: '',
    imageSrc: '',
  },
};
