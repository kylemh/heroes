import React, { Component } from 'react';
import characterData from 'api/characterData';
import logo from 'images/logo.svg';
import styles from './App.scss';
import Character from 'containers/Character/Character';
import Header from 'components/Header/Header';

class App extends Component {
  state = {
    characters: [...characterData],
    chosenPlayer: null,
    chosenEnemy: null,
  };

  playAudio = audio => {
    // eslint-disable-next-line no-undef
    const characterAudio = new Audio(audio);
    characterAudio.play();
  };

  selectCharacter = character => {
    const { state } = this;

    if (state.chosenEnemy && state.chosenPlayer) {
      return; // do nothing
    }

    if (this.state.chosenPlayer) {
      this.selectEnemy(character);
    } else {
      this.selectPlayer(character);
    }
  };

  selectEnemy = character => {
    this.setState({ chosenEnemy: character }, this.playAudio(character.audio));
  };

  selectPlayer = character => {
    this.setState({ chosenPlayer: character }, this.playAudio(character.audio));
  };

  render() {
    return (
      <div className={styles.App}>
        <Header
          logo={logo}
          title="Heroes (ft. React)"
        />
        <div className={styles.content}>
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

export default App;
