"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withDragAndDrop;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactDnd = require("react-dnd");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes2 = require("../../utils/propTypes");
var _DraggableEventWrapper = _interopRequireDefault(require("./DraggableEventWrapper"));
var _backgroundWrapper = require("./backgroundWrapper");
var _excluded = ["selectable", "components"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var html5Backend;
try {
  html5Backend = require('react-dnd-html5-backend');
} catch (err) {/* optional dep missing */}
function withDragAndDrop(Calendar) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$backend = _ref.backend,
    backend = _ref$backend === void 0 ? html5Backend : _ref$backend;
  var DragAndDropCalendar = /*#__PURE__*/function (_React$Component) {
    function DragAndDropCalendar() {
      var _this;
      _classCallCheck(this, DragAndDropCalendar);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, DragAndDropCalendar, [].concat(args));
      _defineProperty(_this, "handleStateChange", function () {
        var isDragging = !!_this.monitor.getItem();
        if (isDragging !== _this.state.isDragging) {
          setTimeout(function () {
            return _this.setState({
              isDragging: isDragging
            });
          });
        }
      });
      _this.state = {
        isDragging: false
      };
      return _this;
    }
    _inherits(DragAndDropCalendar, _React$Component);
    return _createClass(DragAndDropCalendar, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          onEventDrop: this.props.onEventDrop,
          startAccessor: this.props.startAccessor,
          endAccessor: this.props.endAccessor
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var monitor = this.context.dragDropManager.getMonitor();
        this.monitor = monitor;
        this.unsubscribeToStateChange = monitor.subscribeToStateChange(this.handleStateChange);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.monitor = null;
        if (this.unsubscribeToStateChange) {
          this.unsubscribeToStateChange();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          selectable = _this$props.selectable,
          components = _this$props.components,
          props = _objectWithoutProperties(_this$props, _excluded);
        delete props.onEventDrop;
        props.selectable = selectable ? 'ignoreEvents' : false;
        props.className = (0, _classnames.default)(props.className, 'rbc-addons-dnd', this.state.isDragging && 'rbc-addons-dnd-is-dragging');
        props.components = _objectSpread(_objectSpread({}, components), {}, {
          eventWrapper: _DraggableEventWrapper.default,
          dateCellWrapper: _backgroundWrapper.DateCellWrapper,
          dayWrapper: _backgroundWrapper.DayWrapper
        });
        return /*#__PURE__*/_react.default.createElement(Calendar, props);
      }
    }]);
  }(_react.default.Component);
  _defineProperty(DragAndDropCalendar, "propTypes", {
    selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']).isRequired,
    components: _propTypes.default.object
  });
  DragAndDropCalendar.propTypes = {
    onEventDrop: _propTypes.default.func.isRequired,
    startAccessor: _propTypes2.accessor,
    endAccessor: _propTypes2.accessor
  };
  DragAndDropCalendar.defaultProps = {
    startAccessor: 'start',
    endAccessor: 'end'
  };
  DragAndDropCalendar.contextTypes = {
    dragDropManager: _propTypes.default.object
  };
  DragAndDropCalendar.childContextTypes = {
    onEventDrop: _propTypes.default.func,
    startAccessor: _propTypes2.accessor,
    endAccessor: _propTypes2.accessor
  };
  if (backend === false) {
    return DragAndDropCalendar;
  } else {
    return (0, _reactDnd.DragDropContext)(backend)(DragAndDropCalendar);
  }
}