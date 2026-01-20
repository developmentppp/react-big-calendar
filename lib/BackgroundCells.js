"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _dates = _interopRequireDefault(require("./utils/dates"));
var _eventLevels = require("./utils/eventLevels");
var _helpers = require("./utils/helpers");
var _propTypes2 = require("./utils/propTypes");
var _selection = require("./utils/selection");
var _Selection = _interopRequireWildcard(require("./Selection"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var BackgroundCells = /*#__PURE__*/function (_React$Component) {
  function BackgroundCells(props, context) {
    var _this;
    _classCallCheck(this, BackgroundCells);
    _this = _callSuper(this, BackgroundCells, [props, context]);
    _this.state = {
      selecting: false
    };
    _this.rootRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(BackgroundCells, _React$Component);
  return _createClass(BackgroundCells, [{
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
      var _this$props = this.props,
        range = _this$props.range,
        Wrapper = _this$props.cellWrapperComponent;
      var _this$state = this.state,
        selecting = _this$state.selecting,
        startIdx = _this$state.startIdx,
        endIdx = _this$state.endIdx;
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.rootRef,
        className: "rbc-row-bg"
      }, range.map(function (date, index) {
        var selected = selecting && index >= startIdx && index <= endIdx;
        return /*#__PURE__*/_react.default.createElement(Wrapper, {
          key: index,
          value: date,
          range: range
        }, /*#__PURE__*/_react.default.createElement("div", {
          style: (0, _eventLevels.segStyle)(1, range.length),
          className: (0, _classnames.default)('rbc-day-bg', selected && 'rbc-selected-cell', _dates.default.isToday(date) && 'rbc-today')
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function _selectable() {
      var _this2 = this;
      var node = this.rootRef.current;
      var selector = this._selector = new _Selection.default(this.props.container);
      selector.on('selecting', function (box) {
        var _this2$props = _this2.props,
          range = _this2$props.range,
          rtl = _this2$props.rtl;
        var currentNode = _this2.rootRef.current;
        var startIdx = -1;
        var endIdx = -1;
        if (!_this2.state.selecting) {
          (0, _helpers.notify)(_this2.props.onSelectStart, [box]);
          _this2._initial = {
            x: box.x,
            y: box.y
          };
        }
        if (selector.isSelected(currentNode)) {
          var nodeBox = (0, _Selection.getBoundsForNode)(currentNode);
          var _dateCellSelection = (0, _selection.dateCellSelection)(_this2._initial, nodeBox, box, range.length, rtl);
          startIdx = _dateCellSelection.startIdx;
          endIdx = _dateCellSelection.endIdx;
        }
        _this2.setState({
          selecting: true,
          startIdx: startIdx,
          endIdx: endIdx
        });
      });
      selector.on('mousedown', function (box) {
        if (_this2.props.selectable !== 'ignoreEvents') return;
        return !(0, _Selection.isEvent)(_this2.rootRef.current, box);
      });
      selector.on('click', function (point) {
        var currentNode = _this2.rootRef.current;
        if (!(0, _Selection.isEvent)(currentNode, point)) {
          var rowBox = (0, _Selection.getBoundsForNode)(currentNode);
          var _this2$props2 = _this2.props,
            range = _this2$props2.range,
            rtl = _this2$props2.rtl;
          if ((0, _selection.pointInBox)(rowBox, point)) {
            var width = (0, _selection.slotWidth)((0, _Selection.getBoundsForNode)(currentNode), range.length);
            var currentCell = (0, _selection.getCellAtX)(rowBox, point.x, width, rtl, range.length);
            _this2._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: 'click'
            });
          }
        }
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
      });
      selector.on('select', function () {
        _this2._selectSlot(_objectSpread(_objectSpread({}, _this2.state), {}, {
          action: 'select'
        }));
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
        (0, _helpers.notify)(_this2.props.onSelectEnd, [_this2.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function _teardownSelectable() {
      if (!this._selector) return;
      this._selector.teardown();
      this._selector = null;
    }
  }, {
    key: "_selectSlot",
    value: function _selectSlot(_ref) {
      var endIdx = _ref.endIdx,
        startIdx = _ref.startIdx,
        action = _ref.action;
      if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action: action
      });
    }
  }]);
}(_react.default.Component);
_defineProperty(BackgroundCells, "propTypes", {
  cellWrapperComponent: _propTypes2.elementType,
  container: _propTypes.default.func,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  range: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  rtl: _propTypes.default.bool,
  type: _propTypes.default.string
});
var _default = exports.default = BackgroundCells;