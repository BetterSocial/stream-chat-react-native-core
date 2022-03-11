Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateThreadContext = void 0;

var _react = require("react");

var useCreateThreadContext = function useCreateThreadContext(_ref) {
  var allowThreadMessagesInChannel = _ref.allowThreadMessagesInChannel,
      closeThread = _ref.closeThread,
      loadMoreThread = _ref.loadMoreThread,
      openThread = _ref.openThread,
      reloadThread = _ref.reloadThread,
      setThreadLoadingMore = _ref.setThreadLoadingMore,
      thread = _ref.thread,
      threadHasMore = _ref.threadHasMore,
      threadLoadingMore = _ref.threadLoadingMore,
      threadMessages = _ref.threadMessages;
  var threadId = thread == null ? void 0 : thread.id;
  var threadReplyCount = thread == null ? void 0 : thread.reply_count;
  var threadMessagesUpdated = threadMessages.map(function (_ref2) {
    var deleted_at = _ref2.deleted_at,
        latest_reactions = _ref2.latest_reactions,
        reply_count = _ref2.reply_count,
        status = _ref2.status,
        updated_at = _ref2.updated_at;
    return "" + deleted_at + (latest_reactions ? latest_reactions.map(function (_ref3) {
      var type = _ref3.type;
      return type;
    }).join() : '') + reply_count + status + updated_at.toISOString();
  }).join();
  var threadContext = (0, _react.useMemo)(function () {
    return {
      allowThreadMessagesInChannel: allowThreadMessagesInChannel,
      closeThread: closeThread,
      loadMoreThread: loadMoreThread,
      openThread: openThread,
      reloadThread: reloadThread,
      setThreadLoadingMore: setThreadLoadingMore,
      thread: thread,
      threadHasMore: threadHasMore,
      threadLoadingMore: threadLoadingMore,
      threadMessages: threadMessages
    };
  }, [allowThreadMessagesInChannel, threadHasMore, threadId, threadLoadingMore, threadMessagesUpdated, threadReplyCount]);
  return threadContext;
};

exports.useCreateThreadContext = useCreateThreadContext;
//# sourceMappingURL=useCreateThreadContext.js.map