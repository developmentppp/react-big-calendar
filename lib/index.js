"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Calendar = _interopRequireDefault(require("./Calendar"));
var _EventWrapper = _interopRequireDefault(require("./EventWrapper"));
var _BackgroundWrapper = _interopRequireDefault(require("./BackgroundWrapper"));
var _localizer = require("./localizer");
var _moment = _interopRequireDefault(require("./localizers/moment"));
var _globalize = _interopRequireDefault(require("./localizers/globalize"));
var _viewLabel = _interopRequireDefault(require("./utils/viewLabel"));
var _move = _interopRequireDefault(require("./utils/move"));
var _constants = require("./utils/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
Object.assign(_Calendar.default, {
  setLocalizer: _localizer.set,
  globalizeLocalizer: _globalize.default,
  momentLocalizer: _moment.default,
  label: _viewLabel.default,
  views: _constants.views,
  Views: _constants.views,
  Navigate: _constants.navigate,
  move: _move.default,
  components: {
    eventWrapper: _EventWrapper.default,
    dayWrapper: _BackgroundWrapper.default,
    dateCellWrapper: _BackgroundWrapper.default
  }
});
var _default = exports.default = _Calendar.default;