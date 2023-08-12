import type { Meta, StoryObj } from '@storybook/react';
import { ContainerPage } from '../app/container_page';

const meta = {
  title: 'Containers/Container Page',
  component: ContainerPage,
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof ContainerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <h1 className="text-xl text-center">Main content here!</h1>,
    footer: true,
    nav: true,
  },
};

const OwnNavExample = (
  <header className="flex justify-between px-8 py-2 bg-[#f1f1f1] shadow">
    <h1 className="text-xl font-bold">
      A<span className="text-2xl">T</span>C
    </h1>
    <nav>
      <ul className="flex gap-3">
        <li className="px-4 py-1 border-b-2 border-b-[#f1f1f1] hover:border-b-background-dm hover:font-semibold cursor-pointer">
          Home
        </li>
        <li className="px-4 py-1 border-b-2 border-b-[#f1f1f1] hover:border-b-background-dm hover:font-semibold cursor-pointer">
          Products
        </li>
        <li className="px-4 py-1 border-b-2 border-b-[#f1f1f1] hover:border-b-background-dm hover:font-semibold cursor-pointer">
          More
        </li>
      </ul>
    </nav>
    <button className='px-4 py-1 border-b-2 border-b-[#f1f1f1] hover:border-b-primary-lm hover:font-semibold cursor-pointer'>Sing In</button>
  </header>
);

export const OwnNav: Story = {
  args: {
    children: <h1 className="text-xl text-center">Main content here!</h1>,
    footer: true,
    nav: OwnNavExample,
  },
};
