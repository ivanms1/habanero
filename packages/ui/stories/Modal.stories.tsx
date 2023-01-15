import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'Description',
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum
      quisquam! Sed aliquam rem quam praesentium, quo sint repellendus magnam.
    </p>
  ),
  open: true,
};
