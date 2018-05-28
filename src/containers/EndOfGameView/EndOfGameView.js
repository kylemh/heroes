import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EndOfGameView.scss';
import Button from 'components/Button/Button';

class EndOfGameView extends Component {
  static propTypes = {
    lossCounter: PropTypes.number.isRequired,
    playerWon: PropTypes.bool,
    restartGame: PropTypes.func.isRequired,
    winCounter: PropTypes.number.isRequired,
    updateScore: PropTypes.func.isRequired,
  };

  static defaultProps = {
    playerWon: false,
  };

  componentDidMount() {
    this.props.updateScore();
  }

  render() {
    const { props } = this;

    return (
      <div className={styles.EndOfGameView}>
        {props.playerWon ? (
          <div className={styles.victory}>
            <h2>Victory!</h2>
            <h4>Don&apos;t get cocky kid!</h4>
          </div>
        ) : (
          <div className={styles.loss}>
            <h2>Defeat...</h2>
            <h4>Pain, suffering, death I feel. Something terrible has happened.</h4>
          </div>
        )}

        <div className={styles.ratio}>
          You&apos;ve <b>WON</b> {props.winCounter} duels.
          <br />
          You&apos;ve <b>LOST</b> {props.lossCounter} duels.
        </div>

        <Button
          color="neutral"
          onClick={props.restartGame}
          size="large"
        >
          Play Again
        </Button>
      </div>
    );
  }
}

export default EndOfGameView;
