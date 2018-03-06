require('babel-polyfill');
require('babel-core/register');
const express = require('express');
const server = express();
const path = require('path');
const port = (process.env.PORT || '3000');
import React from 'react';
import {renderToString} from 'react-dom/server';
import home from './src/routes/home';

server.use('/', home);

server.listen(port, () => console.log('Example app listening on port 3000!'));