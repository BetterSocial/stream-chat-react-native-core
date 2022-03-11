var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessageOverlayContext = exports.useMessageOverlayContext = exports.MessageOverlayProvider = exports.MessageOverlayContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/messageOverlayContext/MessageOverlayContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MessageOverlayContext = _react["default"].createContext({});

exports.MessageOverlayContext = MessageOverlayContext;

var MessageOverlayProvider = function MessageOverlayProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;

  var _useState = (0, _react.useState)(value == null ? void 0 : value.data),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var reset = function reset() {
    setData(value == null ? void 0 : value.data);
  };

  var messageOverlayContext = {
    data: data,
    reset: reset,
    setData: setData
  };
  return _react["default"].createElement(MessageOverlayContext.Provider, {
    value: messageOverlayContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, children);
};

exports.MessageOverlayProvider = MessageOverlayProvider;

var useMessageOverlayContext = function useMessageOverlayContext() {
  return (0, _react.useContext)(MessageOverlayContext);
};

exports.useMessageOverlayContext = useMessageOverlayContext;

var withMessageOverlayContext = function withMessageOverlayContext(Component) {
  var WithMessageOverlayContextComponent = function WithMessageOverlayContextComponent(props) {
    var messageContext = useMessageOverlayContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, messageContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 12
      }
    }));
  };

  WithMessageOverlayContextComponent.displayName = "WithMessageOverlayContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithMessageOverlayContextComponent;
};

exports.withMessageOverlayContext = withMessageOverlayContext;
//# sourceMappingURL=MessageOverlayContext.js.map