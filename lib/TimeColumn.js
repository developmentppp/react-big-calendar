"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _propTypes2 = require("./utils/propTypes");
var _BackgroundWrapper = _interopRequireDefault(require("./BackgroundWrapper"));
var _TimeSlotGroup = _interopRequireDefault(require("./TimeSlotGroup"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TimeColumn = exports.default = /*#__PURE__*/function (_Component) {
  function TimeColumn(props) {
    var _this;
    _classCallCheck(this, TimeColumn);
    _this = _callSuper(this, TimeColumn, [props]);
    _this.rootRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  // Expose DOM node for parent components (replaces findDOMNode usage)
  _inherits(TimeColumn, _Component);
  return _createClass(TimeColumn, [{
    key: "getRootElement",
    value: function getRootElement() {
      return this.rootRef.current;
    }
  }, {
    key: "renderTimeSliceGroup",
    value: function renderTimeSliceGroup(key, isNow, date) {
      var _this$props = this.props,
        dayWrapperComponent = _this$props.dayWrapperComponent,
        timeslots = _this$props.timeslots,
        showLabels = _this$props.showLabels,
        step = _this$props.step,
        timeGutterFormat = _this$props.timeGutterFormat,
        culture = _this$props.culture;
      return /*#__PURE__*/_react.default.createElement(_TimeSlotGroup.default, {
        key: key,
        isNow: isNow,
        value: date,
        step: step,
        culture: culture,
        timeslots: timeslots,
        showLabels: showLabels,
        timeGutterFormat: timeGutterFormat,
        dayWrapperComponent: dayWrapperComponent
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children,
        style = _this$props2.style,
        now = _this$props2.now,
        min = _this$props2.min,
        max = _this$props2.max,
        step = _this$props2.step,
        timeslots = _this$props2.timeslots;
      var totalMin = _dates.default.diff(min, max, 'minutes');
      var numGroups = Math.ceil(totalMin / (step * timeslots));
      var renderedSlots = [];
      var groupLengthInMinutes = step * timeslots;
      var date = min;
      var next = date;
      var isNow = false;
      for (var i = 0; i < numGroups; i++) {
        isNow = _dates.default.inRange(now, date, _dates.default.add(next, groupLengthInMinutes - 1, 'minutes'), 'minutes');
        next = _dates.default.add(date, groupLengthInMinutes, 'minutes');
        renderedSlots.push(this.renderTimeSliceGroup(i, isNow, date));
        date = next;
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.rootRef,
        className: (0, _classnames.default)(className, 'rbc-time-column'),
        style: style
      }, renderedSlots, children);
    }
  }]);
}(_react.Component);
_defineProperty(TimeColumn, "propTypes", {
  step: _propTypes.default.number.isRequired,
  culture: _propTypes.default.string,
  timeslots: _propTypes.default.number.isRequired,
  now: _propTypes.default.instanceOf(Date).isRequired,
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  showLabels: _propTypes.default.bool,
  timeGutterFormat: _propTypes.default.string,
  type: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  dayWrapperComponent: _propTypes2.elementType
});
_defineProperty(TimeColumn, "defaultProps", {
  step: 30,
  timeslots: 2,
  showLabels: false,
  type: 'day',
  className: '',
  dayWrapperComponent: _BackgroundWrapper.default
});