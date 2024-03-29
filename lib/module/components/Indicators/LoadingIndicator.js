var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Spinner = require("../Spinner/Spinner");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/LoadingIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20
  }
});

var LoadingIndicatorWrapper = function LoadingIndicatorWrapper(_ref) {
  var text = _ref.text;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      black = _useTheme$theme.colors.black,
      _useTheme$theme$loadi = _useTheme$theme.loadingIndicator,
      container = _useTheme$theme$loadi.container,
      loadingText = _useTheme$theme$loadi.loadingText;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Spinner.Spinner, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.loadingText, {
      color: black
    }, loadingText],
    testID: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, text));
};

var LoadingIndicator = function LoadingIndicator(props) {
  var listType = props.listType,
      loadingText = props.loadingText;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  if (loadingText) {
    return _react["default"].createElement(LoadingIndicatorWrapper, {
      text: loadingText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 12
      }
    });
  }

  switch (listType) {
    case 'channel':
      return _react["default"].createElement(LoadingIndicatorWrapper, {
        text: t('Loading channels...'),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 14
        }
      });

    case 'message':
      return _react["default"].createElement(LoadingIndicatorWrapper, {
        text: t('Loading messages...'),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 14
        }
      });

    default:
      return _react["default"].createElement(LoadingIndicatorWrapper, {
        text: t('Loading...'),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 14
        }
      });
  }
};

exports.LoadingIndicator = LoadingIndicator;
LoadingIndicator.displayName = 'LoadingIndicator{loadingIndicator}';
//# sourceMappingURL=LoadingIndicator.js.map