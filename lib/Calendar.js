"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _uncontrollable = require("uncontrollable");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes2 = require("./utils/propTypes");
var _helpers = require("./utils/helpers");
var _constants = require("./utils/constants");
var _formats = _interopRequireDefault(require("./formats"));
var _viewLabel = _interopRequireDefault(require("./utils/viewLabel"));
var _move = _interopRequireDefault(require("./utils/move"));
var _Views = _interopRequireDefault(require("./Views"));
var _Toolbar = _interopRequireDefault(require("./Toolbar"));
var _EventWrapper = _interopRequireDefault(require("./EventWrapper"));
var _BackgroundWrapper = _interopRequireDefault(require("./BackgroundWrapper"));
var _omit = _interopRequireDefault(require("lodash/omit"));
var _defaults = _interopRequireDefault(require("lodash/defaults"));
var _transform = _interopRequireDefault(require("lodash/transform"));
var _mapValues = _interopRequireDefault(require("lodash/mapValues"));
var _excluded = ["view", "toolbar", "events", "culture", "components", "formats", "style", "className", "elementProps", "date"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
function viewNames(_views) {
  return !Array.isArray(_views) ? Object.keys(_views) : _views;
}
function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames(_views);
  return names.indexOf(view) !== -1;
}
var now = new Date();

/**
 * react-big-calendar is full featured Calendar component for managing events and dates. It uses
 * modern `flexbox` for layout making it super responsive and performant. Leaving most of the layout heavy lifting
 * to the browser. __note:__ The default styles use `height: 100%` which means your container must set an explicit
 * height (feel free to adjust the styles to suit your specific needs).
 *
 * Big Calendar is unopiniated about editing and moving events, prefering to let you implement it in a way that makes
 * the most sense to your app. It also tries not to be prescriptive about your event data structures, just tell it
 * how to find the start and end datetimes and you can pass it whatever you want.
 *
 * One thing to note is that, `react-big-calendar` treats event start/end dates as an _exclusive_ range.
 * which means that the event spans up to, but not including, the end date. In the case
 * of displaying events on whole days, end dates are rounded _up_ to the next day. So an
 * event ending on `Apr 8th 12:00:00 am` will not appear on the 8th, whereas one ending
 * on `Apr 8th 12:01:00 am` will. If you want _inclusive_ ranges consider providing a
 * function `endAccessor` that returns the end date + 1 day for those events that end at midnight.
 */
