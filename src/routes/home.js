const express = require('express');
const router = express.Router();
import {renderToString} from 'react-dom/server';
import App from './../components/App';
import {createStore} from 'redux';
import tasksApp from './../reducers/reducers';
import {StaticRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';

router.get('/', (req, res) => {
  const context = {};
  let store = createStore(tasksApp);
  const Root = ({store}) => (
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  );
  const preloadedState = store.getState();
  const body = renderToString(<Root store={store}/>);
  const title = 'Tasks List App';

  const renderFullPage = (html = {body, title}, preloadedState) => {
    return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
    `
  };

  res.send(renderFullPage({body, title}, preloadedState));
});

export default router;