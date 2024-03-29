var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageOverlaySelectedComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _icons = require("../../../icons");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/ImageOverlaySelectedComponent.tsx";

var styles = _reactNative.StyleSheet.create({
  check: {
    borderRadius: 12,
    height: 24,
    marginRight: 8,
    marginTop: 8,
    width: 24
  }
});

var ImageOverlaySelectedComponent = function ImageOverlaySelectedComponent() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      check = _useTheme$theme.attachmentPicker.imageOverlaySelectedComponent.check,
      white = _useTheme$theme.colors.white;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.check, {
      backgroundColor: white
    }, check],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, _react["default"].createElement(_icons.Check, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
};

exports.ImageOverlaySelectedComponent = ImageOverlaySelectedComponent;
ImageOverlaySelectedComponent.displayName = 'ImageOverlaySelectedComponent{attachmentPicker{imageOverlaySelectedComponent}}';
//# sourceMappingURL=ImageOverlaySelectedComponent.js.map