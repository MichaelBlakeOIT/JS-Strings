#!/usr/bin/env node

const jsstrings = require('./index.js');
const { parseScript } = require('shift-parser');
const fs = require('fs');

const contents = fs.readFileSync(0, 'utf8');

const ast = parseScript(contents);

const strings = jsstrings(ast);

console.log(strings.join('\n'));
