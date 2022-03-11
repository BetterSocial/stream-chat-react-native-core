var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ImageGalleryContext = require("../../contexts/imageGalleryContext/ImageGalleryContext");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _utils = require("../../utils/utils");

var _excluded = ["height", "uri"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Gallery.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GalleryImage = function GalleryImage(props) {
  var height = props.height,
      uri = props.uri,
      rest = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  return _react["default"].createElement(_reactNative.Image, (0, _extends2["default"])({}, rest, {
    onError: function onError() {
      return setError(true);
    },
    source: {
      uri: uri.includes('&h=%2A') ? error ? uri : uri.replace('h=%2A', "h=" + _reactNative.PixelRatio.getPixelSizeForLayoutSize(Number(height))) : uri
    },
    testID: "image-attachment-single",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }));
};

var MemoizedGalleryImage = _react["default"].memo(GalleryImage, function (prevProps, nextProps) {
  return prevProps.height === nextProps.height && (0, _utils.getUrlWithoutParams)(prevProps.uri) === (0, _utils.getUrlWithoutParams)(nextProps.uri);
});

var styles = _reactNative.StyleSheet.create({
  flex: {
    flex: 1
  },
  galleryContainer: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  imageContainer: {
    flex: 1,
    padding: 1
  },
  moreImagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1
  },
  moreImagesText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700'
  }
});

