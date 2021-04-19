import React from 'react';

import { BadgeBuilder } from './BadgeBuilder';

export default {
  title: 'BadgeBuilder',
  component: BadgeBuilder 
};

const Template = (args) => <BadgeBuilder {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  name: 'Milton J',
};
