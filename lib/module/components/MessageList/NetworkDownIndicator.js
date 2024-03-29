var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetworkDownIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/NetworkDownIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  errorNotification: {
    alignItems: 'center',
    left: 0,
    paddingVertical: 4,
    position: 'absolute',
    right: 0,
    top: 0
  },
  errorNotificationText: {
    color: '#FFFFFF',
    fontSize: 14
  }
});

var NetworkDownIndicator = function NetworkDownIndicator() {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      error = _useChannelContext.error;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      isOnline = _useChatContext.isOnline;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      grey = _useTheme$theme.colors.grey,
      _useTheme$theme$messa = _useTheme$theme.messageList,
      errorNotification = _useTheme$theme$messa.errorNotification,
      errorNotificationText = _useTheme$theme$messa.errorNotificationText;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  if (isOnline && !error) {
    return null;
  }

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.errorNotification, {
      backgroundColor: grey + "E6"
    }, errorNotification],
    testID: "error-notification",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.errorNotificationText, errorNotificationText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, !isOnline ? t('Reconnecting...') : error ? t('Error loading messages for this channel...') : ''));
};

exports.NetworkDownIndicator = NetworkDownIndicator;
//# sourceMappingURL=NetworkDownIndicator.js.map