var GalleryWithContext = function GalleryWithContext(props) {
  var _groupStyles$;

  var additionalTouchableProps = props.additionalTouchableProps,
      alignment = props.alignment,
      groupStyles = props.groupStyles,
      hasThreadReplies = props.hasThreadReplies,
      images = props.images,
      legacyImageViewerSwipeBehaviour = props.legacyImageViewerSwipeBehaviour,
      message = props.message,
      messageId = props.messageId,
      messageTextProp = props.messageText,
      _onLongPress = props.onLongPress,
      _onPress = props.onPress,
      _onPressIn = props.onPressIn,
      preventPress = props.preventPress,
      setBlurType = props.setBlurType,
      setImage = props.setImage,
      setImages = props.setImages,
      setOverlay = props.setOverlay,
      threadList = props.threadList;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      overlay = _useTheme$theme.colors.overlay,
      blurType = _useTheme$theme.imageGallery.blurType,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.gallery,
      galleryContainer = _useTheme$theme$messa.galleryContainer,
      galleryItemColumn = _useTheme$theme$messa.galleryItemColumn,
      halfSize = _useTheme$theme$messa.halfSize,
      image = _useTheme$theme$messa.image,
      imageContainer = _useTheme$theme$messa.imageContainer,
      moreImagesContainer = _useTheme$theme$messa.moreImagesContainer,
      moreImagesText = _useTheme$theme$messa.moreImagesText,
      size = _useTheme$theme$messa.size,
      width = _useTheme$theme$messa.width;

  if (!(images != null && images.length)) return null;
  var galleryImages = images.slice(0, 4).reduce(function (returnArray, currentImage, index) {
    var attachmentUrl = currentImage.image_url || currentImage.thumb_url;

    if (attachmentUrl) {
      var url = (0, _utils.makeImageCompatibleUrl)(attachmentUrl);

      if (images.length <= 2) {
        returnArray[0] = [].concat((0, _toConsumableArray2["default"])(returnArray[0] || []), [{
          height: size || 200,
          url: url
        }]);
      } else if (images.length === 3) {
        if (index === 0) {
          returnArray[0] = [{
            height: size || 200,
            url: url
          }];
        } else {
          returnArray[1] = [].concat((0, _toConsumableArray2["default"])(returnArray[1] || []), [{
            height: halfSize || 100,
            url: url
          }]);
        }
      } else {
        returnArray[index % 2] = [].concat((0, _toConsumableArray2["default"])(returnArray[index % 2] || []), [{
          height: halfSize || 100,
          url: url
        }]);
      }
    }

    return returnArray;
  }, []);
  var groupStyle = alignment + "_" + (groupStyles == null ? void 0 : (_groupStyles$ = groupStyles[0]) == null ? void 0 : _groupStyles$.toLowerCase == null ? void 0 : _groupStyles$.toLowerCase());
  var messageText = messageTextProp || (message == null ? void 0 : message.text);
  return _react["default"].createElement(_reactNative.View, {
    style: [styles.galleryContainer, {
      width: width
    }, galleryContainer],
    testID: "image-multiple-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, galleryImages.map(function (column, colIndex) {
    return _react["default"].createElement(_reactNative.View, {
      key: "gallery-item-column-" + colIndex,
      style: [styles.flex, {
        flexDirection: images.length === 2 ? 'row' : 'column'
      }, galleryItemColumn],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }
    }, column.map(function (_ref, rowIndex) {
      var height = _ref.height,
          url = _ref.url;

      var defaultOnPress = function defaultOnPress() {
        if (!legacyImageViewerSwipeBehaviour && message) {
          setImages([message]);
          setImage({
            messageId: messageId || message.id,
            url: url
          });
          setBlurType(blurType);
          setOverlay('gallery');
        } else if (legacyImageViewerSwipeBehaviour) {
          setImage({
            messageId: messageId || (message == null ? void 0 : message.id),
            url: url
          });
          setBlurType(blurType);
          setOverlay('gallery');
        }
      };

      return _react["default"].createElement(_reactNative.TouchableOpacity, (0, _extends2["default"])({
        activeOpacity: 0.8,
        disabled: preventPress,
        key: "gallery-item-" + messageId + "/" + colIndex + "/" + rowIndex + "/" + images.length,
        onLongPress: function onLongPress(event) {
          if (_onLongPress) {
            _onLongPress({
              emitter: 'gallery',
              event: event
            });
          }
        },
        onPress: function onPress(event) {
          if (_onPress) {
            _onPress({
              defaultHandler: defaultOnPress,
              emitter: 'gallery',
              event: event
            });
          }
        },
        onPressIn: function onPressIn(event) {
          if (_onPressIn) {
            _onPressIn({
              defaultHandler: defaultOnPress,
              emitter: 'gallery',
              event: event
            });
          }
        },
        style: [styles.imageContainer, {
          height: height
        }, imageContainer],
        testID: "image-multiple"
      }, additionalTouchableProps, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }
      }), _react["default"].createElement(MemoizedGalleryImage, {
        height: height,
        resizeMode: "cover",
        style: [styles.flex, {
          borderBottomLeftRadius: (images.length === 1 || images.length === 2 && rowIndex === 0 || images.length === 3 && colIndex === 0 && rowIndex === 0 || images.length === 4 && colIndex === 0 && rowIndex === 1) && !messageText && (groupStyle !== 'left_bottom' && groupStyle !== 'left_single' || hasThreadReplies && !threadList) ? 14 : 0,
          borderBottomRightRadius: (images.length === 1 || colIndex === 1 && (images.length === 2 || rowIndex === 1)) && !messageText && (groupStyle !== 'right_bottom' && groupStyle !== 'right_single' || hasThreadReplies && !threadList) ? 14 : 0,
          borderTopLeftRadius: colIndex === 0 && rowIndex === 0 ? 14 : 0,
          borderTopRightRadius: (colIndex === 1 || images.length === 1) && rowIndex === 0 || images.length === 3 && colIndex === 0 && rowIndex === 1 || images.length === 2 && rowIndex === 1 ? 14 : 0
        }, image],
        uri: url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 17
        }
      }), colIndex === 1 && rowIndex === 1 && images.length > 3 ? _react["default"].createElement(_reactNative.View, {
        style: [_reactNative.StyleSheet.absoluteFillObject, styles.moreImagesContainer, {
          backgroundColor: overlay
        }, moreImagesContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 19
        }
      }, _react["default"].createElement(_reactNative.Text, {
        style: [styles.moreImagesText, moreImagesText],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 21
        }
      }, "+" + (images.length - 3))) : null);
    }));
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevGroupStyles = prevProps.groupStyles,
      prevHasThreadReplies = prevProps.hasThreadReplies,
      prevImages = prevProps.images,
      prevMessageText = prevProps.messageText;
  var nextGroupStyles = nextProps.groupStyles,
      nextHasThreadReplies = nextProps.hasThreadReplies,
      nextImages = nextProps.images,
      nextMessageText = nextProps.messageText;
  var messageTextEqual = prevMessageText === nextMessageText;
  if (!messageTextEqual) return false;
  var groupStylesEqual = prevGroupStyles.length === nextGroupStyles.length && prevGroupStyles[0] === nextGroupStyles[0];
  if (!groupStylesEqual) return false;
  var hasThreadRepliesEqual = prevHasThreadReplies === nextHasThreadReplies;
  if (!hasThreadRepliesEqual) return false;
  var imagesEqual = prevImages.length === nextImages.length && prevImages.every(function (image, index) {
    return (0, _utils.getUrlWithoutParams)(image.image_url) === (0, _utils.getUrlWithoutParams)(nextImages[index].image_url) && (0, _utils.getUrlWithoutParams)(image.thumb_url) === (0, _utils.getUrlWithoutParams)(nextImages[index].thumb_url);
  });
  if (!imagesEqual) return false;
  return true;
};

