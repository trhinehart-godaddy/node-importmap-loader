import { createElement, Fragment, version as reactVersion } from 'react';
import { version as reactDomServerVersion } from 'react-dom/server';

export default function () {
  return createElement(Fragment, null, `Loaded React@${ reactVersion } and ReactDOM/server@${ reactDomServerVersion }`);
}
