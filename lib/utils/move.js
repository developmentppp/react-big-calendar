"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moveDate;
var _invariant = _interopRequireDefault(require("invariant"));
var _constants = require("./constants");
var _Views = _interopRequireDefault(require("../Views"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function moveDate(action, date, View) {
  View = typeof View === 'string' ? _Views.default[View] : View;
  switch (action) {
    case _constants.navigate.TODAY:
      date = new Date();
      break;
    case _constants.navigate.DATE:
      break;
    default:
      (0, _invariant.default)(View && typeof View.navigate === 'function', 'Calendar View components must implement a static `.navigate(date, action)` method.s');
      date = View.navigate(date, action);
  }
  return date;
}