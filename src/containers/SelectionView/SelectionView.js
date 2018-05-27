import React, { Component } from 'react';
import PropTypes from 'prop-types';
import characterData from 'api/characterData';
import styles from './SelectionView.scss';
import Character from 'containers/Character/Character';

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

  playAudio = audio => {
    // eslint-disable-next-line no-undef
    const characterAudio = new Audio(audio);
    characterAudio.play();
  };

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
      this.playAudio(character.audio);
    });
  };

  selectPlayer = character => {
    this.setState({ chosenPlayer: character }, () => {
      this.props.onPlayerSelect(character);
      this.playAudio(character.audio);
    });
  };

  render() {
    return (
      <div className={styles.SelectionView}>
        <h3 className={styles.prompt}>
          {this.state.chosenPlayer ? 'Select The Enemy' : 'Select Your Character'}
        </h3>
        <div className={styles.options}>
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
        </div>
      </div>
    );
  }
}

export default SelectionView;
