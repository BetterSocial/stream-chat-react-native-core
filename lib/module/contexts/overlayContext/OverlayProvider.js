var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayProvider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _AttachmentPickerContext = require("../attachmentPickerContext/AttachmentPickerContext");

var _ImageGalleryContext = require("../imageGalleryContext/ImageGalleryContext");

var _MessageOverlayContext = require("../messageOverlayContext/MessageOverlayContext");

var _ThemeContext = require("../themeContext/ThemeContext");

var _TranslationContext = require("../translationContext/TranslationContext");

var _AttachmentPicker = require("../../components/AttachmentPicker/AttachmentPicker");

var _AttachmentPickerError = require("../../components/AttachmentPicker/components/AttachmentPickerError");

var _AttachmentPickerBottomSheetHandle = require("../../components/AttachmentPicker/components/AttachmentPickerBottomSheetHandle");

var _AttachmentPickerErrorImage = require("../../components/AttachmentPicker/components/AttachmentPickerErrorImage");

var _CameraSelectorIcon = require("../../components/AttachmentPicker/components/CameraSelectorIcon");

var _FileSelectorIcon = require("../../components/AttachmentPicker/components/FileSelectorIcon");

var _ImageOverlaySelectedComponent = require("../../components/AttachmentPicker/components/ImageOverlaySelectedComponent");

var _ImageSelectorIcon = require("../../components/AttachmentPicker/components/ImageSelectorIcon");

var _ImageGallery = require("../../components/ImageGallery/ImageGallery");

var _MessageOverlay = require("../../components/MessageOverlay/MessageOverlay");

var _useStreami18n = require("../../hooks/useStreami18n");

var _native = require("../../native");

