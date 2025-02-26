import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

import * as importMaps from '@import-maps/resolve';

import { IMPORT_MAP_BASE_PATH_URL, IMPORT_MAP_PATH } from '../constants/path.js';

import type { ParsedImportMap } from '@import-maps/resolve';

let MAP: ParsedImportMap | undefined;

export async function loadImportMap(){
  if (!MAP) {
    try {
      MAP = importMaps.parseFromString(await fs.readFile(IMPORT_MAP_PATH, 'utf8'), IMPORT_MAP_BASE_PATH_URL);
    } catch (err) {
      if (existsSync(IMPORT_MAP_PATH)) {
        throw err;
      }
      MAP = importMaps.parse({}, IMPORT_MAP_BASE_PATH_URL);
    }
  }
  return MAP!;
}

export async function resolve(specifier: string, parent: URL = IMPORT_MAP_BASE_PATH_URL){
  return importMaps.resolve(specifier, await loadImportMap(), parent);
}