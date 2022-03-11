Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateChatContext = void 0;

var _react = require("react");

var useCreateChatContext = function useCreateChatContext(_ref) {
  var channel = _ref.channel,
      client = _ref.client,
      connectionRecovering = _ref.connectionRecovering,
      isOnline = _ref.isOnline,
      mutedUsers = _ref.mutedUsers,
      setActiveChannel = _ref.setActiveChannel;
  var channelId = channel == null ? void 0 : channel.id;
  var clientValues = "" + client.clientID + Object.keys(client.activeChannels).length + Object.keys(client.listeners).length + client.mutedChannels.length;
  var mutedUsersLength = mutedUsers.length;
  var chatContext = (0, _react.useMemo)(function () {
    return {
      channel: channel,
      client: client,
      connectionRecovering: connectionRecovering,
      isOnline: isOnline,
      mutedUsers: mutedUsers,
      setActiveChannel: setActiveChannel
    };
  }, [channelId, clientValues, connectionRecovering, isOnline, mutedUsersLength]);
  return chatContext;
};

exports.useCreateChatContext = useCreateChatContext;
//# sourceMappingURL=useCreateChatContext.js.map