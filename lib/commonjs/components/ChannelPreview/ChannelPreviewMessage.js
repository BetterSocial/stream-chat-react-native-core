var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewMessage = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewMessage.tsx";

var styles = _reactNative.StyleSheet.create({
  bold: {
    fontWeight: '600'
  },
  message: {
    flexShrink: 1,
    fontSize: 12
  }
});

var ChannelPreviewMessage = function ChannelPreviewMessage(_ref) {
  var latestMessagePreview = _ref.latestMessagePreview;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      message = _useTheme$theme.channelPreview.message,
      grey = _useTheme$theme.colors.grey;

  return _react["default"].createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [styles.message, {
      color: grey
    }, message],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, latestMessagePreview.previews.map(function (preview, index) {
    return preview.text ? _react["default"].createElement(_reactNative.Text, {
      key: preview.text + "_" + index,
      style: [{
        color: grey
      }, preview.bold ? styles.bold : {}, message],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, preview.text) : null;
  }));
};

exports.ChannelPreviewMessage = ChannelPreviewMessage;
//# sourceMappingURL=ChannelPreviewMessage.js.map