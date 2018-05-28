import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CombatView.scss';
import Character from 'containers/Character/Character';
import CombatFooter from './CombatFooter';
import View from 'components/View/View';

class CombatView extends Component {
  static propTypes = {
    enemy: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
  };

  state = {
    currentMessage: 'Use the force!',
    isGameOver: false,
  };

  isEnemyDead = () => {
    return this.props.enemy.health <= 0;
  };

  isPlayerDead = () => {
    return this.props.player.health <= 0;
  };

  isGameOver = () => {
    const isSomePlayerDead = this.isEnemyDead() || this.isPlayerDead();

    return isSomePlayerDead
      ? this.setState({ isGameOver: true })
      : this.setState({ isGameOver: false });
  };

  render() {
    const { props, state } = this;

    return (
      <div className={styles.CombatView}>
        <View
          prompt={`Fight!`}
          containerClassName={styles.duelingCharacters}
        >
          <Character
            audio={props.player.audio}
            className={styles.player}
            hp={props.player.hp}
            image={props.player.image}
            name={props.player.name}
            strength={props.player.strength}
          />
          <Character
            audio={props.enemy.audio}
            className={styles.enemy}
            hp={props.enemy.hp}
            image={props.enemy.image}
            name={props.enemy.name}
            strength={props.enemy.strength}
          />
        </View>

        <CombatFooter
          isGameOver={state.isGameOver}
          message={state.currentMessage}
          onAttack={() => {}}
        />
      </div>
    );
  }
}

export default CombatView;
