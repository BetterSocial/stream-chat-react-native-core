var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGalleryFooter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _icons = require("../../../icons");

var _native = require("../../../native");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGalleryFooter.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ReanimatedSafeAreaView = _reactNativeReanimated["default"].createAnimatedComponent ? _reactNativeReanimated["default"].createAnimatedComponent(_reactNative.SafeAreaView) : _reactNative.SafeAreaView;

var styles = _reactNative.StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  imageCountText: {
    fontSize: 16,
    fontWeight: '600'
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
    flex: 1,
    justifyContent: 'center',
    marginRight: 8
  },
  wrapper: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  }
});

var ImageGalleryFooter = function ImageGalleryFooter(props) {
  var centerElement = props.centerElement,
      GridIcon = props.GridIcon,
      leftElement = props.leftElement,
      opacity = props.opacity,
      openGridView = props.openGridView,
      photo = props.photo,
      photoLength = props.photoLength,
      rightElement = props.rightElement,
      selectedIndex = props.selectedIndex,
      ShareIcon = props.ShareIcon,
      visible = props.visible;

  var _useState = (0, _react.useState)(200),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      shareMenuOpen = _useState4[0],
      setShareMenuOpen = _useState4[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      black = _useTheme$theme$color.black,
      white = _useTheme$theme$color.white,
      _useTheme$theme$image = _useTheme$theme.imageGallery.footer,
      centerContainer = _useTheme$theme$image.centerContainer,
      container = _useTheme$theme$image.container,
      imageCountText = _useTheme$theme$image.imageCountText,
      innerContainer = _useTheme$theme$image.innerContainer,
      leftContainer = _useTheme$theme$image.leftContainer,
      rightContainer = _useTheme$theme$image.rightContainer;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var footerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value,
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(visible.value, [0, 1], [height, 0], _reactNativeReanimated.Extrapolate.CLAMP)
      }]
    };
  }, []);

  var share = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _photo$user, localImage;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setShareMenuOpen(true);
              _context.prev = 1;
              _context.next = 4;
              return (0, _native.saveFile)({
                fileName: (((_photo$user = photo.user) == null ? void 0 : _photo$user.name) || photo.user_id || 'ChatPhoto') + "-" + photo.messageId + "-" + selectedIndex + ".jpg",
                fromUrl: photo.uri
              });

            case 4:
              localImage = _context.sent;
              _context.next = 7;
              return (0, _native.shareImage)({
                type: 'image/jpeg',
                url: localImage
              });

            case 7:
              _context.next = 9;
              return (0, _native.deleteFile)({
                uri: localImage
              });

            case 9:
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 14:
              setShareMenuOpen(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function share() {
      return _ref.apply(this, arguments);
    };
  }();

  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    onLayout: function onLayout(event) {
      return setHeight(event.nativeEvent.layout.height);
    },
    pointerEvents: 'box-none',
    style: styles.wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, _react["default"].createElement(ReanimatedSafeAreaView, {
    style: [{
      backgroundColor: white
    }, container, footerStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.innerContainer, innerContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, leftElement ? leftElement({
    openGridView: openGridView,
    photo: photo,
    share: share,
    shareMenuOpen: shareMenuOpen
  }) : _react["default"].createElement(_reactNative.TouchableOpacity, {
    disabled: shareMenuOpen,
    onPress: share,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.leftContainer, leftContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, ShareIcon ? ShareIcon : _react["default"].createElement(_icons.Share, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 42
    }
  }))), centerElement ? centerElement({
    openGridView: openGridView,
    photo: photo,
    share: share,
    shareMenuOpen: shareMenuOpen
  }) : _react["default"].createElement(_reactNative.View, {
    style: [styles.centerContainer, centerContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.imageCountText, {
      color: black
    }, imageCountText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, t('{{ index }} of {{ photoLength }}', {
    index: photoLength - selectedIndex,
    photoLength: photoLength
  }))), rightElement ? rightElement({
    openGridView: openGridView,
    photo: photo,
    share: share,
    shareMenuOpen: shareMenuOpen
  }) : _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: openGridView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.rightContainer, rightContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, GridIcon ? GridIcon : _react["default"].createElement(_icons.Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 40
    }
  }))))));
};

exports.ImageGalleryFooter = ImageGalleryFooter;
ImageGalleryFooter.displayName = 'ImageGalleryFooter{imageGallery{footer}}';
//# sourceMappingURL=ImageGalleryFooter.js.map