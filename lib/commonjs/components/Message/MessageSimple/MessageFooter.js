var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageFooter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _MessageContext = require("../../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _icons = require("../../../icons");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageFooter.tsx";

var MessageFooterWithContext = function MessageFooterWithContext(props) {
  var _message$user;

  var alignment = props.alignment,
      formattedDate = props.formattedDate,
      isDeleted = props.isDeleted,
      lastGroupMessage = props.lastGroupMessage,
      members = props.members,
      message = props.message,
      MessageStatus = props.MessageStatus,
      otherAttachments = props.otherAttachments,
      showMessageStatus = props.showMessageStatus;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      grey = _useTheme$theme.colors.grey,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.content,
      deletedMetaText = _useTheme$theme$messa.deletedMetaText,
      eyeIcon = _useTheme$theme$messa.eyeIcon,
      messageUser = _useTheme$theme$messa.messageUser,
      metaContainer = _useTheme$theme$messa.metaContainer,
      metaText = _useTheme$theme$messa.metaText;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  if (isDeleted) {
    return _react["default"].createElement(_reactNative.View, {
      style: metaContainer,
      testID: "message-deleted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }
    }, _react["default"].createElement(_icons.Eye, (0, _extends2["default"])({
      pathFill: isDeleted ? undefined : grey
    }, eyeIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    })), _react["default"].createElement(_reactNative.Text, {
      style: [{
        color: grey,
        textAlign: alignment
      }, metaText, deletedMetaText],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, t('Only visible to you')), _react["default"].createElement(_reactNative.Text, {
      style: [{
        color: grey,
        textAlign: alignment
      }, metaText],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, formattedDate));
  }

  if (lastGroupMessage === false) {
    return null;
  }

  return _react["default"].createElement(_reactNative.View, {
    style: metaContainer,
    testID: "message-status-time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, otherAttachments.length && otherAttachments[0].actions ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_icons.Eye, (0, _extends2["default"])({}, eyeIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  })), _react["default"].createElement(_reactNative.Text, {
    style: [{
      color: grey,
      textAlign: alignment
    }, metaText, deletedMetaText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, t('Only visible to you'))) : null, Object.keys(members).length > 2 && alignment === 'left' && (_message$user = message.user) != null && _message$user.name ? _react["default"].createElement(_reactNative.Text, {
    style: [{
      color: grey
    }, messageUser],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, message.user.name) : null, showMessageStatus && _react["default"].createElement(MessageStatus, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [{
      color: grey,
      textAlign: alignment
    }, metaText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, formattedDate));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevOtherAttachments, _prevOtherAttachments2, _nextOtherAttachments, _nextOtherAttachments2;

  var prevAlignment = prevProps.alignment,
      prevFormattedDate = prevProps.formattedDate,
      prevLastGroupMessage = prevProps.lastGroupMessage,
      prevMembers = prevProps.members,
      prevMessage = prevProps.message,
      prevOtherAttachments = prevProps.otherAttachments,
      prevShowMessageStatus = prevProps.showMessageStatus;
  var nextAlignment = nextProps.alignment,
      nextFormattedDate = nextProps.formattedDate,
      nextLastGroupMessage = nextProps.lastGroupMessage,
      nextMembers = nextProps.members,
      nextMessage = nextProps.message,
      nextOtherAttachments = nextProps.otherAttachments,
      nextShowMessageStatus = nextProps.showMessageStatus;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  var membersEqual = Object.keys(prevMembers).length === Object.keys(nextMembers).length;
  if (!membersEqual) return false;
  var lastGroupMessageEqual = prevLastGroupMessage === nextLastGroupMessage;
  if (!lastGroupMessageEqual) return false;
  var messageEqual = prevMessage.deleted_at === nextMessage.deleted_at && prevMessage.reply_count === nextMessage.reply_count && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text;
  if (!messageEqual) return false;
  var otherAttachmentsEqual = prevOtherAttachments.length === nextOtherAttachments.length && (prevOtherAttachments == null ? void 0 : (_prevOtherAttachments = prevOtherAttachments[0]) == null ? void 0 : (_prevOtherAttachments2 = _prevOtherAttachments.actions) == null ? void 0 : _prevOtherAttachments2.length) === (nextOtherAttachments == null ? void 0 : (_nextOtherAttachments = nextOtherAttachments[0]) == null ? void 0 : (_nextOtherAttachments2 = _nextOtherAttachments.actions) == null ? void 0 : _nextOtherAttachments2.length);
  if (!otherAttachmentsEqual) return false;
  var showMessageStatusEqual = prevShowMessageStatus === nextShowMessageStatus;
  if (!showMessageStatusEqual) return false;
  var formattedDateEqual = prevFormattedDate === nextFormattedDate;
  if (!formattedDateEqual) return false;
  return true;
};

var MemoizedMessageFooter = _react["default"].memo(MessageFooterWithContext, areEqual);

var MessageFooter = function MessageFooter(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      alignment = _useMessageContext.alignment,
      lastGroupMessage = _useMessageContext.lastGroupMessage,
      members = _useMessageContext.members,
      message = _useMessageContext.message,
      otherAttachments = _useMessageContext.otherAttachments,
      showMessageStatus = _useMessageContext.showMessageStatus;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      MessageStatus = _useMessagesContext.MessageStatus;

  return _react["default"].createElement(MemoizedMessageFooter, (0, _extends2["default"])({
    alignment: alignment,
    lastGroupMessage: lastGroupMessage,
    members: members,
    message: message,
    MessageStatus: MessageStatus,
    otherAttachments: otherAttachments,
    showMessageStatus: showMessageStatus
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 5
    }
  }));
};

exports.MessageFooter = MessageFooter;
//# sourceMappingURL=MessageFooter.js.map