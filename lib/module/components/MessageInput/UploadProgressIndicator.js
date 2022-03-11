var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadProgressIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _icons = require("../../icons");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/UploadProgressIndicator.tsx";

var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  overlay: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    opacity: 0,
    position: 'absolute',
    width: '100%'
  },
  retryButtonContainer: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

var UploadProgressIndicator = function UploadProgressIndicator(props) {
  var action = props.action,
      active = props.active,
      children = props.children,
      style = props.style,
      type = props.type;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      overlayColor = _useTheme$theme$color.overlay,
      white_smoke = _useTheme$theme$color.white_smoke,
      _useTheme$theme$messa = _useTheme$theme.messageInput.uploadProgressIndicator,
      container = _useTheme$theme$messa.container,
      overlay = _useTheme$theme$messa.overlay;

  return !active ? _react["default"].createElement(_reactNative.View, {
    style: [styles.overflowHidden, style],
    testID: "inactive-upload-progress-indicator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, children) : _react["default"].createElement(_reactNative.View, {
    style: [styles.overflowHidden, style],
    testID: "active-upload-progress-indicator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, children, _react["default"].createElement(_reactNative.View, {
    style: [styles.overlay, {
      backgroundColor: overlayColor
    }, overlay],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: overlayColor
    }, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, type === _utils.ProgressIndicatorTypes.IN_PROGRESS && _react["default"].createElement(_reactNative.View, {
    style: styles.activityIndicatorContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNative.ActivityIndicator, {
    color: white_smoke,
    testID: "upload-progress-indicator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), type === _utils.ProgressIndicatorTypes.RETRY && _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: action,
    style: styles.retryButtonContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, _react["default"].createElement(_icons.Refresh, {
    height: 18,
    pathFill: white_smoke,
    testID: "retry-upload-progress-indicator",
    width: 18,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }))));
};

exports.UploadProgressIndicator = UploadProgressIndicator;
UploadProgressIndicator.displayName = 'UploadProgressIndicator{messageInput{uploadProgressIndicator}}';
//# sourceMappingURL=UploadProgressIndicator.js.map