"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getBoundsForNode = getBoundsForNode;
exports.isEvent = isEvent;
exports.objectsCollide = objectsCollide;
var _contains = _interopRequireDefault(require("dom-helpers/query/contains"));
var _closest = _interopRequireDefault(require("dom-helpers/query/closest"));
var _events = _interopRequireDefault(require("dom-helpers/events"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function addEventListener(type, handler) {
  _events.default.on(document, type, handler);
  return {
    remove: function remove() {
      _events.default.off(document, type, handler);
    }
  };
}
function isOverContainer(container, x, y) {
  return !container || (0, _contains.default)(container, document.elementFromPoint(x, y));
}
function isEvent(node, _ref) {
  var clientX = _ref.clientX,
    clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return !!(0, _closest.default)(target, '.rbc-event', node);
}
var clickTolerance = 5;
var Selection = /*#__PURE__*/function () {
  function Selection(node) {
    var global = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _classCallCheck(this, Selection);
    this.container = node;
    this.globalMouse = !node || global;
    this._listeners = Object.create(null);
    this._mouseDown = this._mouseDown.bind(this);
    this._mouseUp = this._mouseUp.bind(this);
    this._openSelector = this._openSelector.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._onMouseDownListener = addEventListener('mousedown', this._mouseDown);
    this._onKeyDownListener = addEventListener('keydown', this._keyListener);
    this._onKeyUpListener = addEventListener('keyup', this._keyListener);
  }
  return _createClass(Selection, [{
    key: "on",
    value: function on(type, handler) {
      var handlers = this._listeners[type] || (this._listeners[type] = []);
      handlers.push(handler);
      return {
        remove: function remove() {
          var idx = handlers.indexOf(handler);
          if (idx !== -1) handlers.splice(idx, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var result;
      var handlers = this._listeners[type] || [];
      handlers.forEach(function (fn) {
        if (result === undefined) result = fn.apply(void 0, args);
      });
      return result;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this.listeners = Object.create(null);
      this._onMouseDownListener && this._onMouseDownListener.remove();
      this._onMouseUpListener && this._onMouseUpListener.remove();
      this._onMouseMoveListener && this._onMouseMoveListener.remove();
      this._onKeyUpListener && this._onKeyUpListener.remove();
      this._onKeyDownListener && this._onKeyDownListener.remove();
    }
  }, {
    key: "isSelected",
    value: function isSelected(node) {
      var box = this._selectRect;
      if (!box || !this.selecting) return false;
      return objectsCollide(box, getBoundsForNode(node));
    }
  }, {
    key: "filter",
    value: function filter(items) {
      var box = this._selectRect;

      //not selecting
      if (!box || !this.selecting) return [];
      return items.filter(this.isSelected, this);
    }
  }, {
    key: "_mouseDown",
    value: function _mouseDown(e) {
      var node = this.container(),
        collides,
        offsetData;

      // Right clicks
      if (e.which === 3 || e.button === 2 || !isOverContainer(node, e.clientX, e.clientY)) return;
      if (!this.globalMouse && node && !(0, _contains.default)(node, e.target)) {
        var _normalizeDistance = normalizeDistance(0),
          top = _normalizeDistance.top,
          left = _normalizeDistance.left,
          bottom = _normalizeDistance.bottom,
          right = _normalizeDistance.right;
        offsetData = getBoundsForNode(node);
        collides = objectsCollide({
          top: offsetData.top - top,
          left: offsetData.left - left,
          bottom: offsetData.bottom + bottom,
          right: offsetData.right + right
        }, {
          top: e.pageY,
          left: e.pageX
        });
        if (!collides) return;
      }
      var result = this.emit('mousedown', this._mouseDownData = {
        x: e.pageX,
        y: e.pageY,
        clientX: e.clientX,
        clientY: e.clientY
      });
      if (result === false) return;

      //e.preventDefault();

      this._onMouseUpListener = addEventListener('mouseup', this._mouseUp);
      this._onMouseMoveListener = addEventListener('mousemove', this._openSelector);
    }
  }, {
    key: "_mouseUp",
    value: function _mouseUp(e) {
      this._onMouseUpListener && this._onMouseUpListener.remove();
      this._onMouseMoveListener && this._onMouseMoveListener.remove();
      if (!this._mouseDownData) return;
      var inRoot = !this.container || (0, _contains.default)(this.container(), e.target);
      var bounds = this._selectRect;
      var click = this.isClick(e.pageX, e.pageY);
      this._mouseDownData = null;
      if (click && !inRoot) {
        return this.emit('reset');
      }
      if (click && inRoot) return this.emit('click', {
        x: e.pageX,
        y: e.pageY,
        clientX: e.clientX,
        clientY: e.clientY
      });

      // User drag-clicked in the Selectable area
      if (!click) return this.emit('select', bounds);
      this.selecting = false;
    }
  }, {
    key: "_openSelector",
    value: function _openSelector(e) {
      var _this$_mouseDownData = this._mouseDownData,
        x = _this$_mouseDownData.x,
        y = _this$_mouseDownData.y;
      var w = Math.abs(x - e.pageX);
      var h = Math.abs(y - e.pageY);
      var left = Math.min(e.pageX, x),
        top = Math.min(e.pageY, y),
        old = this.selecting;
      this.selecting = true;
      if (!old) {
        this.emit('selectStart', this._mouseDownData);
      }
      if (!this.isClick(e.pageX, e.pageY)) this.emit('selecting', this._selectRect = {
        top: top,
        left: left,
        x: e.pageX,
        y: e.pageY,
        right: left + w,
        bottom: top + h
      });
    }
  }, {
    key: "_keyListener",
    value: function _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function isClick(pageX, pageY) {
      var _this$_mouseDownData2 = this._mouseDownData,
        x = _this$_mouseDownData2.x,
        y = _this$_mouseDownData2.y;
      return Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
    }
  }]);
}();
/**
 * Resolve the disance prop from either an Int or an Object
 * @return {Object}
 */
function normalizeDistance() {
  var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (_typeof(distance) !== 'object') distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}

/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */
function objectsCollide(nodeA, nodeB) {
  var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _getBoundsForNode = getBoundsForNode(nodeA),
    aTop = _getBoundsForNode.top,
    aLeft = _getBoundsForNode.left,
    _getBoundsForNode$rig = _getBoundsForNode.right,
    aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
    _getBoundsForNode$bot = _getBoundsForNode.bottom,
    aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode(nodeB),
    bTop = _getBoundsForNode2.top,
    bLeft = _getBoundsForNode2.left,
    _getBoundsForNode2$ri = _getBoundsForNode2.right,
    bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
    _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
    bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !(
  // 'a' bottom doesn't touch 'b' top
  aBottom - tolerance < bTop ||
  // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom ||
  // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft ||
  // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}

/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */
function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(),
    left = rect.left + pageOffset('left'),
    top = rect.top + pageOffset('top');
  return {
    top: top,
    left: left,
    right: (node.offsetWidth || 0) + left,
    bottom: (node.offsetHeight || 0) + top
  };
}
function pageOffset(dir) {
  if (dir === 'left') return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0;
}
var _default = exports.default = Selection;