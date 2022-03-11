var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _useCreateChatContext = require("./hooks/useCreateChatContext");

var _useIsOnline2 = require("./hooks/useIsOnline");

var _useMutedUsers = require("./hooks/useMutedUsers");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _useStreami18n = require("../../hooks/useStreami18n");

var _native = require("../../native");

var _version = require("../../version.json");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Chat/Chat.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChatWithContext = function ChatWithContext(props) {
  var children = props.children,
      client = props.client,
      _props$closeConnectio = props.closeConnectionOnBackground,
      closeConnectionOnBackground = _props$closeConnectio === void 0 ? true : _props$closeConnectio,
      i18nInstance = props.i18nInstance,
      style = props.style;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      channel = _useState2[0],
      setChannel = _useState2[1];

  var _useState3 = (0, _react.useState)({
    t: function t(key) {
      return key;
    },
    tDateTimeParser: function tDateTimeParser(input) {
      return (0, _dayjs["default"])(input);
    }
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      translators = _useState4[0],
      setTranslators = _useState4[1];

  var loadingTranslators = (0, _useStreami18n.useStreami18n)({
    i18nInstance: i18nInstance,
    setTranslators: setTranslators
  });

  var _useIsOnline = (0, _useIsOnline2.useIsOnline)(client, closeConnectionOnBackground),
      connectionRecovering = _useIsOnline.connectionRecovering,
      isOnline = _useIsOnline.isOnline;

  var mutedUsers = (0, _useMutedUsers.useMutedUsers)(client);
  (0, _react.useEffect)(function () {
    if (client.setUserAgent) {
      client.setUserAgent(_native.SDK + "-" + _reactNative.Platform.OS + "-" + _version.version);
      client.recoverStateOnReconnect = false;
    }
  }, []);

  var setActiveChannel = function setActiveChannel(newChannel) {
    return setChannel(newChannel);
  };

  var chatContext = (0, _useCreateChatContext.useCreateChatContext)({
    channel: channel,
    client: client,
    connectionRecovering: connectionRecovering,
    isOnline: isOnline,
    mutedUsers: mutedUsers,
    setActiveChannel: setActiveChannel
  });
  if (loadingTranslators) return null;
  return _react["default"].createElement(_ChatContext.ChatProvider, {
    value: chatContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, _react["default"].createElement(_TranslationContext.TranslationProvider, {
    value: translators,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, _react["default"].createElement(_ThemeContext.ThemeProvider, {
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, children)));
};

var Chat = function Chat(props) {
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      style = _useOverlayContext.style;

  return _react["default"].createElement(ChatWithContext, (0, _extends2["default"])({
    style: style
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 10
    }
  }));
};

exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map