"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;
exports.set = set;
var _dates = _interopRequireDefault(require("./utils/dates"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function inSame12Hr(start, end) {
  var s = 12 - _dates.default.hours(start);
  var e = 12 - _dates.default.hours(end);
  return s <= 0 && e <= 0 || s >= 0 && e >= 0;
}
var dateRangeFormat = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'd', culture) + ' — ' + local.format(end, 'd', culture);
};
var timeRangeFormat = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 'h:mmtt', culture) + ' — ' + local.format(end, inSame12Hr(start, end) ? 'h:mm' : 'h:mmtt', culture);
};
var weekRangeFormat = function weekRangeFormat(_ref3, culture, local) {
  var start = _ref3.start,
    end = _ref3.end;
  return local.format(start, 'MMM dd', culture) + ' - ' + local.format(end, _dates.default.eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};
var formats = {
  dateFormat: 'dd',
  dayFormat: 'ddd dd/MM',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  timeGutterFormat: 'h:mm tt',
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'dddd MMM dd',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'ddd MMM dd',
  agendaTimeFormat: 'hh:mm tt',
  agendaTimeRangeFormat: timeRangeFormat
};
function set(_formats) {
  if (arguments.length > 1) _formats = _defineProperty({}, _formats, arguments[1]);
  Object.assign(formats, _formats);
}
function format(fmts) {
  return _objectSpread(_objectSpread({}, formats), fmts);
}