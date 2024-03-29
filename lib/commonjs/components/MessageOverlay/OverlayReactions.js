var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayReactions = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _Avatar = require("../Avatar/Avatar");

var _icons = require("../../icons");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/OverlayReactions.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  avatarContainer: {
    padding: 8
  },
  avatarInnerContainer: {
    alignSelf: 'center'
  },
  avatarName: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    paddingTop: 6,
    textAlign: 'center'
  },
  avatarNameContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1
  },
  container: {
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 8,
    width: '100%'
  },
  flatListContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  flatListContentContainer: {
    alignItems: 'center',
    paddingBottom: 12
  },
  reactionBubble: {
    alignItems: 'center',
    borderRadius: 24,
    justifyContent: 'center',
    position: 'absolute'
  },
  reactionBubbleBackground: {
    borderRadius: 24,
    height: 24,
    position: 'absolute',
    width: 24
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 16
  }
});

var reactionData = [{
  Icon: _icons.LoveReaction,
  type: 'love'
}, {
  Icon: _icons.ThumbsUpReaction,
  type: 'like'
}, {
  Icon: _icons.ThumbsDownReaction,
  type: 'sad'
}, {
  Icon: _icons.LOLReaction,
  type: 'haha'
}, {
  Icon: _icons.WutReaction,
  type: 'wow'
}];

var ReactionIcon = function ReactionIcon(_ref) {
  var _supportedReactions$f;

  var pathFill = _ref.pathFill,
      size = _ref.size,
      supportedReactions = _ref.supportedReactions,
      type = _ref.type;
  var Icon = ((_supportedReactions$f = supportedReactions.find(function (reaction) {
    return reaction.type === type;
  })) == null ? void 0 : _supportedReactions$f.Icon) || _icons.Unknown;
  return _react["default"].createElement(Icon, {
    height: size,
    pathFill: pathFill,
    width: size,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }
  });
};

