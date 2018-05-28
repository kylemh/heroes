import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Character.scss';
import Card from 'components/Card/Card';

class Character extends Component {
  static propTypes = {
    audio: PropTypes.string.isRequired,
    className: PropTypes.string,
    currentHealth: PropTypes.number.isRequired,
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
    selected: false,
  };

  characterClickHandler = () => {
    const { props, state } = this;

    if (this.isAlive() && !state.selected) {
      this.setState({ selected: true }, () => {
        this.playAudio(props.audio);
        props.onClick();
      });
    }

    if (state.selected) {
      // eslint-disable-next-line no-undef
      window.alert('This character has already been selected.');
    }

    if (!this.isAlive()) {
      // eslint-disable-next-line no-undef
      window.alert('This character is dead... Select another.');
    }
  };

  playAudio = audio => {
    // eslint-disable-next-line no-undef
    const characterAudio = new Audio(audio);
    characterAudio.play();
  };

  isAlive = () => {
    return this.props.currentHealth > 0;
  };

  render() {
    const { props, state } = this;

    return (
      <Card
        className={classNames(styles.Character, props.className, {
          [styles.dead]: !this.isAlive(),
          [styles.selected]: state.selected,
        })}
        headerContent={<h3 className={styles.header}>{props.name}</h3>}
        footerContent={
          <div className={styles.footer}>
            <progress
              className={styles.healthBar}
              value={props.currentHealth}
              max={props.hp}
            />
            <span className={styles.healthText}>
              {props.currentHealth}/{props.hp}
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
