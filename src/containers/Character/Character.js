import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from 'components/Card/Card';
import styles from './Character.scss';

class Character extends Component {
  static propTypes = {
    audio: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    strength: PropTypes.number.isRequired,
  };

  state = {
    currentHealth: this.props.hp,
    isAlive: true,
  };

  characterClickHandler = () => {
    if (this.state.isAlive) {
      this.props.onClick();
    } else {
      // eslint-disable-next-line no-undef
      window.alert('This character is dead... Select another.');
    }
  };

  render() {
    const { props, state } = this;

    return (
      <Card
        className={classNames(styles.Character, { [styles.dead]: !state.isAlive })}
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
