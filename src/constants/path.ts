import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const CWD_PATH = process.cwd();
export const IMPORT_MAP_BASE_PATH = path.resolve(CWD_PATH, process.env.IMPORT_MAP_BASE_PATH || './');
export const IMPORT_MAP_BASE_PATH_URL = pathToFileURL(IMPORT_MAP_BASE_PATH);
export const IMPORT_MAP_PATH = path.resolve(IMPORT_MAP_BASE_PATH, process.env.IMPORT_MAP_PATH || './node.importmap');
