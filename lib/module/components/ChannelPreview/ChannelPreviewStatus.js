var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewStatus = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _icons = require("../../icons");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewStatus.tsx";

var styles = _reactNative.StyleSheet.create({
  date: {
    fontSize: 12,
    marginLeft: 2,
    textAlign: 'right'
  },
  flexRow: {
    flexDirection: 'row'
  }
});

var ChannelPreviewStatus = function ChannelPreviewStatus(props) {
  var _latestMessagePreview;

  var formatLatestMessageDate = props.formatLatestMessageDate,
      latestMessagePreview = props.latestMessagePreview;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$chann = _useTheme$theme.channelPreview,
      checkAllIcon = _useTheme$theme$chann.checkAllIcon,
      checkIcon = _useTheme$theme$chann.checkIcon,
      date = _useTheme$theme$chann.date,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      grey = _useTheme$theme$color.grey;

  var created_at = (_latestMessagePreview = latestMessagePreview.messageObject) == null ? void 0 : _latestMessagePreview.created_at;
  var latestMessageDate = created_at ? new Date(created_at) : new Date();
  var status = latestMessagePreview.status;
  return _react["default"].createElement(_reactNative.View, {
    style: styles.flexRow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, status === 2 ? _react["default"].createElement(_icons.CheckAll, (0, _extends2["default"])({
    pathFill: accent_blue
  }, checkAllIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })) : status === 1 ? _react["default"].createElement(_icons.Check, (0, _extends2["default"])({
    pathFill: grey
  }, checkIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })) : null, _react["default"].createElement(_reactNative.Text, {
    style: [styles.date, {
      color: grey
    }, date],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, formatLatestMessageDate && latestMessageDate ? formatLatestMessageDate(latestMessageDate) : latestMessagePreview.created_at));
};

exports.ChannelPreviewStatus = ChannelPreviewStatus;
//# sourceMappingURL=ChannelPreviewStatus.js.map