var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reply = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _FileIcon = require("../Attachment/FileIcon");

var _MessageAvatar = require("../Message/MessageSimple/MessageAvatar");

var _MessageTextContainer = require("../Message/MessageSimple/MessageTextContainer");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Reply/Reply.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  fileAttachmentContainer: {
    paddingLeft: 8,
    paddingVertical: 8
  },
  imageAttachment: {
    borderRadius: 8,
    height: 32,
    marginLeft: 8,
    marginVertical: 8,
    width: 32
  },
  messageContainer: {
    alignItems: 'flex-start',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1
  },
  text: {
    fontSize: 12
  },
  textContainer: {
    maxWidth: undefined,
    paddingHorizontal: 8
  }
});

var ReplyWithContext = function ReplyWithContext(props) {
  var _quotedMessage$attach, _stylesProp$imageAtta, _stylesProp$imageAtta2, _stylesProp$fileAttac;

  var FileAttachmentIcon = props.FileAttachmentIcon,
      _props$attachmentSize = props.attachmentSize,
      attachmentSize = _props$attachmentSize === void 0 ? 40 : _props$attachmentSize,
      MessageAvatar = props.MessageAvatar,
      quotedMessage = props.quotedMessage,
      _props$styles = props.styles,
      stylesProp = _props$styles === void 0 ? {} : _props$styles,
      t = props.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      blue_alice = _useTheme$theme$color.blue_alice,
      border = _useTheme$theme$color.border,
      grey = _useTheme$theme$color.grey,
      transparent = _useTheme$theme$color.transparent,
      white = _useTheme$theme$color.white,
      deletedText = _useTheme$theme.messageSimple.content.deletedText,
      _useTheme$theme$reply = _useTheme$theme.reply,
      container = _useTheme$theme$reply.container,
      fileAttachmentContainer = _useTheme$theme$reply.fileAttachmentContainer,
      imageAttachment = _useTheme$theme$reply.imageAttachment,
      markdownStyles = _useTheme$theme$reply.markdownStyles,
      messageContainer = _useTheme$theme$reply.messageContainer,
      textContainer = _useTheme$theme$reply.textContainer;

  if (typeof quotedMessage === 'boolean') return null;
  var lastAttachment = (_quotedMessage$attach = quotedMessage.attachments) == null ? void 0 : _quotedMessage$attach.slice(-1)[0];
  var messageType = lastAttachment ? lastAttachment.type === 'file' || lastAttachment.type === 'audio' ? 'file' : lastAttachment.type === 'image' && !lastAttachment.title_link && !lastAttachment.og_scrape_url ? lastAttachment.image_url || lastAttachment.thumb_url ? 'image' : undefined : lastAttachment.type === 'giphy' || lastAttachment.type === 'imgur' ? 'giphy' : 'other' : undefined;
  var hasImage = !error && lastAttachment && messageType !== 'file' && (lastAttachment.image_url || lastAttachment.thumb_url || lastAttachment.og_scrape_url);

  var onlyEmojis = !lastAttachment && !!quotedMessage.text && _utils.emojiRegex.test(quotedMessage.text);

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container, stylesProp.container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, _react["default"].createElement(MessageAvatar, {
    alignment: 'left',
    lastGroupMessage: true,
    message: quotedMessage,
    size: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.messageContainer, {
      backgroundColor: messageType === 'other' ? blue_alice : messageType === 'giphy' ? transparent : white,
      borderColor: border,
      borderWidth: messageType === 'other' ? 0 : 1
    }, messageContainer, stylesProp.messageContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, !error && lastAttachment ? messageType === 'file' ? _react["default"].createElement(_reactNative.View, {
    style: [styles.fileAttachmentContainer, fileAttachmentContainer, stylesProp.fileAttachmentContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, _react["default"].createElement(FileAttachmentIcon, {
    mimeType: lastAttachment.mime_type,
    size: attachmentSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  })) : hasImage ? _react["default"].createElement(_reactNative.Image, {
    onError: function onError() {
      return setError(true);
    },
    source: {
      uri: lastAttachment.image_url || lastAttachment.thumb_url || lastAttachment.og_scrape_url
    },
    style: [styles.imageAttachment, imageAttachment, stylesProp.imageAttachment],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }) : null : null, _react["default"].createElement(_MessageTextContainer.MessageTextContainer, {
    markdownStyles: quotedMessage.deleted_at ? (0, _merge["default"])({
      em: {
        color: grey
      }
    }, deletedText) : (0, _extends2["default"])({
      text: styles.text
    }, markdownStyles),
    message: (0, _extends2["default"])({}, quotedMessage, {
      text: quotedMessage.deleted_at ? "_" + t('Message deleted') + "_" : quotedMessage.text ? quotedMessage.text.length > 170 ? quotedMessage.text.slice(0, 170) + "..." : quotedMessage.text : messageType === 'image' ? t('Photo') : messageType === 'file' ? (lastAttachment == null ? void 0 : lastAttachment.title) || '' : ''
    }),
    onlyEmojis: onlyEmojis,
    styles: {
      textContainer: [{
        marginRight: hasImage ? Number(((_stylesProp$imageAtta = stylesProp.imageAttachment) == null ? void 0 : _stylesProp$imageAtta.height) || imageAttachment.height || styles.imageAttachment.height) + Number(((_stylesProp$imageAtta2 = stylesProp.imageAttachment) == null ? void 0 : _stylesProp$imageAtta2.marginLeft) || imageAttachment.marginLeft || styles.imageAttachment.marginLeft) : messageType === 'file' ? attachmentSize + Number(((_stylesProp$fileAttac = stylesProp.fileAttachmentContainer) == null ? void 0 : _stylesProp$fileAttac.paddingLeft) || fileAttachmentContainer.paddingLeft || styles.fileAttachmentContainer.paddingLeft) : undefined
      }, styles.textContainer, textContainer, stylesProp.textContainer]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  })));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevQuotedMessage = prevProps.quotedMessage;
  var nextQuotedMessage = nextProps.quotedMessage;
  var quotedMessageEqual = !!prevQuotedMessage && !!nextQuotedMessage && typeof prevQuotedMessage !== 'boolean' && typeof nextQuotedMessage !== 'boolean' ? prevQuotedMessage.id === nextQuotedMessage.id && prevQuotedMessage.deleted_at === nextQuotedMessage.deleted_at : !!prevQuotedMessage === !!nextQuotedMessage;
  if (!quotedMessageEqual) return false;
  return true;
};

var MemoizedReply = _react["default"].memo(ReplyWithContext, areEqual);

var Reply = function Reply(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      message = _useMessageContext.message;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      _useMessagesContext$F = _useMessagesContext.FileAttachmentIcon,
      FileAttachmentIcon = _useMessagesContext$F === void 0 ? _FileIcon.FileIcon : _useMessagesContext$F,
      _useMessagesContext$M = _useMessagesContext.MessageAvatar,
      MessageAvatar = _useMessagesContext$M === void 0 ? _MessageAvatar.MessageAvatar : _useMessagesContext$M;

  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      editing = _useMessageInputConte.editing,
      quotedMessage = _useMessageInputConte.quotedMessage;

  var quotedEditingMessage = typeof editing !== 'boolean' ? (editing == null ? void 0 : editing.quoted_message) || false : false;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(MemoizedReply, (0, _extends2["default"])({
    FileAttachmentIcon: FileAttachmentIcon,
    MessageAvatar: MessageAvatar,
    quotedMessage: message ? message.quoted_message : quotedMessage || quotedEditingMessage,
    t: t
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 5
    }
  }));
};

exports.Reply = Reply;
Reply.displayName = 'Reply{reply}';
//# sourceMappingURL=Reply.js.map