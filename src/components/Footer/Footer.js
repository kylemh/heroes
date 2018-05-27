import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: undefined,
};

function Footer({ children, className }) {
  return <footer className={`${styles.Footer} ${className}`}>{children}</footer>;
}

export default Footer;
