import React from 'react';
import PropTypes from 'prop-types';

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CardFooter({ children }) {
  return <footer>{children}</footer>;
}
