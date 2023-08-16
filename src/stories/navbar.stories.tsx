import type { Meta, StoryObj } from '@storybook/react';
import { anchorArray } from '../components/dropdownMenu/anchorArray';
import { NavBar } from '../components/navBar/navBar';

const meta = {
  title: 'NavBar',
  component: NavBar,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationBar: Story = {
  args: {},
};
