import React from 'react';
import PropTypes from 'prop-types';
import styles from './View.scss';
import ViewHeader from 'components/ViewHeader/ViewHeader';

View.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
};

View.defaultProps = {
  className: undefined,
};

function View(props) {
  return (
    <div className={styles.View}>
      <ViewHeader>{props.prompt}</ViewHeader>
      <div className={props.containerClassName}>{props.children}</div>
    </div>
  );
}

export default View;
