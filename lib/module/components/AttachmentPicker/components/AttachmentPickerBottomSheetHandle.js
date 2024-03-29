var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPickerBottomSheetHandle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentPickerBottomSheetHandle.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 20,
    justifyContent: 'center'
  },
  handle: {
    borderRadius: 2,
    height: 4,
    width: 40
  }
});

var AttachmentPickerBottomSheetHandle = function AttachmentPickerBottomSheetHandle(_ref) {
  var animatedIndex = _ref.animatedIndex;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme$color = _useTheme.theme.colors,
      black = _useTheme$theme$color.black,
      white = _useTheme$theme$color.white;

  var style = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      borderTopLeftRadius: animatedIndex.value > 0 ? 16 - animatedIndex.value * 16 : 16,
      borderTopRightRadius: animatedIndex.value > 0 ? 16 - animatedIndex.value * 16 : 16
    };
  });
  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [styles.container, {
      backgroundColor: white
    }, style],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.handle, {
      backgroundColor: black + "1A"
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

exports.AttachmentPickerBottomSheetHandle = AttachmentPickerBottomSheetHandle;
//# sourceMappingURL=AttachmentPickerBottomSheetHandle.js.map