var MemoizedGallery = _react["default"].memo(GalleryWithContext, areEqual);

var Gallery = function Gallery(props) {
  var propAdditionalTouchableProps = props.additionalTouchableProps,
      propAlignment = props.alignment,
      propGroupStyles = props.groupStyles,
      hasThreadReplies = props.hasThreadReplies,
      propImages = props.images,
      messageId = props.messageId,
      messageText = props.messageText,
      propOnLongPress = props.onLongPress,
      propOnPress = props.onPress,
      propOnPressIn = props.onPressIn,
      propPreventPress = props.preventPress,
      propSetBlurType = props.setBlurType,
      propSetImage = props.setImage,
      propSetOverlay = props.setOverlay,
      propThreadList = props.threadList;

  var _useImageGalleryConte = (0, _ImageGalleryContext.useImageGalleryContext)(),
      contextSetImage = _useImageGalleryConte.setImage,
      setImages = _useImageGalleryConte.setImages;

  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      contextAlignment = _useMessageContext.alignment,
      contextGroupStyles = _useMessageContext.groupStyles,
      contextImages = _useMessageContext.images,
      message = _useMessageContext.message,
      contextOnLongPress = _useMessageContext.onLongPress,
      contextOnPress = _useMessageContext.onPress,
      contextOnPressIn = _useMessageContext.onPressIn,
      contextPreventPress = _useMessageContext.preventPress,
      contextThreadList = _useMessageContext.threadList;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      contextAdditionalTouchableProps = _useMessagesContext.additionalTouchableProps,
      legacyImageViewerSwipeBehaviour = _useMessagesContext.legacyImageViewerSwipeBehaviour;

  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      contextSetBlurType = _useOverlayContext.setBlurType,
      contextSetOverlay = _useOverlayContext.setOverlay;

  var images = propImages || contextImages;
  if (!images.length) return null;
  var additionalTouchableProps = propAdditionalTouchableProps || contextAdditionalTouchableProps;
  var alignment = propAlignment || contextAlignment;
  var groupStyles = propGroupStyles || contextGroupStyles;
  var onLongPress = propOnLongPress || contextOnLongPress;
  var onPressIn = propOnPressIn || contextOnPressIn;
  var onPress = propOnPress || contextOnPress;
  var preventPress = typeof propPreventPress === 'boolean' ? propPreventPress : contextPreventPress;
  var setBlurType = propSetBlurType || contextSetBlurType;
  var setImage = propSetImage || contextSetImage;
  var setOverlay = propSetOverlay || contextSetOverlay;
  var threadList = propThreadList || contextThreadList;
  return _react["default"].createElement(MemoizedGallery, {
    additionalTouchableProps: additionalTouchableProps,
    alignment: alignment,
    groupStyles: groupStyles,
    hasThreadReplies: hasThreadReplies || !!(message != null && message.reply_count),
    images: images,
    legacyImageViewerSwipeBehaviour: legacyImageViewerSwipeBehaviour,
    message: message,
    messageId: messageId || (message == null ? void 0 : message.id),
    messageText: messageText || (message == null ? void 0 : message.text),
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress,
    setBlurType: setBlurType,
    setImage: setImage,
    setImages: setImages,
    setOverlay: setOverlay,
    threadList: threadList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 5
    }
  });
};

exports.Gallery = Gallery;
Gallery.displayName = 'Gallery{messageSimple{gallery}}';
//# sourceMappingURL=Gallery.js.map