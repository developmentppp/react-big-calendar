"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _height = _interopRequireDefault(require("dom-helpers/query/height"));
var _querySelectorAll = _interopRequireDefault(require("dom-helpers/query/querySelectorAll"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _propTypes2 = require("./utils/propTypes");
var _eventLevels2 = require("./utils/eventLevels");
var _BackgroundCells = _interopRequireDefault(require("./BackgroundCells"));
var _EventRow = _interopRequireDefault(require("./EventRow"));
var _EventEndingRow = _interopRequireDefault(require("./EventEndingRow"));
var _excluded = ["rtl", "events", "range", "className", "selectable", "renderForMeasure", "startAccessor", "endAccessor", "renderHeader", "minRows", "maxRows", "dateCellWrapper", "eventComponent", "eventWrapperComponent", "onSelectStart", "onSelectEnd"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var propTypes = {
  events: _propTypes.default.array.isRequired,
  range: _propTypes.default.array.isRequired,
  rtl: _propTypes.default.bool,
  renderForMeasure: _propTypes.default.bool,
  renderHeader: _propTypes.default.func,
  container: _propTypes.default.func,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  onShowMore: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  now: _propTypes.default.instanceOf(Date),
  startAccessor: _propTypes2.accessor.isRequired,
  endAccessor: _propTypes2.accessor.isRequired,
  dateCellWrapper: _propTypes2.elementType,
  eventComponent: _propTypes2.elementType,
  eventWrapperComponent: _propTypes2.elementType.isRequired,
  minRows: _propTypes.default.number.isRequired,
  maxRows: _propTypes.default.number.isRequired
};
var defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var DateContentRow = /*#__PURE__*/function (_React$Component) {
  function DateContentRow() {
    var _this;
    _classCallCheck(this, DateContentRow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DateContentRow, [].concat(args));
    _defineProperty(_this, "handleSelectSlot", function (slot) {
      var _this$props = _this.props,
        range = _this$props.range,
        onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
    });
    _defineProperty(_this, "handleShowMore", function (slot) {
      var _this$props2 = _this.props,
        range = _this$props2.range,
        onShowMore = _this$props2.onShowMore;
      var root = _this.rootRef.current;
      var row = root ? (0, _querySelectorAll.default)(root, '.rbc-row-bg')[0] : null;
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = _this.segments.filter(function (seg) {
        return isSegmentInSlot(seg, slot);
      }).map(function (seg) {
        return seg.event;
      });
      onShowMore(events, range[slot - 1], cell, slot);
    });
    _defineProperty(_this, "createHeadingRef", function (r) {
      _this.headingRow = r;
    });
    _defineProperty(_this, "createEventRef", function (r) {
      _this.eventRow = r;
    });
    _defineProperty(_this, "getContainer", function () {
      var container = _this.props.container;
      return container ? container() : _this.rootRef.current;
    });
    _defineProperty(_this, "renderHeadingCell", function (date, index) {
      var _this$props3 = _this.props,
        renderHeader = _this$props3.renderHeader,
        range = _this$props3.range;
      return renderHeader({
        date: date,
        key: "header_".concat(index),
        style: (0, _eventLevels2.segStyle)(1, range.length),
        className: (0, _classnames.default)('rbc-date-cell', _dates.default.eq(date, _this.props.now, 'day') && 'rbc-now' // FIXME use props.now
        )
      });
    });
    _defineProperty(_this, "renderDummy", function () {
      var _this$props4 = _this.props,
        className = _this$props4.className,
        range = _this$props4.range,
        renderHeader = _this$props4.renderHeader;
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: _this.rootRef,
        className: className
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-row-content"
      }, renderHeader && /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-row",
        ref: _this.createHeadingRef
      }, range.map(_this.renderHeadingCell)), /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-row",
        ref: _this.createEventRef
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-row-segment",
        style: (0, _eventLevels2.segStyle)(1, range.length)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-event"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-event-content"
      }, "\xA0"))))));
    });
    _this.rootRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(DateContentRow, _React$Component);
  return _createClass(DateContentRow, [{
    key: "getRowLimit",
    value: function getRowLimit() {
      var eventHeight = (0, _height.default)(this.eventRow);
      var headingHeight = this.headingRow ? (0, _height.default)(this.headingRow) : 0;
      var eventSpace = (0, _height.default)(this.rootRef.current) - headingHeight;
      return Math.max(Math.floor(eventSpace / eventHeight), 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        rtl = _this$props5.rtl,
        events = _this$props5.events,
        range = _this$props5.range,
        className = _this$props5.className,
        selectable = _this$props5.selectable,
        renderForMeasure = _this$props5.renderForMeasure,
        startAccessor = _this$props5.startAccessor,
        endAccessor = _this$props5.endAccessor,
        renderHeader = _this$props5.renderHeader,
        minRows = _this$props5.minRows,
        maxRows = _this$props5.maxRows,
        dateCellWrapper = _this$props5.dateCellWrapper,
        eventComponent = _this$props5.eventComponent,
        eventWrapperComponent = _this$props5.eventWrapperComponent,
        onSelectStart = _this$props5.onSelectStart,
        onSelectEnd = _this$props5.onSelectEnd,
        props = _objectWithoutProperties(_this$props5, _excluded);
      if (renderForMeasure) return this.renderDummy();
      var _endOfRange = (0, _eventLevels2.endOfRange)(range),
        first = _endOfRange.first,
        last = _endOfRange.last;
      var segments = this.segments = events.map(function (evt) {
        return (0, _eventLevels2.eventSegments)(evt, first, last, {
          startAccessor: startAccessor,
          endAccessor: endAccessor
        }, range);
      });
      var _eventLevels = (0, _eventLevels2.eventLevels)(segments, Math.max(maxRows - 1, 1)),
        levels = _eventLevels.levels,
        extra = _eventLevels.extra;
      while (levels.length < minRows) levels.push([]);
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.rootRef,
        className: className
      }, /*#__PURE__*/_react.default.createElement(_BackgroundCells.default, {
        rtl: rtl,
        range: range,
        selectable: selectable,
        container: this.getContainer,
        onSelectStart: onSelectStart,
        onSelectEnd: onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        cellWrapperComponent: dateCellWrapper
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-row-content"
      }, renderHeader && /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-row",
        ref: this.createHeadingRef
      }, range.map(this.renderHeadingCell)), levels.map(function (segs, idx) {
        return /*#__PURE__*/_react.default.createElement(_EventRow.default, _extends({}, props, {
          key: idx,
          start: first,
          end: last,
          segments: segs,
          slots: range.length,
          eventComponent: eventComponent,
          eventWrapperComponent: eventWrapperComponent,
          startAccessor: startAccessor,
          endAccessor: endAccessor
        }));
      }), !!extra.length && /*#__PURE__*/_react.default.createElement(_EventEndingRow.default, _extends({}, props, {
        start: first,
        end: last,
        segments: extra,
        onShowMore: this.handleShowMore,
        eventComponent: eventComponent,
        eventWrapperComponent: eventWrapperComponent
      }))));
    }
  }]);
}(_react.default.Component);
DateContentRow.propTypes = propTypes;
DateContentRow.defaultProps = defaultProps;
var _default = exports.default = DateContentRow;