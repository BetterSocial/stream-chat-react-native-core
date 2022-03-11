var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadFooterComponent = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _ThreadContext = require("../../../contexts/threadContext/ThreadContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var _utils = require("../../../utils/utils");

var _excluded = ["backgroundGradientStart", "backgroundGradientStop", "text"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Thread/components/ThreadFooterComponent.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  absolute: {
    position: 'absolute'
  },
  messagePadding: {
    paddingHorizontal: 8
  },
  newThread: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    marginTop: 8
  },
  text: {
    fontSize: 12,
    textAlign: 'center'
  },
  threadHeaderContainer: {
    marginVertical: 8
  }
});

var ThreadFooterComponentWithContext = function ThreadFooterComponentWithContext(props) {
  var _newThread$height, _newThread$height2, _newThread$height3;

  var Message = props.Message,
      thread = props.thread;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      bg_gradient_end = _useTheme$theme$color.bg_gradient_end,
      bg_gradient_start = _useTheme$theme$color.bg_gradient_start,
      grey = _useTheme$theme$color.grey,
      _useTheme$theme$threa = _useTheme$theme.thread.newThread,
      backgroundGradientStart = _useTheme$theme$threa.backgroundGradientStart,
      backgroundGradientStop = _useTheme$theme$threa.backgroundGradientStop,
      text = _useTheme$theme$threa.text,
      newThread = (0, _objectWithoutProperties2["default"])(_useTheme$theme$threa, _excluded);

  if (!thread) return null;
  var replyCount = thread.reply_count;
  return _react["default"].createElement(_reactNative.View, {
    style: styles.threadHeaderContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: styles.messagePadding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, _react["default"].createElement(Message, {
    groupStyles: ['single'],
    message: thread,
    preventPress: true,
    threadList: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), _react["default"].createElement(_reactNative.View, {
    style: [styles.newThread, newThread],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeSvg["default"], {
    height: (_newThread$height = newThread.height) != null ? _newThread$height : 24,
    style: styles.absolute,
    width: (0, _utils.vw)(100),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeSvg.Rect, {
    fill: "url(#gradient)",
    height: (_newThread$height2 = newThread.height) != null ? _newThread$height2 : 24,
    width: (0, _utils.vw)(100),
    x: 0,
    y: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), _react["default"].createElement(_reactNativeSvg.Defs, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    gradientUnits: "userSpaceOnUse",
    id: "gradient",
    x1: 0,
    x2: 0,
    y1: 0,
    y2: (_newThread$height3 = newThread.height) != null ? _newThread$height3 : 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNativeSvg.Stop, {
    offset: 1,
    stopColor: backgroundGradientStart || bg_gradient_end,
    stopOpacity: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }), _react["default"].createElement(_reactNativeSvg.Stop, {
    offset: 0,
    stopColor: backgroundGradientStop || bg_gradient_start,
    stopOpacity: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  })))), _react["default"].createElement(_reactNative.Text, {
    style: [styles.text, {
      color: grey
    }, text],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, replyCount === 1 ? t('1 Reply') : t('{{ replyCount }} Replies', {
    replyCount: replyCount
  }))));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevThread = prevProps.thread;
  var nextThread = nextProps.thread;
  var threadEqual = (prevThread == null ? void 0 : prevThread.id) === (nextThread == null ? void 0 : nextThread.id) && (prevThread == null ? void 0 : prevThread.text) === (nextThread == null ? void 0 : nextThread.text) && (prevThread == null ? void 0 : prevThread.reply_count) === (nextThread == null ? void 0 : nextThread.reply_count);
  if (!threadEqual) return false;
  return true;
};

var MemoizedThreadFooter = _react["default"].memo(ThreadFooterComponentWithContext, areEqual);

var ThreadFooterComponent = function ThreadFooterComponent() {
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      Message = _useMessagesContext.Message;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      thread = _useThreadContext.thread;

  return _react["default"].createElement(MemoizedThreadFooter, {
    Message: Message,
    thread: thread,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  });
};

exports.ThreadFooterComponent = ThreadFooterComponent;
//# sourceMappingURL=ThreadFooterComponent.js.map