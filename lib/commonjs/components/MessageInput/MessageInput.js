var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _AttachmentSelectionBar = require("../AttachmentPicker/components/AttachmentSelectionBar");

var _AutoCompleteInput = require("../AutoCompleteInput/AutoCompleteInput");

var _SuggestionsList = require("../AutoCompleteInput/SuggestionsList");

var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _icons = require("../../icons");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/MessageInput.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var styles = _reactNative.StyleSheet.create({
  attachmentSeparator: {
    borderBottomWidth: 1,
    marginBottom: 10
  },
  autoCompleteInputContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  composerContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  container: {
    borderTopWidth: 1,
    padding: 10
  },
  editingBoxHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  editingBoxHeaderTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  giphyContainer: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    height: 24,
    marginRight: 8,
    paddingHorizontal: 8
  },
  giphyText: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  inputBoxContainer: {
    borderRadius: 20,
    borderWidth: 1,
    flex: 1
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingRight: 10
  },
  replyContainer: {
    paddingBottom: 12,
    paddingHorizontal: 8
  },
  sendButtonContainer: {
    paddingBottom: 10,
    paddingLeft: 10
  },
  suggestionsListContainer: {
    borderRadius: 10,
    elevation: 3,
    left: 8,
    position: 'absolute',
    right: 8,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.15
  }
});

