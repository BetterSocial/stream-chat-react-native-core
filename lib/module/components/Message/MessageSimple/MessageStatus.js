var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageStatus = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useMessageList = require("../../MessageList/hooks/useMessageList");

var _MessageContext = require("../../../contexts/messageContext/MessageContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _Check = require("../../../icons/Check");

var _CheckAll = require("../../../icons/CheckAll");

var _Time = require("../../../icons/Time");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageStatus.tsx";

var styles = _reactNative.StyleSheet.create({
  readByCount: {
    fontSize: 11,
    fontWeight: '700',
    paddingRight: 3
  },
  statusContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 3
  }
});

var MessageStatusWithContext = function MessageStatusWithContext(props) {
  var message = props.message,
      readEventsEnabled = props.readEventsEnabled,
      threadList = props.threadList;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      accent_blue = _useTheme$theme.colors.accent_blue,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.status,
      checkAllIcon = _useTheme$theme$messa.checkAllIcon,
      checkIcon = _useTheme$theme$messa.checkIcon,
      readByCount = _useTheme$theme$messa.readByCount,
      statusContainer = _useTheme$theme$messa.statusContainer,
      timeIcon = _useTheme$theme$messa.timeIcon;

  if (message.status === 'sending') {
    return _react["default"].createElement(_reactNative.View, {
      style: [styles.statusContainer, statusContainer],
      testID: "sending-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    }, _react["default"].createElement(_Time.Time, (0, _extends2["default"])({}, timeIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    })));
  }

  if ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message) && !threadList && readEventsEnabled !== false) {
    return _react["default"].createElement(_reactNative.View, {
      style: [styles.statusContainer, statusContainer],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }, typeof message.readBy === 'number' ? _react["default"].createElement(_reactNative.Text, {
      style: [styles.readByCount, {
        color: accent_blue
      }, readByCount],
      testID: "read-by-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, message.readBy) : null, typeof message.readBy === 'number' || message.readBy === true ? _react["default"].createElement(_CheckAll.CheckAll, (0, _extends2["default"])({
      pathFill: accent_blue
    }, checkAllIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    })) : _react["default"].createElement(_Check.Check, (0, _extends2["default"])({}, checkIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    })));
  }

  if (message.status === 'received' && message.type !== 'ephemeral' && !threadList) {
    return _react["default"].createElement(_reactNative.View, {
      style: [styles.statusContainer, statusContainer],
      testID: "delivered-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, _react["default"].createElement(_Check.Check, (0, _extends2["default"])({}, checkIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    })));
  }

  return null;
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessage = prevProps.message,
      prevReadEventsEnabled = prevProps.readEventsEnabled,
      prevThreadList = prevProps.threadList;
  var nextMessage = nextProps.message,
      nextReadEventsEnabled = nextProps.readEventsEnabled,
      nextThreadList = nextProps.threadList;
  var threadListEqual = prevThreadList === nextThreadList;
  if (!threadListEqual) return false;
  var readEventsEnabledEqual = prevReadEventsEnabled === nextReadEventsEnabled;
  if (!readEventsEnabledEqual) return false;
  var messageEqual = prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(prevMessage) && prevMessage.readBy) === ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(nextMessage) && nextMessage.readBy);
  if (!messageEqual) return false;
  return true;
};

var MemoizedMessageStatus = _react["default"].memo(MessageStatusWithContext, areEqual);

var MessageStatus = function MessageStatus(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      message = _useMessageContext.message,
      readEventsEnabled = _useMessageContext.readEventsEnabled,
      threadList = _useMessageContext.threadList;

  return _react["default"].createElement(MemoizedMessageStatus, (0, _extends2["default"])({
    message: message,
    readEventsEnabled: readEventsEnabled,
    threadList: threadList
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 10
    }
  }));
};

exports.MessageStatus = MessageStatus;
MessageStatus.displayName = 'MessageStatus{messageSimple{status}}';
//# sourceMappingURL=MessageStatus.js.map