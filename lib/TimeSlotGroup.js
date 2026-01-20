"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _TimeSlot = _interopRequireDefault(require("./TimeSlot"));
var _dates = _interopRequireDefault(require("./utils/dates.js"));
var _localizer = _interopRequireDefault(require("./localizer"));
var _propTypes2 = require("./utils/propTypes");
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
var TimeSlotGroup = exports.default = /*#__PURE__*/function (_Component) {
  function TimeSlotGroup() {
    _classCallCheck(this, TimeSlotGroup);
    return _callSuper(this, TimeSlotGroup, arguments);
  }
  _inherits(TimeSlotGroup, _Component);
  return _createClass(TimeSlotGroup, [{
    key: "renderSlice",
    value: function renderSlice(slotNumber, content, value) {
      var _this$props = this.props,
        dayWrapperComponent = _this$props.dayWrapperComponent,
        showLabels = _this$props.showLabels,
        isNow = _this$props.isNow,
        culture = _this$props.culture;
      return /*#__PURE__*/_react.default.createElement(_TimeSlot.default, {
        key: slotNumber,
        dayWrapperComponent: dayWrapperComponent,
        showLabel: showLabels && !slotNumber,
        content: content,
        culture: culture,
        isNow: isNow,
        value: value
      });
    }
  }, {
    key: "renderSlices",
    value: function renderSlices() {
      var ret = [];
      var sliceLength = this.props.step;
      var sliceValue = this.props.value;
      for (var i = 0; i < this.props.timeslots; i++) {
        var content = _localizer.default.format(sliceValue, this.props.timeGutterFormat, this.props.culture);
        ret.push(this.renderSlice(i, content, sliceValue));
        sliceValue = _dates.default.add(sliceValue, sliceLength, 'minutes');
      }
      return ret;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-timeslot-group"
      }, this.renderSlices());
    }
  }]);
}(_react.Component);
_defineProperty(TimeSlotGroup, "propTypes", {
  dayWrapperComponent: _propTypes2.elementType,
  timeslots: _propTypes.default.number.isRequired,
  step: _propTypes.default.number.isRequired,
  value: _propTypes.default.instanceOf(Date).isRequired,
  showLabels: _propTypes.default.bool,
  isNow: _propTypes.default.bool,
  timeGutterFormat: _propTypes.default.string,
  culture: _propTypes.default.string
});
_defineProperty(TimeSlotGroup, "defaultProps", {
  timeslots: 2,
  step: 30,
  isNow: false,
  showLabels: false
});