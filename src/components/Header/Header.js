import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

Header.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

function Header(props) {
  return (
    <header className={styles.Header}>
      {props.logo && <img src={props.logo} className={styles.logo} alt="logo" />}
      <h1 className={styles.title}>{props.title}</h1>
      {props.subtitle && <span className={styles.subtitle}>{props.subtitle}</span>}
    </header>
  );
};

export default Header;
