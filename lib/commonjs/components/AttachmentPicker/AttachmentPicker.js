var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPicker = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _bottomSheet = _interopRequireWildcard(require("@gorhom/bottom-sheet"));

var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _native = require("../../native");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/AttachmentPicker.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  container: {
    flexGrow: 1
  },
  overlay: {
    alignItems: 'flex-end',
    flex: 1
  }
});

var screenHeight = (0, _utils.vh)(100);

var fullScreenHeight = _reactNative.Dimensions.get('screen').height;

var AttachmentImage = function AttachmentImage(props) {
  var ImageOverlaySelectedComponent = props.ImageOverlaySelectedComponent,
      numberOfAttachmentPickerImageColumns = props.numberOfAttachmentPickerImageColumns,
      onPress = props.onPress,
      selected = props.selected,
      uri = props.uri;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$attac = _useTheme$theme.attachmentPicker,
      image = _useTheme$theme$attac.image,
      imageOverlay = _useTheme$theme$attac.imageOverlay,
      overlay = _useTheme$theme.colors.overlay;

  var size = (0, _utils.vw)(100) / (numberOfAttachmentPickerImageColumns || 3) - 2;
  return _react["default"].createElement(_bottomSheet.TouchableOpacity, {
    onPress: onPress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.ImageBackground, {
    source: {
      uri: uri
    },
    style: [{
      height: size,
      margin: 1,
      width: size
    }, image],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, selected && _react["default"].createElement(_reactNative.View, {
    style: [styles.overlay, {
      backgroundColor: overlay
    }, imageOverlay],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, _react["default"].createElement(ImageOverlaySelectedComponent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }))));
};

var renderImage = function renderImage(_ref) {
  var item = _ref.item;
  var asset = item.asset,
      ImageOverlaySelectedComponent = item.ImageOverlaySelectedComponent,
      maxNumberOfFiles = item.maxNumberOfFiles,
      numberOfAttachmentPickerImageColumns = item.numberOfAttachmentPickerImageColumns,
      selected = item.selected,
      setSelectedImages = item.setSelectedImages;

  var onPress = function onPress() {
    if (selected) {
      setSelectedImages(function (images) {
        return images.filter(function (image) {
          return image.uri !== asset.uri;
        });
      });
    } else {
      setSelectedImages(function (images) {
        if (images.length >= maxNumberOfFiles) {
          return images;
        }

        return [].concat((0, _toConsumableArray2["default"])(images), [asset]);
      });
    }
  };

  return _react["default"].createElement(AttachmentImage, {
    ImageOverlaySelectedComponent: ImageOverlaySelectedComponent,
    numberOfAttachmentPickerImageColumns: numberOfAttachmentPickerImageColumns,
    onPress: onPress,
    selected: selected,
    uri: asset.uri,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  });
};

var AttachmentPicker = _react["default"].forwardRef(function (props, ref) {
  var _StatusBar$currentHei, _StatusBar$currentHei2;

  var AttachmentPickerBottomSheetHandle = props.AttachmentPickerBottomSheetHandle,
      attachmentPickerBottomSheetHandleHeight = props.attachmentPickerBottomSheetHandleHeight,
      attachmentPickerBottomSheetHeight = props.attachmentPickerBottomSheetHeight,
      AttachmentPickerError = props.AttachmentPickerError,
      attachmentPickerErrorButtonText = props.attachmentPickerErrorButtonText,
      AttachmentPickerErrorImage = props.AttachmentPickerErrorImage,
      attachmentPickerErrorText = props.attachmentPickerErrorText,
      ImageOverlaySelectedComponent = props.ImageOverlaySelectedComponent,
      numberOfAttachmentImagesToLoadPerCall = props.numberOfAttachmentImagesToLoadPerCall,
      numberOfAttachmentPickerImageColumns = props.numberOfAttachmentPickerImageColumns,
      translucentStatusBar = props.translucentStatusBar;

  var _useTheme2 = (0, _ThemeContext.useTheme)(),
      _useTheme2$theme = _useTheme2.theme,
      bottomSheetContentContainer = _useTheme2$theme.attachmentPicker.bottomSheetContentContainer,
      white = _useTheme2$theme.colors.white;

  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
      closePicker = _useAttachmentPickerC.closePicker,
      maxNumberOfFiles = _useAttachmentPickerC.maxNumberOfFiles,
      selectedImages = _useAttachmentPickerC.selectedImages,
      selectedPicker = _useAttachmentPickerC.selectedPicker,
      setSelectedImages = _useAttachmentPickerC.setSelectedImages,
      setSelectedPicker = _useAttachmentPickerC.setSelectedPicker,
      topInset = _useAttachmentPickerC.topInset;

  var _useState = (0, _react.useState)(-1),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      endCursor = _useState4[0],
      setEndCursor = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      photoError = _useState6[0],
      setPhotoError = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      hasNextPage = _useState8[0],
      setHasNextPage = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      loadingPhotos = _useState10[0],
      setLoadingPhotos = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      photos = _useState12[0],
      setPhotos = _useState12[1];

  var hideAttachmentPicker = function hideAttachmentPicker() {
    setSelectedPicker(undefined);

    if (ref != null && ref.current) {
      ref.current.close();
    }
  };

  var getMorePhotos = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var results;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(hasNextPage && !loadingPhotos && currentIndex > -1 && selectedPicker === 'images')) {
                _context.next = 16;
                break;
              }

              setLoadingPhotos(true);
              _context.prev = 2;
              _context.next = 5;
              return (0, _native.getPhotos)({
                after: endCursor,
                first: numberOfAttachmentImagesToLoadPerCall != null ? numberOfAttachmentImagesToLoadPerCall : 60
              });

            case 5:
              results = _context.sent;

              if (endCursor) {
                setPhotos([].concat((0, _toConsumableArray2["default"])(photos), (0, _toConsumableArray2["default"])(results.assets)));
              } else {
                setPhotos(results.assets);
              }

              setEndCursor(results.endCursor);
              setHasNextPage(results.hasNextPage || false);
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              setPhotoError(true);

            case 15:
              setLoadingPhotos(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));

    return function getMorePhotos() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var backAction = function backAction() {
      if (selectedPicker) {
        setSelectedPicker(undefined);
        closePicker();
        return true;
      }

      return false;
    };

    var backHandler = _reactNative.BackHandler.addEventListener('hardwareBackPress', backAction);

    return function () {
      return backHandler.remove();
    };
  }, [selectedPicker]);
  (0, _react.useEffect)(function () {
    if (_reactNative.Platform.OS === 'ios') {
      _reactNative.Keyboard.addListener('keyboardWillShow', hideAttachmentPicker);
    } else {
      _reactNative.Keyboard.addListener('keyboardDidShow', hideAttachmentPicker);
    }

    return function () {
      if (_reactNative.Platform.OS === 'ios') {
        _reactNative.Keyboard.removeListener('keyboardWillShow', hideAttachmentPicker);
      } else {
        _reactNative.Keyboard.removeListener('keyboardDidShow', hideAttachmentPicker);
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (currentIndex < 0) {
      setSelectedPicker(undefined);

      if (!loadingPhotos) {
        setEndCursor(undefined);
        setHasNextPage(true);
      }
    }
  }, [currentIndex]);
  (0, _react.useEffect)(function () {
    if (selectedPicker === 'images' && endCursor === undefined && currentIndex > -1 && !loadingPhotos) {
      setPhotoError(false);
      getMorePhotos();
    }
  }, [currentIndex, selectedPicker]);
  var selectedPhotos = photos.map(function (asset) {
    return {
      asset: asset,
      ImageOverlaySelectedComponent: ImageOverlaySelectedComponent,
      maxNumberOfFiles: maxNumberOfFiles,
      numberOfAttachmentPickerImageColumns: numberOfAttachmentPickerImageColumns,
      selected: selectedImages.some(function (image) {
        return image.uri === asset.uri;
      }),
      setSelectedImages: setSelectedImages
    };
  });
  var handleHeight = attachmentPickerBottomSheetHandleHeight || 20;
  var statusBarHeight = (_StatusBar$currentHei = _reactNative.StatusBar.currentHeight) != null ? _StatusBar$currentHei : 0;
  var bottomBarHeight = fullScreenHeight - screenHeight - statusBarHeight;
  var androidBottomBarHeightAdjustment = _reactNative.Platform.OS === 'android' ? bottomBarHeight === statusBarHeight ? translucentStatusBar ? 0 : (_StatusBar$currentHei2 = _reactNative.StatusBar.currentHeight) != null ? _StatusBar$currentHei2 : 0 : translucentStatusBar ? bottomBarHeight > statusBarHeight ? -bottomBarHeight + statusBarHeight : bottomBarHeight > 0 ? -statusBarHeight : 0 : bottomBarHeight > 0 ? 0 : statusBarHeight : 0;
  var snapPoints = (0, _react.useMemo)(function () {
    return [attachmentPickerBottomSheetHeight != null ? attachmentPickerBottomSheetHeight : 308 + (fullScreenHeight - screenHeight + androidBottomBarHeightAdjustment) - handleHeight, fullScreenHeight - topInset - handleHeight];
  }, [androidBottomBarHeightAdjustment, attachmentPickerBottomSheetHeight, fullScreenHeight, handleHeight, screenHeight, topInset]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_bottomSheet["default"], {
    containerHeight: fullScreenHeight,
    handleComponent: photoError ? null : AttachmentPickerBottomSheetHandle,
    handleHeight: handleHeight,
    index: -1,
    onChange: function onChange(index) {
      return setCurrentIndex(index);
    },
    ref: ref,
    snapPoints: snapPoints,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 9
    }
  }, _react["default"].createElement(_bottomSheet.BottomSheetFlatList, {
    contentContainerStyle: [styles.container, {
      backgroundColor: white
    }, bottomSheetContentContainer, {
      opacity: photoError ? 0 : 1
    }],
    data: selectedPhotos,
    keyExtractor: function keyExtractor(item) {
      return item.asset.uri;
    },
    numColumns: numberOfAttachmentPickerImageColumns != null ? numberOfAttachmentPickerImageColumns : 3,
    onEndReached: getMorePhotos,
    renderItem: renderImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 11
    }
  })), selectedPicker === 'images' && photoError && _react["default"].createElement(AttachmentPickerError, {
    attachmentPickerBottomSheetHeight: attachmentPickerBottomSheetHeight,
    attachmentPickerErrorButtonText: attachmentPickerErrorButtonText,
    AttachmentPickerErrorImage: AttachmentPickerErrorImage,
    attachmentPickerErrorText: attachmentPickerErrorText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 11
    }
  }));
});

exports.AttachmentPicker = AttachmentPicker;
AttachmentPicker.displayName = 'AttachmentPicker';
//# sourceMappingURL=AttachmentPicker.js.map