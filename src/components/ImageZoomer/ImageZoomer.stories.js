import React from 'react';
import ImageZoomer from './ImageZoomer';

export default {
  title: 'ImageZoomer',
  component: ImageZoomer
};

const Template = (args) => <ImageZoomer {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  width: 400,
  source: 'https://trello-attachments.s3.amazonaws.com/6053c1bb305638268c48880a/1071x658/e1a481ace232392659dd0cee14e7af00/image.png'
};
