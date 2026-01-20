"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _EventCell = _interopRequireDefault(require("./EventCell"));
var _height = _interopRequireDefault(require("dom-helpers/query/height"));
var _propTypes2 = require("./utils/propTypes");
var _eventLevels = require("./utils/eventLevels");
var _selection = require("./utils/selection");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/prop-types */
var _default = exports.default = {
  propTypes: {
    slots: _propTypes.default.number.isRequired,
    end: _propTypes.default.instanceOf(Date),
    start: _propTypes.default.instanceOf(Date),
    selected: _propTypes.default.object,
    eventPropGetter: _propTypes.default.func,
    titleAccessor: _propTypes2.accessor,
    allDayAccessor: _propTypes2.accessor,
    startAccessor: _propTypes2.accessor,
    endAccessor: _propTypes2.accessor,
    eventComponent: _propTypes2.elementType,
    eventWrapperComponent: _propTypes2.elementType.isRequired,
    onSelect: _propTypes.default.func
  },
  defaultProps: {
    segments: [],
    selected: {},
    slots: 7
  },
  renderEvent: function renderEvent(props, event) {
    var eventPropGetter = props.eventPropGetter,
      selected = props.selected,
      start = props.start,
      end = props.end,
      startAccessor = props.startAccessor,
      endAccessor = props.endAccessor,
      titleAccessor = props.titleAccessor,
      allDayAccessor = props.allDayAccessor,
      eventComponent = props.eventComponent,
      eventWrapperComponent = props.eventWrapperComponent,
      onSelect = props.onSelect;
    return /*#__PURE__*/_react.default.createElement(_EventCell.default, {
      event: event,
      eventWrapperComponent: eventWrapperComponent,
      eventPropGetter: eventPropGetter,
      onSelect: onSelect,
      selected: (0, _selection.isSelected)(event, selected),
      startAccessor: startAccessor,
      endAccessor: endAccessor,
      titleAccessor: titleAccessor,
      allDayAccessor: allDayAccessor,
      slotStart: start,
      slotEnd: end,
      eventComponent: eventComponent
    });
  },
  renderSpan: function renderSpan(props, len, key) {
    var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';
    var slots = props.slots;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key,
      className: "rbc-row-segment",
      style: (0, _eventLevels.segStyle)(Math.abs(len), slots)
    }, content);
  },
  // Note: This method requires the component to have a rootRef.
  // When called, `this.rootRef.current` should be the root DOM element.
  getRowHeight: function getRowHeight() {
    if (this.rootRef && this.rootRef.current) {
      return (0, _height.default)(this.rootRef.current);
    }
    return 0;
  }
};