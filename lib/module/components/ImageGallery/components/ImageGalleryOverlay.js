var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGalleryOverlay = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGalleryOverlay.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ImageGalleryOverlay = function ImageGalleryOverlay(props) {
  var animatedBottomSheetIndex = props.animatedBottomSheetIndex,
      closeGridView = props.closeGridView,
      currentBottomSheetIndex = props.currentBottomSheetIndex;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      overlayColor = _useTheme$theme.colors.overlay,
      overlay = _useTheme$theme.imageGallery.grid.overlay;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      fadedIn = _useState4[0],
      setFadedIn = _useState4[1];

  var opacity = (0, _reactNativeReanimated.useSharedValue)(0);
  (0, _react.useEffect)(function () {
    if (currentBottomSheetIndex > 0) {
      setVisible(true);
      opacity.value = (0, _reactNativeReanimated.withTiming)(1, {
        duration: 200,
        easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
      }, function () {
        return (0, _reactNativeReanimated.runOnJS)(setFadedIn)(true);
      });
    } else {
      setVisible(false);
      opacity.value = 0;
      setFadedIn(false);
    }
  }, [currentBottomSheetIndex]);
  var showOverlayStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: fadedIn ? animatedBottomSheetIndex.value : opacity.value
    };
  }, [fadedIn]);

  var tapEvent = function tapEvent(event) {
    if (event.nativeEvent.state === _reactNativeGestureHandler.State.END) {
      closeGridView();
    }
  };

  if (!visible) {
    return null;
  }

  return _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    maxDeltaX: 16,
    maxDeltaY: 16,
    onHandlerStateChange: tapEvent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [_reactNative.StyleSheet.absoluteFillObject, {
      backgroundColor: overlayColor
    }, overlay, showOverlayStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }));
};

exports.ImageGalleryOverlay = ImageGalleryOverlay;
ImageGalleryOverlay.displayName = 'ImageGrid{imageGallery{grid{overlay}}}';
//# sourceMappingURL=ImageGalleryOverlay.js.map