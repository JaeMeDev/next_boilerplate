import React from 'react';
import { Story, Meta } from '@storybook/react';
import TestComponent from './TestComponent';

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
} as Meta;

export const Default: Story = (args) => <TestComponent {...args} />;

Default.args = {};
