import type { Meta, StoryObj } from '@storybook/react';
import { ContainerCard } from '../components/containerCards/containerCards';
import { productos } from '~/mockData/mockProducts';

const meta = {
  title: 'ContainerCard',
  component: ContainerCard,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ContainerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContenedorDeTodosLosProd: Story = {
  args: {
    products: productos,
  },
};
