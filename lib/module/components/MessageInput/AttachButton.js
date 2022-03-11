var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _Attach = require("../../icons/Attach");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/AttachButton.tsx";

var AttachButtonWithContext = function AttachButtonWithContext(props) {
  var disabled = props.disabled,
      handleOnPress = props.handleOnPress,
      selectedPicker = props.selectedPicker;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      grey = _useTheme$theme$color.grey,
      attachButton = _useTheme$theme.messageInput.attachButton;

  return _react["default"].createElement(_reactNativeGestureHandler.TouchableOpacity, {
    disabled: disabled,
    hitSlop: {
      bottom: 15,
      left: 15,
      right: 5,
      top: 15
    },
    onPress: disabled ? function () {
      return null;
    } : handleOnPress,
    style: [attachButton],
    testID: "attach-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Attach.Attach, {
    pathFill: selectedPicker === 'images' ? accent_blue : grey,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled,
      prevHandleOnPress = prevProps.handleOnPress,
      prevSelectedPicker = prevProps.selectedPicker;
  var nextDisabled = nextProps.disabled,
      nextHandleOnPress = nextProps.handleOnPress,
      nextSelectedPicker = nextProps.selectedPicker;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var handleOnPressEqual = prevHandleOnPress === nextHandleOnPress;
  if (!handleOnPressEqual) return false;
  var selectedPickerEqual = prevSelectedPicker === nextSelectedPicker;
  if (!selectedPickerEqual) return false;
  return true;
};

var MemoizedAttachButton = _react["default"].memo(AttachButtonWithContext, areEqual);

var AttachButton = function AttachButton(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      _useChannelContext$di = _useChannelContext.disabled,
      disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di;

  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
      selectedPicker = _useAttachmentPickerC.selectedPicker;

  return _react["default"].createElement(MemoizedAttachButton, (0, _extends2["default"])({
    disabled: disabled,
    selectedPicker: selectedPicker
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 10
    }
  }));
};

exports.AttachButton = AttachButton;
AttachButton.displayName = 'AttachButton{messageInput}';
//# sourceMappingURL=AttachButton.js.map