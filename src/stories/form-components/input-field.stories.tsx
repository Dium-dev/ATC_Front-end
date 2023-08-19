import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '~/components/inputs/InputField';

const meta = {
  title: 'Form-Components/Main Input',
  component: InputField,
  parameters: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 16 16"
  >
    <path
      d="M15.9519 14.8499L10.758 9.65596C11.564 8.61396 11.9999 7.33997 11.9999 5.99997C11.9999 4.39598 11.374 2.89199 10.242 1.75799C9.10996 0.623997 7.60197 0 5.99997 0C4.39798 0 2.88999 0.625997 1.75799 1.75799C0.623997 2.88999 0 4.39598 0 5.99997C0 7.60197 0.625997 9.10996 1.75799 10.242C2.88999 11.376 4.39598 11.9999 5.99997 11.9999C7.33997 11.9999 8.61196 11.564 9.65396 10.76L14.8479 15.9519C14.8632 15.9672 14.8812 15.9793 14.9012 15.9875C14.9211 15.9958 14.9424 16 14.9639 16C14.9855 16 15.0068 15.9958 15.0267 15.9875C15.0466 15.9793 15.0647 15.9672 15.0799 15.9519L15.9519 15.0819C15.9672 15.0667 15.9793 15.0486 15.9875 15.0287C15.9958 15.0088 16 14.9875 16 14.9659C16 14.9444 15.9958 14.9231 15.9875 14.9032C15.9793 14.8833 15.9672 14.8652 15.9519 14.8499ZM9.16796 9.16796C8.31996 10.014 7.19597 10.48 5.99997 10.48C4.80398 10.48 3.67998 10.014 2.83199 9.16796C1.98599 8.31996 1.51999 7.19597 1.51999 5.99997C1.51999 4.80398 1.98599 3.67798 2.83199 2.83199C3.67998 1.98599 4.80398 1.51999 5.99997 1.51999C7.19597 1.51999 8.32196 1.98399 9.16796 2.83199C10.014 3.67998 10.48 4.80398 10.48 5.99997C10.48 7.19597 10.014 8.32196 9.16796 9.16796Z"
      fill="currentColor"
    />
  </svg>
);

export const Default: Story = {
  args: {},
};
export const InputWithIcon: Story = {
  args: {
    leftIcon: Icon,
    rightIcon: Icon,
  },
};

export const InputWithColors: Story = {
  args: {
    label: 'Search',
    color: 'red',
    rightIcon: Icon,
  },
};
