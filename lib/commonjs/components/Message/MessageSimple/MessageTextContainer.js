var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageTextContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _renderText = require("./utils/renderText");

var _MessageContext = require("../../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _excluded = ["onlyEmojiMarkdown"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageTextContainer.tsx";

var styles = _reactNative.StyleSheet.create({
  textContainer: {
    maxWidth: 250,
    paddingHorizontal: 16
  }
});

var MessageTextContainerWithContext = function MessageTextContainerWithContext(props) {
  var theme = (0, _ThemeContext.useTheme)();
  var markdownRules = props.markdownRules,
      _props$markdownStyles = props.markdownStyles,
      markdownStylesProp = _props$markdownStyles === void 0 ? {} : _props$markdownStyles,
      message = props.message,
      messageOverlay = props.messageOverlay,
      MessageText = props.MessageText,
      onLongPress = props.onLongPress,
      onlyEmojis = props.onlyEmojis,
      onPress = props.onPress,
      preventPress = props.preventPress,
      _props$styles = props.styles,
      stylesProp = _props$styles === void 0 ? {} : _props$styles;
  var _theme$theme = theme.theme,
      colors = _theme$theme.colors,
      _theme$theme$messageS = _theme$theme.messageSimple.content,
      markdown = _theme$theme$messageS.markdown,
      _theme$theme$messageS2 = _theme$theme$messageS.textContainer,
      onlyEmojiMarkdown = _theme$theme$messageS2.onlyEmojiMarkdown,
      textContainer = (0, _objectWithoutProperties2["default"])(_theme$theme$messageS2, _excluded);
  if (!message.text) return null;
  var markdownStyles = (0, _extends2["default"])({}, markdown, markdownStylesProp);
  return _react["default"].createElement(_reactNative.View, {
    style: [styles.textContainer, textContainer, stylesProp.textContainer],
    testID: "message-text-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, MessageText ? _react["default"].createElement(MessageText, (0, _extends2["default"])({}, props, {
    renderText: _renderText.renderText,
    theme: theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })) : (0, _renderText.renderText)({
    colors: colors,
    markdownRules: markdownRules,
    markdownStyles: (0, _extends2["default"])({}, markdownStyles, onlyEmojis ? onlyEmojiMarkdown : {}),
    message: message,
    messageOverlay: messageOverlay,
    onLongPress: onLongPress,
    onlyEmojis: onlyEmojis,
    onPress: onPress,
    preventPress: preventPress
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevMessage$mentione, _nextMessage$mentione, _nextMessage$mentione2, _prevMessage$mentione2, _nextMessage$mentione3;

  var prevMessage = prevProps.message,
      prevOnlyEmojis = prevProps.onlyEmojis;
  var nextMessage = nextProps.message,
      nextOnlyEmojis = nextProps.onlyEmojis;
  var messageTextEqual = prevMessage.text === nextMessage.text;
  if (!messageTextEqual) return false;
  var onlyEmojisEqual = prevOnlyEmojis === nextOnlyEmojis;
  if (!onlyEmojisEqual) return false;
  var mentionedUsersEqual = ((_prevMessage$mentione = prevMessage.mentioned_users) == null ? void 0 : _prevMessage$mentione.length) === ((_nextMessage$mentione = nextMessage.mentioned_users) == null ? void 0 : _nextMessage$mentione.length) && (((_nextMessage$mentione2 = nextMessage.mentioned_users) == null ? void 0 : _nextMessage$mentione2.length) === 0 || ((_prevMessage$mentione2 = prevMessage.mentioned_users) == null ? void 0 : _prevMessage$mentione2.length) && ((_nextMessage$mentione3 = nextMessage.mentioned_users) == null ? void 0 : _nextMessage$mentione3.length) && prevMessage.mentioned_users[0].name === nextMessage.mentioned_users[0].name);
  if (!mentionedUsersEqual) return false;
  return true;
};

var MemoizedMessageTextContainer = _react["default"].memo(MessageTextContainerWithContext, areEqual);

var MessageTextContainer = function MessageTextContainer(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      message = _useMessageContext.message,
      onLongPress = _useMessageContext.onLongPress,
      onlyEmojis = _useMessageContext.onlyEmojis,
      onPress = _useMessageContext.onPress,
      preventPress = _useMessageContext.preventPress;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      markdownRules = _useMessagesContext.markdownRules,
      MessageText = _useMessagesContext.MessageText;

  return _react["default"].createElement(MemoizedMessageTextContainer, (0, _extends2["default"])({
    markdownRules: markdownRules,
    message: message,
    MessageText: MessageText,
    onLongPress: onLongPress,
    onlyEmojis: onlyEmojis,
    onPress: onPress,
    preventPress: preventPress
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }));
};

exports.MessageTextContainer = MessageTextContainer;
MessageTextContainer.displayName = 'MessageTextContainer{messageSimple{content}}';
//# sourceMappingURL=MessageTextContainer.js.map