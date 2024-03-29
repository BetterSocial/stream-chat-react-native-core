var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineLoadingMoreThreadIndicator = exports.InlineLoadingMoreThreadIndicatorWithContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineLoadingMoreThreadIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    padding: 10,
    width: '100%'
  }
});

var InlineLoadingMoreThreadIndicatorWithContext = function InlineLoadingMoreThreadIndicatorWithContext(_ref) {
  var threadLoadingMore = _ref.threadLoadingMore;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var accent_blue = theme.colors.accent_blue;

  if (!threadLoadingMore) {
    return null;
  }

  return _react["default"].createElement(_reactNative.View, {
    style: styles.activityIndicatorContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.ActivityIndicator, {
    color: accent_blue,
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }));
};

exports.InlineLoadingMoreThreadIndicatorWithContext = InlineLoadingMoreThreadIndicatorWithContext;

var areEqual = function areEqual(prevProps, nextProps) {
  var prevThreadLoadingMore = prevProps.threadLoadingMore;
  var nextThreadLoadingMore = nextProps.threadLoadingMore;
  var threadLoadingMoreEqual = prevThreadLoadingMore === nextThreadLoadingMore;
  if (!threadLoadingMoreEqual) return false;
  return true;
};

var MemoizedInlineLoadingMoreThreadIndicator = _react["default"].memo(InlineLoadingMoreThreadIndicatorWithContext, areEqual);

var InlineLoadingMoreThreadIndicator = function InlineLoadingMoreThreadIndicator() {
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      threadLoadingMore = _useThreadContext.threadLoadingMore;

  return _react["default"].createElement(MemoizedInlineLoadingMoreThreadIndicator, {
    threadLoadingMore: threadLoadingMore,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  });
};

exports.InlineLoadingMoreThreadIndicator = InlineLoadingMoreThreadIndicator;
//# sourceMappingURL=InlineLoadingMoreThreadIndicator.js.map