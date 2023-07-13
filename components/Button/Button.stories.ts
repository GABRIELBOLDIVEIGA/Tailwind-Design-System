
import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProsp } from "./Button";

const meta: Meta<ButtonProsp> = {
  title: 'Molecule/Button',
  component: Button,
  argTypes: {}
};

export default meta;

export const Primary: StoryObj<ButtonProsp> = {
  args: {
    children: "Botão"
  }
}

export const Violet: StoryObj<ButtonProsp> = {
  args: {
    children: "Botão",
    className: "theme-violet"
  }
}