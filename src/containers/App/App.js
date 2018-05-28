import React, { Component } from 'react';
import logo from 'images/logo.svg';
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
      if (chosenPlayer.health <= 0) {
        this.setState({ currentGameView: 'loss' });
        return;
      }

      if (chosenEnemy.health <= 0) {
        this.setState({ currentGameView: 'win' });
        return;
      }

      if (prevState.currentGameView !== 'combat') {
        // prevent infinite re-renders
        this.setState({ currentGameView: 'combat' });
      }
    } else {
      if (prevState.currentGameView !== 'selection') {
        // prevent infinite re-renders
        this.setState({ currentGameView: 'selection' });
      }
    }
  }

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
        return <CombatView
          enemy={state.chosenEnemy}
          player={state.chosenPlayer}
        />;
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
        return <div>You Win!</div>;
      case 'loss':
        return <div>You lose...</div>;
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
