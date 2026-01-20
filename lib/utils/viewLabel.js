"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = viewLabel;
var _constants = require("./constants");
var _formats = _interopRequireDefault(require("../formats"));
var _localizer = _interopRequireDefault(require("../localizer"));
var _Views = _interopRequireDefault(require("../Views"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Formats = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _constants.views.MONTH, 'monthHeaderFormat'), _constants.views.WEEK, 'dayRangeHeaderFormat'), _constants.views.WORK_WEEK, 'dayRangeHeaderFormat'), _constants.views.DAY, 'dayHeaderFormat'), _constants.views.AGENDA, 'agendaHeaderFormat');
function getRangeBounds(range) {
  if (Array.isArray(range)) {
    var start = range[0];
    var end = range[range.length - 1];
    return {
      start: start,
      end: end
    };
  }
  return range;
}
function viewLabel(date, view, formats, culture) {
  var View = _Views.default[view];
  var headerSingle = view === _constants.views.MONTH || view === _constants.views.DAY;
  formats = (0, _formats.default)(formats || {});
  var headerFormat = formats[Formats[view]];
  return headerSingle ? _localizer.default.format(date, headerFormat, culture) : _localizer.default.format(getRangeBounds(View.range(date, {
    culture: culture
  })), headerFormat, culture);
}