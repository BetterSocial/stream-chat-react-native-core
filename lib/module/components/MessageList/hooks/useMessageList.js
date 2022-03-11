var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageList = exports.isMessageWithStylesReadByAndDateSeparator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _getDateSeparators = require("../utils/getDateSeparators");

var _getGroupStyles = require("../utils/getGroupStyles");

var _getReadStates = require("../utils/getReadStates");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

var _ChannelContext = require("../../../contexts/channelContext/ChannelContext");

var _PaginatedMessageListContext = require("../../../contexts/paginatedMessageListContext/PaginatedMessageListContext");

var _ThreadContext = require("../../../contexts/threadContext/ThreadContext");

var isMessageWithStylesReadByAndDateSeparator = function isMessageWithStylesReadByAndDateSeparator(message) {
  return message.readBy !== undefined;
};

exports.isMessageWithStylesReadByAndDateSeparator = isMessageWithStylesReadByAndDateSeparator;

var useMessageList = function useMessageList(params) {
  var inverted = params.inverted,
      noGroupByUser = params.noGroupByUser,
      threadList = params.threadList;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      hideDateSeparators = _useChannelContext.hideDateSeparators,
      maxTimeBetweenGroupedMessages = _useChannelContext.maxTimeBetweenGroupedMessages,
      read = _useChannelContext.read;

  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
      messages = _usePaginatedMessageL.messages;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      threadMessages = _useThreadContext.threadMessages;

  var messageList = threadList ? threadMessages : messages;
  var readList = threadList ? undefined : read;
  var dateSeparators = (0, _getDateSeparators.getDateSeparators)({
    hideDateSeparators: hideDateSeparators,
    messages: messageList,
    userId: client.userID
  });
  var messageGroupStyles = (0, _getGroupStyles.getGroupStyles)({
    dateSeparators: dateSeparators,
    hideDateSeparators: hideDateSeparators,
    maxTimeBetweenGroupedMessages: maxTimeBetweenGroupedMessages,
    messages: messageList,
    noGroupByUser: noGroupByUser,
    userId: client.userID
  });
  var readData = (0, _getReadStates.getReadStates)(client.userID, messageList, readList);
  var messagesWithStylesReadByAndDateSeparator = messageList.filter(function (msg) {
    var _msg$user;

    return !msg.deleted_at || ((_msg$user = msg.user) == null ? void 0 : _msg$user.id) === client.userID;
  }).map(function (msg) {
    return (0, _extends2["default"])({}, msg, {
      dateSeparator: dateSeparators[msg.id] || undefined,
      groupStyles: messageGroupStyles[msg.id] || ['single'],
      readBy: msg.id ? readData[msg.id] || false : false
    });
  });
  return inverted ? messagesWithStylesReadByAndDateSeparator.reverse() : messagesWithStylesReadByAndDateSeparator;
};

exports.useMessageList = useMessageList;
//# sourceMappingURL=useMessageList.js.map