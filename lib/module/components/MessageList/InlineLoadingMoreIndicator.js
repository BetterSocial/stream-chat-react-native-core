var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineLoadingMoreIndicator = exports.InlineLoadingMoreIndicatorWithContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineLoadingMoreIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    padding: 10,
    width: '100%'
  }
});

var InlineLoadingMoreIndicatorWithContext = function InlineLoadingMoreIndicatorWithContext(_ref) {
  var loadingMore = _ref.loadingMore;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var accent_blue = theme.colors.accent_blue;

  if (!loadingMore) {
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

exports.InlineLoadingMoreIndicatorWithContext = InlineLoadingMoreIndicatorWithContext;

var areEqual = function areEqual(prevProps, nextProps) {
  var prevLoadingMore = prevProps.loadingMore;
  var nextLoadingMore = nextProps.loadingMore;
  var loadingMoreEqual = prevLoadingMore === nextLoadingMore;
  if (!loadingMoreEqual) return false;
  return true;
};

var MemoizedInlineLoadingMoreIndicator = _react["default"].memo(InlineLoadingMoreIndicatorWithContext, areEqual);

var InlineLoadingMoreIndicator = function InlineLoadingMoreIndicator() {
  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
      loadingMore = _usePaginatedMessageL.loadingMore;

  return _react["default"].createElement(MemoizedInlineLoadingMoreIndicator, {
    loadingMore: loadingMore,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  });
};

exports.InlineLoadingMoreIndicator = InlineLoadingMoreIndicator;
//# sourceMappingURL=InlineLoadingMoreIndicator.js.map