var OverlayReactions = function OverlayReactions(props) {
  var overlayAlignment = props.alignment,
      reactions = props.reactions,
      _props$supportedReact = props.supportedReactions,
      supportedReactions = _props$supportedReact === void 0 ? reactionData : _props$supportedReact,
      showScreen = props.showScreen,
      title = props.title;
  var layoutHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  var layoutWidth = (0, _reactNativeReanimated.useSharedValue)(0);

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      black = _useTheme$theme$color.black,
      grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
      white = _useTheme$theme$color.white,
      _useTheme$theme$overl = _useTheme$theme.overlay,
      overlayPadding = _useTheme$theme$overl.padding,
      _useTheme$theme$overl2 = _useTheme$theme$overl.reactions,
      avatarContainer = _useTheme$theme$overl2.avatarContainer,
      avatarName = _useTheme$theme$overl2.avatarName,
      avatarSize = _useTheme$theme$overl2.avatarSize,
      container = _useTheme$theme$overl2.container,
      flatListContainer = _useTheme$theme$overl2.flatListContainer,
      radius = _useTheme$theme$overl2.radius,
      reactionBubble = _useTheme$theme$overl2.reactionBubble,
      reactionBubbleBackground = _useTheme$theme$overl2.reactionBubbleBackground,
      titleStyle = _useTheme$theme$overl2.title;

  var width = (0, _reactNative.useWindowDimensions)().width;
  var height = (0, _reactNative.useWindowDimensions)().height;
  var supportedReactionTypes = supportedReactions.map(function (supportedReaction) {
    return supportedReaction.type;
  });
  var filteredReactions = reactions.filter(function (reaction) {
    return supportedReactionTypes.includes(reaction.type);
  });
  var numColumns = Math.floor((width - overlayPadding * 2 - ((Number(flatListContainer.paddingHorizontal || 0) || styles.flatListContainer.paddingHorizontal) + (Number(avatarContainer.padding || 0) || styles.avatarContainer.padding)) * 2) / (avatarSize + (Number(avatarContainer.padding || 0) || styles.avatarContainer.padding) * 2));
  var maxHeight = Math.floor(height - overlayPadding * 2 - ((Number(flatListContainer.paddingVertical || 0) || styles.flatListContainer.paddingVertical) + (Number(avatarContainer.padding || 0) || styles.avatarContainer.padding)) * 2);

  var renderItem = function renderItem(_ref2) {
    var _ref2$item = _ref2.item,
        _ref2$item$alignment = _ref2$item.alignment,
        alignment = _ref2$item$alignment === void 0 ? 'left' : _ref2$item$alignment,
        image = _ref2$item.image,
        name = _ref2$item.name,
        type = _ref2$item.type;
    var x = avatarSize / 2 - avatarSize / (radius * 4) * (alignment === 'left' ? 1 : -1);
    var y = avatarSize - radius;
    var left = alignment === 'left' ? x - (Number(reactionBubbleBackground.width || 0) || styles.reactionBubbleBackground.width) + radius : x - radius;
    var top = y - radius - (Number(reactionBubbleBackground.height || 0) || styles.reactionBubbleBackground.height);
    return _react["default"].createElement(_reactNative.View, {
      style: [styles.avatarContainer, avatarContainer],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 7
      }
    }, _react["default"].createElement(_reactNative.View, {
      style: styles.avatarInnerContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }
    }, _react["default"].createElement(_Avatar.Avatar, {
      image: image,
      name: name,
      size: avatarSize,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }), _react["default"].createElement(_reactNative.View, {
      style: [_reactNative.StyleSheet.absoluteFill],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }
    }, _react["default"].createElement(_reactNativeSvg["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, _react["default"].createElement(_reactNativeSvg.Circle, {
      cx: x - (radius * 2 - radius / 4) * (alignment === 'left' ? 1 : -1),
      cy: y - radius * 2 - radius / 4,
      fill: alignment === 'left' ? grey_gainsboro : white,
      r: radius * 2,
      stroke: alignment === 'left' ? white : grey_gainsboro,
      strokeWidth: radius / 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 15
      }
    }), _react["default"].createElement(_reactNativeSvg.Circle, {
      cx: x,
      cy: y,
      fill: alignment === 'left' ? grey_gainsboro : white,
      r: radius,
      stroke: alignment === 'left' ? white : grey_gainsboro,
      strokeWidth: radius / 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 15
      }
    })), _react["default"].createElement(_reactNative.View, {
      style: [styles.reactionBubbleBackground, {
        backgroundColor: alignment === 'left' ? grey_gainsboro : white,
        borderColor: alignment === 'left' ? white : grey_gainsboro,
        borderWidth: radius / 2,
        left: left,
        top: top
      }, reactionBubbleBackground],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }), _react["default"].createElement(_reactNative.View, {
      style: [_reactNative.StyleSheet.absoluteFill],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }
    }, _react["default"].createElement(_reactNativeSvg["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 15
      }
    }, _react["default"].createElement(_reactNativeSvg.Circle, {
      cx: x - (radius * 2 - radius / 4) * (alignment === 'left' ? 1 : -1),
      cy: y - radius * 2 - radius / 4,
      fill: alignment === 'left' ? grey_gainsboro : white,
      r: radius * 2 - radius / 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }
    }))), _react["default"].createElement(_reactNative.View, {
      style: [styles.reactionBubble, {
        backgroundColor: alignment === 'left' ? grey_gainsboro : white,
        height: (reactionBubble.borderRadius || styles.reactionBubble.borderRadius) - radius / 2,
        left: left,
        top: top,
        width: (reactionBubble.borderRadius || styles.reactionBubble.borderRadius) - radius / 2
      }, reactionBubble],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 13
      }
    }, _react["default"].createElement(ReactionIcon, {
      pathFill: accent_blue,
      size: (reactionBubble.borderRadius || styles.reactionBubble.borderRadius) / 2,
      supportedReactions: supportedReactions,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 15
      }
    })))), _react["default"].createElement(_reactNative.View, {
      style: styles.avatarNameContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 9
      }
    }, _react["default"].createElement(_reactNative.Text, {
      style: [styles.avatarName, {
        color: black
      }, avatarName],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 11
      }
    }, name)));
  };

  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [-layoutHeight.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [overlayAlignment === 'left' ? -layoutWidth.value / 2 : layoutWidth.value / 2, 0])
      }, {
        scale: showScreen.value
      }]
    };
  }, [overlayAlignment]);
  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    onLayout: function onLayout(_ref3) {
      var layout = _ref3.nativeEvent.layout;
      layoutWidth.value = layout.width;
      layoutHeight.value = layout.height;
    },
    style: [styles.container, {
      backgroundColor: white
    }, container, showScreenStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.title, {
      color: black
    }, titleStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, title), _react["default"].createElement(_reactNativeGestureHandler.FlatList, {
    contentContainerStyle: styles.flatListContentContainer,
    data: filteredReactions,
    keyExtractor: function keyExtractor(_ref4, index) {
      var name = _ref4.name;
      return name + "_" + index;
    },
    numColumns: numColumns,
    renderItem: renderItem,
    style: [styles.flatListContainer, flatListContainer, {
      maxHeight: maxHeight / numColumns
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }
  }));
};

exports.OverlayReactions = OverlayReactions;
OverlayReactions.displayName = 'OverlayReactions{overlay{reactions}}';
//# sourceMappingURL=OverlayReactions.js.map