var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = exports.ImageGallery = exports.IsSwiping = exports.HasPinched = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _bottomSheet = _interopRequireDefault(require("@gorhom/bottom-sheet"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _AnimatedGalleryImage = require("./components/AnimatedGalleryImage");

var _ImageGalleryFooter = require("./components/ImageGalleryFooter");

var _ImageGalleryHeader = require("./components/ImageGalleryHeader");

var _ImageGalleryOverlay = require("./components/ImageGalleryOverlay");

var _ImageGrid = require("./components/ImageGrid");

var _ImageGridHandle = require("./components/ImageGridHandle");

var _ImageGalleryContext = require("../../contexts/imageGalleryContext/ImageGalleryContext");

var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _native = require("../../native");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/ImageGallery.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isAndroid = _reactNative.Platform.OS === 'android';

var fullScreenHeight = _reactNative.Dimensions.get('screen').height;

var measuredScreenHeight = (0, _utils.vh)(100);
var screenWidth = (0, _utils.vw)(100);
var halfScreenWidth = (0, _utils.vw)(50);
var MARGIN = 32;
var HasPinched;
exports.HasPinched = HasPinched;

(function (HasPinched) {
  HasPinched[HasPinched["FALSE"] = 0] = "FALSE";
  HasPinched[HasPinched["TRUE"] = 1] = "TRUE";
})(HasPinched || (exports.HasPinched = HasPinched = {}));

var IsSwiping;
exports.IsSwiping = IsSwiping;

(function (IsSwiping) {
  IsSwiping[IsSwiping["UNDETERMINED"] = 0] = "UNDETERMINED";
  IsSwiping[IsSwiping["TRUE"] = 1] = "TRUE";
  IsSwiping[IsSwiping["FALSE"] = 2] = "FALSE";
})(IsSwiping || (exports.IsSwiping = IsSwiping = {}));

var ImageGallery = function ImageGallery(props) {
  var _StatusBar$currentHei, _photos$selectedIndex;

  var imageGalleryCustomComponents = props.imageGalleryCustomComponents,
      imageGalleryGridHandleHeight = props.imageGalleryGridHandleHeight,
      imageGalleryGridSnapPoints = props.imageGalleryGridSnapPoints,
      numberOfImageGalleryGridColumns = props.numberOfImageGalleryGridColumns,
      overlayOpacity = props.overlayOpacity,
      visible = props.visible;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      white_snow = _useTheme$theme.colors.white_snow,
      backgroundColor = _useTheme$theme.imageGallery.backgroundColor;

  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      overlay = _useOverlayContext.overlay,
      setBlurType = _useOverlayContext.setBlurType,
      setOverlay = _useOverlayContext.setOverlay,
      translucentStatusBar = _useOverlayContext.translucentStatusBar;

  var _useImageGalleryConte = (0, _ImageGalleryContext.useImageGalleryContext)(),
      image = _useImageGalleryConte.image,
      images = _useImageGalleryConte.images,
      setImage = _useImageGalleryConte.setImage;

  var statusBarHeight = (_StatusBar$currentHei = _reactNative.StatusBar.currentHeight) != null ? _StatusBar$currentHei : 0;
  var bottomBarHeight = fullScreenHeight - measuredScreenHeight - statusBarHeight;
  var androidScreenHeightAdjustment = translucentStatusBar ? bottomBarHeight === statusBarHeight || bottomBarHeight < 0 ? 0 : statusBarHeight : bottomBarHeight === statusBarHeight || bottomBarHeight < 0 ? -statusBarHeight : 0;
  var screenHeight = isAndroid ? _reactNative.Dimensions.get('window').height + androidScreenHeightAdjustment : (0, _utils.vh)(100);
  var halfScreenHeight = screenHeight / 2;
  var quarterScreenHeight = screenHeight / 4;

  var snapPoints = _react["default"].useMemo(function () {
    return [0, screenHeight * 9 / 10];
  }, []);

  var bottomSheetRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentBottomSheetIndex = _useState2[0],
      setCurrentBottomSheetIndex = _useState2[1];

  var animatedBottomSheetIndex = (0, _reactNativeReanimated.useSharedValue)(0);
  var showScreen = (0, _reactNativeReanimated.useSharedValue)(0);

  var fadeScreen = function fadeScreen(show) {
    'worklet';

    showScreen.value = (0, _reactNativeReanimated.withTiming)(show ? 1 : 0, {
      duration: 250,
      easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
    });
  };

  (0, _react.useEffect)(function () {
    if (visible) {
      _reactNative.Keyboard.dismiss();
    }

    fadeScreen(visible);
  }, [visible]);

  var _useState3 = (0, _react.useState)(screenHeight),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      currentImageHeight = _useState4[0],
      setCurrentImageHeight = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selectedIndex = _useState6[0],
      setSelectedIndex = _useState6[1];

  var index = (0, _reactNativeReanimated.useSharedValue)(0);
  var headerFooterVisible = (0, _reactNativeReanimated.useSharedValue)(1);
  var hasHitBottomScale = (0, _reactNativeReanimated.useSharedValue)(1);
  var hasHitTopScale = (0, _reactNativeReanimated.useSharedValue)(0);
  var doubleTapRef = (0, _react.useRef)(null);
  var panRef = (0, _react.useRef)(null);
  var pinchRef = (0, _react.useRef)(null);
  var singleTapRef = (0, _react.useRef)(null);
  var offsetX = (0, _reactNativeReanimated.useSharedValue)(0);
  var offsetY = (0, _reactNativeReanimated.useSharedValue)(0);
  var translateX = (0, _reactNativeReanimated.useSharedValue)(0);
  var translateY = (0, _reactNativeReanimated.useSharedValue)(0);
  var offsetScale = (0, _reactNativeReanimated.useSharedValue)(1);
  var scale = (0, _reactNativeReanimated.useSharedValue)(1);
  var translationX = (0, _reactNativeReanimated.useSharedValue)(0);
  var originX = (0, _reactNativeReanimated.useSharedValue)(0);
  var originY = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalX = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalY = (0, _reactNativeReanimated.useSharedValue)(0);
  var oldFocalX = (0, _reactNativeReanimated.useSharedValue)(0);
  var oldFocalY = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalOffsetX = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalOffsetY = (0, _reactNativeReanimated.useSharedValue)(0);
  var adjustedFocalX = (0, _reactNativeReanimated.useSharedValue)(0);
  var adjustedFocalY = (0, _reactNativeReanimated.useSharedValue)(0);
  var tapX = (0, _reactNativeReanimated.useSharedValue)(0);
  var tapY = (0, _reactNativeReanimated.useSharedValue)(0);
  var numberOfPinchFingers = (0, _reactNativeReanimated.useSharedValue)(0);
  var isSwiping = (0, _reactNativeReanimated.useSharedValue)(0);
  var isPinch = (0, _reactNativeReanimated.useSharedValue)(false);
  var hasPinched = (0, _reactNativeReanimated.useSharedValue)(0);

  var resetTouchValues = function resetTouchValues() {
    'worklet';

    focalX.value = 0;
    focalY.value = 0;
    oldFocalX.value = 0;
    oldFocalY.value = 0;
    originX.value = 0;
    originY.value = 0;
    focalOffsetX.value = 0;
    focalOffsetY.value = 0;
    numberOfPinchFingers.value = 0;
    isPinch.value = false;
    isSwiping.value = IsSwiping.UNDETERMINED;
  };

  var resetMovementValues = function resetMovementValues() {
    'worklet';

    translateX.value = 0;
    translateY.value = 0;
    scale.value = 1;
    offsetScale.value = 1;
  };

  var resetVisibleValues = function resetVisibleValues() {
    'worklet';

    resetTouchValues();
    resetMovementValues();
    headerFooterVisible.value = 1;
    offsetX.value = 0;
    offsetY.value = 0;
    adjustedFocalX.value = 0;
    adjustedFocalY.value = 0;
    tapX.value = 0;
    tapY.value = 0;
  };

  (0, _react.useEffect)(function () {
    if (!visible) {
      resetVisibleValues();
    }
  }, [visible]);
  var photos = images.reduce(function (acc, cur) {
    var _cur$attachments;

    var attachmentImages = ((_cur$attachments = cur.attachments) == null ? void 0 : _cur$attachments.filter(function (attachment) {
      return attachment.type === 'image' && !attachment.title_link && !attachment.og_scrape_url && (attachment.image_url || attachment.thumb_url);
    })) || [];
    var attachmentPhotos = attachmentImages.map(function (attachmentImage) {
      return {
        created_at: cur.created_at,
        id: "photoId-" + cur.id + "-" + (attachmentImage.image_url || attachmentImage.thumb_url),
        messageId: cur.id,
        uri: attachmentImage.image_url || attachmentImage.thumb_url || '',
        user: cur.user,
        user_id: cur.user_id
      };
    });
    return [].concat((0, _toConsumableArray2["default"])(acc), (0, _toConsumableArray2["default"])(attachmentPhotos));
  }, []);
  var photoLength = photos.length;
  (0, _react.useEffect)(function () {
    var updatePosition = function updatePosition(newIndex) {
      'worklet';

      if (newIndex > -1) {
        index.value = newIndex;
        translationX.value = -(screenWidth + MARGIN) * newIndex;
        (0, _reactNativeReanimated.runOnJS)(setSelectedIndex)(newIndex);
      }
    };

    var newIndex = photos.findIndex(function (photo) {
      return photo.messageId === (image == null ? void 0 : image.messageId) && photo.uri === (image == null ? void 0 : image.url);
    });
    (0, _reactNativeReanimated.runOnUI)(updatePosition)(newIndex);
  }, [image, photoLength]);
  var uriForCurrentImage = (_photos$selectedIndex = photos[selectedIndex]) == null ? void 0 : _photos$selectedIndex.uri;
  (0, _react.useEffect)(function () {
    var _photos$index$value;

    setCurrentImageHeight(screenHeight);

    if ((_photos$index$value = photos[index.value]) != null && _photos$index$value.uri) {
      _reactNative.Image.getSize(photos[index.value].uri, function (width, height) {
        var imageHeight = Math.floor(height * (screenWidth / width));
        setCurrentImageHeight(imageHeight > screenHeight ? screenHeight : imageHeight);
      });
    }
  }, [uriForCurrentImage]);
  var onPan = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      if (evt.numberOfPointers === 1 && !isPinch.value) {
        if (isAndroid && hasPinched.value === HasPinched.TRUE) {
          hasPinched.value = HasPinched.FALSE;
          isSwiping.value = IsSwiping.FALSE;
          offsetX.value = translateX.value + evt.translationX;
          offsetY.value = translateY.value - evt.translationY;
        }

        if (isSwiping.value === IsSwiping.UNDETERMINED) {
          var maxXYRatio = isAndroid ? 1 : 0.25;

          if (Math.abs(evt.translationX / evt.translationY) > maxXYRatio && (Math.abs(-halfScreenWidth * (scale.value - 1) - offsetX.value) < 3 || Math.abs(halfScreenWidth * (scale.value - 1) - offsetX.value) < 3)) {
            isSwiping.value = IsSwiping.TRUE;
          }

          if (Math.abs(evt.translationY) > 25) {
            isSwiping.value = IsSwiping.FALSE;
          }
        }

        var localEvtScale = scale.value / offsetScale.value;
        translateX.value = scale.value !== offsetScale.value ? offsetX.value * localEvtScale - evt.translationX : offsetX.value - evt.translationX;
        translateY.value = isSwiping.value !== IsSwiping.TRUE ? scale.value !== offsetScale.value ? offsetY.value * localEvtScale + evt.translationY : offsetY.value + evt.translationY : translateY.value;
        scale.value = currentImageHeight * offsetScale.value < screenHeight && translateY.value > 0 ? offsetScale.value * (1 - 1 / 3 * (translateY.value / screenHeight)) : currentImageHeight * offsetScale.value > screenHeight && translateY.value > currentImageHeight / 2 * offsetScale.value - halfScreenHeight ? offsetScale.value * (1 - 1 / 3 * ((translateY.value - (currentImageHeight / 2 * offsetScale.value - halfScreenHeight)) / screenHeight)) : scale.value;
        overlayOpacity.value = localEvtScale;
      }
    },
    onFinish: function onFinish(evt) {
      if (!isPinch.value && evt.numberOfPointers < 2) {
        var finalXPosition = evt.translationX - evt.velocityX * 0.3;
        var finalYPosition = evt.translationY + evt.velocityY * 0.1;

        if (index.value < photoLength - 1 && Math.abs(halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value < 0 && finalXPosition < -halfScreenWidth && isSwiping.value === IsSwiping.TRUE) {
          (0, _reactNativeReanimated.cancelAnimation)(translationX);
          translationX.value = (0, _reactNativeReanimated.withTiming)(-(screenWidth + MARGIN) * (index.value + 1), {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          }, function () {
            resetMovementValues();
            index.value = index.value + 1;
            (0, _reactNativeReanimated.runOnJS)(setSelectedIndex)(index.value);
          });
        } else if (index.value > 0 && Math.abs(-halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value > 0 && finalXPosition > halfScreenWidth && isSwiping.value === IsSwiping.TRUE) {
          (0, _reactNativeReanimated.cancelAnimation)(translationX);
          translationX.value = (0, _reactNativeReanimated.withTiming)(-(screenWidth + MARGIN) * (index.value - 1), {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          }, function () {
            resetMovementValues();
            index.value = index.value - 1;
            (0, _reactNativeReanimated.runOnJS)(setSelectedIndex)(index.value);
          });
        }

        translateX.value = scale.value < 1 ? (0, _reactNativeReanimated.withTiming)(0) : translateX.value > halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(halfScreenWidth * (scale.value - 1), {
          duration: 200
        }) : translateX.value < -halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(-halfScreenWidth * (scale.value - 1), {
          duration: 200
        }) : (0, _reactNativeReanimated.withDecay)({
          clamp: [-halfScreenWidth * (scale.value - 1), halfScreenWidth * (scale.value - 1)],
          deceleration: 0.99,
          velocity: -evt.velocityX
        });
        translateY.value = currentImageHeight * scale.value < screenHeight ? (0, _reactNativeReanimated.withTiming)(0) : translateY.value > currentImageHeight / 2 * scale.value - halfScreenHeight ? (0, _reactNativeReanimated.withTiming)(currentImageHeight / 2 * scale.value - halfScreenHeight) : translateY.value < -currentImageHeight / 2 * scale.value + halfScreenHeight ? (0, _reactNativeReanimated.withTiming)(-currentImageHeight / 2 * scale.value + halfScreenHeight) : (0, _reactNativeReanimated.withDecay)({
          clamp: [-currentImageHeight / 2 * scale.value + halfScreenHeight, currentImageHeight / 2 * scale.value - halfScreenHeight],
          deceleration: 0.99,
          velocity: evt.velocityY
        });
        resetTouchValues();
        scale.value = scale.value !== offsetScale.value ? (0, _reactNativeReanimated.withTiming)(offsetScale.value) : offsetScale.value;

        if (finalYPosition > halfScreenHeight && offsetY.value + 8 >= currentImageHeight / 2 * scale.value - halfScreenHeight && isSwiping.value !== IsSwiping.TRUE && translateY.value !== 0 && !(Math.abs(halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value < 0 && finalXPosition < -halfScreenWidth) && !(Math.abs(-halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value > 0 && finalXPosition > halfScreenWidth)) {
          (0, _reactNativeReanimated.cancelAnimation)(translateX);
          (0, _reactNativeReanimated.cancelAnimation)(translateY);
          (0, _reactNativeReanimated.cancelAnimation)(scale);
          overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(0, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          }, function () {
            showScreen.value = 0;
            (0, _reactNativeReanimated.runOnJS)(setOverlay)('none');
            (0, _reactNativeReanimated.runOnJS)(setBlurType)(undefined);
          });
          scale.value = (0, _reactNativeReanimated.withTiming)(0.6, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateY.value = evt.velocityY > 1000 ? (0, _reactNativeReanimated.withDecay)({
            velocity: evt.velocityY
          }) : (0, _reactNativeReanimated.withTiming)(halfScreenHeight + currentImageHeight / 2 * scale.value, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateX.value = (0, _reactNativeReanimated.withDecay)({
            velocity: -evt.velocityX
          });
        }
      }
    },
    onStart: function onStart() {
      if (!isPinch.value) {
        (0, _reactNativeReanimated.cancelAnimation)(translateX);
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        (0, _reactNativeReanimated.cancelAnimation)(scale);
        offsetX.value = translateX.value;
        offsetY.value = translateY.value;
      }

      hasPinched.value = HasPinched.FALSE;
    }
  }, [currentImageHeight, photoLength]);
  var onPinch = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      if (!isPinch.value && isAndroid) {
        hasPinched.value = HasPinched.TRUE;
        (0, _reactNativeReanimated.cancelAnimation)(translateX);
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        (0, _reactNativeReanimated.cancelAnimation)(scale);
        isSwiping.value = IsSwiping.UNDETERMINED;
        numberOfPinchFingers.value = evt.numberOfPointers;
        offsetX.value = translateX.value;
        offsetY.value = translateY.value;
        adjustedFocalX.value = evt.focalX - (halfScreenWidth - offsetX.value);
        adjustedFocalY.value = evt.focalY - (halfScreenHeight + offsetY.value);
        originX.value = adjustedFocalX.value;
        originY.value = adjustedFocalY.value;
        offsetScale.value = scale.value;
      }

      isPinch.value = true;
      scale.value = clamp(offsetScale.value * evt.scale, 1, 8);
      var localEvtScale = scale.value / offsetScale.value;

      if (scale.value !== 8 && scale.value !== 1) {
        hasHitTopScale.value = 0;
        hasHitBottomScale.value = 0;
      } else if (scale.value === 8 && hasHitTopScale.value === 0) {
        hasHitTopScale.value = 1;
        (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactLight');
      } else if (scale.value === 1 && hasHitBottomScale.value === 0) {
        hasHitBottomScale.value = 1;
        (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactLight');
      }

      adjustedFocalX.value = evt.focalX - (halfScreenWidth - offsetX.value);
      adjustedFocalY.value = evt.focalY - (halfScreenHeight + offsetY.value);

      if (numberOfPinchFingers.value !== evt.numberOfPointers) {
        numberOfPinchFingers.value = evt.numberOfPointers;

        if (evt.numberOfPointers === 1) {
          focalOffsetX.value = oldFocalX.value - adjustedFocalX.value;
          focalOffsetY.value = oldFocalY.value - adjustedFocalY.value;
        } else if (numberOfPinchFingers.value > 1) {
          originX.value = originX.value - (oldFocalX.value / localEvtScale - adjustedFocalX.value / localEvtScale);
          originY.value = originY.value - (oldFocalY.value / localEvtScale - adjustedFocalY.value / localEvtScale);
        }
      }

      if (numberOfPinchFingers.value === 1) {
        oldFocalX.value = adjustedFocalX.value + focalOffsetX.value;
        oldFocalY.value = adjustedFocalY.value + focalOffsetY.value;
        translateX.value = offsetX.value - oldFocalX.value + localEvtScale * originX.value;
        translateY.value = offsetY.value + oldFocalY.value - localEvtScale * originY.value;
      } else if (numberOfPinchFingers.value > 1) {
        oldFocalX.value = adjustedFocalX.value;
        oldFocalY.value = adjustedFocalY.value;
        translateX.value = offsetX.value - adjustedFocalX.value + localEvtScale * originX.value;
        translateY.value = offsetY.value + adjustedFocalY.value - localEvtScale * originY.value;
      }
    },
    onFinish: function onFinish() {
      if (isPinch.value) {
        translateX.value = scale.value < 1 ? (0, _reactNativeReanimated.withTiming)(0) : translateX.value > halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(halfScreenWidth * (scale.value - 1)) : translateX.value < -halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(-halfScreenWidth * (scale.value - 1)) : translateX.value;
        translateY.value = currentImageHeight * scale.value < screenHeight ? (0, _reactNativeReanimated.withTiming)(0) : translateY.value > currentImageHeight / 2 * scale.value - screenHeight / 2 ? (0, _reactNativeReanimated.withTiming)(currentImageHeight / 2 * scale.value - screenHeight / 2) : translateY.value < -currentImageHeight / 2 * scale.value + screenHeight / 2 ? (0, _reactNativeReanimated.withTiming)(-currentImageHeight / 2 * scale.value + screenHeight / 2) : translateY.value;
        offsetScale.value = scale.value < 1 ? 1 : scale.value;
        scale.value = scale.value < 1 ? (0, _reactNativeReanimated.withTiming)(1) : scale.value;
        resetTouchValues();
      }
    },
    onStart: function onStart(evt) {
      if (!isAndroid) {
        (0, _reactNativeReanimated.cancelAnimation)(translateX);
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        (0, _reactNativeReanimated.cancelAnimation)(scale);
        isPinch.value = true;
        isSwiping.value = IsSwiping.UNDETERMINED;
        numberOfPinchFingers.value = evt.numberOfPointers;
        offsetX.value = translateX.value;
        offsetY.value = translateY.value;
        adjustedFocalX.value = evt.focalX - (halfScreenWidth - offsetX.value);
        adjustedFocalY.value = evt.focalY - (halfScreenHeight + offsetY.value);
        originX.value = adjustedFocalX.value;
        originY.value = adjustedFocalY.value;
        offsetScale.value = scale.value;
      }

      hasPinched.value = HasPinched.FALSE;
    }
  }, [currentImageHeight]);
  var onSingleTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive() {
      (0, _reactNativeReanimated.cancelAnimation)(headerFooterVisible);
      headerFooterVisible.value = headerFooterVisible.value > 0 ? (0, _reactNativeReanimated.withTiming)(0) : (0, _reactNativeReanimated.withTiming)(1);
    }
  });
  var onDoubleTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      if (Math.abs(tapX.value - evt.absoluteX) < 64 && Math.abs(tapY.value - evt.absoluteY) < 64) {
        if (offsetScale.value === 1 && offsetX.value === 0 && offsetY.value === 0) {
          offsetScale.value = 2;
          scale.value = (0, _reactNativeReanimated.withTiming)(2, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateX.value = (0, _reactNativeReanimated.withTiming)(evt.absoluteX - halfScreenWidth, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });

          if (currentImageHeight * 2 > screenHeight) {
            var translateYTopBottom = evt.absoluteY > halfScreenHeight ? -(currentImageHeight * 2 - screenHeight) / 2 : (currentImageHeight * 2 - screenHeight) / 2;
            translateY.value = (0, _reactNativeReanimated.withTiming)(translateYTopBottom, {
              duration: 200,
              easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
            });
          }
        } else {
          offsetScale.value = 1;
          scale.value = (0, _reactNativeReanimated.withTiming)(1, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          offsetX.value = 0;
          offsetY.value = 0;
          translateX.value = (0, _reactNativeReanimated.withTiming)(0, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateY.value = (0, _reactNativeReanimated.withTiming)(0, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });

          if (headerFooterVisible.value !== 0) {
            (0, _reactNativeReanimated.cancelAnimation)(headerFooterVisible);
            headerFooterVisible.value = (0, _reactNativeReanimated.withTiming)(0);
          }
        }
      }
    },
    onStart: function onStart(evt) {
      tapX.value = evt.absoluteX;
      tapY.value = evt.absoluteY;
    }
  });
  var headerFooterOpacity = (0, _reactNativeReanimated.useDerivedValue)(function () {
    return currentImageHeight * scale.value < screenHeight && translateY.value > 0 ? 1 - translateY.value / quarterScreenHeight : currentImageHeight * scale.value > screenHeight && translateY.value > currentImageHeight / 2 * scale.value - halfScreenHeight ? 1 - (translateY.value - (currentImageHeight / 2 * scale.value - halfScreenHeight)) / quarterScreenHeight : 1;
  }, [currentImageHeight]);
  var pagerStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        scaleX: -1
      }, {
        translateX: translationX.value
      }]
    };
  }, [visible]);
  var containerBackground = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      backgroundColor: backgroundColor || white_snow,
      opacity: headerFooterOpacity.value
    };
  }, [headerFooterOpacity]);
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 0.01, 1], [0, 1, 1]),
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [screenHeight, 0])
      }]
    };
  }, []);

  var closeGridView = function closeGridView() {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  };

  var openGridView = function openGridView() {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapTo(1);
    }
  };

  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    pointerEvents: visible ? 'auto' : 'none',
    style: [_reactNative.StyleSheet.absoluteFillObject, showScreenStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [_reactNative.StyleSheet.absoluteFillObject, containerBackground],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    minPointers: 1,
    numberOfTaps: 1,
    onGestureEvent: onSingleTap,
    ref: singleTapRef,
    waitFor: [panRef, pinchRef, doubleTapRef],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: _reactNative.StyleSheet.absoluteFillObject,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    maxDeltaX: 8,
    maxDeltaY: 8,
    maxDist: 8,
    minPointers: 1,
    numberOfTaps: 2,
    onGestureEvent: onDoubleTap,
    ref: doubleTapRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: _reactNative.StyleSheet.absoluteFillObject,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNativeGestureHandler.PinchGestureHandler, {
    onGestureEvent: onPinch,
    ref: pinchRef,
    simultaneousHandlers: [panRef],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 15
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: _reactNative.StyleSheet.absoluteFill,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083,
      columnNumber: 17
    }
  }, _react["default"].createElement(_reactNativeGestureHandler.PanGestureHandler, {
    enabled: overlay === 'gallery',
    maxPointers: isAndroid ? undefined : 1,
    minDist: 10,
    onGestureEvent: onPan,
    ref: panRef,
    simultaneousHandlers: [pinchRef],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 19
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: _reactNative.StyleSheet.absoluteFill,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092,
      columnNumber: 21
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [styles.animatedContainer, pagerStyle, {
      transform: [{
        scaleX: -1
      }, {
        translateX: translationX.value
      }]
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 23
    }
  }, photos.map(function (photo, i) {
    return _react["default"].createElement(_AnimatedGalleryImage.AnimatedGalleryImage, {
      index: i,
      key: photo.uri + "-" + i,
      offsetScale: offsetScale,
      photo: photo,
      previous: selectedIndex > i,
      scale: scale,
      screenHeight: screenHeight,
      selected: selectedIndex === i,
      shouldRender: Math.abs(selectedIndex - i) < 4,
      style: {
        height: screenHeight * 8,
        marginRight: MARGIN,
        width: screenWidth * 8
      },
      translateX: translateX,
      translateY: translateY,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1108,
        columnNumber: 27
      }
    });
  })))))))))), _react["default"].createElement(_ImageGalleryHeader.ImageGalleryHeader, (0, _extends2["default"])({
    opacity: headerFooterOpacity,
    photo: photos[selectedIndex],
    visible: headerFooterVisible
  }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136,
      columnNumber: 7
    }
  })), _react["default"].createElement(_ImageGalleryFooter.ImageGalleryFooter, (0, _extends2["default"])({
    opacity: headerFooterOpacity,
    openGridView: openGridView,
    photo: photos[selectedIndex],
    photoLength: photoLength,
    selectedIndex: selectedIndex,
    visible: headerFooterVisible
  }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.footer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 7
    }
  })), _react["default"].createElement(_ImageGalleryOverlay.ImageGalleryOverlay, {
    animatedBottomSheetIndex: animatedBottomSheetIndex,
    closeGridView: closeGridView,
    currentBottomSheetIndex: currentBottomSheetIndex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 7
    }
  }), _react["default"].createElement(_bottomSheet["default"], {
    animatedIndex: animatedBottomSheetIndex,
    containerHeight: fullScreenHeight,
    handleComponent: function handleComponent() {
      return _react["default"].createElement(_ImageGridHandle.ImageGridHandle, (0, _extends2["default"])({
        closeGridView: closeGridView
      }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.gridHandle, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1160,
          columnNumber: 11
        }
      }));
    },
    handleHeight: imageGalleryGridHandleHeight != null ? imageGalleryGridHandleHeight : 40,
    index: 0,
    onChange: function onChange(index) {
      return setCurrentBottomSheetIndex(index);
    },
    ref: bottomSheetRef,
    snapPoints: imageGalleryGridSnapPoints || snapPoints,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 7
    }
  }, _react["default"].createElement(_ImageGrid.ImageGrid, (0, _extends2["default"])({
    closeGridView: closeGridView,
    numberOfImageGalleryGridColumns: numberOfImageGalleryGridColumns,
    photos: photos,
    resetVisibleValues: resetVisibleValues,
    setImage: setImage
  }, imageGalleryCustomComponents == null ? void 0 : imageGalleryCustomComponents.grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 9
    }
  }))));
};

exports.ImageGallery = ImageGallery;

var clamp = function clamp(value, lowerBound, upperBound) {
  'worklet';

  return Math.min(Math.max(lowerBound, value), upperBound);
};

exports.clamp = clamp;

var styles = _reactNative.StyleSheet.create({
  animatedContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});

ImageGallery.displayName = 'ImageGallery{imageGallery}';
//# sourceMappingURL=ImageGallery.js.map