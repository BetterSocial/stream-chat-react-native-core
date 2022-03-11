Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreatePaginatedMessageListContext = void 0;

var _react = require("react");

var useCreatePaginatedMessageListContext = function useCreatePaginatedMessageListContext(_ref) {
  var channelId = _ref.channelId,
      hasMore = _ref.hasMore,
      loadingMore = _ref.loadingMore,
      loadingMoreRecent = _ref.loadingMoreRecent,
      loadMore = _ref.loadMore,
      loadMoreRecent = _ref.loadMoreRecent,
      messages = _ref.messages,
      setLoadingMore = _ref.setLoadingMore,
      setLoadingMoreRecent = _ref.setLoadingMoreRecent;
  var messagesUpdated = messages.map(function (_ref2) {
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
  var paginatedMessagesContext = (0, _react.useMemo)(function () {
    return {
      hasMore: hasMore,
      loadingMore: loadingMore,
      loadingMoreRecent: loadingMoreRecent,
      loadMore: loadMore,
      loadMoreRecent: loadMoreRecent,
      messages: messages,
      setLoadingMore: setLoadingMore,
      setLoadingMoreRecent: setLoadingMoreRecent
    };
  }, [channelId, hasMore, loadingMoreRecent, loadingMore, messagesUpdated]);
  return paginatedMessagesContext;
};

exports.useCreatePaginatedMessageListContext = useCreatePaginatedMessageListContext;
//# sourceMappingURL=useCreatePaginatedMessageListContext.js.map