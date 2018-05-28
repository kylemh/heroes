import React, { Component } from 'react';
import logo from 'images/logo.svg';
import tieFighterSoundFile from 'audio/tieFighter.mp3';
import styles from './App.scss';
import SelectionView from 'containers/SelectionView/SelectionView';
import CombatView from 'containers/CombatView/CombatView';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class App extends Component {
  state = {
    chosenPlayer: null,
    chosenEnemy: null,
    currentGameView: 'selection',
    lossCounter: 0,
    winCounter: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { chosenEnemy, chosenPlayer } = this.state;

    if (chosenEnemy && chosenPlayer) {
      if (chosenPlayer.currentHealth <= 0) {
        this.safeGameStateUpdate(prevState, 'loss');
        return;
      }

      if (chosenEnemy.currentHealth <= 0) {
        this.safeGameStateUpdate(prevState, 'win');
        return;
      }

      this.safeGameStateUpdate(prevState, 'combat');
    } else {
      this.safeGameStateUpdate(prevState, 'selection');
    }
  }

  attackHandler = (damageToPlayer = 1, damageToEnemy = 1) => {
    const { chosenEnemy, chosenPlayer } = this.state;

    const newPlayerHealth = chosenPlayer.currentHealth - damageToPlayer;
    const newEnemyHealth = chosenEnemy.currentHealth - damageToEnemy;

    this.setState({
      chosenPlayer: { ...this.state.chosenPlayer, currentHealth: newPlayerHealth },
      chosenEnemy: { ...this.state.chosenEnemy, currentHealth: newEnemyHealth },
    });

    // eslint-disable-next-line
    console.log(chosenPlayer);

    // eslint-disable-next-line no-undef
    const tieFighterAudio = new Audio(tieFighterSoundFile);
    tieFighterAudio.play();
  };

  currentView = () => {
    const { state } = this;

    switch (state.currentGameView) {
      case 'selection':
        return (
          <SelectionView
            onEnemySelect={character => this.setState({ chosenEnemy: character })}
            onPlayerSelect={character => this.setState({ chosenPlayer: character })}
          />
        );
      case 'combat':
        return (
          <CombatView
            attackHandler={this.attackHandler}
            enemy={state.chosenEnemy}
            player={state.chosenPlayer}
          />
        );
      case 'win':
        return 'You win!';
      case 'loss':
        return 'You lose...';
    }
  };

  footerContent = () => {
    const { state } = this;
    switch (state.currentGameView) {
      case 'selection':
        return <h4>Please select your character and the enemy&apos;s character.</h4>;
      case 'combat':
        return <h4>Who will win?</h4>;
      case 'win':
        return <h4>You Win!</h4>;
      case 'loss':
        return <h4>You lose...</h4>;
    }
  };

  safeGameStateUpdate = (prevState, gameView) => {
    // prevent infinite re-renders
    if (prevState.currentGameView !== gameView) {
      this.setState({ currentGameView: gameView });
    }
  };

  render() {
    return (
      <div className={styles.App}>
        <Header
          logo={logo}
          title="Heroes (ft. React)"
        />
        <div className={styles.content}>{this.currentView()}</div>
        <Footer>{this.footerContent()}</Footer>
      </div>
    );
  }
}

export default App;
