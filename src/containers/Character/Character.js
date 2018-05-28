import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'components/Card/Card';
import styles from './Character.scss';

class Character extends Component {
  static propTypes = {
    audio: PropTypes.string.isRequired,
    className: PropTypes.string,
    hp: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    strength: PropTypes.number.isRequired,
  };

  static defaultProps = {
    className: undefined,
    onClick: () => {},
  };

  state = {
    currentHealth: this.props.hp,
    isAlive: true,
    selected: false,
  };

  characterClickHandler = () => {
    const { props, state } = this;

    if (state.isAlive && !state.selected) {
      this.setState({ selected: true }, () => {
        this.playAudio(props.audio);
        props.onClick();
      });
    }

    if (state.selected) {
      // eslint-disable-next-line no-undef
      window.alert('This character has already been selected.');
    }

    if (!state.isAlive) {
      // eslint-disable-next-line no-undef
      window.alert('This character is dead... Select another.');
    }
  };

  playAudio = audio => {
    // eslint-disable-next-line no-undef
    const characterAudio = new Audio(audio);
    characterAudio.play();
  };

  render() {
    const { props, state } = this;

    return (
      <Card
        className={classNames(styles.Character, props.className, {
          [styles.dead]: !state.isAlive,
          [styles.selected]: state.selected,
        })}
        headerContent={<h3 className={styles.header}>{props.name}</h3>}
        footerContent={
          <div className={styles.footer}>
            <progress
              className={styles.healthBar}
              value={state.currentHealth}
              max={props.hp}
            />
            <span className={styles.healthText}>
              {state.currentHealth}/{props.hp}
            </span>
          </div>
        }
        onClick={this.characterClickHandler}
      >
        <div className={styles.content}>
          <img
            alt={`Portrait of ${props.name}`}
            className={styles.image}
            src={props.image}
          />
          <span className={styles.strength}>Strength: {props.strength}</span>
        </div>
      </Card>
    );
  }
}

export default Character;
