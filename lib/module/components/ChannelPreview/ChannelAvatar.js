var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelAvatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _useChannelPreviewDisplayAvatar = require("./hooks/useChannelPreviewDisplayAvatar");

var _useChannelPreviewDisplayPresence = require("./hooks/useChannelPreviewDisplayPresence");

var _Avatar = require("../Avatar/Avatar");

var _GroupAvatar = require("../Avatar/GroupAvatar");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelAvatar.tsx";

var ChannelAvatar = function ChannelAvatar(props) {
  var channel = props.channel;
  var displayAvatar = (0, _useChannelPreviewDisplayAvatar.useChannelPreviewDisplayAvatar)(channel);
  var displayPresence = (0, _useChannelPreviewDisplayPresence.useChannelPreviewDisplayPresence)(channel);

  if (displayAvatar.images) {
    return _react["default"].createElement(_GroupAvatar.GroupAvatar, {
      images: displayAvatar.images,
      names: displayAvatar.names,
      size: 40,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 12
      }
    });
  }

  return _react["default"].createElement(_Avatar.Avatar, {
    image: displayAvatar.image,
    name: displayAvatar.name,
    online: displayPresence,
    size: 40,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  });
};

exports.ChannelAvatar = ChannelAvatar;
//# sourceMappingURL=ChannelAvatar.js.map