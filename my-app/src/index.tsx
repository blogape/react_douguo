import "lib-flexible"
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/style/rest.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';

ReactDOM.render(
  <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
