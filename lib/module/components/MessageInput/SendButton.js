var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _Search = require("../../icons/Search");

var _SendRight = require("../../icons/SendRight");

var _SendUp = require("../../icons/SendUp");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/SendButton.tsx";

var SendButtonWithContext = function SendButtonWithContext(props) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      giphyActive = props.giphyActive,
      sendMessage = props.sendMessage;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
      sendButton = _useTheme$theme.messageInput.sendButton;

  return _react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity, {
    disabled: disabled,
    onPress: disabled ? function () {
      return null;
    } : sendMessage,
    style: [sendButton],
    testID: "send-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, giphyActive && _react["default"].createElement(_Search.Search, {
    pathFill: accent_blue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }), !giphyActive && disabled && _react["default"].createElement(_SendRight.SendRight, {
    pathFill: grey_gainsboro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 36
    }
  }), !giphyActive && !disabled && _react["default"].createElement(_SendUp.SendUp, {
    pathFill: accent_blue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 37
    }
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled,
      prevGiphyActive = prevProps.giphyActive,
      prevSendMessage = prevProps.sendMessage;
  var nextDisabled = nextProps.disabled,
      nextGiphyActive = nextProps.giphyActive,
      nextSendMessage = nextProps.sendMessage;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var giphyActiveEqual = prevGiphyActive === nextGiphyActive;
  if (!giphyActiveEqual) return false;
  var sendMessageEqual = prevSendMessage === nextSendMessage;
  if (!sendMessageEqual) return false;
  return true;
};

var MemoizedSendButton = _react["default"].memo(SendButtonWithContext, areEqual);

var SendButton = function SendButton(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      giphyActive = _useMessageInputConte.giphyActive,
      sendMessage = _useMessageInputConte.sendMessage;

  return _react["default"].createElement(MemoizedSendButton, (0, _extends2["default"])({
    giphyActive: giphyActive,
    sendMessage: sendMessage
  }, props, {
    disabled: props.disabled || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }));
};

exports.SendButton = SendButton;
SendButton.displayName = 'SendButton{messageInput}';
//# sourceMappingURL=SendButton.js.map