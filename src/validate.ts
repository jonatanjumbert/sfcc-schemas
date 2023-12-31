#!/usr/bin/env node
import sfccSchemas from './sfcc-schemas';
const args = process.argv.slice(2);

let path = 'sites';
const pathIndex = args.indexOf('--path');
if (pathIndex !== -1 && args.length > pathIndex + 1) {
    path = args[pathIndex + 1];
}

(() => {
  sfccSchemas.validate(true, path);
})();

export { };