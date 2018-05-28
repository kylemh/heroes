import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterData from 'api/characterData';
import styles from './SelectionView.scss';
import Character from 'containers/Character/Character';
import View from 'components/View/View';

class SelectionView extends Component {
  static propTypes = {
    onEnemySelect: PropTypes.func.isRequired,
    onPlayerSelect: PropTypes.func.isRequired,
  };

  state = {
    characters: [],
    chosenPlayer: null,
    chosenEnemy: null,
  };

  componentDidMount() {
    // Unnecessary for local data, but this is where you'll put READS or GETS via HTTP requests
    this.setState({ characters: [...characterData] });
  }

  selectCharacter = character => {
    if (this.state.chosenPlayer) {
      this.selectEnemy(character);
    } else {
      this.selectPlayer(character);
    }
  };

  selectEnemy = character => {
    this.setState({ chosenEnemy: character }, () => {
      this.props.onEnemySelect(character);
    });
  };

  selectPlayer = character => {
    this.setState({ chosenPlayer: character }, () => {
      this.props.onPlayerSelect(character);
    });
  };

  render() {
    return (
      <div className={styles.SelectionView}>
        <View
          containerClassName={styles.options}
          prompt={this.state.chosenPlayer ? 'Select A Character To Duel' : 'Select Your Character'}
        >
          {characterData.map(character => {
            return (
              <Character
                audio={character.audio}
                hp={character.hp}
                image={character.image}
                key={character.name}
                name={character.name}
                onClick={() => this.selectCharacter(character)}
                strength={character.strength}
              />
            );
          })}
        </View>
      </div>
    );
  }
}

export default SelectionView;
