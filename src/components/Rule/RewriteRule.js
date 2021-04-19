import React from 'react';
import PropTypes from 'prop-types';
import './RewriteRule.css'

/**
 * Primary UI component for user interaction
 */
export const RewriteRule = ({ from, to, flag }) => {

    return (
        <div className="rewrite-rule">
            <div className="rewrite-rule-from">
                {from}
            </div>
            <div className="rewrite-rule-to">
                {to} [{flag}]
            </div>
        </div>
    );
};


RewriteRule.propTypes = {
    /**
     * address requested by the browser
     */
    from: PropTypes.string.isRequired,
    /**
     * address the user is redirected to
     */
    to: PropTypes.string.isRequired,
    /**
     * Access flag
     */
    flag: PropTypes.string,
};