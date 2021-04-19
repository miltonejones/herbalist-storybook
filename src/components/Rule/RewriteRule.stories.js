import React from 'react';

import { RewriteRule } from './RewriteRule';

export default {
  title: 'Web/RewriteRule',
  component: RewriteRule 
};

const Template = (args) => <RewriteRule {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  from: 'from URL',
  to: 'to URL',
};
