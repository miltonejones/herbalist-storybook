import React from 'react';
import LogoImage from './LogoImage';

export default {
  title: 'LogoImage',
  component: LogoImage
};

const Template = (args) => <LogoImage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  source: '/img/email/_logo.png'
};