var MessageInputWithContext = function MessageInputWithContext(props) {
  var additionalTextInputProps = props.additionalTextInputProps,
      asyncIds = props.asyncIds,
      asyncUploads = props.asyncUploads,
      clearEditingState = props.clearEditingState,
      clearQuotedMessageState = props.clearQuotedMessageState,
      closeAttachmentPicker = props.closeAttachmentPicker,
      componentType = props.componentType,
      disabled = props.disabled,
      editing = props.editing,
      FileUploadPreview = props.FileUploadPreview,
      fileUploads = props.fileUploads,
      giphyActive = props.giphyActive,
      ImageUploadPreview = props.ImageUploadPreview,
      imageUploads = props.imageUploads,
      Input = props.Input,
      inputBoxRef = props.inputBoxRef,
      InputButtons = props.InputButtons,
      isValidMessage = props.isValidMessage,
      maxNumberOfFiles = props.maxNumberOfFiles,
      members = props.members,
      mentionedUsers = props.mentionedUsers,
      numberOfUploads = props.numberOfUploads,
      quotedMessage = props.quotedMessage,
      quotedRepliesEnabled = props.quotedRepliesEnabled,
      removeImage = props.removeImage,
      Reply = props.Reply,
      resetInput = props.resetInput,
      SendButton = props.SendButton,
      sending = props.sending,
      sendMessageAsync = props.sendMessageAsync,
      setGiphyActive = props.setGiphyActive,
      setShowMoreOptions = props.setShowMoreOptions,
      ShowThreadMessageInChannelButton = props.ShowThreadMessageInChannelButton,
      suggestions = props.suggestions,
      suggestionsTitle = props.suggestionsTitle,
      t = props.t,
      thread = props.thread,
      threadList = props.threadList,
      uploadNewImage = props.uploadNewImage,
      watchers = props.watchers;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      black = _useTheme$theme$color.black,
      border = _useTheme$theme$color.border,
      grey = _useTheme$theme$color.grey,
      grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
      grey_whisper = _useTheme$theme$color.grey_whisper,
      white = _useTheme$theme$color.white,
      white_smoke = _useTheme$theme$color.white_smoke,
      _useTheme$theme$messa = _useTheme$theme.messageInput,
      attachmentSelectionBar = _useTheme$theme$messa.attachmentSelectionBar,
      autoCompleteInputContainer = _useTheme$theme$messa.autoCompleteInputContainer,
      composerContainer = _useTheme$theme$messa.composerContainer,
      container = _useTheme$theme$messa.container,
      editingBoxHeader = _useTheme$theme$messa.editingBoxHeader,
      editingBoxHeaderTitle = _useTheme$theme$messa.editingBoxHeaderTitle,
      giphyContainer = _useTheme$theme$messa.giphyContainer,
      giphyText = _useTheme$theme$messa.giphyText,
      inputBoxContainer = _useTheme$theme$messa.inputBoxContainer,
      optionsContainer = _useTheme$theme$messa.optionsContainer,
      replyContainer = _useTheme$theme$messa.replyContainer,
      sendButtonContainer = _useTheme$theme$messa.sendButtonContainer,
      suggestionsListContainer = _useTheme$theme$messa.suggestionsListContainer;

  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
      attachmentPickerBottomSheetHeight = _useAttachmentPickerC.attachmentPickerBottomSheetHeight,
      attachmentSelectionBarHeight = _useAttachmentPickerC.attachmentSelectionBarHeight,
      bottomInset = _useAttachmentPickerC.bottomInset,
      selectedImages = _useAttachmentPickerC.selectedImages,
      selectedPicker = _useAttachmentPickerC.selectedPicker,
      setMaxNumberOfFiles = _useAttachmentPickerC.setMaxNumberOfFiles,
      setSelectedImages = _useAttachmentPickerC.setSelectedImages;

  (0, _react.useEffect)(function () {
    setMaxNumberOfFiles(maxNumberOfFiles != null ? maxNumberOfFiles : 10);
    return closeAttachmentPicker;
  }, []);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      hasResetImages = _useState4[0],
      setHasResetImages = _useState4[1];

  var selectedImagesLength = hasResetImages ? selectedImages.length : 0;
  var imageUploadsLength = hasResetImages ? imageUploads.length : 0;
  var imagesForInput = !!thread && !!threadList || !thread && !threadList;
  (0, _react.useEffect)(function () {
    setSelectedImages([]);

    if (imageUploads.length) {
      imageUploads.forEach(function (image) {
        return removeImage(image.id);
      });
    }

    return function () {
      return setSelectedImages([]);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (hasResetImages === false && imageUploadsLength === 0 && selectedImagesLength === 0) {
      setHasResetImages(true);
    }
  }, [imageUploadsLength, selectedImagesLength]);
  (0, _react.useEffect)(function () {
    if (imagesForInput === false && imageUploads.length) {
      imageUploads.forEach(function (image) {
        return removeImage(image.id);
      });
    }
  }, [imagesForInput]);
  (0, _react.useEffect)(function () {
    if (imagesForInput) {
      if (selectedImagesLength > imageUploadsLength) {
        var imagesToUpload = selectedImages.filter(function (selectedImage) {
          var uploadedImage = imageUploads.find(function (imageUpload) {
            return imageUpload.file.uri === selectedImage.uri || imageUpload.url === selectedImage.uri;
          });
          return !uploadedImage;
        });
        imagesToUpload.forEach(function (image) {
          return uploadNewImage(image);
        });
      } else if (selectedImagesLength < imageUploadsLength) {
        var imagesToRemove = imageUploads.filter(function (imageUpload) {
          return !selectedImages.find(function (selectedImage) {
            return selectedImage.uri === imageUpload.file.uri || selectedImage.uri === imageUpload.url;
          });
        });
        imagesToRemove.forEach(function (image) {
          return removeImage(image.id);
        });
      }
    }
  }, [selectedImagesLength]);
  (0, _react.useEffect)(function () {
    if (imagesForInput) {
      if (imageUploadsLength < selectedImagesLength) {
        var updatedSelectedImages = selectedImages.filter(function (selectedImage) {
          var uploadedImage = imageUploads.find(function (imageUpload) {
            return imageUpload.file.uri === selectedImage.uri || imageUpload.url === selectedImage.uri;
          });
          return uploadedImage;
        });
        setSelectedImages(updatedSelectedImages);
      } else if (imageUploadsLength > selectedImagesLength) {
        setSelectedImages(imageUploads.map(function (imageUpload) {
          return {
            height: imageUpload.file.height,
            source: imageUpload.file.source,
            uri: imageUpload.url || imageUpload.file.uri,
            width: imageUpload.file.width
          };
        }).filter(Boolean));
      }
    }
  }, [imageUploadsLength]);
  var editingExists = !!editing;
  (0, _react.useEffect)(function () {
    if (editing && inputBoxRef.current) {
      inputBoxRef.current.focus();
    }

    if (!editing && (giphyActive || fileUploads.length > 0 || mentionedUsers.length > 0 || imageUploads.length > 0 || numberOfUploads > 0)) {
      resetInput();
    }
  }, [editingExists]);
  var asyncIdsString = asyncIds.join();
  var asyncUploadsString = Object.values(asyncUploads).map(function (_ref) {
    var state = _ref.state,
        url = _ref.url;
    return "" + state + url;
  }).join();
  (0, _react.useEffect)(function () {
    if (Object.keys(asyncUploads).length) {
      sending.current = true;
      asyncIds.forEach(function (id) {
        return sendMessageAsync(id);
      });
      sending.current = false;
    }
  }, [asyncIdsString, asyncUploadsString, sendMessageAsync]);

  var getMembers = function getMembers() {
    var result = [];

    if (members && Object.values(members).length) {
      Object.values(members).forEach(function (member) {
        if (member.user) {
          result.push(member.user);
        }
      });
    }

    return result;
  };

  var getUsers = function getUsers() {
    var users = [].concat((0, _toConsumableArray2["default"])(getMembers()), (0, _toConsumableArray2["default"])(getWatchers()));
    var uniqueUsers = {};

    for (var _iterator = _createForOfIteratorHelperLoose(users), _step; !(_step = _iterator()).done;) {
      var _user = _step.value;

      if (_user && !uniqueUsers[_user.id]) {
        uniqueUsers[_user.id] = _user;
      }
    }

    var usersArray = Object.values(uniqueUsers);
    return usersArray;
  };

  var getWatchers = function getWatchers() {
    var result = [];

    if (watchers && Object.values(watchers).length) {
      result.push.apply(result, (0, _toConsumableArray2["default"])(Object.values(watchers)));
    }

    return result;
  };

  var additionalTextInputContainerProps = (0, _extends2["default"])({
    editable: disabled ? false : undefined
  }, additionalTextInputProps);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactNative.View, {
    onLayout: function onLayout(_ref2) {
      var newHeight = _ref2.nativeEvent.layout.height;
      return setHeight(newHeight);
    },
    style: [styles.container, {
      backgroundColor: white,
      borderColor: border
    }, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 7
    }
  }, (editing || quotedMessage) && _react["default"].createElement(_reactNative.View, {
    style: [styles.editingBoxHeader, editingBoxHeader],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 11
    }
  }, editing ? _react["default"].createElement(_icons.Edit, {
    pathFill: grey_gainsboro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 15
    }
  }) : _react["default"].createElement(_icons.CurveLineLeftUp, {
    pathFill: grey_gainsboro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 15
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.editingBoxHeaderTitle, {
      color: black
    }, editingBoxHeaderTitle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 13
    }
  }, editing ? t('Editing Message') : t('Reply to Message')), _react["default"].createElement(_reactNative.TouchableOpacity, {
    disabled: disabled,
    onPress: function onPress() {
      resetInput();

      if (editing) {
        clearEditingState();
      }

      if (quotedMessage) {
        clearQuotedMessageState();
      }

      if (inputBoxRef.current) {
        inputBoxRef.current.blur();
      }
    },
    testID: "close-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 13
    }
  }, _react["default"].createElement(_icons.CircleClose, {
    pathFill: grey,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 15
    }
  }))), _react["default"].createElement(_reactNative.View, {
    style: [styles.composerContainer, composerContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 9
    }
  }, Input ? _react["default"].createElement(Input, {
    additionalTextInputProps: additionalTextInputContainerProps,
    getUsers: getUsers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 13
    }
  }) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactNative.View, {
    style: [styles.optionsContainer, optionsContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 15
    }
  }, InputButtons && _react["default"].createElement(InputButtons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 34
    }
  })), _react["default"].createElement(_reactNative.View, {
    style: [styles.inputBoxContainer, {
      borderColor: grey_whisper,
      paddingVertical: giphyActive ? 8 : 12
    }, inputBoxContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 15
    }
  }, (typeof editing !== 'boolean' && quotedRepliesEnabled && (editing == null ? void 0 : editing.quoted_message) || quotedMessage) && _react["default"].createElement(_reactNative.View, {
    style: [styles.replyContainer, replyContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 19
    }
  }, _react["default"].createElement(Reply, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 21
    }
  })), imageUploads.length ? _react["default"].createElement(ImageUploadPreview, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 40
    }
  }) : null, imageUploads.length && fileUploads.length ? _react["default"].createElement(_reactNative.View, {
    style: [styles.attachmentSeparator, {
      borderBottomColor: grey_whisper,
      marginHorizontal: giphyActive ? 8 : 12
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 19
    }
  }) : null, fileUploads.length ? _react["default"].createElement(FileUploadPreview, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 39
    }
  }) : null, _react["default"].createElement(_reactNative.View, {
    style: [styles.autoCompleteInputContainer, {
      paddingLeft: giphyActive ? 8 : 16,
      paddingRight: giphyActive ? 10 : 16
    }, autoCompleteInputContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 17
    }
  }, giphyActive && _react["default"].createElement(_reactNative.View, {
    style: [styles.giphyContainer, {
      backgroundColor: accent_blue
    }, giphyContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }, _react["default"].createElement(_icons.Lightning, {
    height: 16,
    pathFill: white,
    width: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 23
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.giphyText, {
      color: white
    }, giphyText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 23
    }
  }, "GIPHY")), _react["default"].createElement(_AutoCompleteInput.AutoCompleteInput, {
    additionalTextInputProps: additionalTextInputProps,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 19
    }
  }), giphyActive && _react["default"].createElement(_reactNative.TouchableOpacity, {
    disabled: disabled,
    onPress: function onPress() {
      setGiphyActive(false);
      setShowMoreOptions(true);
    },
    testID: "close-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 21
    }
  }, _react["default"].createElement(_icons.CircleClose, {
    height: 20,
    pathFill: grey,
    width: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 23
    }
  })))), _react["default"].createElement(_reactNative.View, {
    style: [styles.sendButtonContainer, sendButtonContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 15
    }
  }, _react["default"].createElement(SendButton, {
    disabled: disabled || sending.current || !isValidMessage(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 17
    }
  })))), _react["default"].createElement(ShowThreadMessageInChannelButton, {
    threadList: threadList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 9
    }
  })), componentType && suggestions ? _react["default"].createElement(_reactNative.View, {
    style: [styles.suggestionsListContainer, {
      backgroundColor: white,
      bottom: height
    }, suggestionsListContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 9
    }
  }, _react["default"].createElement(_SuggestionsList.SuggestionsList, {
    active: !!suggestions,
    componentType: componentType,
    suggestions: suggestions,
    suggestionsTitle: suggestionsTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 11
    }
  })) : null, selectedPicker && _react["default"].createElement(_reactNative.View, {
    style: [{
      backgroundColor: white_smoke,
      height: (attachmentPickerBottomSheetHeight ? attachmentPickerBottomSheetHeight + (attachmentSelectionBarHeight != null ? attachmentSelectionBarHeight : 52) : 360) - bottomInset
    }, attachmentSelectionBar],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 9
    }
  }, _react["default"].createElement(_AttachmentSelectionBar.AttachmentSelectionBar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 11
    }
  })));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevAdditionalTextInputProps = prevProps.additionalTextInputProps,
      prevAsyncUploads = prevProps.asyncUploads,
      prevDisabled = prevProps.disabled,
      prevEditing = prevProps.editing,
      prevFileUploads = prevProps.fileUploads,
      prevGiphyActive = prevProps.giphyActive,
      prevImageUploads = prevProps.imageUploads,
      prevIsValidMessage = prevProps.isValidMessage,
      prevMentionedUsers = prevProps.mentionedUsers,
      prevQuotedMessage = prevProps.quotedMessage,
      prevSending = prevProps.sending,
      prevShowMoreOptions = prevProps.showMoreOptions,
      prevSuggestions = prevProps.suggestions,
      prevSuggestionsTitle = prevProps.suggestionsTitle,
      prevT = prevProps.t,
      prevThread = prevProps.thread,
      prevThreadList = prevProps.threadList;
  var nextAdditionalTextInputProps = nextProps.additionalTextInputProps,
      nextAsyncUploads = nextProps.asyncUploads,
      nextDisabled = nextProps.disabled,
      nextEditing = nextProps.editing,
      nextFileUploads = nextProps.fileUploads,
      nextGiphyActive = nextProps.giphyActive,
      nextImageUploads = nextProps.imageUploads,
      nextIsValidMessage = nextProps.isValidMessage,
      nextMentionedUsers = nextProps.mentionedUsers,
      nextQuotedMessage = nextProps.quotedMessage,
      nextSending = nextProps.sending,
      nextShowMoreOptions = nextProps.showMoreOptions,
      nextSuggestions = nextProps.suggestions,
      nextSuggestionsTitle = nextProps.suggestionsTitle,
      nextT = nextProps.t,
      nextThread = nextProps.thread,
      nextThreadList = nextProps.threadList;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var additionalTextInputPropsEven = prevAdditionalTextInputProps === nextAdditionalTextInputProps;
  if (!additionalTextInputPropsEven) return false;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var editingEqual = !!prevEditing === !!nextEditing;
  if (!editingEqual) return false;
  var imageUploadsEqual = prevImageUploads.length === nextImageUploads.length;
  if (!imageUploadsEqual) return false;
  var giphyActiveEqual = prevGiphyActive === nextGiphyActive;
  if (!giphyActiveEqual) return false;
  var quotedMessageEqual = !!prevQuotedMessage && !!nextQuotedMessage && typeof prevQuotedMessage !== 'boolean' && typeof nextQuotedMessage !== 'boolean' ? prevQuotedMessage.id === nextQuotedMessage.id : !!prevQuotedMessage === !!nextQuotedMessage;
  if (!quotedMessageEqual) return false;
  var sendingEqual = prevSending.current === nextSending.current;
  if (!sendingEqual) return false;
  var showMoreOptionsEqual = prevShowMoreOptions === nextShowMoreOptions;
  if (!showMoreOptionsEqual) return false;
  var isValidMessageEqual = prevIsValidMessage() === nextIsValidMessage();
  if (!isValidMessageEqual) return false;
  var asyncUploadsEqual = Object.keys(prevAsyncUploads).every(function (key) {
    return prevAsyncUploads[key].state === nextAsyncUploads[key].state && prevAsyncUploads[key].url === nextAsyncUploads[key].url;
  });
  if (!asyncUploadsEqual) return false;
  var fileUploadsEqual = prevFileUploads.length === nextFileUploads.length;
  if (!fileUploadsEqual) return false;
  var mentionedUsersEqual = prevMentionedUsers.length === nextMentionedUsers.length;
  if (!mentionedUsersEqual) return false;
  var suggestionsEqual = !!(prevSuggestions != null && prevSuggestions.data) && !!(nextSuggestions != null && nextSuggestions.data) ? prevSuggestions.data.length === nextSuggestions.data.length && prevSuggestions.data.every(function (_ref3, index) {
    var name = _ref3.name;
    return name === nextSuggestions.data[index].name;
  }) : !!prevSuggestions === !!nextSuggestions;
  if (!suggestionsEqual) return false;
  var suggestionsTitleEqual = prevSuggestionsTitle === nextSuggestionsTitle;
  if (!suggestionsTitleEqual) return false;
  var threadEqual = (prevThread == null ? void 0 : prevThread.id) === (nextThread == null ? void 0 : nextThread.id) && (prevThread == null ? void 0 : prevThread.text) === (nextThread == null ? void 0 : nextThread.text) && (prevThread == null ? void 0 : prevThread.reply_count) === (nextThread == null ? void 0 : nextThread.reply_count);
  if (!threadEqual) return false;
  var threadListEqual = prevThreadList === nextThreadList;
  if (!threadListEqual) return false;
  return true;
};

