var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/DateHeader.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    height: 16,
    justifyContent: 'center',
    marginTop: 8,
    paddingHorizontal: 8
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

var DateHeader = function DateHeader(_ref) {
  var dateString = _ref.dateString;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      overlay_dark = _useTheme$theme$color.overlay_dark,
      white = _useTheme$theme$color.white,
      _useTheme$theme$dateH = _useTheme$theme.dateHeader,
      container = _useTheme$theme$dateH.container,
      text = _useTheme$theme$dateH.text;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: overlay_dark
    }, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.text, {
      color: white
    }, text],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, dateString));
};

exports.DateHeader = DateHeader;
//# sourceMappingURL=DateHeader.js.map