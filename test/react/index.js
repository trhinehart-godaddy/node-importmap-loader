import { createElement } from 'react';
import ReactDOMServer from 'react-dom/server';

import app from './app.js';

console.log(ReactDOMServer.renderToString(createElement(app)));