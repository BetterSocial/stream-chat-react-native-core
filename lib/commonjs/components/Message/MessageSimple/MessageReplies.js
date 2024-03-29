var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageReplies = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _MessageContext = require("../../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageReplies.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8
  },
  curveContainer: {
    flexDirection: 'row'
  },
  leftMessageRepliesCurve: (0, _extends2["default"])({
    borderBottomLeftRadius: 16,
    borderRightColor: 'transparent'
  }, _reactNative.Platform.select({
    android: {
      borderRightWidth: 0
    }
  })),
  messageRepliesCurve: {
    borderTopColor: 'transparent',
    borderTopWidth: 0,
    borderWidth: 1,
    height: 16,
    width: 16
  },
  messageRepliesText: {
    fontSize: 12,
    fontWeight: '700',
    paddingBottom: 5,
    paddingLeft: 8
  },
  rightMessageRepliesCurve: (0, _extends2["default"])({
    borderBottomRightRadius: 16,
    borderLeftColor: 'transparent'
  }, _reactNative.Platform.select({
    android: {
      borderLeftWidth: 0
    }
  }))
});

var MessageRepliesWithContext = function MessageRepliesWithContext(props) {
  var alignment = props.alignment,
      message = props.message,
      MessageRepliesAvatars = props.MessageRepliesAvatars,
      noBorder = props.noBorder,
      _onLongPress = props.onLongPress,
      onOpenThread = props.onOpenThread,
      _onPress = props.onPress,
      _onPressIn = props.onPressIn,
      preventPress = props.preventPress,
      repliesCurveColor = props.repliesCurveColor,
      t = props.t,
      threadList = props.threadList;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      accent_blue = _useTheme$theme.colors.accent_blue,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.replies,
      container = _useTheme$theme$messa.container,
      leftCurve = _useTheme$theme$messa.leftCurve,
      messageRepliesText = _useTheme$theme$messa.messageRepliesText,
      rightCurve = _useTheme$theme$messa.rightCurve;

  if (threadList || !message.reply_count) return null;
  return _react["default"].createElement(_reactNative.View, {
    style: styles.curveContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, alignment === 'left' && _react["default"].createElement(_reactNative.View, {
    testID: "message-replies-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, !noBorder && _react["default"].createElement(_reactNative.View, {
    style: [{
      borderColor: repliesCurveColor
    }, styles.messageRepliesCurve, styles.leftMessageRepliesCurve, leftCurve],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), _react["default"].createElement(MessageRepliesAvatars, {
    alignment: alignment,
    message: message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  })), _react["default"].createElement(_reactNative.TouchableOpacity, {
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'messageReplies',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          defaultHandler: onOpenThread,
          emitter: 'messageReplies',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          defaultHandler: onOpenThread,
          emitter: 'messageReplies',
          event: event
        });
      }
    },
    style: [styles.container, container],
    testID: "message-replies",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.messageRepliesText, {
      color: accent_blue
    }, messageRepliesText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, message.reply_count === 1 ? t('1 Thread Reply') : t('{{ replyCount }} Thread Replies', {
    replyCount: message.reply_count
  }))), alignment === 'right' && _react["default"].createElement(_reactNative.View, {
    testID: "message-replies-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, _react["default"].createElement(MessageRepliesAvatars, {
    alignment: alignment,
    message: message,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }), !noBorder && _react["default"].createElement(_reactNative.View, {
    style: [{
      borderColor: repliesCurveColor
    }, styles.messageRepliesCurve, styles.rightMessageRepliesCurve, rightCurve],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  })));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessage = prevProps.message,
      prevNoBorder = prevProps.noBorder,
      prevT = prevProps.t,
      prevThreadList = prevProps.threadList;
  var nextMessage = nextProps.message,
      nextNoBorder = nextProps.noBorder,
      nextT = nextProps.t,
      nextThreadList = nextProps.threadList;
  var threadListEqual = prevThreadList === nextThreadList;
  if (!threadListEqual) return false;
  var messageReplyCountEqual = prevMessage.reply_count === nextMessage.reply_count;
  if (!messageReplyCountEqual) return false;
  var noBorderEqual = prevNoBorder === nextNoBorder;
  if (!noBorderEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  return true;
};

var MemoizedMessageReplies = _react["default"].memo(MessageRepliesWithContext, areEqual);

var MessageReplies = function MessageReplies(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      alignment = _useMessageContext.alignment,
      message = _useMessageContext.message,
      onLongPress = _useMessageContext.onLongPress,
      onOpenThread = _useMessageContext.onOpenThread,
      onPress = _useMessageContext.onPress,
      onPressIn = _useMessageContext.onPressIn,
      preventPress = _useMessageContext.preventPress,
      threadList = _useMessageContext.threadList;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      MessageRepliesAvatars = _useMessagesContext.MessageRepliesAvatars;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(MemoizedMessageReplies, (0, _extends2["default"])({
    alignment: alignment,
    message: message,
    MessageRepliesAvatars: MessageRepliesAvatars,
    onLongPress: onLongPress,
    onOpenThread: onOpenThread,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress,
    t: t,
    threadList: threadList
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 5
    }
  }));
};

exports.MessageReplies = MessageReplies;
MessageReplies.displayName = 'MessageReplies{messageSimple{replies}}';
//# sourceMappingURL=MessageReplies.js.map