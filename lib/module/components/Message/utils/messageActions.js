Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageActions = void 0;

var messageActions = function messageActions(_ref) {
  var blockUser = _ref.blockUser,
      canModifyMessage = _ref.canModifyMessage,
      copyMessage = _ref.copyMessage,
      deleteMessage = _ref.deleteMessage,
      editMessage = _ref.editMessage,
      error = _ref.error,
      flagMessage = _ref.flagMessage,
      isMyMessage = _ref.isMyMessage,
      isThreadMessage = _ref.isThreadMessage,
      message = _ref.message,
      messageReactions = _ref.messageReactions,
      mutesEnabled = _ref.mutesEnabled,
      muteUser = _ref.muteUser,
      quotedRepliesEnabled = _ref.quotedRepliesEnabled,
      quotedReply = _ref.quotedReply,
      retry = _ref.retry,
      threadRepliesEnabled = _ref.threadRepliesEnabled,
      threadReply = _ref.threadReply;

  if (messageReactions) {
    return undefined;
  }

  var actions = [];

  if (error && isMyMessage) {
    actions.push(retry);
  }

  if (quotedRepliesEnabled && !isThreadMessage && !error) {
    actions.push(quotedReply);
  }

  if (threadRepliesEnabled && !isThreadMessage && !error) {
    actions.push(threadReply);
  }

  if (canModifyMessage) {
    actions.push(editMessage);
  }

  if (message.text && !error) {
    actions.push(copyMessage);
  }

  if (mutesEnabled && !isMyMessage) {
    actions.push(muteUser);
  }

  if (!isMyMessage) {
    actions.push(flagMessage);
  }

  if (!isMyMessage && canModifyMessage) {
    actions.push(blockUser);
  }

  if (canModifyMessage) {
    actions.push(deleteMessage);
  }

  return actions;
};

exports.messageActions = messageActions;
//# sourceMappingURL=messageActions.js.map