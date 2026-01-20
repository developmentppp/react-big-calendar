"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayWrapper = exports.DateCellWrapper = void 0;
exports.getEventTimes = getEventTimes;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactDnd = require("react-dnd");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes2 = require("../../utils/propTypes");
var _accessors = require("../../utils/accessors");
var _dates = _interopRequireDefault(require("../../utils/dates"));
var _index = _interopRequireDefault(require("../../index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
function getEventTimes(start, end, dropDate, type) {
  // Calculate duration between original start and end dates
  var duration = _dates.default.diff(start, end);

  // If the event is dropped in a "Day" cell, preserve an event's start time by extracting the hours and minutes off
  // the original start date and add it to newDate.value
  var nextStart = type === 'dateCellWrapper' ? _dates.default.merge(dropDate, start) : dropDate;
  var nextEnd = _dates.default.add(nextStart, duration, 'milliseconds');
  return {
    start: nextStart,
    end: nextEnd
  };
}
var propTypes = {
  connectDropTarget: _propTypes.default.func.isRequired,
  type: _propTypes.default.string,
  isOver: _propTypes.default.bool
};
var DraggableBackgroundWrapper = /*#__PURE__*/function (_React$Component) {
  function DraggableBackgroundWrapper() {
    _classCallCheck(this, DraggableBackgroundWrapper);
    return _callSuper(this, DraggableBackgroundWrapper, arguments);
  }
  _inherits(DraggableBackgroundWrapper, _React$Component);
  return _createClass(DraggableBackgroundWrapper, [{
    key: "render",
    value:
    // constructor(...args) {
    //   super(...args);
    //   this.state = { isOver: false };
    // }
    //
    // componentWillMount() {
    //   let monitor = this.context.dragDropManager.getMonitor()
    //
    //   this.monitor = monitor
    //
    //   this.unsubscribeToStateChange = monitor
    //     .subscribeToStateChange(this.handleStateChange)
    //
    //   this.unsubscribeToOffsetChange = monitor
    //     .subscribeToOffsetChange(this.handleOffsetChange)
    // }
    //
    // componentWillUnmount() {
    //   this.monitor = null
    //   this.unsubscribeToStateChange()
    //   this.unsubscribeToOffsetChange()
    // }
    //
    // handleStateChange = () => {
    //   const event = this.monitor.getItem();
    //   if (!event && this.state.isOver) {
    //     this.setState({ isOver: false });
    //   }
    // }
    //
    // handleOffsetChange = () => {
    //   const { value } = this.props;
    //   const { start, end } = this.monitor.getItem();
    //
    //   const isOver = dates.inRange(value, start, end, 'minute');
    //   if (this.state.isOver !== isOver) {
    //     this.setState({ isOver });
    //   }
    // };

    function render() {
      var _this$props = this.props,
        connectDropTarget = _this$props.connectDropTarget,
        children = _this$props.children,
        type = _this$props.type,
        isOver = _this$props.isOver;
      var BackgroundWrapper = _index.default.components[type];
      var resultingChildren = children;
      if (isOver) resultingChildren = /*#__PURE__*/_react.default.cloneElement(children, {
        className: (0, _classnames.default)(children.props.className, 'rbc-addons-dnd-over')
      });
      return /*#__PURE__*/_react.default.createElement(BackgroundWrapper, null, connectDropTarget(resultingChildren));
    }
  }]);
}(_react.default.Component);
DraggableBackgroundWrapper.propTypes = propTypes;
DraggableBackgroundWrapper.contextTypes = {
  onEventDrop: _propTypes.default.func,
  dragDropManager: _propTypes.default.object,
  startAccessor: _propTypes2.accessor,
  endAccessor: _propTypes2.accessor
};
function createWrapper(type) {
  function collectTarget(connect, monitor) {
    return {
      type: type,
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }
  var dropTarget = {
    drop: function drop(_, monitor, _ref) {
      var props = _ref.props,
        context = _ref.context;
      var event = monitor.getItem();
      var value = props.value;
      var onEventDrop = context.onEventDrop,
        startAccessor = context.startAccessor,
        endAccessor = context.endAccessor;
      var start = (0, _accessors.accessor)(event, startAccessor);
      var end = (0, _accessors.accessor)(event, endAccessor);
      onEventDrop(_objectSpread({
        event: event
      }, getEventTimes(start, end, value, type)));
    }
  };
  return (0, _reactDnd.DropTarget)(['event'], dropTarget, collectTarget)(DraggableBackgroundWrapper);
}
var DateCellWrapper = exports.DateCellWrapper = createWrapper('dateCellWrapper');
var DayWrapper = exports.DayWrapper = createWrapper('dayWrapper');