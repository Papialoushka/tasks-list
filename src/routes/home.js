import express from 'express';
import {renderToString} from 'react-dom/server';
import App from './../components/App';
import {createStore} from 'redux';
import tweetsApp from './../reducers/reducers';
import {StaticRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
const router = express.Router();

router.get('/', (req, res) => {
  const context = {};
  let store = createStore(tweetsApp);
  const Root = ({store}) => (
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  );
  const body = renderToString(<Root store={store}/>);
  const preloadedState = store.getState();
  const title = 'Tweets App';

  const renderFullPage = (html = {body, title}, preloadedState) => {
    return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="/static/main.css">
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
  };

  res.send(renderFullPage({body, title}, preloadedState));
});

export default router;