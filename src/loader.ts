import * as https from './utils/https.js';
import * as importMaps from './utils/importmap.js';

import type { LoadHook, ResolveHook } from 'node:module';

export const load: LoadHook = async function (specifier, _context, nextLoad) {
  if (specifier.startsWith('https://')) {
    const source = await https.load(specifier);
    return {
      format: 'module',
      shortCircuit: true,
      source
    };
  }
  return nextLoad(specifier);
}

export const resolve: ResolveHook = async function (specifier, context, nextResolve) {
  const { matched, resolvedImport } = await importMaps.resolve(specifier, context.parentURL ? new URL(context.parentURL) : void 0);
  return matched
    ? nextResolve(resolvedImport.href, { ...context, parentURL: void 0 })
    : nextResolve(specifier, context);
}