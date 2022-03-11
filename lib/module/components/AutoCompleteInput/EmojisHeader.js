var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojisHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _Smile = require("../../icons/Smile");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/EmojisHeader.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8
  },
  title: {
    fontSize: 14,
    paddingLeft: 8
  }
});

var EmojisHeader = function EmojisHeader(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      grey = _useTheme$theme$color.grey,
      _useTheme$theme$messa = _useTheme$theme.messageInput.suggestions.emojisHeader,
      container = _useTheme$theme$messa.container,
      titleStyle = _useTheme$theme$messa.title;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Smile.Smile, {
    pathFill: accent_blue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.title, {
      color: grey
    }, titleStyle],
    testID: "emojis-header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, t('Emoji matching') + (" \"" + title + "\"")));
};

exports.EmojisHeader = EmojisHeader;
EmojisHeader.displayName = 'EmojisHeader{messageInput{suggestions{emojisHeader}}}';
//# sourceMappingURL=EmojisHeader.js.map