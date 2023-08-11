import type { Meta, StoryObj } from "@storybook/react";
import { anchorArray } from "../components/dropdownMenu/anchorArray";
import { DropDownMenu } from "../components/dropdownMenu/dropdownMenu";

let name = "Category";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "DropDown",
  component: DropDownMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    //layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof DropDownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: name,
    anchorArray: anchorArray,
  },
};
