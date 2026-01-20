"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateRangeFormat = exports.dateFormat = exports.accessor = void 0;
Object.defineProperty(exports, "elementType", {
  enumerable: true,
  get: function get() {
    return _elementType.default;
  }
});
exports.views = exports.eventComponent = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _localizer = _interopRequireDefault(require("../localizer"));
var _elementType = _interopRequireDefault(require("react-prop-types/lib/elementType"));
var _all = _interopRequireDefault(require("react-prop-types/lib/all"));
var _constants = require("./constants");
var _createChainableTypeChecker = _interopRequireDefault(require("react-prop-types/lib/utils/createChainableTypeChecker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// export contextShape = React.PropTypes.shape({
//   formats: React.PropTypes.object.isRequired,
//   messages: React.PropTypes.object.isRequired,
//   accessors: React.PropTypes.shape({
//     titleAccessor: accessor,
//     startAccessor: accessor,
//     endAccessor: accessor,
//     allDayAccessor: accessor,
//   }).isRequired,
// }).isRequired,

var eventComponent = exports.eventComponent = _propTypes.default.oneOfType([_elementType.default, _propTypes.default.shape({
  month: _elementType.default,
  week: _elementType.default,
  day: _elementType.default,
  agenda: _elementType.default
})]);
var viewNames = Object.keys(_constants.views).map(function (k) {
  return _constants.views[k];
});
var accessor = exports.accessor = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);
var dateFormat = exports.dateFormat = (0, _createChainableTypeChecker.default)(function () {
  return _localizer.default.propType && _localizer.default.propType.apply(_localizer.default, arguments);
});
var dateRangeFormat = exports.dateRangeFormat = _propTypes.default.func;

/**
 * accepts either an array of builtin view names:
 *
 * ```
 * views={['month', 'day', 'agenda']}
 * ```
 *
 * or an object hash of the view name and the component (or boolean for builtin)
 *
 * ```
 * views={{
 *   month: true,
 *   week: false,
 *   workweek: WorkWeekViewComponent,
 * }}
 * ```
 * @type {[type]}
 */
var views = exports.views = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(viewNames)), (0, _all.default)([_propTypes.default.object, function (props, name) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var prop = props[name],
    err;
  Object.keys(prop).every(function (key) {
    var isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === 'boolean';
    return isBuiltinView || !(err = _elementType.default.apply(void 0, [prop, key].concat(args)));
  });
  return err || null;
}])]);