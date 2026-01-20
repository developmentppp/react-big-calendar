"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _propTypes2 = require("./utils/propTypes");
var _accessors = require("./utils/accessors");
var _excluded = ["className", "event", "selected", "eventPropGetter", "startAccessor", "endAccessor", "titleAccessor", "slotStart", "slotEnd", "onSelect", "eventComponent", "eventWrapperComponent"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var propTypes = {
  event: _propTypes.default.object.isRequired,
  slotStart: _propTypes.default.instanceOf(Date),
  slotEnd: _propTypes.default.instanceOf(Date),
  selected: _propTypes.default.bool,
  eventPropGetter: _propTypes.default.func,
  titleAccessor: _propTypes2.accessor,
  allDayAccessor: _propTypes2.accessor,
  startAccessor: _propTypes2.accessor,
  endAccessor: _propTypes2.accessor,
  eventComponent: _propTypes2.elementType,
  eventWrapperComponent: _propTypes2.elementType.isRequired,
  onSelect: _propTypes.default.func
};
var EventCell = /*#__PURE__*/function (_React$Component) {
  function EventCell() {
    _classCallCheck(this, EventCell);
    return _callSuper(this, EventCell, arguments);
  }
  _inherits(EventCell, _React$Component);
  return _createClass(EventCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        event = _this$props.event,
        selected = _this$props.selected,
        eventPropGetter = _this$props.eventPropGetter,
        startAccessor = _this$props.startAccessor,
        endAccessor = _this$props.endAccessor,
        titleAccessor = _this$props.titleAccessor,
        slotStart = _this$props.slotStart,
        slotEnd = _this$props.slotEnd,
        onSelect = _this$props.onSelect,
        Event = _this$props.eventComponent,
        EventWrapper = _this$props.eventWrapperComponent,
        props = _objectWithoutProperties(_this$props, _excluded);
      var title = (0, _accessors.accessor)(event, titleAccessor),
        end = (0, _accessors.accessor)(event, endAccessor),
        start = (0, _accessors.accessor)(event, startAccessor),
        isAllDay = (0, _accessors.accessor)(event, props.allDayAccessor),
        continuesPrior = _dates.default.lt(start, slotStart, 'day'),
        continuesAfter = _dates.default.gt(end, slotEnd, 'day');
      if (eventPropGetter) var _eventPropGetter = eventPropGetter(event, start, end, selected),
        style = _eventPropGetter.style,
        xClassName = _eventPropGetter.className;
      return /*#__PURE__*/_react.default.createElement(EventWrapper, {
        event: event
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: _objectSpread(_objectSpread({}, props.style), style),
        className: (0, _classnames.default)('rbc-event', className, xClassName, {
          'rbc-selected': selected,
          'rbc-event-allday': isAllDay || _dates.default.diff(start, _dates.default.ceil(end, 'day'), 'day') > 1,
          'rbc-event-continues-prior': continuesPrior,
          'rbc-event-continues-after': continuesAfter
        }),
        onClick: function onClick(e) {
          return onSelect(event, e);
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-event-content",
        title: title
      }, Event ? /*#__PURE__*/_react.default.createElement(Event, {
        event: event,
        title: title
      }) : title)));
    }
  }]);
}(_react.default.Component);
EventCell.propTypes = propTypes;
var _default = exports.default = EventCell;