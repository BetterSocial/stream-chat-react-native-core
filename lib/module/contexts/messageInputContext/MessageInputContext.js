var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessageInputContext = exports.useMessageInputContext = exports.MessageInputProvider = exports.MessageInputContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _uniq = _interopRequireDefault(require("lodash/uniq"));

var _streamChat = require("stream-chat");

var _useCreateMessageInputContext = require("./hooks/useCreateMessageInputContext");

var _useMessageDetailsForState = require("./hooks/useMessageDetailsForState");

var _AttachmentPickerContext = require("../attachmentPickerContext/AttachmentPickerContext");

var _ChatContext = require("../chatContext/ChatContext");

var _ChannelContext = require("../channelContext/ChannelContext");

var _ThreadContext = require("../threadContext/ThreadContext");

var _getDisplayName = require("../utils/getDisplayName");

var _utils = require("../../utils/utils");

var _native = require("../../native");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/messageInputContext/MessageInputContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MIME_TYPE_OCTET_STREAM = 'application/octet-stream';

var MessageInputContext = _react["default"].createContext({});

exports.MessageInputContext = MessageInputContext;

var MessageInputProvider = function MessageInputProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;

  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
      closePicker = _useAttachmentPickerC.closePicker,
      openPicker = _useAttachmentPickerC.openPicker,
      selectedPicker = _useAttachmentPickerC.selectedPicker,
      setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      channel = _useChannelContext.channel,
      giphyEnabled = _useChannelContext.giphyEnabled;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      thread = _useThreadContext.thread;

  var inputBoxRef = (0, _react.useRef)(null);
  var sending = (0, _react.useRef)(false);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      asyncIds = _useState2[0],
      setAsyncIds = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      asyncUploads = _useState4[0],
      setAsyncUploads = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      giphyActive = _useState6[0],
      setGiphyActive = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      sendThreadMessageInChannel = _useState8[0],
      setSendThreadMessageInChannel = _useState8[1];

  var editing = value.editing,
      hasFilePicker = value.hasFilePicker,
      hasImagePicker = value.hasImagePicker,
      initialValue = value.initialValue,
      maxNumberOfFiles = value.maxNumberOfFiles;

  var _useMessageDetailsFor = (0, _useMessageDetailsForState.useMessageDetailsForState)(editing, initialValue),
      fileUploads = _useMessageDetailsFor.fileUploads,
      imageUploads = _useMessageDetailsFor.imageUploads,
      mentionedUsers = _useMessageDetailsFor.mentionedUsers,
      numberOfUploads = _useMessageDetailsFor.numberOfUploads,
      setFileUploads = _useMessageDetailsFor.setFileUploads,
      setImageUploads = _useMessageDetailsFor.setImageUploads,
      setMentionedUsers = _useMessageDetailsFor.setMentionedUsers,
      setNumberOfUploads = _useMessageDetailsFor.setNumberOfUploads,
      setShowMoreOptions = _useMessageDetailsFor.setShowMoreOptions,
      setText = _useMessageDetailsFor.setText,
      showMoreOptions = _useMessageDetailsFor.showMoreOptions,
      text = _useMessageDetailsFor.text;

  var threadId = thread == null ? void 0 : thread.id;
  (0, _react.useEffect)(function () {
    setSendThreadMessageInChannel(false);
  }, [threadId]);

  var appendText = function appendText(newText) {
    setText(function (prevText) {
      return "" + prevText + newText;
    });
  };

  var isValidMessage = function isValidMessage() {
    if (text && text.trim()) {
      return true;
    }

    for (var _iterator = _createForOfIteratorHelperLoose(imageUploads), _step; !(_step = _iterator()).done;) {
      var _image2 = _step.value;

      if (!_image2 || _image2.state === _utils.FileState.UPLOAD_FAILED) {
        continue;
      }

      if (_image2.state === _utils.FileState.UPLOADING) {
        return false;
      }

      return true;
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(fileUploads), _step2; !(_step2 = _iterator2()).done;) {
      var _file2 = _step2.value;

      if (!_file2 || _file2.state === _utils.FileState.UPLOAD_FAILED) {
        continue;
      }

      if (_file2.state === _utils.FileState.UPLOADING) {
        return false;
      }

      return true;
    }

    return false;
  };

  var onChange = function onChange(newText) {
    if (sending.current) {
      return;
    }

    setText(newText);

    if (newText && channel) {
      (0, _streamChat.logChatPromiseExecution)(channel.keystroke(thread == null ? void 0 : thread.id), 'start typing event');
    }

    if (value.onChangeText) {
      value.onChangeText(newText);
    }
  };

  var openCommandsPicker = function openCommandsPicker() {
    appendText('/');

    if (inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
  };

  var openMentionsPicker = function openMentionsPicker() {
    appendText('@');

    if (inputBoxRef.current) {
      inputBoxRef.current.focus();
    }
  };

  var openAttachmentPicker = function openAttachmentPicker() {
    if (hasImagePicker && !fileUploads.length) {
      _reactNative.Keyboard.dismiss();

      openPicker();
      setSelectedPicker('images');
      setTimeout(openPicker, 600);
    } else if (hasFilePicker && numberOfUploads < maxNumberOfFiles) {
      pickFile();
    }
  };

  var closeAttachmentPicker = function closeAttachmentPicker() {
    setSelectedPicker(undefined);
    closePicker();
  };

  var toggleAttachmentPicker = function toggleAttachmentPicker() {
    if (selectedPicker) {
      closeAttachmentPicker();
    } else {
      openAttachmentPicker();
    }
  };

  var onSelectItem = function onSelectItem(item) {
    setMentionedUsers(function (prevMentionedUsers) {
      return [].concat((0, _toConsumableArray2["default"])(prevMentionedUsers), [item.id]);
    });
  };

  var pickFile = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(numberOfUploads >= value.maxNumberOfFiles)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return (0, _native.pickDocument)({
                maxNumberOfFiles: value.maxNumberOfFiles - numberOfUploads
              });

            case 4:
              result = _context.sent;

              if (!result.cancelled && result.docs) {
                result.docs.forEach(function (doc) {
                  uploadNewFile(doc);
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function pickFile() {
      return _ref2.apply(this, arguments);
    };
  }();

  var removeFile = function removeFile(id) {
    if (fileUploads.some(function (file) {
      return file.id === id;
    })) {
      setFileUploads(function (prevFileUploads) {
        return prevFileUploads.filter(function (file) {
          return file.id !== id;
        });
      });
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
    }
  };

  var removeImage = function removeImage(id) {
    if (imageUploads.some(function (image) {
      return image.id === id;
    })) {
      setImageUploads(function (prevImageUploads) {
        return prevImageUploads.filter(function (image) {
          return image.id !== id;
        });
      });
      setNumberOfUploads(function (prevNumberOfUploads) {
        return prevNumberOfUploads - 1;
      });
    }
  };

  var resetInput = function resetInput() {
    var pendingAttachments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    setFileUploads([]);
    setGiphyActive(false);
    setShowMoreOptions(true);
    setImageUploads([]);
    setMentionedUsers([]);
    setNumberOfUploads(function (prevNumberOfUploads) {
      return prevNumberOfUploads - ((pendingAttachments == null ? void 0 : pendingAttachments.length) || 0);
    });
    setText('');
  };

  var sendMessage = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var prevText, attachments, _loop, _iterator3, _step3, _image4, _ret, _iterator4, _step4, _file4, _file4$file$type, updatedMessage, updateMessagePromise;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!sending.current) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              sending.current = true;
              prevText = giphyEnabled && giphyActive ? "/giphy " + text : text;
              _context2.next = 6;
              return setText('');

            case 6:
              if (inputBoxRef.current) {
                inputBoxRef.current.clear();
              }

              attachments = [];

              _loop = function _loop(_image3) {
                if (!_image3 || _image3.state === _utils.FileState.UPLOAD_FAILED) {
                  return "continue";
                }

                if (_image3.state === _utils.FileState.UPLOADING) {
                  if (value.sendImageAsync) {
                    setAsyncIds(function (prevAsyncIds) {
                      return [].concat((0, _toConsumableArray2["default"])(prevAsyncIds), [_image3.id]);
                    });
                  } else {
                    sending.current = false;
                    return {
                      v: setText(prevText)
                    };
                  }
                }

                if (_image3.state === _utils.FileState.UPLOADED || _image3.state === _utils.FileState.FINISHED) {
                  attachments.push({
                    fallback: _image3.file.name,
                    image_url: _image3.url,
                    type: 'image'
                  });
                }
              };

              _iterator3 = _createForOfIteratorHelperLoose(imageUploads);

            case 10:
              if ((_step3 = _iterator3()).done) {
                _context2.next = 19;
                break;
              }

              _image4 = _step3.value;
              _ret = _loop(_image4);

              if (!(_ret === "continue")) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("continue", 17);

            case 15:
              if (!((0, _typeof2["default"])(_ret) === "object")) {
                _context2.next = 17;
                break;
              }

              return _context2.abrupt("return", _ret.v);

            case 17:
              _context2.next = 10;
              break;

            case 19:
              _iterator4 = _createForOfIteratorHelperLoose(fileUploads);

            case 20:
              if ((_step4 = _iterator4()).done) {
                _context2.next = 30;
                break;
              }

              _file4 = _step4.value;

              if (!(!_file4 || _file4.state === _utils.FileState.UPLOAD_FAILED)) {
                _context2.next = 24;
                break;
              }

              return _context2.abrupt("continue", 28);

            case 24:
              if (!(_file4.state === _utils.FileState.UPLOADING)) {
                _context2.next = 27;
                break;
              }

              sending.current = false;
              return _context2.abrupt("return");

            case 27:
              if (_file4.state === _utils.FileState.UPLOADED || _file4.state === _utils.FileState.FINISHED) {
                if ((_file4$file$type = _file4.file.type) != null && _file4$file$type.startsWith('image/')) {
                  attachments.push({
                    fallback: _file4.file.name,
                    image_url: _file4.url,
                    type: 'image'
                  });
                } else {
                  attachments.push({
                    asset_url: _file4.url,
                    file_size: _file4.file.size,
                    mime_type: _file4.file.type,
                    title: _file4.file.name,
                    type: 'file'
                  });
                }
              }

            case 28:
              _context2.next = 20;
              break;

            case 30:
              if (!(!prevText && attachments.length === 0)) {
                _context2.next = 33;
                break;
              }

              sending.current = false;
              return _context2.abrupt("return");

            case 33:
              if (value.editing && !(0, _useMessageDetailsForState.isEditingBoolean)(value.editing)) {
                updatedMessage = (0, _extends2["default"])({}, value.editing, {
                  attachments: attachments,
                  mentioned_users: mentionedUsers,
                  quoted_message: undefined,
                  text: prevText
                });
                value.clearEditingState();
                updateMessagePromise = value.editMessage(updatedMessage).then(value.clearEditingState);
                resetInput(attachments);
                (0, _streamChat.logChatPromiseExecution)(updateMessagePromise, 'update message');
                sending.current = false;
              } else {
                try {
                  value.sendMessage({
                    attachments: attachments,
                    mentioned_users: (0, _uniq["default"])(mentionedUsers),
                    parent_id: thread == null ? void 0 : thread.id,
                    quoted_message_id: typeof value.quotedMessage === 'boolean' ? undefined : value.quotedMessage.id,
                    show_in_channel: sendThreadMessageInChannel || undefined,
                    text: prevText
                  });
                  value.clearQuotedMessageState();
                  sending.current = false;
                  resetInput(attachments);
                } catch (_error) {
                  sending.current = false;

                  if (value.quotedMessage && typeof value.quotedMessage !== 'boolean') {
                    value.setQuotedMessageState(value.quotedMessage);
                  }

                  setText(prevText.slice(giphyEnabled && giphyActive ? 7 : 0));
                  console.log('Failed to send message');
                }
              }

            case 34:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function sendMessage() {
      return _ref3.apply(this, arguments);
    };
  }();

  var sendMessageAsync = function sendMessageAsync(id) {
    var image = asyncUploads[id];

    if (!image || image.state === _utils.FileState.UPLOAD_FAILED) {
      return;
    }

    if (image.state === _utils.FileState.UPLOADED || image.state === _utils.FileState.FINISHED) {
      var _attachments = [{
        image_url: image.url,
        type: 'image'
      }];

      try {
        value.sendMessage({
          attachments: _attachments,
          mentioned_users: [],
          parent_id: thread == null ? void 0 : thread.id,
          quoted_message_id: typeof value.quotedMessage === 'boolean' ? undefined : value.quotedMessage.id,
          show_in_channel: sendThreadMessageInChannel || undefined,
          text: ''
        });
        setAsyncIds(function (prevAsyncIds) {
          return prevAsyncIds.splice(prevAsyncIds.indexOf(id), 1);
        });
        setAsyncUploads(function (prevAsyncUploads) {
          delete prevAsyncUploads[id];
          return prevAsyncUploads;
        });
        setNumberOfUploads(function (prevNumberOfUploads) {
          return prevNumberOfUploads - 1;
        });
      } catch (_error) {
        console.log('Failed');
      }
    }
  };

  var setInputBoxRef = function setInputBoxRef(ref) {
    inputBoxRef.current = ref;

    if (value.setInputRef) {
      value.setInputRef(ref);
    }
  };

  var triggerSettings = channel ? value.autoCompleteTriggerSettings ? value.autoCompleteTriggerSettings({
    channel: channel,
    client: client,
    onMentionSelectItem: onSelectItem
  }) : (0, _utils.ACITriggerSettings)({
    channel: channel,
    client: client,
    onMentionSelectItem: onSelectItem
  }) : {};

  var updateMessage = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if ((0, _useMessageDetailsForState.isEditingBoolean)(value.editing)) {
                _context3.next = 4;
                break;
              }

              _context3.next = 4;
              return client.updateMessage((0, _extends2["default"])({}, value.editing, {
                quoted_message: undefined,
                text: giphyEnabled && giphyActive ? "/giphy " + text : text
              }));

            case 4:
              resetInput();
              value.clearEditingState();
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function updateMessage() {
      return _ref4.apply(this, arguments);
    };
  }();

  var uploadFile = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(_ref5) {
      var newFile, file, id, response;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              newFile = _ref5.newFile;

              if (newFile) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return");

            case 3:
              file = newFile.file, id = newFile.id;
              _context4.next = 6;
              return setFileUploads(function (prevFileUploads) {
                return prevFileUploads.map(function (fileUpload) {
                  if (fileUpload.id === id) {
                    return (0, _extends2["default"])({}, fileUpload, {
                      state: _utils.FileState.UPLOADING
                    });
                  }

                  return fileUpload;
                });
              });

            case 6:
              response = {};
              _context4.prev = 7;

              if (!value.doDocUploadRequest) {
                _context4.next = 14;
                break;
              }

              _context4.next = 11;
              return value.doDocUploadRequest(file, channel);

            case 11:
              response = _context4.sent;
              _context4.next = 18;
              break;

            case 14:
              if (!(channel && file.uri)) {
                _context4.next = 18;
                break;
              }

              _context4.next = 17;
              return channel.sendFile(file.uri, file.name, MIME_TYPE_OCTET_STREAM);

            case 17:
              response = _context4.sent;

            case 18:
              _context4.next = 25;
              break;

            case 20:
              _context4.prev = 20;
              _context4.t0 = _context4["catch"](7);
              console.warn(_context4.t0);

              if (!newFile) {
                setNumberOfUploads(function (prevNumberOfUploads) {
                  return prevNumberOfUploads - 1;
                });
              } else {
                setFileUploads(function (prevFileUploads) {
                  return prevFileUploads.map(function (fileUpload) {
                    if (fileUpload.id === id) {
                      return (0, _extends2["default"])({}, fileUpload, {
                        state: _utils.FileState.UPLOAD_FAILED
                      });
                    }

                    return fileUpload;
                  });
                });
                setNumberOfUploads(function (prevNumberOfUploads) {
                  return prevNumberOfUploads - 1;
                });
              }

              return _context4.abrupt("return");

            case 25:
              setFileUploads(function (prevFileUploads) {
                return prevFileUploads.map(function (fileUpload) {
                  if (fileUpload.id === id) {
                    return (0, _extends2["default"])({}, fileUpload, {
                      state: _utils.FileState.UPLOADED,
                      url: response.file
                    });
                  }

                  return fileUpload;
                });
              });

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[7, 20]]);
    }));

    return function uploadFile(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  var uploadImage = function () {
    var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(_ref7) {
      var newImage, _ref9, file, id, response, _file$uri, localUri, uri, compressedUri;

      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              newImage = _ref7.newImage;
              _ref9 = newImage || {}, file = _ref9.file, id = _ref9.id;

              if (file) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return");

            case 4:
              response = {};
              _context5.prev = 5;

              if (!file.id) {
                _context5.next = 12;
                break;
              }

              _context5.next = 9;
              return (0, _native.getLocalAssetUri)(file.id);

            case 9:
              _context5.t0 = _context5.sent;
              _context5.next = 20;
              break;

            case 12:
              if (!((_file$uri = file.uri) != null && _file$uri.match(/assets-library/))) {
                _context5.next = 18;
                break;
              }

              _context5.next = 15;
              return (0, _native.getLocalAssetUri)(file.uri);

            case 15:
              _context5.t1 = _context5.sent;
              _context5.next = 19;
              break;

            case 18:
              _context5.t1 = file.uri;

            case 19:
              _context5.t0 = _context5.t1;

            case 20:
              localUri = _context5.t0;
              uri = file.name || localUri || '';
              _context5.next = 24;
              return file.source === 'camera' || !file.height || !file.width || typeof value.compressImageQuality !== 'number' || value.compressImageQuality === 1 ? uri : (0, _native.compressImage)({
                compressImageQuality: value.compressImageQuality,
                height: file.height,
                uri: uri,
                width: file.width
              });

            case 24:
              compressedUri = _context5.sent;

              if (!value.doImageUploadRequest) {
                _context5.next = 31;
                break;
              }

              _context5.next = 28;
              return value.doImageUploadRequest(file, channel);

            case 28:
              response = _context5.sent;
              _context5.next = 39;
              break;

            case 31:
              if (!(compressedUri && channel)) {
                _context5.next = 39;
                break;
              }

              if (!value.sendImageAsync) {
                _context5.next = 36;
                break;
              }

              channel.sendImage(compressedUri, undefined, MIME_TYPE_OCTET_STREAM).then(function (res) {
                if (asyncIds.includes(id)) {
                  setAsyncUploads(function (prevAsyncUploads) {
                    prevAsyncUploads[id] = (0, _extends2["default"])({}, prevAsyncUploads[id], {
                      state: _utils.FileState.UPLOADED,
                      url: res.file
                    });
                    return prevAsyncUploads;
                  });
                } else {
                  setImageUploads(function (prevImageUploads) {
                    return prevImageUploads.map(function (imageUpload) {
                      if (imageUpload.id === id) {
                        return (0, _extends2["default"])({}, imageUpload, {
                          state: _utils.FileState.UPLOADED,
                          url: res.file
                        });
                      }

                      return imageUpload;
                    });
                  });
                }
              });
              _context5.next = 39;
              break;

            case 36:
              _context5.next = 38;
              return channel.sendImage(compressedUri, undefined, MIME_TYPE_OCTET_STREAM);

            case 38:
              response = _context5.sent;

            case 39:
              if (Object.keys(response).length) {
                setImageUploads(function (prevImageUploads) {
                  return prevImageUploads.map(function (imageUpload) {
                    if (imageUpload.id === id) {
                      return (0, _extends2["default"])({}, imageUpload, {
                        state: _utils.FileState.UPLOADED,
                        url: response.file
                      });
                    }

                    return imageUpload;
                  });
                });
              }

              _context5.next = 48;
              break;

            case 42:
              _context5.prev = 42;
              _context5.t2 = _context5["catch"](5);
              console.warn(_context5.t2);

              if (newImage) {
                setImageUploads(function (prevImageUploads) {
                  return prevImageUploads.map(function (imageUpload) {
                    if (imageUpload.id === id) {
                      return (0, _extends2["default"])({}, imageUpload, {
                        state: _utils.FileState.UPLOAD_FAILED
                      });
                    }

                    return imageUpload;
                  });
                });
              }

              setNumberOfUploads(function (prevNumberOfUploads) {
                return prevNumberOfUploads - 1;
              });
              return _context5.abrupt("return");

            case 48:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[5, 42]]);
    }));

    return function uploadImage(_x2) {
      return _ref8.apply(this, arguments);
    };
  }();

  var uploadNewFile = function () {
    var _ref10 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(file) {
      var id, newFile;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = (0, _utils.generateRandomId)();
              newFile = {
                file: (0, _extends2["default"])({}, file, {
                  type: MIME_TYPE_OCTET_STREAM
                }),
                id: id,
                state: _utils.FileState.UPLOADING
              };
              _context6.next = 4;
              return Promise.all([setFileUploads(function (prevFileUploads) {
                return prevFileUploads.concat([newFile]);
              }), setNumberOfUploads(function (prevNumberOfUploads) {
                return prevNumberOfUploads + 1;
              })]);

            case 4:
              uploadFile({
                newFile: newFile
              });

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function uploadNewFile(_x3) {
      return _ref10.apply(this, arguments);
    };
  }();

  var uploadNewImage = function () {
    var _ref11 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(image) {
      var id, newImage;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              id = (0, _utils.generateRandomId)();
              newImage = {
                file: image,
                id: id,
                state: _utils.FileState.UPLOADING
              };
              _context7.next = 4;
              return Promise.all([setImageUploads(function (prevImageUploads) {
                return prevImageUploads.concat([newImage]);
              }), setNumberOfUploads(function (prevNumberOfUploads) {
                return prevNumberOfUploads + 1;
              })]);

            case 4:
              uploadImage({
                newImage: newImage
              });

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function uploadNewImage(_x4) {
      return _ref11.apply(this, arguments);
    };
  }();

  var messageInputContext = (0, _useCreateMessageInputContext.useCreateMessageInputContext)((0, _extends2["default"])({
    appendText: appendText,
    asyncIds: asyncIds,
    asyncUploads: asyncUploads,
    closeAttachmentPicker: closeAttachmentPicker,
    fileUploads: fileUploads,
    giphyActive: giphyActive,
    imageUploads: imageUploads,
    inputBoxRef: inputBoxRef,
    isValidMessage: isValidMessage,
    mentionedUsers: mentionedUsers,
    numberOfUploads: numberOfUploads,
    onChange: onChange,
    onSelectItem: onSelectItem,
    openAttachmentPicker: openAttachmentPicker,
    openCommandsPicker: openCommandsPicker,
    openFilePicker: pickFile,
    openMentionsPicker: openMentionsPicker,
    pickFile: pickFile,
    removeFile: removeFile,
    removeImage: removeImage,
    resetInput: resetInput,
    selectedPicker: selectedPicker,
    sending: sending,
    sendMessageAsync: sendMessageAsync,
    sendThreadMessageInChannel: sendThreadMessageInChannel,
    setAsyncIds: setAsyncIds,
    setAsyncUploads: setAsyncUploads,
    setFileUploads: setFileUploads,
    setGiphyActive: setGiphyActive,
    setImageUploads: setImageUploads,
    setInputBoxRef: setInputBoxRef,
    setMentionedUsers: setMentionedUsers,
    setNumberOfUploads: setNumberOfUploads,
    setSendThreadMessageInChannel: setSendThreadMessageInChannel,
    setShowMoreOptions: setShowMoreOptions,
    setText: setText,
    showMoreOptions: showMoreOptions,
    text: text,
    thread: thread,
    toggleAttachmentPicker: toggleAttachmentPicker,
    triggerSettings: triggerSettings,
    updateMessage: updateMessage,
    uploadFile: uploadFile,
    uploadImage: uploadImage,
    uploadNewFile: uploadNewFile,
    uploadNewImage: uploadNewImage
  }, value, {
    sendMessage: sendMessage
  }));
  return _react["default"].createElement(MessageInputContext.Provider, {
    value: messageInputContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 5
    }
  }, children);
};

exports.MessageInputProvider = MessageInputProvider;

var useMessageInputContext = function useMessageInputContext() {
  return (0, _react.useContext)(MessageInputContext);
};

exports.useMessageInputContext = useMessageInputContext;

var withMessageInputContext = function withMessageInputContext(Component) {
  var WithMessageInputContextComponent = function WithMessageInputContextComponent(props) {
    var messageInputContext = useMessageInputContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, messageInputContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1115,
        columnNumber: 12
      }
    }));
  };

  WithMessageInputContextComponent.displayName = "WithMessageInputContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithMessageInputContextComponent;
};

exports.withMessageInputContext = withMessageInputContext;
//# sourceMappingURL=MessageInputContext.js.map