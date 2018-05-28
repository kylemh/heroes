import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CombatView.scss';
import Character from 'containers/Character/Character';
import CombatFooter from './CombatFooter';
import View from 'components/View/View';

class CombatView extends Component {
  static propTypes = {
    attackHandler: PropTypes.func.isRequired,
    enemy: PropTypes.shape({
      audio: PropTypes.string.isRequired,
      className: PropTypes.string,
      currentHealth: PropTypes.number.isRequired,
      hp: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      strength: PropTypes.number.isRequired,
    }).isRequired,
    player: PropTypes.shape({
      audio: PropTypes.string.isRequired,
      className: PropTypes.string,
      currentHealth: PropTypes.number.isRequired,
      hp: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      strength: PropTypes.number.isRequired,
    }).isRequired,
  };

  state = {
    currentMessage: 'Use the force!',
    isGameOver: false,
  };

  attack = () => {
    const player = this.props.player;
    const enemy = this.props.enemy;

    const damageToPlayer = Math.floor(Math.random() * enemy.strength * 5);
    const damageToEnemy = Math.floor(Math.random() * player.strength * 5);

    this.props.attackHandler(damageToPlayer, damageToEnemy);

    const newMessage = (
      <div>
        <p>
          {player.name} takes {damageToPlayer} damage.
        </p>
        <p>
          You deal {damageToEnemy} to {enemy.name}.
        </p>
      </div>
    );

    this.setState({
      currentMessage: newMessage,
    });
  };

  isEnemyDead = () => {
    return this.props.enemy.hp <= 0;
  };

  isPlayerDead = () => {
    return this.props.player.hp <= 0;
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
            currentHealth={props.player.hp}
            hp={props.player.hp}
            image={props.player.image}
            name={props.player.name}
            strength={props.player.strength}
          />
          <Character
            audio={props.enemy.audio}
            className={styles.enemy}
            currentHealth={props.enemy.hp}
            hp={props.enemy.hp}
            image={props.enemy.image}
            name={props.enemy.name}
            strength={props.enemy.strength}
          />
        </View>

        <CombatFooter
          isGameOver={state.isGameOver}
          message={state.currentMessage}
          onAttack={this.attack}
        />
      </div>
    );
  }
}

export default CombatView;
