var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineLoadingMoreRecentIndicator = exports.InlineLoadingMoreRecentIndicatorWithContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineLoadingMoreRecentIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    padding: 10,
    width: '100%'
  }
});

var InlineLoadingMoreRecentIndicatorWithContext = function InlineLoadingMoreRecentIndicatorWithContext(_ref) {
  var loadingMoreRecent = _ref.loadingMoreRecent;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var accent_blue = theme.colors.accent_blue;

  if (!loadingMoreRecent) {
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

exports.InlineLoadingMoreRecentIndicatorWithContext = InlineLoadingMoreRecentIndicatorWithContext;

var areEqual = function areEqual(prevProps, nextProps) {
  var prevLoadingMoreRecent = prevProps.loadingMoreRecent;
  var nextLoadingMoreRecent = nextProps.loadingMoreRecent;
  var loadingMoreRecentEqual = prevLoadingMoreRecent === nextLoadingMoreRecent;
  if (!loadingMoreRecentEqual) return false;
  return true;
};

var MemoizedInlineLoadingMoreRecentIndicator = _react["default"].memo(InlineLoadingMoreRecentIndicatorWithContext, areEqual);

var InlineLoadingMoreRecentIndicator = function InlineLoadingMoreRecentIndicator() {
  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
      loadingMoreRecent = _usePaginatedMessageL.loadingMoreRecent;

  return _react["default"].createElement(MemoizedInlineLoadingMoreRecentIndicator, {
    loadingMoreRecent: loadingMoreRecent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  });
};

exports.InlineLoadingMoreRecentIndicator = InlineLoadingMoreRecentIndicator;
//# sourceMappingURL=InlineLoadingMoreRecentIndicator.js.map