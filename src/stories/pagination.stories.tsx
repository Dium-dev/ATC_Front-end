import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '~/components/pagination';

const meta = {
  title: 'pagination',
  component: Pagination,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationBar: Story = {
  args: {
    page: 1,
    anteriorSiguiente: () => {},
    maximo: 10,
  },
};