var Calendar = /*#__PURE__*/function (_React$Component) {
  function Calendar(props) {
    var _this;
    _classCallCheck(this, Calendar);
    _this = _callSuper(this, Calendar, [props]);
    _defineProperty(_this, "getViews", function () {
      var views = _this.props.views;
      if (Array.isArray(views)) {
        return (0, _transform.default)(views, function (obj, name) {
          return obj[name] = _Views.default[name];
        }, {});
      }
      if (_typeof(views) === 'object') {
        return (0, _mapValues.default)(views, function (value, key) {
          if (value === true) {
            return _Views.default[key];
          }
          return value;
        });
      }
      return _Views.default;
    });
    _defineProperty(_this, "getView", function () {
      var views = _this.getViews();
      return views[_this.props.view];
    });
    _defineProperty(_this, "getDrilldownView", function (date) {
      var _this$props = _this.props,
        view = _this$props.view,
        drilldownView = _this$props.drilldownView,
        getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date, view, Object.keys(_this.getViews()));
    });
    _defineProperty(_this, "handleNavigate", function (action, newDate) {
      var _this$props2 = _this.props,
        view = _this$props2.view,
        date = _this$props2.date,
        onNavigate = _this$props2.onNavigate;
      var ViewComponent = _this.getView();
      date = (0, _move.default)(action, newDate || date, ViewComponent);
      onNavigate(date, view, action);
    });
    _defineProperty(_this, "handleViewChange", function (view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) _this.props.onView(view);
    });
    _defineProperty(_this, "handleSelectEvent", function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    });
    _defineProperty(_this, "handleSelectSlot", function (slotInfo) {
      (0, _helpers.notify)(_this.props.onSelectSlot, slotInfo);
    });
    _defineProperty(_this, "handleDrillDown", function (date, view) {
      if (view) _this.handleViewChange(view);
      _this.handleNavigate(_constants.navigate.DATE, date);
    });
    _this.viewRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }
  _inherits(Calendar, _React$Component);
  return _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        view = _this$props3.view,
        toolbar = _this$props3.toolbar,
        events = _this$props3.events,
        culture = _this$props3.culture,
        _this$props3$componen = _this$props3.components,
        components = _this$props3$componen === void 0 ? {} : _this$props3$componen,
        _this$props3$formats = _this$props3.formats,
        formats = _this$props3$formats === void 0 ? {} : _this$props3$formats,
        style = _this$props3.style,
        className = _this$props3.className,
        elementProps = _this$props3.elementProps,
        current = _this$props3.date,
        props = _objectWithoutProperties(_this$props3, _excluded);
      formats = (0, _formats.default)(formats);
      var View = this.getView();
      var names = viewNames(this.props.views);
      var viewComponents = (0, _defaults.default)(components[view] || {}, (0, _omit.default)(components, names), {
        eventWrapper: _EventWrapper.default,
        dayWrapper: _BackgroundWrapper.default,
        dateCellWrapper: _BackgroundWrapper.default
      });
      var ToolbarToRender = components.toolbar || _Toolbar.default;
      return /*#__PURE__*/_react.default.createElement("div", _extends({}, elementProps, {
        className: (0, _classnames.default)('rbc-calendar', className, {
          'rbc-rtl': props.rtl
        }),
        style: style
      }), toolbar && /*#__PURE__*/_react.default.createElement(ToolbarToRender, {
        date: current,
        view: view,
        views: names,
        label: (0, _viewLabel.default)(current, view, formats, culture),
        onViewChange: this.handleViewChange,
        onNavigate: this.handleNavigate,
        messages: this.props.messages
      }), /*#__PURE__*/_react.default.createElement(View, _extends({
        ref: this.viewRef
      }, props, formats, {
        culture: culture,
        formats: undefined,
        events: events,
        date: current,
        components: viewComponents,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: this._showMore
      })));
    }
  }]);
}(_react.default.Component);
_defineProperty(Calendar, "propTypes", {
  /**
   * Props passed to main calendar `<div>`.
   */
  elementProps: _propTypes.default.object,
  /**
   * The current date value of the calendar. Determines the visible view range
   *
   * @controllable onNavigate
   */
  date: _propTypes.default.instanceOf(Date),
  /**
   * The current view of the calendar.
   *
   * @default 'month'
   * @controllable onView
   */
  view: _propTypes.default.string,
  /**
   * An array of event objects to display on the calendar
   */
  events: _propTypes.default.arrayOf(_propTypes.default.object),
  /**
   * Callback fired when the `date` value changes.
   *
   * @controllable date
   */
  onNavigate: _propTypes.default.func,
  /**
   * Callback fired when the `view` value changes.
   *
   * @controllable date
   */
  onView: _propTypes.default.func,
  /**
   * A callback fired when a date selection is made. Only fires when `selectable` is `true`.
   *
   * ```js
   * (
   *   slotInfo: {
   *     start: Date,
   *     end: Date,
   *     slots: Array<Date>,
   *     action: "select" | "click"
   *   }
   * ) => any
   * ```
   */
  onSelectSlot: _propTypes.default.func,
  /**
   * Callback fired when a calendar event is selected.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => any
   * ```
   *
   * @controllable selected
   */
  onSelectEvent: _propTypes.default.func,
  /**
   * Callback fired when dragging a selection in the Time views.
   *
   * Returning `false` from the handler will prevent a selection.
   *
   * ```js
   * (range: { start: Date, end: Date }) => ?boolean
   * ```
   */
  onSelecting: _propTypes.default.func,
  /**
   * The selected event, if any.
   */
  selected: _propTypes.default.object,
  /**
   * An array of built-in view names to allow the calendar to display.
   *
   * @type Calendar.Views ('month'|'week'|'work_week'|'day'|'agenda')
   * @default ['month', 'week', 'day', 'agenda']
   */
  views: _propTypes2.views,
  /**
   * The string name of the destination view for drill-down actions, such
   * as clicking a date header, or the truncated events links. If
   * `getDrilldownView` is also specified it will be used instead.
   *
   * Set to `null` to disable drill-down actions.
   *
   * ```js
   * <BigCalendar
   *   drilldownView="agenda"
   * />
   * ```
   */
  drilldownView: _propTypes.default.string,
  /**
   * Functionally equivalent to `drilldownView`, but accepts a function
   * that can return a view name. It's useful for customizing the drill-down
   * actions depending on the target date and triggering view.
   *
   * Return `null` to disable drill-down actions.
   *
   * ```js
   * <BigCalendar
   *   getDrilldownView={(targetDate, currentViewName, configuredViewNames) =>
   *     if (currentViewName === 'month' && configuredViewNames.includes('week'))
   *       return 'week'
   *
   *     return null;
   *   }}
   * />
   * ```
   */
  getDrilldownView: _propTypes.default.func,
  /**
   * Determines whether the toolbar is displayed
   */
  toolbar: _propTypes.default.bool,
  /**
   * Show truncated events in an overlay when you click the "+_x_ more" link.
   */
  popup: _propTypes.default.bool,
  /**
   * Distance in pixels, from the edges of the viewport, the "show more" overlay should be positioned.
   *
   * ```js
   * <BigCalendar popupOffset={30}/>
   * <BigCalendar popupOffset={{x: 30, y: 20}}/>
   * ```
   */
  popupOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })]),
  /**
   * Allows mouse selection of ranges of dates/times.
   *
   * The 'ignoreEvents' option prevents selection code from running when a
   * drag begins over an event. Useful when you want custom event click or drag
   * logic
   */
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  /**
   * Determines the selectable time increments in week and day views
   */
  step: _propTypes.default.number,
  /**
   * The number of slots per "section" in the time grid views. Adjust with `step`
   * to change the default of 1 hour long groups, with 30 minute slots.
   */
  timeslots: _propTypes.default.number,
  /**
   *Switch the calendar to a `right-to-left` read direction.
   */
  rtl: _propTypes.default.bool,
  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the event node.
   *
   * ```js
   * (
   * 	event: Object,
   * 	start: Date,
   * 	end: Date,
   * 	isSelected: boolean
   * ) => { className?: string, style?: Object }
   * ```
   */
  eventPropGetter: _propTypes.default.func,
  /**
   * Accessor for the event title, used to display event information. Should
   * resolve to a `renderable` value.
   *
   * ```js
   * string | (event: Object) => any
   * ```
   *
   * @type {(func|string)}
   */
  titleAccessor: _propTypes2.accessor,
  /**
   * Determines whether the event should be considered an "all day" event and ignore time.
   * Must resolve to a `boolean` value.
   *
   * ```js
   * string | (event: Object) => boolean
   * ```
   *
   * @type {(func|string)}
   */
  allDayAccessor: _propTypes2.accessor,
  /**
   * The start date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  startAccessor: _propTypes2.accessor,
  /**
   * The end date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  endAccessor: _propTypes2.accessor,
  /**
   * Constrains the minimum _time_ of the Day and Week views.
   */
  min: _propTypes.default.instanceOf(Date),
  /**
   * Constrains the maximum _time_ of the Day and Week views.
   */
  max: _propTypes.default.instanceOf(Date),
  /**
   * Determines how far down the scroll pane is initially scrolled down.
   */
  scrollToTime: _propTypes.default.instanceOf(Date),
  /**
   * Specify a specific culture code for the Calendar.
   *
   * **Note: it's generally better to handle this globally via your i18n library.**
   */
  culture: _propTypes.default.string,
  /**
   * Localizer specific formats, tell the Calendar how to format and display dates.
   *
   * `format` types are dependent on the configured localizer; both Moment and Globalize
   * accept strings of tokens according to their own specification, such as: `'DD mm yyyy'`.
   *
   * ```jsx
   * let formats = {
   *   dateFormat: 'dd',
   *
   *   dayFormat: (date, culture, localizer) =>
   *     localizer.format(date, 'DDD', culture),
   *
   *   dayRangeHeaderFormat: ({ start, end }, culture, local) =>
   *     local.format(start, { date: 'short' }, culture) + ' — ' +
   *     local.format(end, { date: 'short' }, culture)
   * }
   *
   * <Calendar formats={formats} />
   * ```
   *
   * All localizers accept a function of
   * the form `(date: Date, culture: ?string, localizer: Localizer) -> string`
   */
  formats: _propTypes.default.shape({
    /**
     * Format for the day of the month heading in the Month view.
     * e.g. "01", "02", "03", etc
     */
    dateFormat: _propTypes2.dateFormat,
    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     *
     */
    dayFormat: _propTypes2.dateFormat,
    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     *
     */
    weekdayFormat: _propTypes2.dateFormat,
    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat: _propTypes2.dateFormat,
    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     *
     */
    monthHeaderFormat: _propTypes2.dateFormat,
    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat: _propTypes2.dateRangeFormat,
    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat: _propTypes2.dateFormat,
    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 — 5/1/2015"
     */
    agendaHeaderFormat: _propTypes2.dateFormat,
    /**
     * A time range format for selecting time slots, e.g "8:00am — 2:00pm"
     */
    selectRangeFormat: _propTypes2.dateRangeFormat,
    agendaDateFormat: _propTypes2.dateFormat,
    agendaTimeFormat: _propTypes2.dateFormat,
    agendaTimeRangeFormat: _propTypes2.dateRangeFormat,
    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat: _propTypes2.dateRangeFormat
  }),
  /**
   * Customize how different sections of the calendar render by providing custom Components.
   * In particular the `Event` component can be specified for the entire calendar, or you can
   * provide an individual component for each view type.
   *
   * ```jsx
   * let components = {
   *   event: MyEvent, // used by each view (Month, Day, Week)
   *   toolbar: MyToolbar,
   *   agenda: {
   *   	 event: MyAgendaEvent // with the agenda view use a different component to render events
   *   }
   * }
   * <Calendar components={components} />
   * ```
   */
  components: _propTypes.default.shape({
    event: _propTypes2.elementType,
    eventWrapper: _propTypes2.elementType,
    dayWrapper: _propTypes2.elementType,
    dateCellWrapper: _propTypes2.elementType,
    toolbar: _propTypes2.elementType,
    agenda: _propTypes.default.shape({
      date: _propTypes2.elementType,
      time: _propTypes2.elementType,
      event: _propTypes2.elementType
    }),
    day: _propTypes.default.shape({
      header: _propTypes2.elementType,
      event: _propTypes2.elementType
    }),
    week: _propTypes.default.shape({
      header: _propTypes2.elementType,
      event: _propTypes2.elementType
    }),
    month: _propTypes.default.shape({
      header: _propTypes2.elementType,
      dateHeader: _propTypes2.elementType,
      event: _propTypes2.elementType
    })
  }),
  /**
   * String messages used throughout the component, override to provide localizations
   */
  messages: _propTypes.default.shape({
    allDay: _propTypes.default.node,
    previous: _propTypes.default.node,
    next: _propTypes.default.node,
    today: _propTypes.default.node,
    month: _propTypes.default.node,
    week: _propTypes.default.node,
    day: _propTypes.default.node,
    agenda: _propTypes.default.node,
    showMore: _propTypes.default.func
  })
});
_defineProperty(Calendar, "defaultProps", {
  elementProps: {},
  popup: false,
  toolbar: true,
  view: _constants.views.MONTH,
  views: [_constants.views.MONTH, _constants.views.WEEK, _constants.views.DAY, _constants.views.AGENDA],
  date: now,
  step: 30,
  drilldownView: _constants.views.DAY,
  titleAccessor: 'title',
  allDayAccessor: 'allDay',
  startAccessor: 'start',
  endAccessor: 'end'
});
var _default = exports.default = (0, _uncontrollable.uncontrollable)(Calendar, {
  view: 'onView',
  date: 'onNavigate',
  selected: 'onSelectEvent'
});