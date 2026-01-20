"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = messages;
exports.result = result;
exports.set = set;
var _invariant = _interopRequireDefault(require("invariant"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'all day',
  week: 'week',
  work_week: 'work week',
  day: 'day',
  month: 'month',
  previous: 'back',
  next: 'next',
  yesterday: 'yesterday',
  tomorrow: 'tomorrow',
  today: 'today',
  agenda: 'agenda',
  showMore: function showMore(total) {
    return "+".concat(total, " more");
  }
};
function set(key, msg) {
  (0, _invariant.default)(messages.hasOwnProperty(key), "The message key: \"".concat(key, "\" is not a valid message name. ") + "valid keys are: ".concat(Object.keys(messages).join(', ')));
  messages[key] = msg;
}
function result(msg) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return typeof msg === 'function' ? msg(args) : msg;
}
function messages(msgs) {
  return _objectSpread(_objectSpread({}, defaultMessages), msgs);
}