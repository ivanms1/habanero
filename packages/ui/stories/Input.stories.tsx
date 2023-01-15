import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const EmptyInput = Template.bind({});

EmptyInput.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
};

export const FilledInput = Template.bind({});
FilledInput.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
  value: 'Value',
};

export const ErrorInput = Template.bind({});

ErrorInput.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
  error: 'This is a required field',
};

export const DisabledInput = Template.bind({});

DisabledInput.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: true,
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  label: 'Label',
  value: 'Password',
  type: 'password',
  disabled: false,
};

export const ReadonlyInput = Template.bind({});

ReadonlyInput.args = {
  label: 'Label',
  value: 'Readonly',
  disabled: false,
  readOnly: true,
};
