var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandsHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _Lightning = require("../../icons/Lightning");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/CommandsHeader.tsx";

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

var CommandsHeader = function CommandsHeader() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      grey = _useTheme$theme$color.grey,
      _useTheme$theme$messa = _useTheme$theme.messageInput.suggestions.commandsHeader,
      container = _useTheme$theme$messa.container,
      title = _useTheme$theme$messa.title;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Lightning.Lightning, {
    pathFill: accent_blue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.title, {
      color: grey
    }, title],
    testID: "commands-header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, t('Instant Commands')));
};

exports.CommandsHeader = CommandsHeader;
CommandsHeader.displayName = 'CommandsHeader{messageInput{suggestions{commandsHeader}}}';
//# sourceMappingURL=CommandsHeader.js.map