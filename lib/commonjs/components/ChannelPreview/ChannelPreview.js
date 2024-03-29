var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreview = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _useLatestMessagePreview = require("./hooks/useLatestMessagePreview");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreview.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ChannelPreviewWithContext = function ChannelPreviewWithContext(props) {
  var channel = props.channel,
      client = props.client,
      Preview = props.Preview;

  var _useState = (0, _react.useState)(channel.state.messages[channel.state.messages.length - 1]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      lastMessage = _useState2[0],
      setLastMessage = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      forceUpdate = _useState4[0],
      setForceUpdate = _useState4[1];

  var _useState5 = (0, _react.useState)(channel.countUnread()),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      unread = _useState6[0],
      setUnread = _useState6[1];

  var latestMessagePreview = (0, _useLatestMessagePreview.useLatestMessagePreview)(channel, forceUpdate, lastMessage);
  var channelLastMessage = channel.lastMessage();
  var channelLastMessageString = "" + (channelLastMessage == null ? void 0 : channelLastMessage.id) + (channelLastMessage == null ? void 0 : channelLastMessage.updated_at);
  (0, _react.useEffect)(function () {
    if (channelLastMessage && (channelLastMessage.id !== (lastMessage == null ? void 0 : lastMessage.id) || channelLastMessage.updated_at !== (lastMessage == null ? void 0 : lastMessage.updated_at))) {
      setLastMessage(channelLastMessage);
    }

    var newUnreadCount = channel.countUnread();

    if (newUnreadCount !== unread) {
      setUnread(newUnreadCount);
    }
  }, [channelLastMessageString]);
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (event.message) {
        setLastMessage(event.message);
      }

      if (event.type === 'message.new') {
        setUnread(channel.countUnread());
      }
    };

    channel.on('message.new', handleEvent);
    channel.on('message.updated', handleEvent);
    channel.on('message.deleted', handleEvent);
    return function () {
      channel.off('message.new', handleEvent);
      channel.off('message.updated', handleEvent);
      channel.off('message.deleted', handleEvent);
    };
  }, []);
  (0, _react.useEffect)(function () {
    var handleReadEvent = function handleReadEvent(event) {
      var _event$user, _event$user2;

      if (((_event$user = event.user) == null ? void 0 : _event$user.id) === client.userID) {
        setUnread(0);
      } else if ((_event$user2 = event.user) != null && _event$user2.id) {
        setForceUpdate(function (prev) {
          return prev + 1;
        });
      }
    };

    channel.on('message.read', handleReadEvent);
    return function () {
      return channel.off('message.read', handleReadEvent);
    };
  }, []);
  return _react["default"].createElement(Preview, {
    channel: channel,
    latestMessagePreview: latestMessagePreview,
    unread: unread,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 10
    }
  });
};

var ChannelPreview = function ChannelPreview(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useChannelsContext = (0, _ChannelsContext.useChannelsContext)(),
      Preview = _useChannelsContext.Preview;

  return _react["default"].createElement(ChannelPreviewWithContext, (0, _extends2["default"])({
    client: client,
    Preview: Preview
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 10
    }
  }));
};

exports.ChannelPreview = ChannelPreview;
//# sourceMappingURL=ChannelPreview.js.map