var _OverlayContext = require("./OverlayContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/overlayContext/OverlayProvider.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OverlayProvider = function OverlayProvider(props) {
  var _props$AttachmentPick = props.AttachmentPickerBottomSheetHandle,
      AttachmentPickerBottomSheetHandle = _props$AttachmentPick === void 0 ? _AttachmentPickerBottomSheetHandle.AttachmentPickerBottomSheetHandle : _props$AttachmentPick,
      attachmentPickerBottomSheetHandleHeight = props.attachmentPickerBottomSheetHandleHeight,
      attachmentPickerBottomSheetHeight = props.attachmentPickerBottomSheetHeight,
      _props$AttachmentPick2 = props.AttachmentPickerError,
      AttachmentPickerError = _props$AttachmentPick2 === void 0 ? _AttachmentPickerError.AttachmentPickerError : _props$AttachmentPick2,
      attachmentPickerErrorButtonText = props.attachmentPickerErrorButtonText,
      _props$AttachmentPick3 = props.AttachmentPickerErrorImage,
      AttachmentPickerErrorImage = _props$AttachmentPick3 === void 0 ? _AttachmentPickerErrorImage.AttachmentPickerErrorImage : _props$AttachmentPick3,
      attachmentPickerErrorText = props.attachmentPickerErrorText,
      attachmentSelectionBarHeight = props.attachmentSelectionBarHeight,
      bottomInset = props.bottomInset,
      _props$CameraSelector = props.CameraSelectorIcon,
      CameraSelectorIcon = _props$CameraSelector === void 0 ? _CameraSelectorIcon.CameraSelectorIcon : _props$CameraSelector,
      children = props.children,
      _props$closePicker = props.closePicker,
      _closePicker = _props$closePicker === void 0 ? function (ref) {
    if (ref.current) {
      ref.current.close();
    }
  } : _props$closePicker,
      _props$FileSelectorIc = props.FileSelectorIcon,
      FileSelectorIcon = _props$FileSelectorIc === void 0 ? _FileSelectorIcon.FileSelectorIcon : _props$FileSelectorIc,
      i18nInstance = props.i18nInstance,
      imageGalleryCustomComponents = props.imageGalleryCustomComponents,
      imageGalleryGridHandleHeight = props.imageGalleryGridHandleHeight,
      imageGalleryGridSnapPoints = props.imageGalleryGridSnapPoints,
      _props$ImageOverlaySe = props.ImageOverlaySelectedComponent,
      ImageOverlaySelectedComponent = _props$ImageOverlaySe === void 0 ? _ImageOverlaySelectedComponent.ImageOverlaySelectedComponent : _props$ImageOverlaySe,
      _props$ImageSelectorI = props.ImageSelectorIcon,
      ImageSelectorIcon = _props$ImageSelectorI === void 0 ? _ImageSelectorIcon.ImageSelectorIcon : _props$ImageSelectorI,
      MessageActions = props.MessageActions,
      numberOfAttachmentImagesToLoadPerCall = props.numberOfAttachmentImagesToLoadPerCall,
      numberOfAttachmentPickerImageColumns = props.numberOfAttachmentPickerImageColumns,
      numberOfImageGalleryGridColumns = props.numberOfImageGalleryGridColumns,
      _props$openPicker = props.openPicker,
      _openPicker = _props$openPicker === void 0 ? function (ref) {
    if (ref.current) {
      ref.current.snapTo(0);
    } else {
      console.warn('bottom and top insets must be set for the image picker to work correctly');
    }
  } : _props$openPicker,
      topInset = props.topInset,
      translucentStatusBar = props.translucentStatusBar,
      OverlayReactionList = props.OverlayReactionList,
      OverlayReactions = props.OverlayReactions,
      value = props.value;

  var attachmentPickerProps = {
    AttachmentPickerBottomSheetHandle: AttachmentPickerBottomSheetHandle,
    attachmentPickerBottomSheetHandleHeight: attachmentPickerBottomSheetHandleHeight,
    attachmentPickerBottomSheetHeight: attachmentPickerBottomSheetHeight,
    AttachmentPickerError: AttachmentPickerError,
    attachmentPickerErrorButtonText: attachmentPickerErrorButtonText,
    AttachmentPickerErrorImage: AttachmentPickerErrorImage,
    attachmentPickerErrorText: attachmentPickerErrorText,
    attachmentSelectionBarHeight: attachmentSelectionBarHeight,
    ImageOverlaySelectedComponent: ImageOverlaySelectedComponent,
    numberOfAttachmentImagesToLoadPerCall: numberOfAttachmentImagesToLoadPerCall,
    numberOfAttachmentPickerImageColumns: numberOfAttachmentPickerImageColumns,
    translucentStatusBar: translucentStatusBar
  };
  var bottomSheetRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    t: function t(key) {
      return key;
    },
    tDateTimeParser: function tDateTimeParser(input) {
      return (0, _dayjs["default"])(input);
    }
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      translators = _useState2[0],
      setTranslators = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      blurType = _useState4[0],
      setBlurType = _useState4[1];

  var _useState5 = (0, _react.useState)((value == null ? void 0 : value.overlay) || 'none'),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      overlay = _useState6[0],
      setOverlay = _useState6[1];

  var overlayOpacity = (0, _reactNativeReanimated.useSharedValue)(0);

  var _Dimensions$get = _reactNative.Dimensions.get('screen'),
      height = _Dimensions$get.height,
      width = _Dimensions$get.width;

  var loadingTranslators = (0, _useStreami18n.useStreami18n)({
    i18nInstance: i18nInstance,
    setTranslators: setTranslators
  });
  (0, _react.useEffect)(function () {
    var backAction = function backAction() {
      if (overlay !== 'none') {
        setBlurType(undefined);
        setOverlay('none');
        return true;
      }

      return false;
    };

    var backHandler = _reactNative.BackHandler.addEventListener('hardwareBackPress', backAction);

    return function () {
      return backHandler.remove();
    };
  }, [overlay]);
  (0, _react.useEffect)(function () {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }

    (0, _reactNativeReanimated.cancelAnimation)(overlayOpacity);

    if (overlay !== 'none') {
      overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(1);
    } else {
      overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(0);
    }
  }, [overlay]);
  (0, _useStreami18n.useStreami18n)({
    i18nInstance: i18nInstance,
    setTranslators: setTranslators
  });
  var attachmentPickerContext = {
    attachmentPickerBottomSheetHeight: attachmentPickerBottomSheetHeight,
    attachmentSelectionBarHeight: attachmentSelectionBarHeight,
    bottomInset: bottomInset,
    CameraSelectorIcon: CameraSelectorIcon,
    closePicker: function closePicker() {
      return _closePicker(bottomSheetRef);
    },
    FileSelectorIcon: FileSelectorIcon,
    ImageSelectorIcon: ImageSelectorIcon,
    openPicker: function openPicker() {
      return _openPicker(bottomSheetRef);
    },
    topInset: topInset
  };
  var overlayStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: overlayOpacity.value
    };
  }, []);
  var overlayContext = {
    overlay: overlay,
    setBlurType: setBlurType,
    setOverlay: setOverlay,
    style: value == null ? void 0 : value.style,
    translucentStatusBar: translucentStatusBar
  };
  if (loadingTranslators) return null;
  return _react["default"].createElement(_TranslationContext.TranslationProvider, {
    value: translators,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, _react["default"].createElement(_OverlayContext.OverlayContext.Provider, {
    value: overlayContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, _react["default"].createElement(_MessageOverlayContext.MessageOverlayProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, _react["default"].createElement(_AttachmentPickerContext.AttachmentPickerProvider, {
    value: attachmentPickerContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  }, _react["default"].createElement(_ImageGalleryContext.ImageGalleryProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, children, _react["default"].createElement(_ThemeContext.ThemeProvider, {
    style: overlayContext.style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    pointerEvents: overlay === 'none' ? 'none' : 'auto',
    style: [_reactNative.StyleSheet.absoluteFill, overlayStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, _react["default"].createElement(_native.BlurView, {
    blurType: blurType,
    style: [_reactNative.StyleSheet.absoluteFill, {
      height: height,
      width: width
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  })), _react["default"].createElement(_MessageOverlay.MessageOverlay, {
    MessageActions: MessageActions,
    overlayOpacity: overlayOpacity,
    OverlayReactionList: OverlayReactionList,
    OverlayReactions: OverlayReactions,
    visible: overlay === 'message',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 17
    }
  }), _react["default"].createElement(_ImageGallery.ImageGallery, {
    imageGalleryCustomComponents: imageGalleryCustomComponents,
    imageGalleryGridHandleHeight: imageGalleryGridHandleHeight,
    imageGalleryGridSnapPoints: imageGalleryGridSnapPoints,
    numberOfImageGalleryGridColumns: numberOfImageGalleryGridColumns,
    overlayOpacity: overlayOpacity,
    visible: overlay === 'gallery',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }), _react["default"].createElement(_AttachmentPicker.AttachmentPicker, (0, _extends2["default"])({
    ref: bottomSheetRef
  }, attachmentPickerProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }))))))));
};

exports.OverlayProvider = OverlayProvider;
//# sourceMappingURL=OverlayProvider.js.map