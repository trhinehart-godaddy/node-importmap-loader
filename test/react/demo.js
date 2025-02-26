import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function () {
  console.log('Loaded react@%s from %o', React.version, import.meta.resolve('react'));
  console.log('Loaded react-dom@%s/server from %o', ReactDOMServer.version, import.meta.resolve('react-dom/server'));
}