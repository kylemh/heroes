import React from 'react';
import PropTypes from 'prop-types';

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CardHeader({ children }) {
  return <header>{children}</header>;
}
