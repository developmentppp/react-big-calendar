"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessor = accessor;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function accessor(data, field) {
  var value = null;
  if (typeof field === 'function') value = field(data);else if (typeof field === 'string' && _typeof(data) === 'object' && data != null && field in data) value = data[field];
  return value;
}