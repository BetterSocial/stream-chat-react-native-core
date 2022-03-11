var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUploadPreview = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _UploadProgressIndicator = require("./UploadProgressIndicator");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _Close = require("../../icons/Close");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/ImageUploadPreview.tsx";

var IMAGE_PREVIEW_SIZE = 100;

var styles = _reactNative.StyleSheet.create({
  dismiss: {
    borderRadius: 24,
    position: 'absolute',
    right: 8,
    top: 8
  },
  flatList: {
    paddingBottom: 12
  },
  itemContainer: {
    flexDirection: 'row',
    height: IMAGE_PREVIEW_SIZE,
    marginLeft: 8
  },
  upload: {
    borderRadius: 10,
    height: IMAGE_PREVIEW_SIZE,
    width: IMAGE_PREVIEW_SIZE
  }
});

var ImageUploadPreviewWithContext = function ImageUploadPreviewWithContext(props) {
  var imageUploads = props.imageUploads,
      removeImage = props.removeImage,
      uploadImage = props.uploadImage;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      overlay_dark = _useTheme$theme$color.overlay_dark,
      white = _useTheme$theme$color.white,
      _useTheme$theme$messa = _useTheme$theme.messageInput.imageUploadPreview,
      dismiss = _useTheme$theme$messa.dismiss,
      flatList = _useTheme$theme$messa.flatList,
      itemContainer = _useTheme$theme$messa.itemContainer,
      upload = _useTheme$theme$messa.upload;

  var renderItem = function renderItem(_ref) {
    var index = _ref.index,
        item = _ref.item;
    return _react["default"].createElement(_reactNative.View, {
      style: [styles.itemContainer, index === imageUploads.length - 1 ? {
        marginRight: 8
      } : {}, itemContainer],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }
    }, _react["default"].createElement(_UploadProgressIndicator.UploadProgressIndicator, {
      action: function action() {
        uploadImage({
          newImage: item
        });
      },
      active: item.state !== _utils.FileState.UPLOADED && item.state !== _utils.FileState.FINISHED,
      style: styles.upload,
      type: item.state === _utils.FileState.UPLOADING ? _utils.ProgressIndicatorTypes.IN_PROGRESS : item.state === _utils.FileState.UPLOAD_FAILED ? _utils.ProgressIndicatorTypes.RETRY : undefined,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }
    }, _react["default"].createElement(_reactNative.Image, {
      resizeMode: "cover",
      source: {
        uri: item.file.uri || item.url
      },
      style: [styles.upload, upload],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    })), _react["default"].createElement(_reactNative.TouchableOpacity, {
      onPress: function onPress() {
        removeImage(item.id);
      },
      style: [styles.dismiss, {
        backgroundColor: overlay_dark
      }, dismiss],
      testID: "remove-image-upload-preview",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }
    }, _react["default"].createElement(_Close.Close, {
      pathFill: white,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    })));
  };

  return imageUploads.length > 0 ? _react["default"].createElement(_reactNative.FlatList, {
    data: imageUploads,
    getItemLayout: function getItemLayout(_, index) {
      return {
        index: index,
        length: IMAGE_PREVIEW_SIZE + 8,
        offset: (IMAGE_PREVIEW_SIZE + 8) * index
      };
    },
    horizontal: true,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    renderItem: renderItem,
    style: [styles.flatList, flatList],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }) : null;
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevImageUploads = prevProps.imageUploads;
  var nextImageUploads = nextProps.imageUploads;
  return prevImageUploads.length === nextImageUploads.length && prevImageUploads.every(function (prevImageUpload, index) {
    return prevImageUpload.state === nextImageUploads[index].state;
  });
};

var MemoizedImageUploadPreviewWithContext = _react["default"].memo(ImageUploadPreviewWithContext, areEqual);

var ImageUploadPreview = function ImageUploadPreview(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      imageUploads = _useMessageInputConte.imageUploads,
      removeImage = _useMessageInputConte.removeImage,
      uploadImage = _useMessageInputConte.uploadImage;

  return _react["default"].createElement(MemoizedImageUploadPreviewWithContext, (0, _extends2["default"])({
    imageUploads: imageUploads,
    removeImage: removeImage,
    uploadImage: uploadImage
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }));
};

exports.ImageUploadPreview = ImageUploadPreview;
ImageUploadPreview.displayName = 'ImageUploadPreview{messageInput{imageUploadPreview}}';
//# sourceMappingURL=ImageUploadPreview.js.map