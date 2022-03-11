var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withThreadContext = exports.useThreadContext = exports.ThreadProvider = exports.ThreadContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/threadContext/ThreadContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ThreadContext = _react["default"].createContext({});

exports.ThreadContext = ThreadContext;

var ThreadProvider = function ThreadProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(ThreadContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 3
    }
  }, children);
};

exports.ThreadProvider = ThreadProvider;

var useThreadContext = function useThreadContext() {
  return (0, _react.useContext)(ThreadContext);
};

exports.useThreadContext = useThreadContext;

var withThreadContext = function withThreadContext(Component) {
  var WithThreadContextComponent = function WithThreadContextComponent(props) {
    var threadContext = useThreadContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, threadContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 12
      }
    }));
  };

  WithThreadContextComponent.displayName = "WithThreadContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithThreadContextComponent;
};

exports.withThreadContext = withThreadContext;
//# sourceMappingURL=ThreadContext.js.map