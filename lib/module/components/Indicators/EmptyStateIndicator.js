var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStateIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _MessageIcon = require("../../icons/MessageIcon");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/EmptyStateIndicator.tsx";

var width = (0, _utils.vw)(33);

var styles = _reactNative.StyleSheet.create({
  channelContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  channelDetails: {
    fontSize: 14,
    textAlign: 'center',
    width: (0, _utils.vw)(66)
  },
  channelTitle: {
    fontSize: 16,
    paddingBottom: 8,
    paddingTop: 16
  }
});

var EmptyStateIndicator = function EmptyStateIndicator(_ref) {
  var listType = _ref.listType;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      black = _useTheme$theme$color.black,
      grey = _useTheme$theme$color.grey,
      grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
      _useTheme$theme$empty = _useTheme$theme.emptyStateIndicator,
      channelContainer = _useTheme$theme$empty.channelContainer,
      channelDetails = _useTheme$theme$empty.channelDetails,
      channelTitle = _useTheme$theme$empty.channelTitle;

  switch (listType) {
    case 'channel':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.channelContainer, channelContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, _react["default"].createElement(_MessageIcon.MessageIcon, {
        height: width,
        pathFill: grey_gainsboro,
        width: width,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }), _react["default"].createElement(_reactNative.Text, {
        style: [styles.channelTitle, {
          color: black
        }, channelTitle],
        testID: "empty-channel-state-title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, "Let's start chatting!"), _react["default"].createElement(_reactNative.Text, {
        style: [styles.channelDetails, {
          color: grey
        }, channelDetails],
        testID: "empty-channel-state-details",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, 'How about sending your first message to a friend?'));

    case 'message':
      return null;

    default:
      return _react["default"].createElement(_reactNative.Text, {
        style: {
          color: black
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 14
        }
      }, "No items exist");
  }
};

exports.EmptyStateIndicator = EmptyStateIndicator;
//# sourceMappingURL=EmptyStateIndicator.js.map