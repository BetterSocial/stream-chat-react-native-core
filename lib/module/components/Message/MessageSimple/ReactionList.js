var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _MessageContext = require("../../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _Unknown = require("../../../icons/Unknown");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/ReactionList.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  container: {
    left: 0,
    position: 'absolute',
    top: 0
  },
  reactionBubble: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute'
  },
  reactionBubbleBackground: {
    position: 'absolute'
  }
});

var Icon = function Icon(_ref) {
  var _supportedReactions$f;

  var pathFill = _ref.pathFill,
      size = _ref.size,
      style = _ref.style,
      supportedReactions = _ref.supportedReactions,
      type = _ref.type;
  var ReactionIcon = ((_supportedReactions$f = supportedReactions.find(function (reaction) {
    return reaction.type === type;
  })) == null ? void 0 : _supportedReactions$f.Icon) || _Unknown.Unknown;
  var scale = (0, _reactNativeReanimated.useSharedValue)(0);

  var showReaction = function showReaction() {
    'worklet';

    scale.value = (0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withDelay)(250, (0, _reactNativeReanimated.withTiming)(0.5, {
      duration: 100
    })), (0, _reactNativeReanimated.withTiming)(1.5, {
      duration: 400
    }), (0, _reactNativeReanimated.withTiming)(1, {
      duration: 500
    }));
  };

  (0, _react.useEffect)(function () {
    showReaction();
  }, []);
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        scale: scale.value
      }]
    };
  }, []);
  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: animatedStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, _react["default"].createElement(ReactionIcon, {
    height: size,
    pathFill: pathFill,
    style: style,
    width: size,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
};

var ReactionListWithContext = function ReactionListWithContext(props) {
  var alignment = props.alignment,
      propFill = props.fill,
      messageContentWidth = props.messageContentWidth,
      _onLongPress = props.onLongPress,
      _onPress = props.onPress,
      _onPressIn = props.onPressIn,
      preventPress = props.preventPress,
      propRadius = props.radius,
      reactions = props.reactions,
      propReactionSize = props.reactionSize,
      showMessageOverlay = props.showMessageOverlay,
      propStroke = props.stroke,
      propStrokeSize = props.strokeSize,
      supportedReactions = props.supportedReactions;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      grey = _useTheme$theme$color.grey,
      grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
      grey_whisper = _useTheme$theme$color.grey_whisper,
      white = _useTheme$theme$color.white,
      _useTheme$theme$messa = _useTheme$theme.messageSimple,
      _useTheme$theme$messa2 = _useTheme$theme$messa.avatarWrapper,
      leftAlign = _useTheme$theme$messa2.leftAlign,
      spacer = _useTheme$theme$messa2.spacer,
      _useTheme$theme$messa3 = _useTheme$theme$messa.reactionList,
      container = _useTheme$theme$messa3.container,
      middleIcon = _useTheme$theme$messa3.middleIcon,
      themeRadius = _useTheme$theme$messa3.radius,
      reactionBubble = _useTheme$theme$messa3.reactionBubble,
      reactionBubbleBackground = _useTheme$theme$messa3.reactionBubbleBackground,
      themeReactionSize = _useTheme$theme$messa3.reactionSize,
      themeStrokeSize = _useTheme$theme$messa3.strokeSize,
      screenPadding = _useTheme$theme.screenPadding;

  var opacity = (0, _reactNativeReanimated.useSharedValue)(0);
  var width = (0, _reactNative.useWindowDimensions)().width;
  var supportedReactionTypes = supportedReactions.map(function (supportedReaction) {
    return supportedReaction.type;
  });
  var hasSupportedReactions = reactions.some(function (reaction) {
    return supportedReactionTypes.includes(reaction.type);
  });

  var showReactions = function showReactions(show) {
    'worklet';

    opacity.value = show ? (0, _reactNativeReanimated.withDelay)(250, (0, _reactNativeReanimated.withTiming)(1, {
      duration: 500
    })) : 0;
  };

  (0, _react.useEffect)(function () {
    showReactions(hasSupportedReactions && messageContentWidth !== 0);
  }, [hasSupportedReactions, messageContentWidth]);
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value
    };
  }, []);

  if (!hasSupportedReactions || messageContentWidth === 0) {
    return null;
  }

  var alignmentLeft = alignment === 'left';
  var fill = propFill || alignmentLeft ? grey_gainsboro : grey_whisper;
  var radius = propRadius || themeRadius;
  var reactionSize = propReactionSize || themeReactionSize;
  var stroke = propStroke || white;
  var strokeSize = propStrokeSize || themeStrokeSize;
  var x1 = alignmentLeft ? messageContentWidth + (Number(leftAlign.marginRight) || 0) + (Number(spacer.width) || 0) - radius * 0.5 : width - screenPadding * 2 - messageContentWidth;
  var x2 = x1 + radius * 2 * (alignmentLeft ? 1 : -1);
  var y1 = reactionSize + radius * 2;
  var y2 = reactionSize - radius;
  var insideLeftBound = x2 - reactionSize * reactions.length / 2 > screenPadding;
  var insideRightBound = x2 + strokeSize + reactionSize * reactions.length / 2 < width - screenPadding * 2;
  var left = reactions.length === 1 ? x1 + (alignmentLeft ? -radius : radius - reactionSize) : !insideLeftBound ? screenPadding : !insideRightBound ? width - screenPadding * 2 - reactionSize * reactions.length - strokeSize : x2 - reactionSize * reactions.length / 2 - strokeSize;
  return _react["default"].createElement(_reactNative.TouchableOpacity, {
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'reactionList',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          defaultHandler: function defaultHandler() {
            return showMessageOverlay(true);
          },
          emitter: 'reactionList',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          defaultHandler: function defaultHandler() {
            return showMessageOverlay(true);
          },
          emitter: 'reactionList',
          event: event
        });
      }
    },
    style: [styles.container, {
      height: reactionSize + radius * 5,
      width: width
    }, container],
    testID: "reaction-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }
  }, reactions.length ? _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [_reactNative.StyleSheet.absoluteFill, animatedStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeSvg["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeSvg.Circle, {
    cx: x1,
    cy: y1,
    fill: stroke,
    r: radius + strokeSize * 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNativeSvg.Circle, {
    cx: x2,
    cy: y2,
    fill: stroke,
    r: radius * 2 + strokeSize * 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNativeSvg.Circle, {
    cx: x1,
    cy: y1,
    fill: fill,
    r: radius + strokeSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNativeSvg.Circle, {
    cx: x2,
    cy: y2,
    fill: fill,
    r: radius * 2 + strokeSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNativeSvg.Circle, {
    cx: x1,
    cy: y1,
    fill: alignmentLeft ? fill : stroke,
    r: radius,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNativeSvg.Circle, {
    cx: x2,
    cy: y2,
    fill: alignmentLeft ? fill : stroke,
    r: radius * 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 13
    }
  })), _react["default"].createElement(_reactNative.View, {
    style: [styles.reactionBubbleBackground, {
      backgroundColor: alignmentLeft ? fill : stroke,
      borderColor: fill,
      borderRadius: reactionSize,
      borderWidth: strokeSize,
      height: reactionSize,
      left: left,
      width: reactionSize * reactions.length
    }, reactionBubbleBackground],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeSvg["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNativeSvg.Circle, {
    cx: x2,
    cy: y2,
    fill: alignmentLeft ? fill : stroke,
    r: radius * 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }))), _react["default"].createElement(_reactNative.View, {
    style: [styles.reactionBubble, {
      backgroundColor: alignmentLeft ? fill : stroke,
      borderRadius: reactionSize - strokeSize * 2,
      height: reactionSize - strokeSize * 2,
      left: left + strokeSize,
      top: strokeSize,
      width: reactionSize * reactions.length - strokeSize * 2
    }, reactionBubble],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 11
    }
  }, reactions.map(function (reaction) {
    return _react["default"].createElement(Icon, {
      key: reaction.type,
      pathFill: reaction.own ? accent_blue : grey,
      size: reactionSize / 2,
      style: middleIcon,
      supportedReactions: supportedReactions,
      type: reaction.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 15
      }
    });
  }))) : null);
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessageContentWidth = prevProps.messageContentWidth,
      prevReactions = prevProps.reactions;
  var nextMessageContentWidth = nextProps.messageContentWidth,
      nextReactions = nextProps.reactions;
  var messageContentWidthEqual = prevMessageContentWidth === nextMessageContentWidth;
  if (!messageContentWidthEqual) return false;
  var reactionsEqual = prevReactions.length === nextReactions.length && prevReactions.every(function (latestReaction, index) {
    return nextReactions[index].own === latestReaction.own && nextReactions[index].type === latestReaction.type;
  });
  if (!reactionsEqual) return false;
  return true;
};

var MemoizedReactionList = _react["default"].memo(ReactionListWithContext, areEqual);

var ReactionList = function ReactionList(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      alignment = _useMessageContext.alignment,
      onLongPress = _useMessageContext.onLongPress,
      onPress = _useMessageContext.onPress,
      onPressIn = _useMessageContext.onPressIn,
      preventPress = _useMessageContext.preventPress,
      reactions = _useMessageContext.reactions,
      showMessageOverlay = _useMessageContext.showMessageOverlay;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      supportedReactions = _useMessagesContext.supportedReactions;

  return _react["default"].createElement(MemoizedReactionList, (0, _extends2["default"])({
    alignment: alignment,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress,
    reactions: reactions,
    showMessageOverlay: showMessageOverlay,
    supportedReactions: supportedReactions
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 5
    }
  }));
};

exports.ReactionList = ReactionList;
//# sourceMappingURL=ReactionList.js.map