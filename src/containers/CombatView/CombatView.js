import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CombatView.scss';
import Character from 'containers/Character/Character';
import View from 'components/View/View';

class CombatView extends Component {
  static propTypes = {
    enemy: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
  };

  render() {
    const { props } = this;

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
      </div>
    );
  }
}

export default CombatView;
