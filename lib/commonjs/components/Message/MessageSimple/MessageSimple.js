var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageSimple = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _MessageContext = require("../../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageSimple.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  }
});

var MessageSimpleWithContext = function MessageSimpleWithContext(props) {
  var _channel$state$messag;

  var alignment = props.alignment,
      channel = props.channel,
      enableMessageGroupingByUser = props.enableMessageGroupingByUser,
      groupStyles = props.groupStyles,
      hasReactions = props.hasReactions,
      message = props.message,
      MessageAvatar = props.MessageAvatar,
      MessageContent = props.MessageContent,
      ReactionList = props.ReactionList;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      container = _useTheme.theme.messageSimple.container;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      messageContentWidth = _useState2[0],
      setMessageContentWidth = _useState2[1];

  var isVeryLastMessage = (channel == null ? void 0 : (_channel$state$messag = channel.state.messages[(channel == null ? void 0 : channel.state.messages.length) - 1]) == null ? void 0 : _channel$state$messag.id) === message.id;
  var hasMarginBottom = groupStyles.includes('single') || groupStyles.includes('bottom');
  var showReactions = hasReactions && ReactionList;
  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      justifyContent: alignment === 'left' ? 'flex-start' : 'flex-end',
      marginBottom: hasMarginBottom ? isVeryLastMessage && enableMessageGroupingByUser ? 30 : 8 : 0,
      marginTop: showReactions ? 2 : 0
    }, container],
    testID: "message-simple-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, alignment === 'left' && _react["default"].createElement(MessageAvatar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 32
    }
  }), _react["default"].createElement(MessageContent, {
    setMessageContentWidth: setMessageContentWidth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), showReactions && _react["default"].createElement(ReactionList, {
    messageContentWidth: messageContentWidth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevMessage$quoted_m, _nextMessage$quoted_m, _prevMessage$quoted_m2, _nextMessage$quoted_m2;

  var prevChannel = prevProps.channel,
      prevGroupStyles = prevProps.groupStyles,
      prevHasReactions = prevProps.hasReactions,
      prevMessage = prevProps.message;
  var nextChannel = nextProps.channel,
      nextGroupStyles = nextProps.groupStyles,
      nextHasReactions = nextProps.hasReactions,
      nextMessage = nextProps.message;
  var hasReactionsEqual = prevHasReactions === nextHasReactions;
  if (!hasReactionsEqual) return false;
  var repliesEqual = prevMessage.reply_count === nextMessage.reply_count;
  if (!repliesEqual) return false;
  var groupStylesEqual = JSON.stringify(prevGroupStyles) === JSON.stringify(nextGroupStyles);
  if (!groupStylesEqual) return false;
  var messageEqual = prevMessage.deleted_at === nextMessage.deleted_at && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text;
  if (!messageEqual) return false;
  var quotedMessageEqual = ((_prevMessage$quoted_m = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m.id) === ((_nextMessage$quoted_m = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m.id) && ((_prevMessage$quoted_m2 = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m2.deleted_at) === ((_nextMessage$quoted_m2 = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m2.deleted_at);
  if (!quotedMessageEqual) return false;
  var channelEqual = (prevChannel == null ? void 0 : prevChannel.state.messages.length) === (nextChannel == null ? void 0 : nextChannel.state.messages.length);
  if (!channelEqual) return false;
  var prevAttachments = prevMessage.attachments;
  var nextAttachments = nextMessage.attachments;
  var attachmentsEqual = Array.isArray(prevAttachments) && Array.isArray(nextAttachments) ? prevAttachments.length === nextAttachments.length && prevAttachments.every(function (attachment, index) {
    return attachment.image_url === nextAttachments[index].image_url && attachment.og_scrape_url === nextAttachments[index].og_scrape_url && attachment.thumb_url === nextAttachments[index].thumb_url;
  }) : prevAttachments === nextAttachments;
  if (!attachmentsEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions) ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length && prevMessage.latest_reactions.every(function (_ref, index) {
    var _nextMessage$latest_r;

    var type = _ref.type;
    return type === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  }) : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;
  return true;
};

var MemoizedMessageSimple = _react["default"].memo(MessageSimpleWithContext, areEqual);

var MessageSimple = function MessageSimple(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      alignment = _useMessageContext.alignment,
      channel = _useMessageContext.channel,
      groupStyles = _useMessageContext.groupStyles,
      hasReactions = _useMessageContext.hasReactions,
      message = _useMessageContext.message;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      enableMessageGroupingByUser = _useMessagesContext.enableMessageGroupingByUser,
      MessageAvatar = _useMessagesContext.MessageAvatar,
      MessageContent = _useMessagesContext.MessageContent,
      ReactionList = _useMessagesContext.ReactionList;

  return _react["default"].createElement(MemoizedMessageSimple, (0, _extends2["default"])({
    alignment: alignment,
    channel: channel,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    groupStyles: groupStyles,
    hasReactions: hasReactions,
    message: message,
    MessageAvatar: MessageAvatar,
    MessageContent: MessageContent,
    ReactionList: ReactionList
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 5
    }
  }));
};

exports.MessageSimple = MessageSimple;
MessageSimple.displayName = 'MessageSimple{messageSimple{container}}';
//# sourceMappingURL=MessageSimple.js.map