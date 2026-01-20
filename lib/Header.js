"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var Header = function Header(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react.default.createElement("span", null, label);
};
Header.propTypes = {
  label: _propTypes.default.node
};
var _default = exports.default = Header;