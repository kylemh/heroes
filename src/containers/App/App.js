import React, { Component } from 'react';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import logo from 'images/logo.svg';

class App extends Component {
  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.App}>
        <Header logo={logo} title="Heroes (ft. React)" />
        <div className={styles.content}>
          <Button>
            Click me!
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
