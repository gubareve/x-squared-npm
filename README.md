# x-squared-npm

# @gubareve/xsquared

[![npm (scoped)](https://img.shields.io/npm/v/@gubareve/xsquared.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@gubareve/xsquared.svg)](https://www.npmjs.com/package/@bamblehorse/tiny)

Removes all spaces from a string.

## Install

```
$ npm install @gubareve/xsquared
```

## Usage

```js
const xsquared = require("@gubareve/xsquared");

xsquared(4);
//=> "16

xsquared("4");
//=> Uncaught TypeError: xsquared requires a integer
//    at xsquared (<anonymous>:2:41)
//    at <anonymous>:1:1
```
