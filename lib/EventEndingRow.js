"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _EventRowMixin = _interopRequireDefault(require("./EventRowMixin"));
var _eventLevels = require("./utils/eventLevels");
var _messages = _interopRequireDefault(require("./utils/messages"));
var _range = _interopRequireDefault(require("lodash/range"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var eventsInSlot = function eventsInSlot(segments, slot) {
  return segments.filter(function (seg) {
    return isSegmentInSlot(seg, slot);
  }).length;
};
var EventEndingRow = /*#__PURE__*/function (_React$Component) {
  function EventEndingRow() {
    var _this;
    _classCallCheck(this, EventEndingRow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, EventEndingRow, [].concat(args));
    _defineProperty(_this, "S", void 0);
    return _this;
  }
  _inherits(EventEndingRow, _React$Component);
  return _createClass(EventEndingRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        segments = _this$props.segments,
        slotCount = _this$props.slots;
      var rowSegments = (0, _eventLevels.eventLevels)(segments).levels[0];
      var current = 1,
        lastEnd = 1,
        row = [];
      while (current <= slotCount) {
        var key = '_lvl_' + current;
        var _ref = rowSegments.filter(function (seg) {
            return isSegmentInSlot(seg, current);
          })[0] || {},
          event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span; //eslint-disable-line

        if (!event) {
          current++;
          continue;
        }
        var gap = Math.max(0, left - lastEnd);
        if (this.canRenderSlotEvent(left, span)) {
          var content = _EventRowMixin.default.renderEvent(this.props, event);
          if (gap) {
            row.push(_EventRowMixin.default.renderSpan(this.props, gap, key + '_gap'));
          }
          row.push(_EventRowMixin.default.renderSpan(this.props, span, key, content));
          lastEnd = current = right + 1;
        } else {
          if (gap) {
            row.push(_EventRowMixin.default.renderSpan(this.props, gap, key + '_gap'));
          }
          row.push(_EventRowMixin.default.renderSpan(this.props, 1, key, this.renderShowMore(segments, current)));
          lastEnd = current = current + 1;
        }
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "rbc-row"
      }, row);
    }
  }, {
    key: "canRenderSlotEvent",
    value: function canRenderSlotEvent(slot, span) {
      var segments = this.props.segments;
      return (0, _range.default)(slot, slot + span).every(function (s) {
        var count = eventsInSlot(segments, s);
        return count === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function renderShowMore(segments, slot) {
      var _this2 = this;
      var messages = (0, _messages.default)(this.props.messages);
      var count = eventsInSlot(segments, slot);
      return count ? /*#__PURE__*/_react.default.createElement("a", {
        key: 'sm_' + slot,
        href: "#",
        className: 'rbc-show-more',
        onClick: function onClick(e) {
          return _this2.showMore(slot, e);
        }
      }, messages.showMore(count)) : false;
    }
  }, {
    key: "showMore",
    value: function showMore(slot, e) {
      e.preventDefault();
      this.props.onShowMore(slot);
    }
  }]);
}(_react.default.Component);
_defineProperty(EventEndingRow, "propTypes", _objectSpread({
  segments: _propTypes.default.array,
  slots: _propTypes.default.number,
  messages: _propTypes.default.object,
  onShowMore: _propTypes.default.func
}, _EventRowMixin.default.propTypes));
_defineProperty(EventEndingRow, "defaultProps", _objectSpread({}, _EventRowMixin.default.defaultProps));
var _default = exports.default = EventEndingRow;