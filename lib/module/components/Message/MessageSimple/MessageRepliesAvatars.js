var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageRepliesAvatars = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Avatar = require("../../Avatar/Avatar");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageRepliesAvatars.tsx";

var styles = _reactNative.StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2
  },
  topAvatar: {
    paddingTop: 2,
    position: 'absolute'
  }
});

var MessageRepliesAvatars = function MessageRepliesAvatars(props) {
  var _message$thread_parti;

  var alignment = props.alignment,
      message = props.message;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      white_snow = _useTheme$theme.colors.white_snow,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.replies,
      avatar = _useTheme$theme$messa.avatar,
      avatarContainerMultiple = _useTheme$theme$messa.avatarContainerMultiple,
      avatarContainerSingle = _useTheme$theme$messa.avatarContainerSingle,
      avatarSize = _useTheme$theme$messa.avatarSize,
      leftAvatarsContainer = _useTheme$theme$messa.leftAvatarsContainer,
      rightAvatarsContainer = _useTheme$theme$messa.rightAvatarsContainer;

  var avatars = ((_message$thread_parti = message.thread_participants) == null ? void 0 : _message$thread_parti.slice(-2)) || [];
  var hasMoreThanOneReply = avatars.length > 1;
  return _react["default"].createElement(_reactNative.View, {
    style: [styles.avatarContainer, alignment === 'right' ? (0, _extends2["default"])({
      marginLeft: 8
    }, rightAvatarsContainer) : leftAvatarsContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, avatars.map(function (user, i) {
    return _react["default"].createElement(_reactNative.View, {
      key: user.id,
      style: i === 1 ? (0, _extends2["default"])({}, styles.topAvatar, avatarContainerSingle) : (0, _extends2["default"])({
        paddingLeft: hasMoreThanOneReply ? 8 : 0
      }, avatarContainerMultiple),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, _react["default"].createElement(_Avatar.Avatar, {
      containerStyle: [i === 1 && {
        borderColor: white_snow,
        borderWidth: 1
      }, avatar],
      image: user.image,
      name: user.name,
      size: avatarSize ? avatarSize : i === 1 ? 18 : 16,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }));
  }));
};

exports.MessageRepliesAvatars = MessageRepliesAvatars;
//# sourceMappingURL=MessageRepliesAvatars.js.map