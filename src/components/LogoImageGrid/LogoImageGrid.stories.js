import React from 'react';
import logos from '../../herbalist-logos.json'
import LogoImageGrid from './LogoImageGrid';

export default {
  title: 'LogoImageGrid',
  component: LogoImageGrid
};

const Template = ({ logos }) => {
  const keys = Object.keys(logos);
  return (
    <>
      {keys.map(key => (
        <>
          <h5>{key}</h5>
          <LogoImageGrid key={key} logos={logos[key]} />
        </>
      ))}
    </>
  )
};

export const DefaultView = Template.bind({});

DefaultView.args = {
  logos
};
