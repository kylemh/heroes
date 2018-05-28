import React from 'react';
import PropTypes from 'prop-types';
import styles from './CombatFooter.scss';
import Button from 'components/Button/Button';

CombatFooter.propTypes = {
  className: PropTypes.string,
  isGameOver: PropTypes.bool,
  message: PropTypes.string.isRequired,
  onAttack: PropTypes.func.isRequired,
};

CombatFooter.defaultProps = {
  className: undefined,
  isGameOver: false,
};

function CombatFooter(props) {
  return (
    <div className={`${styles.CombatFooter} ${props.className}`}>
      <Button
        color="warning"
        disabled={props.isGameOver}
        onClick={props.onAttack}
        size="large"
        style={{ width: '200px' }}
      >
        Attack!
      </Button>
      {/* More Buttons/Functionality Could Go Here */}
      <span className={styles.message}>{props.message}</span>
    </div>
  );
}

export default CombatFooter;
