import React from 'react';
import rules from '../../rewrite-rules.json'
import { RewriteRules } from './RewriteRules';

export default {
    title: 'Web/RewriteRules',
    component: RewriteRules
};

const Template = (args) => <RewriteRules {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    rules
};
