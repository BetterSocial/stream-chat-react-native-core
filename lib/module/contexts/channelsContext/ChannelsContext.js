var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChannelsContext = exports.useChannelsContext = exports.ChannelsProvider = exports.ChannelsContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/channelsContext/ChannelsContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChannelsContext = _react["default"].createContext({});

exports.ChannelsContext = ChannelsContext;

var ChannelsProvider = function ChannelsProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(ChannelsContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 3
    }
  }, children);
};

exports.ChannelsProvider = ChannelsProvider;

var useChannelsContext = function useChannelsContext() {
  return (0, _react.useContext)(ChannelsContext);
};

exports.useChannelsContext = useChannelsContext;

var withChannelsContext = function withChannelsContext(Component) {
  var WithChannelsContextComponent = function WithChannelsContextComponent(props) {
    var channelsContext = useChannelsContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, channelsContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 12
      }
    }));
  };

  WithChannelsContextComponent.displayName = "WithChannelsContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithChannelsContextComponent;
};

exports.withChannelsContext = withChannelsContext;
//# sourceMappingURL=ChannelsContext.js.map