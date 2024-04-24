#!/usr/bin/env node

const getResponseFromAPI = require("./0-promise.js");

const response = getResponseFromAPI();
console.log(response instanceof Promise);
