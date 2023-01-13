import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
  disabled: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost',
  variant: 'ghost',
};
