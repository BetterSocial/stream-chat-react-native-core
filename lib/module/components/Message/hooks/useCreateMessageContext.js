Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateMessageContext = void 0;

var _react = require("react");

var _useMessageList = require("../../MessageList/hooks/useMessageList");

var useCreateMessageContext = function useCreateMessageContext(_ref) {
  var _message$quoted_messa;

  var actionsEnabled = _ref.actionsEnabled,
      alignment = _ref.alignment,
      canModifyMessage = _ref.canModifyMessage,
      channel = _ref.channel,
      disabled = _ref.disabled,
      files = _ref.files,
      goToMessage = _ref.goToMessage,
      groupStyles = _ref.groupStyles,
      handleAction = _ref.handleAction,
      handleDeleteMessage = _ref.handleDeleteMessage,
      handleEditMessage = _ref.handleEditMessage,
      handleQuotedReplyMessage = _ref.handleQuotedReplyMessage,
      handleResendMessage = _ref.handleResendMessage,
      handleToggleBanUser = _ref.handleToggleBanUser,
      handleToggleMuteUser = _ref.handleToggleMuteUser,
      handleToggleReaction = _ref.handleToggleReaction,
      hasReactions = _ref.hasReactions,
      images = _ref.images,
      isMyMessage = _ref.isMyMessage,
      lastGroupMessage = _ref.lastGroupMessage,
      lastReceivedId = _ref.lastReceivedId,
      members = _ref.members,
      message = _ref.message,
      messageContentOrder = _ref.messageContentOrder,
      onLongPress = _ref.onLongPress,
      onlyEmojis = _ref.onlyEmojis,
      onOpenThread = _ref.onOpenThread,
      onPress = _ref.onPress,
      onPressIn = _ref.onPressIn,
      otherAttachments = _ref.otherAttachments,
      preventPress = _ref.preventPress,
      reactions = _ref.reactions,
      readEventsEnabled = _ref.readEventsEnabled,
      showAvatar = _ref.showAvatar,
      showMessageOverlay = _ref.showMessageOverlay,
      showMessageStatus = _ref.showMessageStatus,
      threadList = _ref.threadList;
  var groupStylesLength = groupStyles.length;
  var reactionsValue = reactions.map(function (_ref2) {
    var own = _ref2.own,
        type = _ref2.type;
    return "" + own + type;
  }).join();
  var latestReactions = message.latest_reactions ? message.latest_reactions : undefined;
  var readBy = (0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message) && message.readBy;
  var messageValue = "" + (latestReactions ? latestReactions.map(function (_ref3) {
    var type = _ref3.type;
    return type;
  }).join() : '') + message.updated_at + message.deleted_at + readBy + message.status + message.type + message.text + message.reply_count;
  var membersValue = JSON.stringify(members);
  var quotedMessageDeletedValue = (_message$quoted_messa = message.quoted_message) == null ? void 0 : _message$quoted_messa.deleted_at;
  var messageContext = (0, _react.useMemo)(function () {
    return {
      actionsEnabled: actionsEnabled,
      alignment: alignment,
      canModifyMessage: canModifyMessage,
      channel: channel,
      disabled: disabled,
      files: files,
      goToMessage: goToMessage,
      groupStyles: groupStyles,
      handleAction: handleAction,
      handleDeleteMessage: handleDeleteMessage,
      handleEditMessage: handleEditMessage,
      handleQuotedReplyMessage: handleQuotedReplyMessage,
      handleResendMessage: handleResendMessage,
      handleToggleBanUser: handleToggleBanUser,
      handleToggleMuteUser: handleToggleMuteUser,
      handleToggleReaction: handleToggleReaction,
      hasReactions: hasReactions,
      images: images,
      isMyMessage: isMyMessage,
      lastGroupMessage: lastGroupMessage,
      lastReceivedId: lastReceivedId,
      members: members,
      message: message,
      messageContentOrder: messageContentOrder,
      onLongPress: onLongPress,
      onlyEmojis: onlyEmojis,
      onOpenThread: onOpenThread,
      onPress: onPress,
      onPressIn: onPressIn,
      otherAttachments: otherAttachments,
      preventPress: preventPress,
      reactions: reactions,
      readEventsEnabled: readEventsEnabled,
      showAvatar: showAvatar,
      showMessageOverlay: showMessageOverlay,
      showMessageStatus: showMessageStatus,
      threadList: threadList
    };
  }, [actionsEnabled, quotedMessageDeletedValue, alignment, disabled, goToMessage, groupStylesLength, hasReactions, lastGroupMessage, lastReceivedId, membersValue, messageValue, reactionsValue, readEventsEnabled, showAvatar, showMessageStatus, threadList]);
  return messageContext;
};

exports.useCreateMessageContext = useCreateMessageContext;
//# sourceMappingURL=useCreateMessageContext.js.map