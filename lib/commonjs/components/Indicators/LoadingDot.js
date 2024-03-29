var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingDot = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/LoadingDot.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LoadingDot = function LoadingDot(props) {
  var _props$diameter = props.diameter,
      diameter = _props$diameter === void 0 ? 4 : _props$diameter,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 1500 : _props$duration,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? 0 : _props$offset,
      style = props.style;
  var halfDuration = duration / 2;
  var startingOffset = halfDuration - offset;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      black = _useTheme$theme.colors.black,
      loadingDot = _useTheme$theme.loadingDots.loadingDot;

  var opacity = (0, _reactNativeReanimated.useSharedValue)(startingOffset / halfDuration);
  (0, _react.useEffect)(function () {
    opacity.value = (0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withTiming)(0, {
      duration: startingOffset,
      easing: _reactNativeReanimated.Easing.linear
    }), (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withTiming)(1, {
      duration: halfDuration,
      easing: _reactNativeReanimated.Easing.linear
    }), (0, _reactNativeReanimated.withTiming)(0, {
      duration: halfDuration,
      easing: _reactNativeReanimated.Easing.linear
    })), -1));
  }, []);
  var dotStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value
    };
  }, []);
  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [{
      backgroundColor: black,
      borderRadius: diameter / 2,
      height: diameter,
      width: diameter
    }, style, loadingDot, dotStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  });
};

exports.LoadingDot = LoadingDot;
//# sourceMappingURL=LoadingDot.js.map