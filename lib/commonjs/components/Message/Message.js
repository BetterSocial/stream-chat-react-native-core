var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _useCreateMessageContext = require("./hooks/useCreateMessageContext");

var _messageActions = require("./utils/messageActions");

var _removeReservedFields = require("./utils/removeReservedFields");

var _useMessageList = require("../MessageList/hooks/useMessageList");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _KeyboardContext = require("../../contexts/keyboardContext/KeyboardContext");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _icons = require("../../icons");

var _native = require("../../native");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/Message.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prefetchImage = function prefetchImage(_ref) {
  var height = _ref.height,
      url = _ref.url;

  if (url.includes('&h=%2A')) {
    _reactNative.Image.prefetch(url.replace('h=%2A', "h=" + _reactNative.PixelRatio.getPixelSizeForLayoutSize(Number(height))))["catch"](function () {
      return _reactNative.Image.prefetch(url);
    })["catch"](function () {});
  } else {
    _reactNative.Image.prefetch(url)["catch"](function () {});
  }
};

var MessageWithContext = function MessageWithContext(props) {
  var _message$user;

  var _props$animatedLongPr = props.animatedLongPress,
      animatedLongPress = _props$animatedLongPr === void 0 ? _reactNative.Platform.OS === 'ios' && !props.message.deleted_at : _props$animatedLongPr,
      blockUserProp = props.blockUser,
      channel = props.channel,
      client = props.client,
      copyMessageProp = props.copyMessage,
      deleteMessageProp = props.deleteMessage,
      disabled = props.disabled,
      dismissKeyboard = props.dismissKeyboard,
      dismissKeyboardOnMessageTouch = props.dismissKeyboardOnMessageTouch,
      editMessageProp = props.editMessage,
      _props$enableLongPres = props.enableLongPress,
      enableLongPress = _props$enableLongPres === void 0 ? true : _props$enableLongPres,
      enforceUniqueReaction = props.enforceUniqueReaction,
      flagMessageProp = props.flagMessage,
      _props$forceAlignMess = props.forceAlignMessages,
      forceAlignMessages = _props$forceAlignMess === void 0 ? false : _props$forceAlignMess,
      goToMessage = props.goToMessage,
      _props$groupStyles = props.groupStyles,
      groupStyles = _props$groupStyles === void 0 ? ['bottom'] : _props$groupStyles,
      handleBlock = props.handleBlock,
      handleCopy = props.handleCopy,
      handleDelete = props.handleDelete,
      handleEdit = props.handleEdit,
      handleFlag = props.handleFlag,
      handleMute = props.handleMute,
      handleQuotedReply = props.handleQuotedReply,
      handleReactionProp = props.handleReaction,
      handleRetry = props.handleRetry,
      handleThreadReply = props.handleThreadReply,
      isAdmin = props.isAdmin,
      isModerator = props.isModerator,
      lastReceivedId = props.lastReceivedId,
      members = props.members,
      message = props.message,
      _props$messageActions = props.messageActions,
      messageActionsProp = _props$messageActions === void 0 ? _messageActions.messageActions : _props$messageActions,
      messageContentOrderProp = props.messageContentOrder,
      messagesContext = props.messagesContext,
      MessageSimple = props.MessageSimple,
      mutesEnabled = props.mutesEnabled,
      muteUserProp = props.muteUser,
      onDoubleTapMessageProp = props.onDoubleTapMessage,
      onLongPressProp = props.onLongPress,
      onLongPressMessageProp = props.onLongPressMessage,
      onPressProp = props.onPress,
      onPressMessageProp = props.onPressMessage,
      onPressInProp = props.onPressIn,
      onPressInMessageProp = props.onPressInMessage,
      onThreadSelect = props.onThreadSelect,
      openThread = props.openThread,
      OverlayReactionList = props.OverlayReactionList,
      preventPress = props.preventPress,
      quotedRepliesEnabled = props.quotedRepliesEnabled,
      reactionsEnabled = props.reactionsEnabled,
      readEventsEnabled = props.readEventsEnabled,
      removeMessage = props.removeMessage,
      quotedReplyProp = props.quotedReply,
      retryProp = props.retry,
      retrySendMessage = props.retrySendMessage,
      selectReaction = props.selectReaction,
      setData = props.setData,
      setEditingState = props.setEditingState,
      setOverlay = props.setOverlay,
      setQuotedMessageState = props.setQuotedMessageState,
      showAvatar = props.showAvatar,
      showMessageStatus = props.showMessageStatus,
      showUnreadUnderlay = props.showUnreadUnderlay,
      style = props.style,
      supportedReactions = props.supportedReactions,
      t = props.t,
      targetedMessage = props.targetedMessage,
      _props$threadList = props.threadList,
      threadList = _props$threadList === void 0 ? false : _props$threadList,
      threadRepliesEnabled = props.threadRepliesEnabled,
      threadReplyProp = props.threadReply,
      updateMessage = props.updateMessage;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      accent_red = _useTheme$theme$color.accent_red,
      bg_gradient_start = _useTheme$theme$color.bg_gradient_start,
      grey = _useTheme$theme$color.grey,
      targetedMessageBackground = _useTheme$theme$color.targetedMessageBackground,
      _useTheme$theme$messa = _useTheme$theme.messageSimple,
      _useTheme$theme$messa2 = _useTheme$theme$messa.gallery,
      halfSize = _useTheme$theme$messa2.halfSize,
      size = _useTheme$theme$messa2.size,
      targetedMessageUnderlay = _useTheme$theme$messa.targetedMessageUnderlay;

  var doubleTapRef = (0, _react.useRef)(null);
  var pressActive = (0, _reactNativeReanimated.useSharedValue)(false);
  var scale = (0, _reactNativeReanimated.useSharedValue)(1);
  (0, _react.useEffect)(function () {
    return function () {
      pressActive.value = false;
      (0, _reactNativeReanimated.cancelAnimation)(scale);
    };
  }, []);
  var scaleStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        scale: scale.value
      }]
    };
  }, []);
  var targetedOpacity = (0, _reactNativeReanimated.useSharedValue)(0);
  var targetedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: targetedOpacity.value
    };
  }, []);
  (0, _react.useEffect)(function () {
    targetedOpacity.value = (0, _reactNativeReanimated.withTiming)(targetedMessage ? 1 : 0, {
      duration: 1000
    });
  }, [targetedMessage]);
  var actionsEnabled = message.type === 'regular' && message.status === 'received';
  var isMyMessage = client && message && client.userID === ((_message$user = message.user) == null ? void 0 : _message$user.id);
  var canModifyMessage = isMyMessage || isModerator || isAdmin;

  var handleAction = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(name, value) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!message.id) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return channel == null ? void 0 : channel.sendAction(message.id, (0, _defineProperty2["default"])({}, name, value));

            case 3:
              data = _context.sent;

              if (data != null && data.message) {
                updateMessage(data.message);
              } else {
                removeMessage({
                  id: message.id,
                  parent_id: message.parent_id
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleAction(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onPressQuotedMessage = function onPressQuotedMessage(quotedMessage) {
    if (!goToMessage) return;
    pressActive.value = false;
    (0, _reactNativeReanimated.cancelAnimation)(scale);
    scale.value = (0, _reactNativeReanimated.withTiming)(1, {
      duration: 100
    });
    goToMessage(quotedMessage.id);
  };

  var _onPress3 = function onPress() {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : message.type === 'error' || message.status === 'failed';

    if (dismissKeyboardOnMessageTouch) {
      _reactNative.Keyboard.dismiss();
    }

    var quotedMessage = message.quoted_message;

    if (error) {
      showMessageOverlay(false, true);
    } else if (quotedMessage) {
      onPressQuotedMessage(quotedMessage);
    }
  };

  var alignment = forceAlignMessages && (forceAlignMessages === 'left' || forceAlignMessages === 'right') ? forceAlignMessages : isMyMessage ? 'right' : 'left';
  var attachments = !message.deleted_at && Array.isArray(message.attachments) ? message.attachments.reduce(function (acc, cur) {
    if (cur.type === 'file' || cur.type === 'video') {
      acc.files.push(cur);
      acc.other = [];
    } else if (cur.type === 'image' && !cur.title_link && !cur.og_scrape_url) {
      if (cur.image_url || cur.thumb_url) {
        acc.images.push(cur);
        acc.other = [];
      }
    } else if (!acc.files.length && !acc.images.length) {
      acc.other.push(cur);
    }

    return acc;
  }, {
    files: [],
    images: [],
    other: []
  }) : {
    files: [],
    images: [],
    other: []
  };
  var hasAttachmentActions = !message.deleted_at && Array.isArray(message.attachments) && message.attachments.some(function (attachment) {
    return attachment.actions && attachment.actions.length;
  });
  var attachmentImageLength = attachments.images.length;
  (0, _react.useEffect)(function () {
    if (attachmentImageLength) {
      attachments.images.slice(0, 4).forEach(function (image, index) {
        var url = image.image_url || image.thumb_url;

        if (url) {
          if (attachmentImageLength <= 2) {
            prefetchImage({
              height: size || 200,
              url: url
            });
          } else if (attachmentImageLength === 3) {
            if (index === 0) {
              prefetchImage({
                height: size || 200,
                url: url
              });
            } else {
              prefetchImage({
                height: halfSize || 100,
                url: url
              });
            }
          } else {
            prefetchImage({
              height: halfSize || 100,
              url: url
            });
          }
        }
      });
    }
  }, [attachmentImageLength]);
  var messageContentOrder = messageContentOrderProp.filter(function (content) {
    if (content === 'quoted_reply') {
      return !!message.quoted_message;
    }

    switch (content) {
      case 'attachments':
        return !!attachments.other.length;

      case 'files':
        return !!attachments.files.length;

      case 'gallery':
        return !!attachments.images.length;

      case 'text':
      default:
        return !!message.text;
    }
  });

  var onlyEmojis = !attachments.files.length && !attachments.images.length && !attachments.other.length && !!message.text && _utils.emojiRegex.test(message.text);

  var onOpenThread = function onOpenThread() {
    if (onThreadSelect) {
      onThreadSelect(message);
    }

    if (openThread) {
      openThread(message);
    }
  };

  var hasReactions = !!reactionsEnabled && !message.deleted_at && !!message.latest_reactions && message.latest_reactions.length > 0;
  var clientId = client.userID;
  var reactions = hasReactions ? supportedReactions.reduce(function (acc, cur) {
    var _message$latest_react;

    var reactionType = cur.type;
    var reactionsOfReactionType = (_message$latest_react = message.latest_reactions) == null ? void 0 : _message$latest_react.filter(function (reaction) {
      return reaction.type === reactionType;
    });

    if (reactionsOfReactionType != null && reactionsOfReactionType.length) {
      var hasOwnReaction = reactionsOfReactionType.some(function (reaction) {
        return reaction.user_id === clientId;
      });
      acc.push({
        own: hasOwnReaction,
        type: reactionType
      });
    }

    return acc;
  }, []) : [];

  var handleToggleReaction = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(reactionType) {
      var messageId, ownReaction;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              messageId = message.id;
              ownReaction = !!reactions.find(function (reaction) {
                return reaction.own && reaction.type === reactionType;
              });
              _context2.prev = 2;

              if (!(channel && messageId)) {
                _context2.next = 11;
                break;
              }

              if (!ownReaction) {
                _context2.next = 9;
                break;
              }

              _context2.next = 7;
              return channel.deleteReaction(messageId, reactionType);

            case 7:
              _context2.next = 11;
              break;

            case 9:
              _context2.next = 11;
              return channel.sendReaction(messageId, {
                type: reactionType
              }, {
                enforce_unique: enforceUniqueReaction
              });

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 13]]);
    }));

    return function handleToggleReaction(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleResendMessage = function handleResendMessage() {
    return retrySendMessage(message);
  };

  var handleQuotedReplyMessage = function handleQuotedReplyMessage() {
    setQuotedMessageState(message);
  };

  var isMuted = (client.mutedUsers || []).some(function (mute) {
    var _message$user2;

    return mute.user.id === client.userID && mute.target.id === ((_message$user2 = message.user) == null ? void 0 : _message$user2.id);
  });

  var handleToggleMuteUser = function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var _message$user3;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if ((_message$user3 = message.user) != null && _message$user3.id) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              if (!isMuted) {
                _context3.next = 7;
                break;
              }

              _context3.next = 5;
              return client.unmuteUser(message.user.id);

            case 5:
              _context3.next = 9;
              break;

            case 7:
              _context3.next = 9;
              return client.muteUser(message.user.id);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleToggleMuteUser() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleDeleteMessage = function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      var data;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return client.deleteMessage(message.id);

            case 2:
              data = _context4.sent;
              updateMessage(data.message);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleDeleteMessage() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleEditMessage = function handleEditMessage() {
    setEditingState(message);
  };

  var handleToggleBanUser = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      var messageUser;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              messageUser = message.user;

              if (messageUser) {
                _context5.next = 3;
                break;
              }

              return _context5.abrupt("return");

            case 3:
              if (!messageUser.banned) {
                _context5.next = 8;
                break;
              }

              _context5.next = 6;
              return client.unbanUser(messageUser.id);

            case 6:
              _context5.next = 10;
              break;

            case 8:
              _context5.next = 10;
              return client.banUser(messageUser.id);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleToggleBanUser() {
      return _ref6.apply(this, arguments);
    };
  }();

  var showMessageOverlay = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee12() {
      var _message$user5;

      var messageReactions,
          error,
          blockUser,
          copyMessage,
          deleteMessage,
          editMessage,
          flagMessage,
          handleReaction,
          muteUser,
          quotedReply,
          retry,
          threadReply,
          isThreadMessage,
          dismissOverlay,
          messageActions,
          _args12 = arguments;
      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              messageReactions = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : false;
              error = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : message.type === 'error' || message.status === 'failed';
              _context12.next = 4;
              return dismissKeyboard();

            case 4:
              blockUser = blockUserProp ? blockUserProp(message) : blockUserProp === null ? null : {
                action: function () {
                  var _action = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
                    var _message$user4;

                    return _regenerator["default"].wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            setOverlay('none');

                            if (!((_message$user4 = message.user) != null && _message$user4.id)) {
                              _context6.next = 5;
                              break;
                            }

                            if (handleBlock) {
                              handleBlock(message);
                            }

                            _context6.next = 5;
                            return handleToggleBanUser();

                          case 5:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  function action() {
                    return _action.apply(this, arguments);
                  }

                  return action;
                }(),
                icon: _react["default"].createElement(_icons.UserDelete, {
                  pathFill: grey,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 685,
                    columnNumber: 17
                  }
                }),
                title: (_message$user5 = message.user) != null && _message$user5.banned ? t('Unblock User') : t('Block User')
              };
              copyMessage = copyMessageProp ? copyMessageProp(message) : copyMessageProp === null ? null : {
                action: function action() {
                  setOverlay('none');

                  if (handleCopy) {
                    handleCopy(message);
                  }

                  _reactNative.Clipboard.setString(message.text || '');
                },
                icon: _react["default"].createElement(_icons.Copy, {
                  pathFill: grey,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 702,
                    columnNumber: 17
                  }
                }),
                title: t('Copy Message')
              };
              deleteMessage = deleteMessageProp ? deleteMessageProp(message) : deleteMessageProp === null ? null : {
                action: function action() {
                  setOverlay('alert');

                  if (message.id) {
                    _reactNative.Alert.alert(t('Delete Message'), t('Are you sure you want to permanently delete this message?'), [{
                      onPress: function onPress() {
                        return setOverlay('none');
                      },
                      text: t('Cancel')
                    }, {
                      onPress: function () {
                        var _onPress = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
                          return _regenerator["default"].wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  setOverlay('none');

                                  if (handleDelete) {
                                    handleDelete(message);
                                  }

                                  _context7.next = 4;
                                  return handleDeleteMessage();

                                case 4:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7);
                        }));

                        function onPress() {
                          return _onPress.apply(this, arguments);
                        }

                        return onPress;
                      }(),
                      style: 'destructive',
                      text: t('Delete')
                    }], {
                      cancelable: false
                    });
                  }
                },
                icon: _react["default"].createElement(_icons.Delete, {
                  pathFill: accent_red,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 736,
                    columnNumber: 17
                  }
                }),
                title: t('Delete Message'),
                titleStyle: {
                  color: accent_red
                }
              };
              editMessage = editMessageProp ? editMessageProp(message) : editMessageProp === null ? null : {
                action: function action() {
                  setOverlay('none');

                  if (handleEdit) {
                    handleEdit(message);
                  }

                  handleEditMessage();
                },
                icon: _react["default"].createElement(_icons.Edit, {
                  pathFill: grey,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 753,
                    columnNumber: 17
                  }
                }),
                title: t('Edit Message')
              };
              flagMessage = flagMessageProp ? flagMessageProp(message) : flagMessageProp === null ? null : {
                action: function action() {
                  setOverlay('alert');

                  if (message.id) {
                    _reactNative.Alert.alert(t('Flag Message'), t('Do you want to send a copy of this message to a moderator for further investigation?'), [{
                      onPress: function onPress() {
                        return setOverlay('none');
                      },
                      text: t('Cancel')
                    }, {
                      onPress: function () {
                        var _onPress2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
                          return _regenerator["default"].wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  _context8.prev = 0;

                                  if (handleFlag) {
                                    handleFlag(message);
                                  }

                                  _context8.next = 4;
                                  return client.flagMessage(message.id);

                                case 4:
                                  _reactNative.Alert.alert(t('Message flagged'), t('The message has been reported to a moderator.'), [{
                                    onPress: function onPress() {
                                      return setOverlay('none');
                                    },
                                    text: t('Dismiss')
                                  }]);

                                  _context8.next = 10;
                                  break;

                                case 7:
                                  _context8.prev = 7;
                                  _context8.t0 = _context8["catch"](0);

                                  _reactNative.Alert.alert(t('Something went wrong'), t("The operation couldn't be completed."), [{
                                    onPress: function onPress() {
                                      return setOverlay('none');
                                    },
                                    text: t('Dismiss')
                                  }]);

                                case 10:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, null, [[0, 7]]);
                        }));

                        function onPress() {
                          return _onPress2.apply(this, arguments);
                        }

                        return onPress;
                      }(),
                      text: t('Flag')
                    }], {
                      cancelable: false
                    });
                  }
                },
                icon: _react["default"].createElement(_icons.MessageFlag, {
                  pathFill: grey,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 809,
                    columnNumber: 17
                  }
                }),
                title: t('Flag Message')
              };
              handleReaction = !error ? selectReaction ? selectReaction(message) : function () {
                var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(reactionType) {
                  return _regenerator["default"].wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          if (handleReactionProp) {
                            handleReactionProp(message, reactionType);
                          }

                          _context9.next = 3;
                          return handleToggleReaction(reactionType);

                        case 3:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x4) {
                  return _ref8.apply(this, arguments);
                };
              }() : undefined;
              muteUser = muteUserProp ? muteUserProp(message) : muteUserProp === null ? null : {
                action: function () {
                  var _action2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10() {
                    var _message$user6;

                    return _regenerator["default"].wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            setOverlay('none');

                            if (!((_message$user6 = message.user) != null && _message$user6.id)) {
                              _context10.next = 5;
                              break;
                            }

                            if (handleMute) {
                              handleMute(message);
                            }

                            _context10.next = 5;
                            return handleToggleMuteUser();

                          case 5:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10);
                  }));

                  function action() {
                    return _action2.apply(this, arguments);
                  }

                  return action;
                }(),
                icon: _react["default"].createElement(_icons.Mute, {
                  pathFill: grey,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 840,
                    columnNumber: 17
                  }
                }),
                title: isMuted ? t('Unmute User') : t('Mute User')
              };
              quotedReply = quotedReplyProp ? quotedReplyProp(message) : quotedReplyProp === null ? null : {
                action: function action() {
                  setOverlay('none');

                  if (handleQuotedReply) {
                    handleQuotedReply(message);
                  }

                  handleQuotedReplyMessage();
                },
                icon: _react["default"].createElement(_icons.CurveLineLeftUp, {
                  pathFill: grey,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 856,
                    columnNumber: 17
                  }
                }),
                title: t('Reply')
              };
              retry = retryProp ? retryProp(message) : retryProp === null ? null : {
                action: function () {
                  var _action3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11() {
                    var messageWithoutReservedFields;
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            setOverlay('none');
                            messageWithoutReservedFields = (0, _removeReservedFields.removeReservedFields)(message);

                            if (handleRetry) {
                              handleRetry(messageWithoutReservedFields);
                            }

                            _context11.next = 5;
                            return handleResendMessage();

                          case 5:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  function action() {
                    return _action3.apply(this, arguments);
                  }

                  return action;
                }(),
                icon: _react["default"].createElement(_icons.SendUp, {
                  pathFill: accent_blue,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 874,
                    columnNumber: 17
                  }
                }),
                title: t('Resend')
              };
              threadReply = threadReplyProp ? threadReplyProp(message) : threadReplyProp === null ? null : {
                action: function action() {
                  setOverlay('none');

                  if (handleThreadReply) {
                    handleThreadReply(message);
                  }

                  onOpenThread();
                },
                icon: _react["default"].createElement(_icons.ThreadReply, {
                  pathFill: grey,
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 890,
                    columnNumber: 17
                  }
                }),
                title: t('Thread Reply')
              };
              isThreadMessage = threadList || !!message.parent_id;

              dismissOverlay = function dismissOverlay() {
                return setOverlay('none');
              };

              messageActions = typeof messageActionsProp !== 'function' ? messageActionsProp : messageActionsProp({
                blockUser: blockUser,
                canModifyMessage: canModifyMessage,
                copyMessage: copyMessage,
                deleteMessage: deleteMessage,
                dismissOverlay: dismissOverlay,
                editMessage: editMessage,
                error: error,
                flagMessage: flagMessage,
                isMyMessage: isMyMessage,
                isThreadMessage: isThreadMessage,
                message: message,
                messageReactions: messageReactions,
                mutesEnabled: mutesEnabled,
                muteUser: muteUser,
                quotedRepliesEnabled: quotedRepliesEnabled,
                quotedReply: quotedReply,
                retry: retry,
                threadRepliesEnabled: threadRepliesEnabled,
                threadReply: threadReply
              });
              setData({
                alignment: alignment,
                clientId: client.userID,
                files: attachments.files,
                groupStyles: groupStyles,
                handleReaction: reactionsEnabled ? handleReaction : undefined,
                images: attachments.images,
                message: message,
                messageActions: messageActions == null ? void 0 : messageActions.filter(Boolean),
                messageContext: (0, _extends2["default"])({}, messageContext, {
                  disabled: true,
                  preventPress: true
                }),
                messageReactionTitle: !error && messageReactions ? t('Message Reactions') : undefined,
                messagesContext: (0, _extends2["default"])({}, messagesContext, {
                  messageContentOrder: messageContentOrder
                }),
                onlyEmojis: onlyEmojis,
                otherAttachments: attachments.other,
                OverlayReactionList: OverlayReactionList,
                supportedReactions: supportedReactions,
                threadList: threadList
              });
              setOverlay('message');

            case 19:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function showMessageOverlay() {
      return _ref7.apply(this, arguments);
    };
  }();

  var actionHandlers = {
    deleteMessage: handleDeleteMessage,
    editMessage: handleEditMessage,
    quotedReply: handleQuotedReplyMessage,
    resendMessage: handleResendMessage,
    showMessageOverlay: showMessageOverlay,
    toggleBanUser: handleToggleBanUser,
    toggleMuteUser: handleToggleMuteUser,
    toggleReaction: handleToggleReaction
  };
  var onLongPressMessage = disabled || hasAttachmentActions ? function () {
    return null;
  } : onLongPressMessageProp ? function (payload) {
    return onLongPressMessageProp({
      actionHandlers: actionHandlers,
      defaultHandler: (payload == null ? void 0 : payload.defaultHandler) || showMessageOverlay,
      emitter: (payload == null ? void 0 : payload.emitter) || 'message',
      event: payload == null ? void 0 : payload.event,
      message: message
    });
  } : onLongPressProp ? function (payload) {
    return onLongPressProp({
      actionHandlers: actionHandlers,
      defaultHandler: (payload == null ? void 0 : payload.defaultHandler) || showMessageOverlay,
      emitter: (payload == null ? void 0 : payload.emitter) || 'message',
      event: payload == null ? void 0 : payload.event
    });
  } : enableLongPress ? function () {
    return showMessageOverlay(false);
  } : function () {
    return null;
  };

  var onDoubleTapMessage = function onDoubleTapMessage() {
    if (onDoubleTapMessageProp) {
      onDoubleTapMessageProp({
        actionHandlers: actionHandlers,
        message: message
      });
    }
  };

  var messageContext = (0, _useCreateMessageContext.useCreateMessageContext)({
    actionsEnabled: actionsEnabled,
    alignment: alignment,
    canModifyMessage: canModifyMessage,
    channel: channel,
    disabled: disabled,
    files: attachments.files,
    goToMessage: goToMessage,
    groupStyles: groupStyles,
    handleAction: handleAction,
    handleDeleteMessage: handleDeleteMessage,
    handleEditMessage: handleEditMessage,
    handleQuotedReplyMessage: handleQuotedReplyMessage,
    handleResendMessage: handleResendMessage,
    handleToggleBanUser: handleToggleBanUser,
    handleToggleMuteUser: handleToggleMuteUser,
    handleToggleReaction: handleToggleReaction,
    hasReactions: hasReactions,
    images: attachments.images,
    isMyMessage: isMyMessage,
    lastGroupMessage: (groupStyles == null ? void 0 : groupStyles[0]) === 'single' || (groupStyles == null ? void 0 : groupStyles[0]) === 'bottom',
    lastReceivedId: lastReceivedId,
    members: members,
    message: message,
    messageContentOrder: messageContentOrder,
    onLongPress: !animatedLongPress ? onLongPressMessage : function () {
      return null;
    },
    onlyEmojis: onlyEmojis,
    onOpenThread: onOpenThread,
    onPress: function onPress(payload) {
      onPressProp ? onPressProp({
        actionHandlers: actionHandlers,
        defaultHandler: payload.defaultHandler || _onPress3,
        emitter: payload.emitter || 'message',
        event: payload.event,
        message: message
      }) : onPressMessageProp ? onPressMessageProp({
        actionHandlers: actionHandlers,
        defaultHandler: payload.defaultHandler || _onPress3,
        emitter: payload.emitter || 'message',
        event: payload.event,
        message: message
      }) : payload.defaultHandler ? payload.defaultHandler() : _onPress3();
    },
    onPressIn: onPressInProp || onPressInMessageProp ? function (payload) {
      onPressInProp ? onPressInProp({
        actionHandlers: actionHandlers,
        defaultHandler: payload.defaultHandler,
        emitter: payload.emitter || 'message',
        event: payload.event,
        message: message
      }) : onPressInMessageProp && onPressInMessageProp({
        actionHandlers: actionHandlers,
        defaultHandler: payload.defaultHandler,
        emitter: payload.emitter || 'message',
        event: payload.event,
        message: message
      });
    } : null,
    otherAttachments: attachments.other,
    preventPress: preventPress,
    reactions: reactions,
    readEventsEnabled: readEventsEnabled,
    showAvatar: showAvatar,
    showMessageOverlay: showMessageOverlay,
    showMessageStatus: typeof showMessageStatus === 'boolean' ? showMessageStatus : isMyMessage,
    threadList: threadList
  });
  var onLongPressTouchable = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onFinish: function onFinish() {
      pressActive.value = false;
      (0, _reactNativeReanimated.cancelAnimation)(scale);
      scale.value = (0, _reactNativeReanimated.withTiming)(1, {
        duration: 100
      });
    },
    onStart: function onStart() {
      pressActive.value = true;
      (0, _reactNativeReanimated.cancelAnimation)(scale);
      scale.value = (0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withTiming)(1, {
        duration: 100
      }), (0, _reactNativeReanimated.withTiming)(0.98, {
        duration: 400
      }, function () {
        if (pressActive.value) {
          (0, _reactNativeReanimated.runOnJS)(onLongPressMessage)();
          (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactMedium');
        }
      }), (0, _reactNativeReanimated.withTiming)(1.02, {
        duration: 100
      }), (0, _reactNativeReanimated.withTiming)(1.0, {
        duration: 300
      }));
    }
  }, [onLongPressMessage]);
  var onDoubleTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive() {
      pressActive.value = false;
      (0, _reactNativeReanimated.cancelAnimation)(scale);
      scale.value = (0, _reactNativeReanimated.withTiming)(1, {
        duration: 100
      });
      (0, _reactNativeReanimated.runOnJS)(onDoubleTapMessage)();
    }
  }, [onDoubleTapMessage]);
  return message.deleted_at || messageContentOrder.length ? _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    enabled: animatedLongPress && !preventPress,
    maxDeltaX: 8,
    maxDurationMs: 3000,
    onGestureEvent: animatedLongPress ? onLongPressTouchable : undefined,
    waitFor: doubleTapRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    testID: "message-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1117,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    enabled: !preventPress,
    numberOfTaps: 2,
    onGestureEvent: onDoubleTap,
    ref: doubleTapRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1118,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [style, {
      backgroundColor: showUnreadUnderlay ? bg_gradient_start : undefined
    }, scaleStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [_reactNative.StyleSheet.absoluteFillObject, targetedMessageUnderlay, {
      backgroundColor: targetedMessageBackground
    }, targetedStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 13
    }
  }), _react["default"].createElement(_MessageContext.MessageProvider, {
    value: messageContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 13
    }
  }, _react["default"].createElement(MessageSimple, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 15
    }
  })))))) : null;
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevMessage$quoted_m, _nextMessage$quoted_m, _prevMessage$quoted_m2, _nextMessage$quoted_m2, _prevMessage$user, _nextMessage$user;

  var prevGoToMessage = prevProps.goToMessage,
      prevLastReceivedId = prevProps.lastReceivedId,
      prevMessage = prevProps.message,
      prevMutedUsers = prevProps.mutedUsers,
      prevShowUnreadUnderlay = prevProps.showUnreadUnderlay,
      prevT = prevProps.t,
      prevTargetedMessage = prevProps.targetedMessage;
  var nextGoToMessage = nextProps.goToMessage,
      nextLastReceivedId = nextProps.lastReceivedId,
      nextMessage = nextProps.message,
      nextMutedUsers = nextProps.mutedUsers,
      nextShowUnreadUnderlay = nextProps.showUnreadUnderlay,
      nextT = nextProps.t,
      nextTargetedMessage = nextProps.targetedMessage;
  var repliesEqual = prevMessage.reply_count === nextMessage.reply_count;
  if (!repliesEqual) return false;
  var lastReceivedIdChangedAndMatters = prevLastReceivedId !== nextLastReceivedId && (prevLastReceivedId === prevMessage.id || prevLastReceivedId === nextMessage.id || nextLastReceivedId === prevMessage.id || nextLastReceivedId === nextMessage.id);
  if (lastReceivedIdChangedAndMatters) return false;
  var goToMessageChangedAndMatters = nextMessage.quoted_message_id && prevGoToMessage !== nextGoToMessage;
  if (goToMessageChangedAndMatters) return false;
  var messageEqual = prevMessage.deleted_at === nextMessage.deleted_at && ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(prevMessage) && prevMessage.readBy) === ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(nextMessage) && nextMessage.readBy) && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text && prevMessage.updated_at === nextMessage.updated_at;
  if (!messageEqual) return false;
  var quotedMessageEqual = ((_prevMessage$quoted_m = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m.id) === ((_nextMessage$quoted_m = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m.id) && ((_prevMessage$quoted_m2 = prevMessage.quoted_message) == null ? void 0 : _prevMessage$quoted_m2.deleted_at) === ((_nextMessage$quoted_m2 = nextMessage.quoted_message) == null ? void 0 : _nextMessage$quoted_m2.deleted_at);
  if (!quotedMessageEqual) return false;
  var messageUserBannedEqual = ((_prevMessage$user = prevMessage.user) == null ? void 0 : _prevMessage$user.banned) === ((_nextMessage$user = nextMessage.user) == null ? void 0 : _nextMessage$user.banned);
  if (!messageUserBannedEqual) return false;
  var prevMessageAttachments = prevMessage.attachments;
  var nextMessageAttachments = nextMessage.attachments;
  var attachmentsEqual = Array.isArray(prevMessageAttachments) && Array.isArray(nextMessageAttachments) && prevMessageAttachments.length === nextMessageAttachments.length && prevMessageAttachments.every(function (attachment, index) {
    return attachment.type === 'image' ? attachment.image_url === nextMessageAttachments[index].image_url && attachment.thumb_url === nextMessageAttachments[index].thumb_url : attachment.type === nextMessageAttachments[index].type;
  }) || prevMessageAttachments === nextMessageAttachments;
  if (!attachmentsEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions) ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length && prevMessage.latest_reactions.every(function (_ref9, index) {
    var _nextMessage$latest_r;

    var type = _ref9.type;
    return type === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  }) : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;
  var mutedUserSame = prevMutedUsers.length === nextMutedUsers.length || prevMutedUsers.some(function (mutedUser) {
    var _prevMessage$user2;

    return mutedUser.target.id === ((_prevMessage$user2 = prevMessage.user) == null ? void 0 : _prevMessage$user2.id);
  }) === nextMutedUsers.some(function (mutedUser) {
    var _nextMessage$user2;

    return mutedUser.target.id === ((_nextMessage$user2 = nextMessage.user) == null ? void 0 : _nextMessage$user2.id);
  });
  if (!mutedUserSame) return false;
  var showUnreadUnderlayEqual = prevShowUnreadUnderlay === nextShowUnreadUnderlay;
  if (!showUnreadUnderlayEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var targetedMessageEqual = prevTargetedMessage === nextTargetedMessage;
  if (!targetedMessageEqual) return false;
  return true;
};

var MemoizedMessage = _react["default"].memo(MessageWithContext, areEqual);

var Message = function Message(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      channel = _useChannelContext.channel,
      disabled = _useChannelContext.disabled,
      enforceUniqueReaction = _useChannelContext.enforceUniqueReaction,
      isAdmin = _useChannelContext.isAdmin,
      isModerator = _useChannelContext.isModerator,
      members = _useChannelContext.members,
      readEventsEnabled = _useChannelContext.readEventsEnabled;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client,
      mutedUsers = _useChatContext.mutedUsers;

  var _useKeyboardContext = (0, _KeyboardContext.useKeyboardContext)(),
      dismissKeyboard = _useKeyboardContext.dismissKeyboard;

  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
      setData = _useMessageOverlayCon.setData;

  var messagesContext = (0, _MessagesContext.useMessagesContext)();

  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      setOverlay = _useOverlayContext.setOverlay;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      openThread = _useThreadContext.openThread;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(MemoizedMessage, (0, _extends2["default"])({}, messagesContext, {
    channel: channel,
    client: client,
    disabled: disabled,
    dismissKeyboard: dismissKeyboard,
    enforceUniqueReaction: enforceUniqueReaction,
    isAdmin: isAdmin,
    isModerator: isModerator,
    members: members,
    messagesContext: messagesContext,
    mutedUsers: mutedUsers,
    openThread: openThread,
    readEventsEnabled: readEventsEnabled,
    setData: setData,
    setOverlay: setOverlay,
    t: t
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1309,
      columnNumber: 5
    }
  }));
};

exports.Message = Message;
//# sourceMappingURL=Message.js.map