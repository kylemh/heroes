import React, { Component } from 'react';
import Header from 'components/Header/Header';
import logo from 'images/logo.svg';

class App extends Component {
  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.App}>
        <Header logo={logo} title="Heroes (ft. React)" />
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
      </div>
    );
  }
}

export default App;
