"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Selection = _interopRequireWildcard(require("./Selection"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _selection = require("./utils/selection");
var _localizer = _interopRequireDefault(require("./localizer"));
var _helpers = require("./utils/helpers");
var _propTypes2 = require("./utils/propTypes");
var _accessors = require("./utils/accessors");
var _dayViewLayout = _interopRequireWildcard(require("./utils/dayViewLayout"));
var _TimeColumn = _interopRequireDefault(require("./TimeColumn"));
var _excluded = ["min", "max", "step", "now", "selectRangeFormat", "culture"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function snapToSlot(date, step) {
  var roundTo = 1000 * 60 * step;
  return new Date(Math.floor(date.getTime() / roundTo) * roundTo);
}
function startsAfter(date, max) {
  return _dates.default.gt(_dates.default.merge(max, date), max, 'minutes');
}
var DaySlot = /*#__PURE__*/function (_React$Component) {
  function DaySlot(props) {
    var _this;
    _classCallCheck(this, DaySlot);
    _this = _callSuper(this, DaySlot, [props]);
    _defineProperty(_this, "state", {
      selecting: false
    });
    // Get the root DOM element (replaces findDOMNode usage)
    _defineProperty(_this, "getRootElement", function () {
      return _this.timeColumnRef.current && _this.timeColumnRef.current.getRootElement();
    });
    _defineProperty(_this, "renderEvents", function () {
      var _this$props = _this.props,
        events = _this$props.events,
        min = _this$props.min,
        max = _this$props.max,
        culture = _this$props.culture,
        eventPropGetter = _this$props.eventPropGetter,
        selected = _this$props.selected,
        eventTimeRangeFormat = _this$props.eventTimeRangeFormat,
        eventComponent = _this$props.eventComponent,
        EventWrapper = _this$props.eventWrapperComponent,
        isRtl = _this$props.rtl,
        step = _this$props.step,
        startAccessor = _this$props.startAccessor,
        endAccessor = _this$props.endAccessor,
        titleAccessor = _this$props.titleAccessor;
      var EventComponent = eventComponent;
      var styledEvents = (0, _dayViewLayout.default)({
        events: events,
        startAccessor: startAccessor,
        endAccessor: endAccessor,
        min: min,
        totalMin: _this._totalMin,
        step: step
      });
      return styledEvents.map(function (_ref, idx) {
        var event = _ref.event,
          style = _ref.style;
        var start = (0, _accessors.accessor)(event, startAccessor);
        var end = (0, _accessors.accessor)(event, endAccessor);
        var continuesPrior = (0, _dayViewLayout.startsBefore)(start, min);
        var continuesAfter = startsAfter(end, max);
        var title = (0, _accessors.accessor)(event, titleAccessor);
        var label = _localizer.default.format({
          start: start,
          end: end
        }, eventTimeRangeFormat, culture);
        var _isSelected = (0, _selection.isSelected)(event, selected);
        if (eventPropGetter) var _eventPropGetter = eventPropGetter(event, start, end, _isSelected),
          xStyle = _eventPropGetter.style,
          className = _eventPropGetter.className;
        var height = style.height,
          top = style.top,
          width = style.width,
          xOffset = style.xOffset;
        return /*#__PURE__*/_react.default.createElement(EventWrapper, {
          event: event,
          key: 'evt_' + idx
        }, /*#__PURE__*/_react.default.createElement("div", {
          style: _objectSpread(_objectSpread({}, xStyle), {}, _defineProperty(_defineProperty({
            top: "".concat(top, "%"),
            height: "".concat(height, "%")
          }, isRtl ? 'right' : 'left', "".concat(Math.max(0, xOffset), "%")), "width", "".concat(width, "%"))),
          title: label + ': ' + title,
          onClick: function onClick(e) {
            return _this._select(event, e);
          },
          className: (0, _classnames.default)('rbc-event', className, {
            'rbc-selected': _isSelected,
            'rbc-event-continues-earlier': continuesPrior,
            'rbc-event-continues-later': continuesAfter
          })
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rbc-event-label"
        }, label), /*#__PURE__*/_react.default.createElement("div", {
          className: "rbc-event-content"
        }, EventComponent ? /*#__PURE__*/_react.default.createElement(EventComponent, {
          event: event,
          title: title
        }) : title)));
      });
    });
    _defineProperty(_this, "_slotStyle", function (startSlot, endSlot) {
      var top = startSlot / _this._totalMin * 100;
      var bottom = endSlot / _this._totalMin * 100;
      return {
        top: top + '%',
        height: bottom - top + '%'
      };
    });
    _defineProperty(_this, "_selectable", function () {
      var node = _this.getRootElement();
      var selector = _this._selector = new _Selection.default(function () {
        return _this.getRootElement();
      });
      var maybeSelect = function maybeSelect(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start = state.startDate,
          end = state.endDate;
        if (onSelecting) {
          if (_dates.default.eq(current.startDate, start, 'minutes') && _dates.default.eq(current.endDate, end, 'minutes') || onSelecting({
            start: start,
            end: end
          }) === false) return;
        }
        _this.setState(state);
      };
      var selectionState = function selectionState(_ref2) {
        var y = _ref2.y;
        var _this$props2 = _this.props,
          step = _this$props2.step,
          min = _this$props2.min,
          max = _this$props2.max;
        var currentNode = _this.getRootElement();
        var _getBoundsForNode = (0, _Selection.getBoundsForNode)(currentNode),
          top = _getBoundsForNode.top,
          bottom = _getBoundsForNode.bottom;
        var mins = _this._totalMin;
        var range = Math.abs(top - bottom);
        var current = (y - top) / range;
        current = snapToSlot(minToDate(mins * current, min), step);
        if (!_this.state.selecting) _this._initialDateSlot = current;
        var initial = _this._initialDateSlot;
        if (_dates.default.eq(initial, current, 'minutes')) current = _dates.default.add(current, step, 'minutes');
        var start = _dates.default.max(min, _dates.default.min(initial, current));
        var end = _dates.default.min(max, _dates.default.max(initial, current));
        return {
          selecting: true,
          startDate: start,
          endDate: end,
          startSlot: (0, _dayViewLayout.positionFromDate)(start, min, _this._totalMin),
          endSlot: (0, _dayViewLayout.positionFromDate)(end, min, _this._totalMin)
        };
      };
      selector.on('selecting', maybeSelect);
      selector.on('selectStart', maybeSelect);
      selector.on('mousedown', function (box) {
        if (_this.props.selectable !== 'ignoreEvents') return;
        return !(0, _Selection.isEvent)(_this.getRootElement(), box);
      });
      selector.on('click', function (box) {
        if (!(0, _Selection.isEvent)(_this.getRootElement(), box)) _this._selectSlot(_objectSpread(_objectSpread({}, selectionState(box)), {}, {
          action: 'click'
        }));
        _this.setState({
          selecting: false
        });
      });
      selector.on('select', function () {
        if (_this.state.selecting) {
          _this._selectSlot(_objectSpread(_objectSpread({}, _this.state), {}, {
            action: 'select'
          }));
          _this.setState({
            selecting: false
          });
        }
      });
    });
    _defineProperty(_this, "_teardownSelectable", function () {
      if (!_this._selector) return;
      _this._selector.teardown();
      _this._selector = null;
    });
    _defineProperty(_this, "_selectSlot", function (_ref3) {
      var startDate = _ref3.startDate,
        endDate = _ref3.endDate,
        action = _ref3.action;
      var current = startDate,
        slots = [];
      while (_dates.default.lte(current, endDate)) {
        slots.push(current);
        current = _dates.default.add(current, _this.props.step, 'minutes');
      }
      (0, _helpers.notify)(_this.props.onSelectSlot, {
        slots: slots,
        start: startDate,
        end: endDate,
        action: action
      });
    });
    _defineProperty(_this, "_select", function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    });
    _this.timeColumnRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(DaySlot, _React$Component);
  return _createClass(DaySlot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectable && !prevProps.selectable) this._selectable();
      if (!this.props.selectable && prevProps.selectable) this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        min = _this$props3.min,
        max = _this$props3.max,
        step = _this$props3.step,
        now = _this$props3.now,
        selectRangeFormat = _this$props3.selectRangeFormat,
        culture = _this$props3.culture,
        props = _objectWithoutProperties(_this$props3, _excluded);
      this._totalMin = _dates.default.diff(min, max, 'minutes');
      var _this$state = this.state,
        selecting = _this$state.selecting,
        startSlot = _this$state.startSlot,
        endSlot = _this$state.endSlot;
      var style = this._slotStyle(startSlot, endSlot);
      var selectDates = {
        start: this.state.startDate,
        end: this.state.endDate
      };
      return /*#__PURE__*/_react.default.createElement(_TimeColumn.default, _extends({}, props, {
        ref: this.timeColumnRef,
        className: (0, _classnames.default)('rbc-day-slot', _dates.default.isToday(max) && 'rbc-today'),
        now: now,
        min: min,
        max: max,
        step: step
      }), this.renderEvents(), selecting && /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-slot-selection",
        style: style
      }, /*#__PURE__*/_react.default.createElement("span", null, _localizer.default.format(selectDates, selectRangeFormat, culture))));
    }
  }]);
}(_react.default.Component);
_defineProperty(DaySlot, "propTypes", {
  events: _propTypes.default.array.isRequired,
  step: _propTypes.default.number.isRequired,
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  now: _propTypes.default.instanceOf(Date),
  rtl: _propTypes.default.bool,
  titleAccessor: _propTypes2.accessor,
  allDayAccessor: _propTypes2.accessor.isRequired,
  startAccessor: _propTypes2.accessor.isRequired,
  endAccessor: _propTypes2.accessor.isRequired,
  selectRangeFormat: _propTypes2.dateFormat,
  eventTimeRangeFormat: _propTypes2.dateFormat,
  culture: _propTypes.default.string,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  eventOffset: _propTypes.default.number,
  onSelecting: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEvent: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  dragThroughEvents: _propTypes.default.bool,
  eventPropGetter: _propTypes.default.func,
  dayWrapperComponent: _propTypes2.elementType,
  eventComponent: _propTypes2.elementType,
  eventWrapperComponent: _propTypes2.elementType.isRequired
});
_defineProperty(DaySlot, "defaultProps", {
  dragThroughEvents: true
});
function minToDate(min, date) {
  var dt = new Date(date),
    totalMins = _dates.default.diff(_dates.default.startOf(date, 'day'), date, 'minutes');
  dt = _dates.default.hours(dt, 0);
  dt = _dates.default.minutes(dt, totalMins + min);
  dt = _dates.default.seconds(dt, 0);
  return _dates.default.milliseconds(dt, 0);
}
var _default = exports.default = DaySlot;