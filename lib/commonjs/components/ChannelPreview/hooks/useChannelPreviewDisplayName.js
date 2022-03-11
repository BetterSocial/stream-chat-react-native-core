var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelPreviewDisplayName = exports.getChannelPreviewDisplayName = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

var _utils = require("../../../utils/utils");

var maxCharacterLengthDefault = ((0, _utils.vw)(100) - 16) / 6;

var getChannelPreviewDisplayName = function getChannelPreviewDisplayName(_ref) {
  var channelName = _ref.channelName,
      currentUserId = _ref.currentUserId,
      maxCharacterLength = _ref.maxCharacterLength,
      members = _ref.members;
  if (channelName) return channelName;
  var channelMembers = Object.values(members || {});
  var otherMembers = channelMembers.filter(function (member) {
    var _member$user;

    return ((_member$user = member.user) == null ? void 0 : _member$user.id) !== currentUserId;
  });
  var name = otherMembers.slice(0).reduce(function (returnString, currentMember, index, originalArray) {
    var _currentMember$user, _currentMember$user2;

    var returnStringLength = returnString.length;
    var currentMemberName = ((_currentMember$user = currentMember.user) == null ? void 0 : _currentMember$user.name) || ((_currentMember$user2 = currentMember.user) == null ? void 0 : _currentMember$user2.id) || 'Unknown User';

    if (returnStringLength + (currentMemberName.length + 2) < maxCharacterLength) {
      if (returnStringLength) {
        returnString += ", " + currentMemberName;
      } else {
        returnString = currentMemberName;
      }
    } else {
      var remainingMembers = originalArray.length - index;
      returnString += ", +" + remainingMembers;
      originalArray.splice(1);
    }

    return returnString;
  }, '');
  return name;
};

exports.getChannelPreviewDisplayName = getChannelPreviewDisplayName;

var useChannelPreviewDisplayName = function useChannelPreviewDisplayName(channel, characterLength) {
  var _channel$data;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var currentUserId = client.userID;
  var members = channel == null ? void 0 : channel.state.members;
  var numOfMembers = Object.keys(members || {}).length;
  var channelName = channel == null ? void 0 : (_channel$data = channel.data) == null ? void 0 : _channel$data.name;
  var maxCharacterLength = characterLength || maxCharacterLengthDefault;

  var _useState = (0, _react.useState)(getChannelPreviewDisplayName({
    channelName: channelName,
    currentUserId: currentUserId,
    maxCharacterLength: maxCharacterLength,
    members: members
  })),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      displayName = _useState2[0],
      setDisplayName = _useState2[1];

  (0, _react.useEffect)(function () {
    setDisplayName(getChannelPreviewDisplayName({
      channelName: channelName,
      currentUserId: currentUserId,
      maxCharacterLength: maxCharacterLength,
      members: members
    }));
  }, [channelName, currentUserId, maxCharacterLength, numOfMembers]);
  return displayName;
};

exports.useChannelPreviewDisplayName = useChannelPreviewDisplayName;
//# sourceMappingURL=useChannelPreviewDisplayName.js.map