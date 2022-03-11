var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGalleryHeader = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _OverlayContext = require("../../../contexts/overlayContext/OverlayContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _icons = require("../../../icons");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGalleryHeader.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ReanimatedSafeAreaView = _reactNativeReanimated["default"].createAnimatedComponent ? _reactNativeReanimated["default"].createAnimatedComponent(_reactNative.SafeAreaView) : _reactNative.SafeAreaView;

var styles = _reactNative.StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    opacity: 0.5
  },
  innerContainer: {
    flexDirection: 'row',
    height: 56
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 8
  },
  rightContainer: {
    marginRight: 8,
    width: 24
  },
  userName: {
    fontSize: 16,
    fontWeight: '700'
  }
});

var ImageGalleryHeader = function ImageGalleryHeader(props) {
  var _photo$user;

  var centerElement = props.centerElement,
      CloseIcon = props.CloseIcon,
      leftElement = props.leftElement,
      opacity = props.opacity,
      photo = props.photo,
      rightElement = props.rightElement,
      visible = props.visible;

  var _useState = (0, _react.useState)(200),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      black = _useTheme$theme$color.black,
      white = _useTheme$theme$color.white,
      _useTheme$theme$image = _useTheme$theme.imageGallery.header,
      centerContainer = _useTheme$theme$image.centerContainer,
      container = _useTheme$theme$image.container,
      dateText = _useTheme$theme$image.dateText,
      innerContainer = _useTheme$theme$image.innerContainer,
      leftContainer = _useTheme$theme$image.leftContainer,
      rightContainer = _useTheme$theme$image.rightContainer,
      usernameText = _useTheme$theme$image.usernameText;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t,
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      setBlurType = _useOverlayContext.setBlurType,
      setOverlay = _useOverlayContext.setOverlay,
      translucentStatusBar = _useOverlayContext.translucentStatusBar;

  var parsedDate = tDateTimeParser(photo == null ? void 0 : photo.created_at);
  var date = parsedDate && (0, _TranslationContext.isDayOrMoment)(parsedDate) ? parsedDate.calendar ? parsedDate.calendar() : parsedDate.fromNow() : parsedDate;
  var headerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value,
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(visible.value, [0, 1], [-height, 0], _reactNativeReanimated.Extrapolate.CLAMP)
      }]
    };
  });
  var androidTranslucentHeaderStyle = {
    paddingTop: _reactNative.Platform.OS === 'android' && translucentStatusBar ? _reactNative.StatusBar.currentHeight : undefined
  };

  var hideOverlay = function hideOverlay() {
    setOverlay('none');
    setBlurType(undefined);
  };

  return _react["default"].createElement(_reactNative.View, {
    onLayout: function onLayout(event) {
      return setHeight(event.nativeEvent.layout.height);
    },
    pointerEvents: 'box-none',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, _react["default"].createElement(ReanimatedSafeAreaView, {
    style: [{
      backgroundColor: white
    }, androidTranslucentHeaderStyle, container, headerStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.innerContainer, innerContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, leftElement ? leftElement({
    hideOverlay: hideOverlay,
    photo: photo
  }) : _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: hideOverlay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.leftContainer, leftContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, CloseIcon ? CloseIcon : _react["default"].createElement(_icons.Close, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 42
    }
  }))), centerElement ? centerElement({
    hideOverlay: hideOverlay,
    photo: photo
  }) : _react["default"].createElement(_reactNative.View, {
    style: [styles.centerContainer, centerContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.userName, {
      color: black
    }, usernameText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, (photo == null ? void 0 : (_photo$user = photo.user) == null ? void 0 : _photo$user.name) || t('Unknown User')), _react["default"].createElement(_reactNative.Text, {
    style: [styles.date, {
      color: black
    }, dateText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, date)), rightElement ? rightElement({
    hideOverlay: hideOverlay,
    photo: photo
  }) : _react["default"].createElement(_reactNative.View, {
    style: [styles.rightContainer, rightContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }))));
};

exports.ImageGalleryHeader = ImageGalleryHeader;
ImageGalleryHeader.displayName = 'ImageGalleryHeader{imageGallery{header}}';
//# sourceMappingURL=ImageGalleryHeader.js.map