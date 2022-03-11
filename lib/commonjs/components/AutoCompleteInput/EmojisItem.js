var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojisItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/EmojisItem.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 14
  }
});

var EmojisItem = function EmojisItem(_ref) {
  var _ref$item = _ref.item,
      name = _ref$item.name,
      unicode = _ref$item.unicode;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      black = _useTheme$theme.colors.black,
      _useTheme$theme$messa = _useTheme$theme.messageInput.suggestions.emoji,
      container = _useTheme$theme$messa.container,
      text = _useTheme$theme$messa.text;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.text, {
      color: black
    }, text],
    testID: "emojis-item-unicode",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, unicode), _react["default"].createElement(_reactNative.Text, {
    style: [styles.text, {
      color: black
    }, text],
    testID: "emojis-item-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, " " + name));
};

exports.EmojisItem = EmojisItem;
EmojisItem.displayName = 'EmojisItem{messageInput{suggestions{emoji}}}';
//# sourceMappingURL=EmojisItem.js.map