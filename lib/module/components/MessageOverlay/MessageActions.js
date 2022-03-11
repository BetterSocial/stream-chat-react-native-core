var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageActions = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeGestureHandler = require("react-native-gesture-handler");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/MessageActions.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 1
  },
  container: {
    borderRadius: 16,
    marginTop: 8,
    maxWidth: 275
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minWidth: (0, _utils.vw)(65),
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  titleStyle: {
    paddingLeft: 20
  }
});

var MessageAction = function MessageAction(props) {
  var action = props.action,
      icon = props.icon,
      index = props.index,
      length = props.length,
      title = props.title,
      titleStyle = props.titleStyle;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme$color = _useTheme.theme.colors,
      black = _useTheme$theme$color.black,
      border = _useTheme$theme$color.border;

  var opacity = (0, _reactNativeReanimated.useSharedValue)(1);
  var onTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onEnd: function onEnd() {
      (0, _reactNativeReanimated.runOnJS)(action)();
    },
    onFinish: function onFinish() {
      opacity.value = 1;
    },
    onStart: function onStart() {
      opacity.value = 0.2;
    }
  }, [action]);
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value
    };
  });
  return _react["default"].createElement(_reactNativeGestureHandler.TapGestureHandler, {
    onHandlerStateChange: onTap,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNativeReanimated["default"].View, {
    style: [styles.row, index !== length - 1 ? (0, _extends2["default"])({}, styles.bottomBorder, {
      borderBottomColor: border
    }) : {}, animatedStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, icon, _react["default"].createElement(_reactNative.Text, {
    style: [styles.titleStyle, {
      color: black
    }, titleStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, title)));
};

var messageActionIsEqual = function messageActionIsEqual(prevProps, nextProps) {
  return prevProps.length === nextProps.length;
};

var MemoizedMessageAction = _react["default"].memo(MessageAction, messageActionIsEqual);

var MessageActionsWithContext = function MessageActionsWithContext(props) {
  var alignment = props.alignment,
      messageActions = props.messageActions,
      showScreen = props.showScreen;

  var _useTheme2 = (0, _ThemeContext.useTheme)(),
      white_snow = _useTheme2.theme.colors.white_snow;

  var height = (0, _reactNativeReanimated.useSharedValue)(0);
  var width = (0, _reactNativeReanimated.useSharedValue)(0);
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [-height.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [alignment === 'left' ? -width.value / 2 : width.value / 2, 0])
      }, {
        scale: showScreen.value
      }]
    };
  }, [alignment]);
  return _react["default"].createElement(_reactNativeReanimated["default"].View, {
    onLayout: function onLayout(_ref) {
      var layout = _ref.nativeEvent.layout;
      width.value = layout.width;
      height.value = layout.height;
    },
    style: [styles.container, {
      backgroundColor: white_snow
    }, showScreenStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, messageActions == null ? void 0 : messageActions.map(function (messageAction, index) {
    return _react["default"].createElement(MemoizedMessageAction, (0, _extends2["default"])({
      key: messageAction.title
    }, (0, _extends2["default"])({}, messageAction, {
      index: index,
      length: messageActions.length
    }), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }));
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevAlignment = prevProps.alignment,
      prevMessageActions = prevProps.messageActions;
  var nextAlignment = nextProps.alignment,
      nextMessageActions = nextProps.messageActions;
  var messageActionsEqual = (prevMessageActions == null ? void 0 : prevMessageActions.length) === (nextMessageActions == null ? void 0 : nextMessageActions.length);
  if (!messageActionsEqual) return false;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  return true;
};

var MemoizedMessageActions = _react["default"].memo(MessageActionsWithContext, areEqual);

var MessageActions = function MessageActions(props) {
  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
      data = _useMessageOverlayCon.data;

  var _ref2 = data || {},
      alignment = _ref2.alignment,
      messageActions = _ref2.messageActions;

  return _react["default"].createElement(MemoizedMessageActions, (0, _extends2["default"])({
    alignment: alignment,
    messageActions: messageActions
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 10
    }
  }));
};

exports.MessageActions = MessageActions;
//# sourceMappingURL=MessageActions.js.map