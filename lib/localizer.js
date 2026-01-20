"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.set = set;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _invariant = _interopRequireDefault(require("invariant"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var localePropType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);
function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  (0, _invariant.default)(result == null || typeof result === 'string', '`localizer format(..)` must return a string, null, or undefined');
  return result;
}
var DateLocalizer = /*#__PURE__*/_createClass(function DateLocalizer(spec) {
  var _this = this;
  _classCallCheck(this, DateLocalizer);
  (0, _invariant.default)(typeof spec.format === 'function', 'date localizer `format(..)` must be a function');
  (0, _invariant.default)(typeof spec.parse === 'function', 'date localizer `parse(..)` must be a function');
  (0, _invariant.default)(typeof spec.firstOfWeek === 'function', 'date localizer `firstOfWeek(..)` must be a function');
  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.startOfWeek = spec.firstOfWeek;
  this.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
  this.parse = function (value, format, culture) {
    var result = spec.parse.call(_this, value, format, culture);
    (0, _invariant.default)(result == null || result instanceof Date && !isNaN(result.getTime()), 'date localizer `parse(..)` must return a valid Date, null, or undefined');
    return result;
  };
});
var localizer = {
  parse: error,
  format: error,
  startOfWeek: error
};
function set(newLocalizer) {
  if (!newLocalizer.__isLocalizer__) {
    newLocalizer = new DateLocalizer(newLocalizer);
    newLocalizer.__isLocalizer__ = true;
  }
  localizer = newLocalizer;
  return localizer;
}
var exp = {
  parse: function parse() {
    var _localizer;
    return (_localizer = localizer).parse.apply(_localizer, arguments);
  },
  format: function format() {
    var _localizer2;
    return (_localizer2 = localizer).format.apply(_localizer2, arguments);
  },
  startOfWeek: function startOfWeek() {
    var _localizer3;
    return (_localizer3 = localizer).startOfWeek.apply(_localizer3, arguments);
  }
};
var _default = exports.default = exp;
function error() {
  throw new Error('You have not selected a localization strategy for Big Calendar. ' + 'Please use either of the two included.');
}