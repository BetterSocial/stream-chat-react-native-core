var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Avatar/Avatar.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var randomImageBaseUrl = 'https://getstream.io/random_png/';
var randomSvgBaseUrl = 'https://getstream.io/random_svg/';
var streamCDN = 'stream-io-cdn.com';

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  presenceIndicatorContainer: {
    height: 12,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 12
  }
});

var getInitials = function getInitials(fullName) {
  return fullName.split(' ').slice(0, 2).map(function (name) {
    return name.charAt(0);
  }).join(' ');
};

var Avatar = function Avatar(props) {
  var containerStyle = props.containerStyle,
      imageProp = props.image,
      imageStyle = props.imageStyle,
      name = props.name,
      online = props.online,
      presenceIndicatorProp = props.presenceIndicator,
      presenceIndicatorContainerStyle = props.presenceIndicatorContainerStyle,
      size = props.size,
      testID = props.testID;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$avata = _useTheme$theme.avatar,
      container = _useTheme$theme$avata.container,
      image = _useTheme$theme$avata.image,
      presenceIndicator = _useTheme$theme$avata.presenceIndicator,
      presenceIndicatorContainer = _useTheme$theme$avata.presenceIndicatorContainer,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_green = _useTheme$theme$color.accent_green,
      white = _useTheme$theme$color.white;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imageError = _useState2[0],
      setImageError = _useState2[1];

  return _react["default"].createElement(_reactNative.View, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      borderRadius: size / 2,
      height: size,
      width: size
    }, container, containerStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.Image, {
    accessibilityLabel: testID || 'avatar-image',
    onError: function onError() {
      return setImageError(true);
    },
    source: {
      uri: imageError || !imageProp || imageProp.includes(randomImageBaseUrl) || imageProp.includes(randomSvgBaseUrl) ? imageProp != null && imageProp.includes(streamCDN) ? imageProp : "" + randomImageBaseUrl + (name ? "?name=" + getInitials(name) + "&size=" + size : '') : imageProp.replace('h=%2A', "h=" + _reactNative.PixelRatio.getPixelSizeForLayoutSize(size))
    },
    style: [image, size ? {
      borderRadius: size / 2,
      height: size,
      width: size
    } : {}, imageStyle],
    testID: testID || 'avatar-image',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })), online && _react["default"].createElement(_reactNative.View, {
    style: [styles.presenceIndicatorContainer, presenceIndicatorContainer, presenceIndicatorContainerStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeSvg["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeSvg.Circle, (0, _extends2["default"])({
    fill: accent_green,
    stroke: white
  }, presenceIndicator, presenceIndicatorProp, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  })))));
};

exports.Avatar = Avatar;
Avatar.displayName = 'Avatar{avatar}';
//# sourceMappingURL=Avatar.js.map