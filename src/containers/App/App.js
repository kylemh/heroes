import React, { Component } from 'react';
import logo from 'images/logo.svg';
import styles from './App.scss';
import SelectionView from 'containers/SelectionView/SelectionView';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class App extends Component {
  state = {
    chosenPlayer: null,
    chosenEnemy: null,
    lossCounter: 0,
    winCounter: 0,
  };

  currentView = () => {
    const { state } = this;

    if (state.chosenPlayer && state.chosenEnemy) {
      // TODO: Add tie if I care enough

      if (state.chosenPlayer.health <= 0) {
        this.setState({});
        // return <LossView />;
      }

      if (state.chosenEnemy.health <= 0) {
        //return <VictoryView />;
      }
    } else {
      return (
        <SelectionView
          onEnemySelect={character => this.setState({ chosenEnemy: character })}
          onPlayerSelect={character => this.setState({ chosenPlayer: character })}
        />
      );
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
        <Footer>Hello</Footer>
      </div>
    );
  }
}

export default App;