var MemoizedMessageInput = _react["default"].memo(MessageInputWithContext, areEqual);

var MessageInput = function MessageInput(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      _useChannelContext$di = _useChannelContext.disabled,
      disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di,
      members = _useChannelContext.members,
      watchers = _useChannelContext.watchers;

  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      additionalTextInputProps = _useMessageInputConte.additionalTextInputProps,
      asyncIds = _useMessageInputConte.asyncIds,
      asyncUploads = _useMessageInputConte.asyncUploads,
      clearEditingState = _useMessageInputConte.clearEditingState,
      clearQuotedMessageState = _useMessageInputConte.clearQuotedMessageState,
      closeAttachmentPicker = _useMessageInputConte.closeAttachmentPicker,
      editing = _useMessageInputConte.editing,
      FileUploadPreview = _useMessageInputConte.FileUploadPreview,
      fileUploads = _useMessageInputConte.fileUploads,
      giphyActive = _useMessageInputConte.giphyActive,
      ImageUploadPreview = _useMessageInputConte.ImageUploadPreview,
      imageUploads = _useMessageInputConte.imageUploads,
      Input = _useMessageInputConte.Input,
      inputBoxRef = _useMessageInputConte.inputBoxRef,
      InputButtons = _useMessageInputConte.InputButtons,
      isValidMessage = _useMessageInputConte.isValidMessage,
      maxNumberOfFiles = _useMessageInputConte.maxNumberOfFiles,
      mentionedUsers = _useMessageInputConte.mentionedUsers,
      numberOfUploads = _useMessageInputConte.numberOfUploads,
      quotedMessage = _useMessageInputConte.quotedMessage,
      removeImage = _useMessageInputConte.removeImage,
      resetInput = _useMessageInputConte.resetInput,
      SendButton = _useMessageInputConte.SendButton,
      sending = _useMessageInputConte.sending,
      sendMessageAsync = _useMessageInputConte.sendMessageAsync,
      setGiphyActive = _useMessageInputConte.setGiphyActive,
      setShowMoreOptions = _useMessageInputConte.setShowMoreOptions,
      showMoreOptions = _useMessageInputConte.showMoreOptions,
      ShowThreadMessageInChannelButton = _useMessageInputConte.ShowThreadMessageInChannelButton,
      uploadNewImage = _useMessageInputConte.uploadNewImage;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      quotedRepliesEnabled = _useMessagesContext.quotedRepliesEnabled,
      Reply = _useMessagesContext.Reply;

  var _useSuggestionsContex = (0, _SuggestionsContext.useSuggestionsContext)(),
      componentType = _useSuggestionsContex.componentType,
      suggestions = _useSuggestionsContex.suggestions,
      suggestionsTitle = _useSuggestionsContex.suggestionsTitle;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      thread = _useThreadContext.thread;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(MemoizedMessageInput, (0, _extends2["default"])({
    additionalTextInputProps: additionalTextInputProps,
    asyncIds: asyncIds,
    asyncUploads: asyncUploads,
    clearEditingState: clearEditingState,
    clearQuotedMessageState: clearQuotedMessageState,
    closeAttachmentPicker: closeAttachmentPicker,
    componentType: componentType,
    disabled: disabled,
    editing: editing,
    FileUploadPreview: FileUploadPreview,
    fileUploads: fileUploads,
    giphyActive: giphyActive,
    ImageUploadPreview: ImageUploadPreview,
    imageUploads: imageUploads,
    Input: Input,
    inputBoxRef: inputBoxRef,
    InputButtons: InputButtons,
    isValidMessage: isValidMessage,
    maxNumberOfFiles: maxNumberOfFiles,
    members: members,
    mentionedUsers: mentionedUsers,
    numberOfUploads: numberOfUploads,
    quotedMessage: quotedMessage,
    quotedRepliesEnabled: quotedRepliesEnabled,
    removeImage: removeImage,
    Reply: Reply,
    resetInput: resetInput,
    SendButton: SendButton,
    sending: sending,
    sendMessageAsync: sendMessageAsync,
    setGiphyActive: setGiphyActive,
    setShowMoreOptions: setShowMoreOptions,
    showMoreOptions: showMoreOptions,
    ShowThreadMessageInChannelButton: ShowThreadMessageInChannelButton,
    suggestions: suggestions,
    suggestionsTitle: suggestionsTitle,
    t: t,
    thread: thread,
    uploadNewImage: uploadNewImage,
    watchers: watchers
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802,
      columnNumber: 5
    }
  }));
};

exports.MessageInput = MessageInput;
MessageInput.displayName = 'MessageInput{messageInput}';
//# sourceMappingURL=MessageInput.js.map