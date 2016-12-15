'use strict'

var gulp = require('gulp');
var requireDir = require('require-dir');

// Bring all tasks
requireDir('./tasks', {
  recurse: true
});
