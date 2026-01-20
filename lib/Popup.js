"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _offset = _interopRequireDefault(require("dom-helpers/query/offset"));
var _scrollTop = _interopRequireDefault(require("dom-helpers/query/scrollTop"));
var _scrollLeft = _interopRequireDefault(require("dom-helpers/query/scrollLeft"));
var _EventCell = _interopRequireDefault(require("./EventCell"));
var _selection = require("./utils/selection");
var _localizer = _interopRequireDefault(require("./localizer"));
var _propTypes2 = require("./utils/propTypes");
var _excluded = ["events", "selected", "eventComponent", "eventWrapperComponent"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  position: _propTypes.default.object,
  popupOffset: _propTypes.default.number,
  events: _propTypes.default.array,
  selected: _propTypes.default.object,
  eventComponent: _propTypes2.elementType,
  eventWrapperComponent: _propTypes2.elementType,
  dayHeaderFormat: _propTypes2.dateFormat,
  onClose: _propTypes.default.func
};
var Popup = /*#__PURE__*/function (_React$Component) {
  function Popup(props) {
    var _this;
    _classCallCheck(this, Popup);
    _this = _callSuper(this, Popup, [props]);
    _this.rootRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(Popup, _React$Component);
  return _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$popupOffs = this.props.popupOffset,
        popupOffset = _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs;
      var root = this.rootRef.current;
      if (!root) return;
      var _getOffset = (0, _offset.default)(root),
        top = _getOffset.top,
        left = _getOffset.left,
        width = _getOffset.width,
        height = _getOffset.height,
        viewBottom = window.innerHeight + (0, _scrollTop.default)(window),
        viewRight = window.innerWidth + (0, _scrollLeft.default)(window),
        bottom = top + height,
        right = left + width;
      if (bottom > viewBottom || right > viewRight) {
        var topOffset, leftOffset;
        if (bottom > viewBottom) topOffset = bottom - viewBottom + (popupOffset.y || +popupOffset || 0);
        if (right > viewRight) leftOffset = right - viewRight + (popupOffset.x || +popupOffset || 0);
        this.setState({
          topOffset: topOffset,
          leftOffset: leftOffset
        }); //eslint-disable-line
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        events = _this$props.events,
        selected = _this$props.selected,
        eventComponent = _this$props.eventComponent,
        eventWrapperComponent = _this$props.eventWrapperComponent,
        props = _objectWithoutProperties(_this$props, _excluded);
      var _this$props$position = this.props.position,
        left = _this$props$position.left,
        width = _this$props$position.width,
        top = _this$props$position.top,
        topOffset = (this.state || {}).topOffset || 0,
        leftOffset = (this.state || {}).leftOffset || 0;
      var style = {
        top: top - topOffset,
        left: left - leftOffset,
        minWidth: width + width / 2
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.rootRef,
        style: style,
        className: "rbc-overlay"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-overlay-header"
      }, _localizer.default.format(props.slotStart, props.dayHeaderFormat, props.culture)), events.map(function (event, idx) {
        return /*#__PURE__*/_react.default.createElement(_EventCell.default, _extends({
          key: idx
        }, props, {
          event: event,
          eventComponent: eventComponent,
          eventWrapperComponent: eventWrapperComponent,
          selected: (0, _selection.isSelected)(event, selected)
        }));
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-overlay-header",
        style: {
          borderTop: "1px solid #e5e5e5",
          margin: "5px -10px -10px",
          padding: "5px 15px",
          textAlign: "center"
        }
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();
          if (_this2.props.onClose) {
            _this2.props.onClose();
          }
        }
      }, "Schlie\xDFen")));
    }
  }]);
}(_react.default.Component);
Popup.propTypes = propTypes;
var _default = exports.default = Popup;