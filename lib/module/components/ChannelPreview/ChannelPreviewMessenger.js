var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewMessenger = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _ChannelAvatar = require("./ChannelAvatar");

var _useChannelPreviewDisplayName = require("./hooks/useChannelPreviewDisplayName");

var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _utils = require("../../utils/utils");

var _ChannelPreviewTitle = require("./ChannelPreviewTitle");

var _ChannelPreviewMessage = require("./ChannelPreviewMessage");

var _ChannelPreviewStatus = require("./ChannelPreviewStatus");

var _ChannelPreviewUnreadCount = require("./ChannelPreviewUnreadCount");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewMessenger.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12
  },
  contentContainer: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8
  },
  title: {
    fontSize: 14,
    fontWeight: '700'
  }
});

var maxWidth = (0, _utils.vw)(80) - 16 - 40;

var ChannelPreviewMessengerWithContext = function ChannelPreviewMessengerWithContext(props) {
  var channel = props.channel,
      formatLatestMessageDate = props.formatLatestMessageDate,
      latestMessagePreview = props.latestMessagePreview,
      maxUnreadCount = props.maxUnreadCount,
      onSelect = props.onSelect,
      _props$PreviewAvatar = props.PreviewAvatar,
      PreviewAvatar = _props$PreviewAvatar === void 0 ? _ChannelAvatar.ChannelAvatar : _props$PreviewAvatar,
      _props$PreviewMessage = props.PreviewMessage,
      PreviewMessage = _props$PreviewMessage === void 0 ? _ChannelPreviewMessage.ChannelPreviewMessage : _props$PreviewMessage,
      _props$PreviewStatus = props.PreviewStatus,
      PreviewStatus = _props$PreviewStatus === void 0 ? _ChannelPreviewStatus.ChannelPreviewStatus : _props$PreviewStatus,
      _props$PreviewTitle = props.PreviewTitle,
      PreviewTitle = _props$PreviewTitle === void 0 ? _ChannelPreviewTitle.ChannelPreviewTitle : _props$PreviewTitle,
      _props$PreviewUnreadC = props.PreviewUnreadCount,
      PreviewUnreadCount = _props$PreviewUnreadC === void 0 ? _ChannelPreviewUnreadCount.ChannelPreviewUnreadCount : _props$PreviewUnreadC,
      unread = props.unread;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$chann = _useTheme$theme.channelPreview,
      container = _useTheme$theme$chann.container,
      contentContainer = _useTheme$theme$chann.contentContainer,
      row = _useTheme$theme$chann.row,
      title = _useTheme$theme$chann.title,
      _useTheme$theme$color = _useTheme$theme.colors,
      border = _useTheme$theme$color.border,
      white_snow = _useTheme$theme$color.white_snow;

  var displayName = (0, _useChannelPreviewDisplayName.useChannelPreviewDisplayName)(channel, Math.floor(maxWidth / ((title.fontSize || styles.title.fontSize) / 2)));
  return _react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity, {
    onPress: function onPress() {
      if (onSelect) {
        onSelect(channel);
      }
    },
    style: [styles.container, {
      backgroundColor: white_snow,
      borderBottomColor: border
    }, container],
    testID: "channel-preview-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, _react["default"].createElement(PreviewAvatar, {
    channel: channel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.contentContainer, contentContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.row, row],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, _react["default"].createElement(PreviewTitle, {
    channel: channel,
    displayName: displayName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }), _react["default"].createElement(PreviewUnreadCount, {
    channel: channel,
    maxUnreadCount: maxUnreadCount,
    unread: unread,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  })), _react["default"].createElement(_reactNative.View, {
    style: [styles.row, row],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, _react["default"].createElement(PreviewMessage, {
    latestMessagePreview: latestMessagePreview,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }), _react["default"].createElement(PreviewStatus, {
    channel: channel,
    formatLatestMessageDate: formatLatestMessageDate,
    latestMessagePreview: latestMessagePreview,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }))));
};

var MemoizedChannelPreviewMessengerWithContext = _react["default"].memo(ChannelPreviewMessengerWithContext);

var ChannelPreviewMessenger = function ChannelPreviewMessenger(props) {
  var _useChannelsContext = (0, _ChannelsContext.useChannelsContext)(),
      maxUnreadCount = _useChannelsContext.maxUnreadCount,
      onSelect = _useChannelsContext.onSelect,
      PreviewAvatar = _useChannelsContext.PreviewAvatar,
      PreviewMessage = _useChannelsContext.PreviewMessage,
      PreviewStatus = _useChannelsContext.PreviewStatus,
      PreviewTitle = _useChannelsContext.PreviewTitle,
      PreviewUnreadCount = _useChannelsContext.PreviewUnreadCount;

  return _react["default"].createElement(MemoizedChannelPreviewMessengerWithContext, (0, _extends2["default"])({
    maxUnreadCount: maxUnreadCount,
    onSelect: onSelect,
    PreviewAvatar: PreviewAvatar,
    PreviewMessage: PreviewMessage,
    PreviewStatus: PreviewStatus,
    PreviewTitle: PreviewTitle,
    PreviewUnreadCount: PreviewUnreadCount
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }));
};

exports.ChannelPreviewMessenger = ChannelPreviewMessenger;
ChannelPreviewMessenger.displayName = 'ChannelPreviewMessenger{channelPreview}';
//# sourceMappingURL=ChannelPreviewMessenger.js.map