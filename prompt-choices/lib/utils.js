'use strict';

var isNumber = require('is-number');
var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('arr-flatten', 'flatten');
require('clone-deep', 'clone');
require('choices-separator', 'Separator');
require('define-property', 'define');
require('extend-shallow', 'extend');
require('kind-of', 'typeOf');
require('toggle-array', 'toggle');
require('set-value', 'set');
require = fn;

/**
 * Returns true if `val` is a number (also ensures that val
 * is not whitespace, which is cast to `0`)
 */

utils.isNumber = function(val) {
  return isNumber(val) && String(val).trim() !== '';
};

/**
 * Returns true if `val` is a number (also ensures that val
 * is not whitespace, which is cast to `0`)
 */

utils.isObject = function(val) {
  return utils.typeOf(val) === 'object';
};

/**
 * Cast `val` to an array.
 */

utils.arrayify = function(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
