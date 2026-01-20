"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _constants = require("./utils/constants");
var _Month = _interopRequireDefault(require("./Month"));
var _Day = _interopRequireDefault(require("./Day"));
var _Week = _interopRequireDefault(require("./Week"));
var _WorkWeek = _interopRequireDefault(require("./WorkWeek"));
var _Agenda = _interopRequireDefault(require("./Agenda"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var VIEWS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, _constants.views.MONTH, _Month.default), _constants.views.WEEK, _Week.default), _constants.views.WORK_WEEK, _WorkWeek.default), _constants.views.DAY, _Day.default), _constants.views.AGENDA, _Agenda.default);
var _default = exports.default = VIEWS;