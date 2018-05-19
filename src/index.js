import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App/App';
import registerServiceWorker from './utils/registerServiceWorker';

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
