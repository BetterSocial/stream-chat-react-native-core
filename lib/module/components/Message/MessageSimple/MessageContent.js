var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _MessageTextContainer = require("./MessageTextContainer");

var _MessageContext = require("../../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _icons = require("../../../icons");

var _utils = require("../../../utils/utils");

var _excluded = ["borderRadiusL", "borderRadiusS"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageContent.tsx";

var styles = _reactNative.StyleSheet.create({
  containerInner: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    overflow: 'hidden'
  },
  leftAlignContent: {
    justifyContent: 'flex-start'
  },
  leftAlignItems: {
    alignItems: 'flex-start'
  },
  replyBorder: {
    borderLeftWidth: 1,
    bottom: 0,
    position: 'absolute'
  },
  replyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8
  },
  rightAlignContent: {
    justifyContent: 'flex-end'
  },
  rightAlignItems: {
    alignItems: 'flex-end'
  }
});

var MessageContentWithContext = function MessageContentWithContext(props) {
  var _groupStyles$;

  var additionalTouchableProps = props.additionalTouchableProps,
      alignment = props.alignment,
      Attachment = props.Attachment,
      disabled = props.disabled,
      FileAttachmentGroup = props.FileAttachmentGroup,
      formatDate = props.formatDate,
      Gallery = props.Gallery,
      groupStyles = props.groupStyles,
      hasReactions = props.hasReactions,
      isMyMessage = props.isMyMessage,
      lastGroupMessage = props.lastGroupMessage,
      members = props.members,
      message = props.message,
      messageContentOrder = props.messageContentOrder,
      MessageDeleted = props.MessageDeleted,
      MessageFooter = props.MessageFooter,
      MessageHeader = props.MessageHeader,
      MessageReplies = props.MessageReplies,
      MessageStatus = props.MessageStatus,
      _onLongPress = props.onLongPress,
      onlyEmojis = props.onlyEmojis,
      _onPress = props.onPress,
      _onPressIn = props.onPressIn,
      otherAttachments = props.otherAttachments,
      preventPress = props.preventPress,
      quotedRepliesEnabled = props.quotedRepliesEnabled,
      Reply = props.Reply,
      setMessageContentWidth = props.setMessageContentWidth,
      showMessageStatus = props.showMessageStatus,
      tDateTimeParser = props.tDateTimeParser,
      threadList = props.threadList,
      threadRepliesEnabled = props.threadRepliesEnabled;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_red = _useTheme$theme$color.accent_red,
      blue_alice = _useTheme$theme$color.blue_alice,
      grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
      grey_whisper = _useTheme$theme$color.grey_whisper,
      transparent = _useTheme$theme$color.transparent,
      _useTheme$theme$messa = _useTheme$theme.messageSimple,
      _useTheme$theme$messa2 = _useTheme$theme$messa.content,
      _useTheme$theme$messa3 = _useTheme$theme$messa2.container,
      borderRadiusL = _useTheme$theme$messa3.borderRadiusL,
      borderRadiusS = _useTheme$theme$messa3.borderRadiusS,
      container = (0, _objectWithoutProperties2["default"])(_useTheme$theme$messa3, _excluded),
      containerInner = _useTheme$theme$messa2.containerInner,
      errorContainer = _useTheme$theme$messa2.errorContainer,
      errorIcon = _useTheme$theme$messa2.errorIcon,
      errorIconContainer = _useTheme$theme$messa2.errorIconContainer,
      replyBorder = _useTheme$theme$messa2.replyBorder,
      replyContainer = _useTheme$theme$messa2.replyContainer,
      wrapper = _useTheme$theme$messa2.wrapper,
      _useTheme$theme$messa4 = _useTheme$theme$messa.reactionList,
      radius = _useTheme$theme$messa4.radius,
      reactionSize = _useTheme$theme$messa4.reactionSize;

  var getDateText = function getDateText(formatter) {
    if (!message.created_at) return '';

    if (formatter) {
      return formatter(message.created_at);
    }

    var parserOutput = tDateTimeParser(message.created_at);

    if ((0, _TranslationContext.isDayOrMoment)(parserOutput)) {
      return parserOutput.format('LT');
    }

    return message.created_at;
  };

  var onLayout = function onLayout(_ref) {
    var width = _ref.nativeEvent.layout.width;
    setMessageContentWidth(width);
  };

  var error = message.type === 'error' || message.status === 'failed';
  var groupStyle = alignment + "_" + (groupStyles == null ? void 0 : (_groupStyles$ = groupStyles[0]) == null ? void 0 : _groupStyles$.toLowerCase == null ? void 0 : _groupStyles$.toLowerCase());
  var hasThreadReplies = !!(message != null && message.reply_count);
  var noBorder = onlyEmojis && !message.quoted_message || !!otherAttachments.length;

  if (message.deleted_at) {
    return _react["default"].createElement(MessageDeleted, {
      formattedDate: getDateText(formatDate),
      groupStyle: groupStyle,
      noBorder: noBorder,
      onLayout: onLayout,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 7
      }
    });
  }

  var backgroundColor = onlyEmojis && !message.quoted_message ? transparent : otherAttachments.length ? otherAttachments[0].type === 'giphy' ? !message.quoted_message ? transparent : grey_gainsboro : blue_alice : alignment === 'left' || error ? transparent : grey_gainsboro;
  var repliesCurveColor = isMyMessage && !error ? backgroundColor : grey_whisper;
  return _react["default"].createElement(_reactNative.TouchableOpacity, (0, _extends2["default"])({
    activeOpacity: 0.7,
    disabled: disabled || preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'messageContent',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          emitter: 'messageContent',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          emitter: 'messageContent',
          event: event
        });
      }
    }
  }, additionalTouchableProps, {
    style: [alignment === 'left' ? styles.leftAlignItems : styles.rightAlignItems, {
      paddingTop: hasReactions ? reactionSize / 2 + radius : 2
    }, error ? errorContainer : {}, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }
  }), MessageHeader && _react["default"].createElement(MessageHeader, {
    alignment: alignment,
    formattedDate: getDateText(formatDate),
    isDeleted: !!message.deleted_at,
    lastGroupMessage: lastGroupMessage,
    members: members,
    message: message,
    MessageStatus: MessageStatus,
    otherAttachments: otherAttachments,
    showMessageStatus: showMessageStatus,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }), _react["default"].createElement(_reactNative.View, {
    onLayout: onLayout,
    style: wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
    }
  }, hasThreadReplies && !threadList && threadRepliesEnabled && !noBorder && _react["default"].createElement(_reactNative.View, {
    style: [styles.replyBorder, {
      borderColor: repliesCurveColor,
      height: borderRadiusL,
      left: alignment === 'left' ? 0 : undefined,
      right: alignment === 'right' ? 0 : undefined
    }, replyBorder],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.containerInner, {
      backgroundColor: backgroundColor,
      borderBottomLeftRadius: (groupStyle === 'left_bottom' || groupStyle === 'left_single') && (!hasThreadReplies || threadList) ? borderRadiusS : borderRadiusL,
      borderBottomRightRadius: (groupStyle === 'right_bottom' || groupStyle === 'right_single') && (!hasThreadReplies || threadList) ? borderRadiusS : borderRadiusL,
      borderColor: isMyMessage && !error ? backgroundColor : grey_whisper
    }, noBorder ? {
      borderWidth: 0
    } : {}, containerInner],
    testID: "message-content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, messageContentOrder.map(function (messageContentType, messageContentOrderIndex) {
    switch (messageContentType) {
      case 'quoted_reply':
        return message.quoted_message && quotedRepliesEnabled && _react["default"].createElement(_reactNative.View, {
          key: "quoted_reply_" + messageContentOrderIndex,
          style: [styles.replyContainer, replyContainer],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 21
          }
        }, _react["default"].createElement(Reply, {
          styles: {
            messageContainer: {
              maxWidth: (0, _utils.vw)(60)
            }
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 23
          }
        }));

      case 'attachments':
        return otherAttachments.map(function (attachment, attachmentIndex) {
          return _react["default"].createElement(Attachment, {
            attachment: attachment,
            key: message.id + "-" + attachmentIndex,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 19
            }
          });
        });

      case 'files':
        return _react["default"].createElement(FileAttachmentGroup, {
          key: "file_attachment_group_" + messageContentOrderIndex,
          messageId: message.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 19
          }
        });

      case 'gallery':
        return _react["default"].createElement(Gallery, {
          key: "gallery_" + messageContentOrderIndex,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 24
          }
        });

      case 'text':
      default:
        return otherAttachments.length && otherAttachments[0].actions ? null : _react["default"].createElement(_MessageTextContainer.MessageTextContainer, {
          key: "message_text_container_" + messageContentOrderIndex,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 19
          }
        });
    }
  })), error && _react["default"].createElement(_reactNative.View, {
    style: _reactNative.StyleSheet.absoluteFill,
    testID: "message-error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: errorIconContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 13
    }
  }, _react["default"].createElement(_icons.Error, (0, _extends2["default"])({
    pathFill: accent_red
  }, errorIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 15
    }
  }))))), threadRepliesEnabled && _react["default"].createElement(MessageReplies, {
    noBorder: noBorder,
    repliesCurveColor: repliesCurveColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 9
    }
  }), _react["default"].createElement(MessageFooter, {
    formattedDate: getDateText(formatDate),
    isDeleted: !!message.deleted_at,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevOtherAttachments, _prevOtherAttachments2, _nextOtherAttachments, _nextOtherAttachments2, _prevMessage$quoted_m, _nextMessage$quoted_m, _prevMessage$quoted_m2, _nextMessage$quoted_m2;

  var prevGoToMessage = prevProps.goToMessage,
      prevGroupStyles = prevProps.groupStyles,
      prevHasReactions = prevProps.hasReactions,
      prevLastGroupMessage = prevProps.lastGroupMessage,
      prevMembers = prevProps.members,
      prevMessage = prevProps.message,
      prevMessageContentOrder = prevProps.messageContentOrder,
      prevOnlyEmojis = prevProps.onlyEmojis,
      prevOtherAttachments = prevProps.otherAttachments,
      prevT = prevProps.t,
      prevTDateTimeParser = prevProps.tDateTimeParser;
  var nextGoToMessage = nextProps.goToMessage,
      nextGroupStyles = nextProps.groupStyles,
      nextHasReactions = nextProps.hasReactions,
      nextLastGroupMessage = nextProps.lastGroupMessage,
      nextMembers = nextProps.members,
      nextMessage = nextProps.message,
      nextMessageContentOrder = nextProps.messageContentOrder,
      nextOnlyEmojis = nextProps.onlyEmojis,
      nextOtherAttachments = nextProps.otherAttachments,
      nextT = nextProps.t,
      nextTDateTimeParser = nextProps.tDateTimeParser;
  var hasReactionsEqual = prevHasReactions === nextHasReactions;
  if (!hasReactionsEqual) return false;
  var lastGroupMessageEqual = prevLastGroupMessage === nextLastGroupMessage;
  if (!lastGroupMessageEqual) return false;
  var goToMessageChangedAndMatters = nextMessage.quoted_message_id && prevGoToMessage !== nextGoToMessage;
  if (goToMessageChangedAndMatters) return false;
  var onlyEmojisEqual = prevOnlyEmojis === nextOnlyEmojis;
  if (!onlyEmojisEqual) return false;
  var otherAttachmentsEqual = prevOtherAttachments.length === nextOtherAttachments.length && (prevOtherAttachments == null ? void 0 : (_prevOtherAttachments = prevOtherAttachments[0]) == null ? void 0 : (_prevOtherAttachments2 = _prevOtherAttachments.actions) == null ? void 0 : _prevOtherAttachments2.length) === (nextOtherAttachments == null ? void 0 : (_nextOtherAttachments = nextOtherAttachments[0]) == null ? void 0 : (_nextOtherAttachments2 = _nextOtherAttachments.actions) == null ? void 0 : _nextOtherAttachments2.length);
  if (!otherAttachmentsEqual) return false;
  var membersEqual = Object.keys(prevMembers).length === Object.keys(nextMembers).length;
  if (!membersEqual) return false;
  var groupStylesEqual = prevGroupStyles.length === nextGroupStyles.length && (prevGroupStyles == null ? void 0 : prevGroupStyles[0]) === (nextGroupStyles == null ? void 0 : nextGroupStyles[0]);
  if (!groupStylesEqual) return false;
  var messageEqual = prevMessage.deleted_at === nextMessage.deleted_at && prevMessage.reply_count === nextMessage.reply_count && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text;
  if (!messageEqual) return false;
  var quotedMessageEqual = ((_prevMessage$quoted_m = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m.id) === ((_nextMessage$quoted_m = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m.id) && ((_prevMessage$quoted_m2 = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m2.deleted_at) === ((_nextMessage$quoted_m2 = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m2.deleted_at);
  if (!quotedMessageEqual) return false;
  var prevAttachments = prevMessage.attachments;
  var nextAttachments = nextMessage.attachments;
  var attachmentsEqual = Array.isArray(prevAttachments) && Array.isArray(nextAttachments) ? prevAttachments.length === nextAttachments.length && prevAttachments.every(function (attachment, index) {
    return attachment.image_url === nextAttachments[index].image_url && attachment.og_scrape_url === nextAttachments[index].og_scrape_url && attachment.thumb_url === nextAttachments[index].thumb_url;
  }) : prevAttachments === nextAttachments;
  if (!attachmentsEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions) ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length && prevMessage.latest_reactions.every(function (_ref2, index) {
    var _nextMessage$latest_r;

    var type = _ref2.type;
    return type === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  }) : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;
  var messageContentOrderEqual = prevMessageContentOrder.length === nextMessageContentOrder.length && prevMessageContentOrder.every(function (messageContentType, index) {
    return messageContentType === nextMessageContentOrder[index];
  });
  if (!messageContentOrderEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var tDateTimeParserEqual = prevTDateTimeParser === nextTDateTimeParser;
  if (!tDateTimeParserEqual) return false;
  return true;
};

var MemoizedMessageContent = _react["default"].memo(MessageContentWithContext, areEqual);

var MessageContent = function MessageContent(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      alignment = _useMessageContext.alignment,
      disabled = _useMessageContext.disabled,
      goToMessage = _useMessageContext.goToMessage,
      groupStyles = _useMessageContext.groupStyles,
      hasReactions = _useMessageContext.hasReactions,
      isMyMessage = _useMessageContext.isMyMessage,
      lastGroupMessage = _useMessageContext.lastGroupMessage,
      lastReceivedId = _useMessageContext.lastReceivedId,
      members = _useMessageContext.members,
      message = _useMessageContext.message,
      messageContentOrder = _useMessageContext.messageContentOrder,
      onLongPress = _useMessageContext.onLongPress,
      onlyEmojis = _useMessageContext.onlyEmojis,
      onPress = _useMessageContext.onPress,
      onPressIn = _useMessageContext.onPressIn,
      otherAttachments = _useMessageContext.otherAttachments,
      preventPress = _useMessageContext.preventPress,
      showMessageStatus = _useMessageContext.showMessageStatus,
      threadList = _useMessageContext.threadList;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      additionalTouchableProps = _useMessagesContext.additionalTouchableProps,
      Attachment = _useMessagesContext.Attachment,
      FileAttachmentGroup = _useMessagesContext.FileAttachmentGroup,
      formatDate = _useMessagesContext.formatDate,
      Gallery = _useMessagesContext.Gallery,
      MessageDeleted = _useMessagesContext.MessageDeleted,
      MessageFooter = _useMessagesContext.MessageFooter,
      MessageHeader = _useMessagesContext.MessageHeader,
      MessageReplies = _useMessagesContext.MessageReplies,
      MessageStatus = _useMessagesContext.MessageStatus,
      quotedRepliesEnabled = _useMessagesContext.quotedRepliesEnabled,
      Reply = _useMessagesContext.Reply,
      threadRepliesEnabled = _useMessagesContext.threadRepliesEnabled;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t,
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  return _react["default"].createElement(MemoizedMessageContent, (0, _extends2["default"])({
    additionalTouchableProps: additionalTouchableProps,
    alignment: alignment,
    Attachment: Attachment,
    disabled: disabled,
    FileAttachmentGroup: FileAttachmentGroup,
    formatDate: formatDate,
    Gallery: Gallery,
    goToMessage: goToMessage,
    groupStyles: groupStyles,
    hasReactions: hasReactions,
    isMyMessage: isMyMessage,
    lastGroupMessage: lastGroupMessage,
    lastReceivedId: lastReceivedId,
    members: members,
    message: message,
    messageContentOrder: messageContentOrder,
    MessageDeleted: MessageDeleted,
    MessageFooter: MessageFooter,
    MessageHeader: MessageHeader,
    MessageReplies: MessageReplies,
    MessageStatus: MessageStatus,
    onLongPress: onLongPress,
    onlyEmojis: onlyEmojis,
    onPress: onPress,
    onPressIn: onPressIn,
    otherAttachments: otherAttachments,
    preventPress: preventPress,
    quotedRepliesEnabled: quotedRepliesEnabled,
    Reply: Reply,
    showMessageStatus: showMessageStatus,
    t: t,
    tDateTimeParser: tDateTimeParser,
    threadList: threadList,
    threadRepliesEnabled: threadRepliesEnabled
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 5
    }
  }));
};

exports.MessageContent = MessageContent;
MessageContent.displayName = 'MessageContent{messageSimple{content}}';
//# sourceMappingURL=MessageContent.js.map