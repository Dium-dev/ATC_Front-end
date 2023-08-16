import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from '../components/button/button';

const meta = {
  title: 'Buttons',
  component: ButtonComponent,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    variant: 'white',
    text: 'White',
    to: '',
  },
};
export const Red: Story = {
  args: {
    variant: 'red',
    text: 'red',
    to: '',
  },
};
export const Search: Story = {
  args: {
    variant: 'Search',
    text: 'search',
    to: '',
  },
};
export const Default: Story = {
  args: {
    variant: 'Default',
    text: '',
    to: '',
  },
};
