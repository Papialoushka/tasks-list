import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import home from './src/routes/home';
const server = express();
const port = (process.env.PORT || '3000');

server.use('/static', express.static('dist'));
server.use('/', home);

server.listen(port, () => console.log('Example app listening on port 3000!'));
