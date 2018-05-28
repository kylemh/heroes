import React from 'react';
import PropTypes from 'prop-types';
import styles from './ViewHeader.scss';

ViewHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

function ViewHeader(props) {
  return <h3 className={styles.ViewHeader}>{props.children}</h3>;
}

export default ViewHeader;
