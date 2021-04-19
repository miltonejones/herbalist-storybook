import React from 'react';
import PropTypes from 'prop-types'; 
import { RewriteRule } from '../Rule/RewriteRule';

/**
 * Primary UI component for user interaction
 */
export const RewriteRules = ({ rules }) => {
 
  return (
     <div>
         {rules?.map(rule => <RewriteRule {...rule} />)}
     </div>
  );
};


RewriteRules.propTypes = {
    /**
     * address requested by the browser
     */
    rules: PropTypes.arrayOf(RewriteRule), 
  };