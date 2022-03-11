var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageOverlay = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _OverlayReactionList = require("./OverlayReactionList");

var _MessageTextContainer = require("../Message/MessageSimple/MessageTextContainer");

var _MessageActions = require("../MessageOverlay/MessageActions");

var _OverlayReactions = require("../MessageOverlay/OverlayReactions");

var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _utils = require("../../utils/utils");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/MessageOverlay.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  alignEnd: {
    alignItems: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-start'
  },
  center: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  containerInner: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    overflow: 'hidden'
  },
  flex: {
    flex: 1
  },
  overlayPadding: {
    padding: 8
  },
  replyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8
  },
  row: {
    flexDirection: 'row'
  },
  scrollView: {
    overflow: _reactNative.Platform.OS === 'ios' ? 'visible' : 'scroll'
  }
});

var screenHeight = (0, _utils.vh)(100);
var halfScreenHeight = (0, _utils.vh)(50);

var MessageOverlayWithContext = function MessageOverlayWithContext(props) {
  var _message$user, _message$own_reaction, _messagesContext$mess;

  var alignment = props.alignment,
      clientId = props.clientId,
      files = props.files,
      groupStyles = props.groupStyles,
      handleReaction = props.handleReaction,
      images = props.images,
      message = props.message,
      messageActions = props.messageActions,
      _props$MessageActions = props.MessageActions,
      MessageActions = _props$MessageActions === void 0 ? _MessageActions.MessageActions : _props$MessageActions,
      messageContext = props.messageContext,
      messageReactionTitle = props.messageReactionTitle,
      messagesContext = props.messagesContext,
      onlyEmojis = props.onlyEmojis,
      otherAttachments = props.otherAttachments,
      overlay = props.overlay,
      overlayOpacity = props.overlayOpacity,
      _props$OverlayReactio = props.OverlayReactionList,
      OverlayReactionList = _props$OverlayReactio === void 0 ? _OverlayReactionList.OverlayReactionList : _props$OverlayReactio,
      _props$OverlayReactio2 = props.OverlayReactions,
      OverlayReactions = _props$OverlayReactio2 === void 0 ? _OverlayReactions.OverlayReactions : _props$OverlayReactio2,
      reset = props.reset,
      setOverlay = props.setOverlay,
      threadList = props.threadList,
      visible = props.visible;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var myMessageTheme = messagesContext == null ? void 0 : messagesContext.myMessageTheme;
  var wrapMessageInTheme = clientId === (message == null ? void 0 : (_message$user = message.user) == null ? void 0 : _message$user.id) && !!myMessageTheme;

  var _useState = (0, _react.useState)(JSON.stringify(myMessageTheme)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      myMessageThemeString = _useState2[0],
      setMyMessageThemeString = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      reactionListHeight = _useState4[0],
      setReactionListHeight = _useState4[1];

  (0, _react.useEffect)(function () {
    if (myMessageTheme) {
      setMyMessageThemeString(JSON.stringify(myMessageTheme));
    }
  }, [myMessageTheme]);
  var modifiedTheme = (0, _react.useMemo)(function () {
    return (0, _ThemeContext.mergeThemes)({
      style: myMessageTheme,
      theme: theme
    });
  }, [myMessageThemeString, theme]);

  var _ref = wrapMessageInTheme ? modifiedTheme : theme,
      _ref$colors = _ref.colors,
      blue_alice = _ref$colors.blue_alice,
      grey_gainsboro = _ref$colors.grey_gainsboro,
      grey_whisper = _ref$colors.grey_whisper,
      transparent = _ref$colors.transparent,
      white_smoke = _ref$colors.white_smoke,
      _ref$messageSimple$co = _ref.messageSimple.content,
      _ref$messageSimple$co2 = _ref$messageSimple$co.container,
      borderRadiusL = _ref$messageSimple$co2.borderRadiusL,
      borderRadiusS = _ref$messageSimple$co2.borderRadiusS,
      containerInner = _ref$messageSimple$co.containerInner,
      replyContainer = _ref$messageSimple$co.replyContainer;

  var messageHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  var messageLayout = (0, _reactNativeReanimated.useSharedValue)({
    x: 0,
    y: 0
  });
  var messageWidth = (0, _reactNativeReanimated.useSharedValue)(0);
  var offsetY = (0, _reactNativeReanimated.useSharedValue)(0);
  var translateY = (0, _reactNativeReanimated.useSharedValue)(0);
  var scale = (0, _reactNativeReanimated.useSharedValue)(1);
  var showScreen = (0, _reactNativeReanimated.useSharedValue)(0);

  var fadeScreen = function fadeScreen(show) {
    'worklet';

    if (show) {
      offsetY.value = 0;
      translateY.value = 0;
      scale.value = 1;
    }

    showScreen.value = show ? (0, _reactNativeReanimated.withSpring)(1, {
      damping: 600,
      mass: 0.5,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
      stiffness: 200,
      velocity: 32
    }) : (0, _reactNativeReanimated.withTiming)(0, {
      duration: 150,
      easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
    }, function () {
      if (!show) {
        (0, _reactNativeReanimated.runOnJS)(reset)();
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (visible) {
      _reactNative.Keyboard.dismiss();
    }

    fadeScreen(!!visible);
  }, [visible]);
  var onPan = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      translateY.value = offsetY.value + evt.translationY;
      overlayOpacity.value = (0, _reactNativeReanimated.interpolate)(translateY.value, [0, halfScreenHeight], [1, 0.75], _reactNativeReanimated.Extrapolate.CLAMP);
      scale.value = (0, _reactNativeReanimated.interpolate)(translateY.value, [0, halfScreenHeight], [1, 0.85], _reactNativeReanimated.Extrapolate.CLAMP);
    },
    onFinish: function onFinish(evt) {
      var finalYPosition = evt.translationY + evt.velocityY * 0.1;

      if (finalYPosition > halfScreenHeight && translateY.value > 0) {
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(0, {
          duration: 200,
          easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
        }, function () {
          (0, _reactNativeReanimated.runOnJS)(setOverlay)('none');
        });
        translateY.value = evt.velocityY > 1000 ? (0, _reactNativeReanimated.withDecay)({
          velocity: evt.velocityY
        }) : (0, _reactNativeReanimated.withTiming)(screenHeight, {
          duration: 200,
          easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
        });
      } else {
        translateY.value = (0, _reactNativeReanimated.withTiming)(0);
        scale.value = (0, _reactNativeReanimated.withTiming)(1);
        overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(1);
      }
    },
    onStart: function onStart() {
      (0, _reactNativeReanimated.cancelAnimation)(translateY);
      offsetY.value = translateY.value;
    }
  });
  var panStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: translateY.value
      }, {
        scale: scale.value
      }]
    };
  });
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [messageHeight.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [alignment === 'left' ? -messageWidth.value / 2 : messageWidth.value / 2, 0])
      }, {
        scale: showScreen.value
      }]
    };
  }, [alignment]);
  var groupStyle = alignment + "_" + ((groupStyles == null ? void 0 : groupStyles[0]) || 'bottom').toLowerCase();
  var hasThreadReplies = !!(message != null && message.reply_count);

  var _ref2 = messagesContext || {},
      Attachment = _ref2.Attachment,
      FileAttachmentGroup = _ref2.FileAttachmentGroup,
      Gallery = _ref2.Gallery,
      MessageAvatar = _ref2.MessageAvatar,
      Reply = _ref2.Reply;

  return _react["default"].createElement(_MessagesContext.MessagesProvider, {
    value: messagesContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 5
    }
  }, _react["default"].createElement(_MessageContext.MessageProvider, {
    value: messageContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, _react["default"].createElement(_ThemeContext.ThemeProvider, {
    mergedStyle: wrapMessageInTheme ? modifiedTheme : theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    pointerEvents: visible ? 'auto' : 'none',
    style: _reactNative.StyleSheet.absoluteFillObject,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeGestureHandler.PanGestureHandler, {
    enabled: overlay === 'message',
    maxPointers: 1,
    minDist: 10,
    onGestureEvent: onPan,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [_reactNative.StyleSheet.absoluteFillObject],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }, _react["default"].createElement(_reactNative.SafeAreaView, {
    style: styles.flex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 17
    }
  }, _react["default"].createElement(_reactNativeGestureHandler.ScrollView, {
    alwaysBounceVertical: false,
    contentContainerStyle: [styles.center, {
      paddingTop: reactionListHeight
    }],
    showsVerticalScrollIndicator: false,
    style: [styles.flex, styles.scrollView],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 19
    }
  }, _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    maxDist: 32,
    onHandlerStateChange: function onHandlerStateChange(_ref3) {
      var state = _ref3.nativeEvent.state;

      if (state === _reactNativeGestureHandler.State.END) {
        setOverlay('none');
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [styles.flex, panStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 23
    }
  }, message && _react["default"].createElement(_reactNative.View, {
    style: [styles.center, styles.overlayPadding, alignment === 'left' ? styles.alignStart : styles.alignEnd],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 27
    }
  }, handleReaction ? _react["default"].createElement(OverlayReactionList, {
    messageLayout: messageLayout,
    ownReactionTypes: (message == null ? void 0 : (_message$own_reaction = message.own_reactions) == null ? void 0 : _message$own_reaction.map(function (reaction) {
      return reaction.type;
    })) || [],
    setReactionListHeight: setReactionListHeight,
    showScreen: showScreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 31
    }
  }) : null, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    onLayout: function onLayout(_ref4) {
      var _ref4$nativeEvent$lay = _ref4.nativeEvent.layout,
          layoutHeight = _ref4$nativeEvent$lay.height,
          layoutWidth = _ref4$nativeEvent$lay.width,
          x = _ref4$nativeEvent$lay.x,
          y = _ref4$nativeEvent$lay.y;
      messageLayout.value = {
        x: alignment === 'left' ? x + layoutWidth : x,
        y: y
      };
      messageWidth.value = layoutWidth;
      messageHeight.value = layoutHeight;
    },
    style: [styles.alignEnd, styles.row, showScreenStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 29
    }
  }, alignment === 'left' && MessageAvatar && _react["default"].createElement(MessageAvatar, {
    alignment: alignment,
    message: message,
    showAvatar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 33
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.containerInner, {
      backgroundColor: onlyEmojis && !message.quoted_message ? transparent : otherAttachments != null && otherAttachments.length ? otherAttachments[0].type === 'giphy' ? !message.quoted_message ? transparent : grey_gainsboro : blue_alice : alignment === 'left' ? white_smoke : grey_gainsboro,
      borderBottomLeftRadius: (groupStyle === 'left_bottom' || groupStyle === 'left_single') && (!hasThreadReplies || threadList) ? borderRadiusS : borderRadiusL,
      borderBottomRightRadius: (groupStyle === 'right_bottom' || groupStyle === 'right_single') && (!hasThreadReplies || threadList) ? borderRadiusS : borderRadiusL,
      borderColor: grey_whisper
    }, onlyEmojis && !message.quoted_message || otherAttachments != null && otherAttachments.length ? {
      borderWidth: 0
    } : {}, containerInner],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 31
    }
  }, messagesContext == null ? void 0 : (_messagesContext$mess = messagesContext.messageContentOrder) == null ? void 0 : _messagesContext$mess.map(function (messageContentType, messageContentOrderIndex) {
    switch (messageContentType) {
      case 'quoted_reply':
        return (messagesContext == null ? void 0 : messagesContext.quotedRepliesEnabled) && message.quoted_message && Reply && _react["default"].createElement(_reactNative.View, {
          key: "quoted_reply_" + messageContentOrderIndex,
          style: [styles.replyContainer, replyContainer],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425,
            columnNumber: 45
          }
        }, _react["default"].createElement(Reply, {
          quotedMessage: message.quoted_message,
          styles: {
            messageContainer: {
              maxWidth: (0, _utils.vw)(60)
            }
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 47
          }
        }));

      case 'attachments':
        return otherAttachments == null ? void 0 : otherAttachments.map(function (attachment, attachmentIndex) {
          return Attachment && _react["default"].createElement(Attachment, {
            attachment: attachment,
            key: message.id + "-" + attachmentIndex,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 47
            }
          });
        });

      case 'files':
        return FileAttachmentGroup && _react["default"].createElement(FileAttachmentGroup, {
          files: files,
          key: "file_attachment_group_" + messageContentOrderIndex,
          messageId: message.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 463,
            columnNumber: 45
          }
        });

      case 'gallery':
        return Gallery && _react["default"].createElement(Gallery, {
          alignment: alignment,
          groupStyles: groupStyles,
          hasThreadReplies: !!(message != null && message.reply_count),
          images: images,
          key: "gallery_" + messageContentOrderIndex,
          messageId: message.id,
          messageText: message.text,
          threadList: threadList,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 473,
            columnNumber: 45
          }
        });

      case 'text':
      default:
        return otherAttachments != null && otherAttachments.length && otherAttachments[0].actions ? null : _react["default"].createElement(_MessageTextContainer.MessageTextContainer, {
          key: "message_text_container_" + messageContentOrderIndex,
          message: message,
          messageOverlay: true,
          onlyEmojis: onlyEmojis,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 489,
            columnNumber: 43
          }
        });
    }
  }))), messageActions && _react["default"].createElement(MessageActions, {
    showScreen: showScreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 48
    }
  }), !!messageReactionTitle && message.latest_reactions && message.latest_reactions.length > 0 ? _react["default"].createElement(OverlayReactions, {
    alignment: alignment,
    reactions: message.latest_reactions.map(function (reaction) {
      var _reaction$user, _reaction$user2, _reaction$user3;

      return {
        alignment: clientId && clientId === ((_reaction$user = reaction.user) == null ? void 0 : _reaction$user.id) ? 'right' : 'left',
        image: reaction == null ? void 0 : (_reaction$user2 = reaction.user) == null ? void 0 : _reaction$user2.image,
        name: (reaction == null ? void 0 : (_reaction$user3 = reaction.user) == null ? void 0 : _reaction$user3.name) || reaction.user_id || '',
        type: reaction.type
      };
    }),
    showScreen: showScreen,
    supportedReactions: messagesContext == null ? void 0 : messagesContext.supportedReactions,
    title: messageReactionTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 31
    }
  }) : null)))))))))));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevAlignment = prevProps.alignment,
      prevMessage = prevProps.message,
      prevMessageReactionTitle = prevProps.messageReactionTitle,
      prevVisible = prevProps.visible;
  var nextAlignment = nextProps.alignment,
      nextMessage = nextProps.message,
      nextMessageReactionTitle = nextProps.messageReactionTitle,
      nextVisible = nextProps.visible;
  var visibleEqual = prevVisible === nextVisible;
  if (!visibleEqual) return false;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  var messageReactionTitleEqual = prevMessageReactionTitle === nextMessageReactionTitle;
  if (!messageReactionTitleEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage == null ? void 0 : prevMessage.latest_reactions) && Array.isArray(nextMessage == null ? void 0 : nextMessage.latest_reactions) ? (prevMessage == null ? void 0 : prevMessage.latest_reactions.length) === (nextMessage == null ? void 0 : nextMessage.latest_reactions.length) && (prevMessage == null ? void 0 : prevMessage.latest_reactions.every(function (_ref5, index) {
    var _nextMessage$latest_r;

    var type = _ref5.type;
    return type === (nextMessage == null ? void 0 : (_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  })) : (prevMessage == null ? void 0 : prevMessage.latest_reactions) === (nextMessage == null ? void 0 : nextMessage.latest_reactions);
  if (!latestReactionsEqual) return false;
  return true;
};

var MemoizedMessageOverlay = _react["default"].memo(MessageOverlayWithContext, areEqual);

var MessageOverlay = function MessageOverlay(props) {
  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
      data = _useMessageOverlayCon.data,
      MessageActions = _useMessageOverlayCon.MessageActions,
      OverlayReactionList = _useMessageOverlayCon.OverlayReactionList,
      OverlayReactions = _useMessageOverlayCon.OverlayReactions,
      reset = _useMessageOverlayCon.reset;

  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      overlay = _useOverlayContext.overlay,
      setOverlay = _useOverlayContext.setOverlay;

  var componentProps = {
    MessageActions: props.MessageActions || MessageActions,
    OverlayReactionList: props.OverlayReactionList || OverlayReactionList || (data == null ? void 0 : data.OverlayReactionList),
    OverlayReactions: props.OverlayReactions || OverlayReactions
  };
  return _react["default"].createElement(MemoizedMessageOverlay, (0, _extends2["default"])({}, data || {}, {
    overlay: overlay,
    reset: reset,
    setOverlay: setOverlay
  }, props, componentProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 5
    }
  }));
};

exports.MessageOverlay = MessageOverlay;
//# sourceMappingURL=MessageOverlay.js.map