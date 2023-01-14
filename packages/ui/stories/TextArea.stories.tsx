import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from '../TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const EmptyTextArea = Template.bind({});

EmptyTextArea.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
};

export const FilledTextArea = Template.bind({});
FilledTextArea.args = {
  label: 'Label',
  disabled: false,
  value:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc euismod, aliquam nisl sit amet, aliquam nisl.',
};

export const ErrorTextArea = Template.bind({});

ErrorTextArea.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
  error: 'This is a required field',
};

export const DisabledTextArea = Template.bind({});

DisabledTextArea.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: true,
};

export const ReadonlyTextArea = Template.bind({});

ReadonlyTextArea.args = {
  label: 'Label',
  value: 'Readonly',
  disabled: false,
  readOnly: true,
};
