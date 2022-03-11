var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUploadPreview = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _UploadProgressIndicator = require("./UploadProgressIndicator");

var _FileAttachment = require("../Attachment/FileAttachment");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _Close = require("../../icons/Close");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/FileUploadPreview.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FILE_PREVIEW_HEIGHT = 60;

var styles = _reactNative.StyleSheet.create({
  dismiss: {
    borderRadius: 24,
    height: 24,
    position: 'absolute',
    right: 14,
    top: 4,
    width: 24
  },
  fileContainer: {
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: FILE_PREVIEW_HEIGHT,
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 8
  },
  fileContentContainer: {
    flexDirection: 'row'
  },
  filenameText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  fileSizeText: {
    fontSize: 12,
    paddingLeft: 10
  },
  fileTextContainer: {
    height: '100%',
    justifyContent: 'space-around'
  },
  flatList: {
    marginBottom: 12,
    maxHeight: FILE_PREVIEW_HEIGHT * 2.5 + 16
  },
  overlay: {
    borderRadius: 12,
    marginLeft: 8,
    marginRight: 8
  }
});

var FileUploadPreviewWithContext = function FileUploadPreviewWithContext(props) {
  var FileAttachmentIcon = props.FileAttachmentIcon,
      fileUploads = props.fileUploads,
      removeFile = props.removeFile,
      uploadFile = props.uploadFile;
  var flatListRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      flatListWidth = _useState2[0],
      setFlatListWidth = _useState2[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      black = _useTheme$theme$color.black,
      grey = _useTheme$theme$color.grey,
      grey_whisper = _useTheme$theme$color.grey_whisper,
      overlay_dark = _useTheme$theme$color.overlay_dark,
      _useTheme$theme$messa = _useTheme$theme.messageInput.fileUploadPreview,
      dismiss = _useTheme$theme$messa.dismiss,
      fileContainer = _useTheme$theme$messa.fileContainer,
      fileContentContainer = _useTheme$theme$messa.fileContentContainer,
      filenameText = _useTheme$theme$messa.filenameText,
      fileSizeText = _useTheme$theme$messa.fileSizeText,
      fileTextContainer = _useTheme$theme$messa.fileTextContainer,
      flatList = _useTheme$theme$messa.flatList;

  var renderItem = function renderItem(_ref) {
    var index = _ref.index,
        item = _ref.item;
    var indicatorType = item.state === _utils.FileState.UPLOADING ? _utils.ProgressIndicatorTypes.IN_PROGRESS : item.state === _utils.FileState.UPLOAD_FAILED ? _utils.ProgressIndicatorTypes.RETRY : undefined;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_UploadProgressIndicator.UploadProgressIndicator, {
      action: function action() {
        uploadFile({
          newFile: item
        });
      },
      active: item.state !== _utils.FileState.UPLOADED && item.state !== _utils.FileState.FINISHED,
      style: styles.overlay,
      type: indicatorType,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, _react["default"].createElement(_reactNative.View, {
      style: [styles.fileContainer, index === fileUploads.length - 1 ? {
        marginBottom: 0
      } : {}, {
        borderColor: grey_whisper,
        width: flatListWidth - 16
      }, fileContainer],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }, _react["default"].createElement(_reactNative.View, {
      style: [styles.fileContentContainer, fileContentContainer],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }, _react["default"].createElement(FileAttachmentIcon, {
      mimeType: item.file.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }), _react["default"].createElement(_reactNative.View, {
      style: [styles.fileTextContainer, fileTextContainer],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 15
      }
    }, _react["default"].createElement(_reactNative.Text, {
      numberOfLines: 1,
      style: [styles.filenameText, {
        color: black,
        width: flatListWidth - 16 - 40 - 24 - 24
      }, filenameText],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }, item.file.name || ''), _react["default"].createElement(_reactNative.Text, {
      style: [styles.fileSizeText, {
        color: grey
      }, fileSizeText],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }
    }, (0, _FileAttachment.getFileSizeDisplayText)(item.file.size)))))), _react["default"].createElement(_reactNative.TouchableOpacity, {
      onPress: function onPress() {
        removeFile(item.id);
      },
      style: [styles.dismiss, {
        backgroundColor: overlay_dark
      }, dismiss],
      testID: "remove-file-upload-preview",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }
    }, _react["default"].createElement(_Close.Close, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    })));
  };

  var fileUploadsLength = fileUploads.length;
  (0, _react.useEffect)(function () {
    if (fileUploadsLength && flatListRef.current) {
      setTimeout(function () {
        var _flatListRef$current;

        return (_flatListRef$current = flatListRef.current) == null ? void 0 : _flatListRef$current.scrollToEnd();
      }, 1);
    }
  }, [fileUploadsLength]);
  return fileUploadsLength ? _react["default"].createElement(_reactNative.FlatList, {
    data: fileUploads,
    getItemLayout: function getItemLayout(_, index) {
      return {
        index: index,
        length: FILE_PREVIEW_HEIGHT + 8,
        offset: (FILE_PREVIEW_HEIGHT + 8) * index
      };
    },
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    onLayout: function onLayout(_ref2) {
      var width = _ref2.nativeEvent.layout.width;
      setFlatListWidth(width);
    },
    ref: flatListRef,
    renderItem: renderItem,
    style: [styles.flatList, flatList],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }) : null;
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevFileUploads = prevProps.fileUploads;
  var nextFileUploads = nextProps.fileUploads;
  return prevFileUploads.length === nextFileUploads.length && prevFileUploads.every(function (prevFileUpload, index) {
    return prevFileUpload.state === nextFileUploads[index].state;
  });
};

var MemoizedFileUploadPreview = _react["default"].memo(FileUploadPreviewWithContext, areEqual);

var FileUploadPreview = function FileUploadPreview(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      fileUploads = _useMessageInputConte.fileUploads,
      removeFile = _useMessageInputConte.removeFile,
      uploadFile = _useMessageInputConte.uploadFile;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      FileAttachmentIcon = _useMessagesContext.FileAttachmentIcon;

  return _react["default"].createElement(MemoizedFileUploadPreview, (0, _extends2["default"])({
    FileAttachmentIcon: FileAttachmentIcon,
    fileUploads: fileUploads,
    removeFile: removeFile,
    uploadFile: uploadFile
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 5
    }
  }));
};

exports.FileUploadPreview = FileUploadPreview;
FileUploadPreview.displayName = 'FileUploadPreview{messageInput{fileUploadPreview}}';
//# sourceMappingURL=FileUploadPreview.js.map