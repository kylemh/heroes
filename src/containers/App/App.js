import React, { Component } from 'react';
import styles from './App.scss';
import characterData from 'api/characterData';
import Header from 'components/Header/Header';
import logo from 'images/logo.svg';

class App extends Component {
  state = {
    characters: [...characterData]
  }

  // playAudio = audio => {
  //   const characterAudio = new Audio(audio);
  //   characterAudio.play();
  // }

  render() {
    return (
      <div className={styles.App}>
        <Header logo={logo} title="Heroes (ft. React)" />
        <div className={styles.content}>
          {characterData.map(({ audio, hp, image, name }) => {
            // const characterAudio = require(audio);
            // const characterImage = require(image);

            return (
              <div
                className={styles.characterCard}
                key={name}
                // onClick={() => this.playAudio(characterAudio)}
              >
                <h3>{name}</h3>
                {/* <img src={characterImage} alt={`Portrait of ${name}`} /> */}
                <span>{hp}/{hp}&nbsp;</span>
                <progress value={hp} max={hp} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
