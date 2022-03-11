var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderText = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _anchorme = _interopRequireDefault(require("anchorme"));

var _truncate = _interopRequireDefault(require("lodash/truncate"));

var _reactNativeMarkdownPackage = _interopRequireDefault(require("react-native-markdown-package"));

var _simpleMarkdown = require("simple-markdown");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/utils/renderText.tsx";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var defaultMarkdownStyles = {
  inlineCode: {
    fontSize: 13,
    padding: 3,
    paddingHorizontal: 5
  },
  list: {
    marginBottom: 8,
    marginTop: 8
  },
  listItemNumber: {
    fontWeight: 'bold'
  },
  listItemText: {
    flex: 0
  },
  listRow: {
    flexDirection: 'row'
  },
  mentions: {
    fontWeight: '700'
  },
  paragraph: {
    marginBottom: 8,
    marginTop: 8
  },
  paragraphCenter: {
    marginBottom: 8,
    marginTop: 8
  },
  paragraphWithImage: {
    marginBottom: 8,
    marginTop: 8
  }
};

var parse = function parse(capture, _parse, state) {
  return {
    content: (0, _simpleMarkdown.parseInline)(_parse, capture[0], state)
  };
};

var renderText = function renderText(params) {
  var colors = params.colors,
      markdownRules = params.markdownRules,
      markdownStyles = params.markdownStyles,
      message = params.message,
      messageOverlay = params.messageOverlay,
      onLinkParams = params.onLink,
      onLongPressParam = params.onLongPress,
      onlyEmojis = params.onlyEmojis,
      onPressParam = params.onPress,
      preventPress = params.preventPress;
  var mentioned_users = message.mentioned_users,
      text = message.text;
  if (!text) return null;
  var newText = text.trim();
  var urls = (0, _anchorme["default"])(newText, {
    list: true
  });

  for (var _iterator = _createForOfIteratorHelperLoose(urls), _step; !(_step = _iterator()).done;) {
    var _urlInfo = _step.value;

    var _displayLink = (0, _truncate["default"])(_urlInfo.encoded.replace(/^(www\.)/, ''), {
      length: 200,
      omission: '...'
    });

    var _markdown = "[" + _displayLink + "](" + _urlInfo.protocol + _urlInfo.encoded + ")";

    newText = newText.replace(_urlInfo.raw, _markdown);
  }

  newText = newText.replace(/[<&"'>]/g, '\\$&');
  var styles = (0, _extends2["default"])({}, defaultMarkdownStyles, markdownStyles, {
    autolink: (0, _extends2["default"])({}, defaultMarkdownStyles.autolink, {
      color: colors.accent_blue
    }, markdownStyles == null ? void 0 : markdownStyles.autolink),
    inlineCode: (0, _extends2["default"])({}, defaultMarkdownStyles.inlineCode, {
      backgroundColor: colors.white_smoke,
      borderColor: colors.grey_gainsboro,
      color: colors.accent_red
    }, markdownStyles == null ? void 0 : markdownStyles.inlineCode),
    mentions: (0, _extends2["default"])({}, defaultMarkdownStyles.mentions, {
      color: colors.accent_blue
    }, markdownStyles == null ? void 0 : markdownStyles.mentions),
    text: (0, _extends2["default"])({}, defaultMarkdownStyles.text, {
      color: colors.black
    }, markdownStyles == null ? void 0 : markdownStyles.text)
  });

  var onLink = function onLink(url) {
    return onLinkParams ? onLinkParams(url) : _reactNative.Linking.canOpenURL(url).then(function (canOpenUrl) {
      return canOpenUrl && _reactNative.Linking.openURL(url);
    });
  };

  var react = function react(node, output, _ref) {
    var state = (0, _extends2["default"])({}, _ref);

    var onPress = function onPress(event) {
      if (!preventPress && onPressParam) {
        onPressParam({
          defaultHandler: function defaultHandler() {
            return onLink(node.target);
          },
          emitter: 'textLink',
          event: event
        });
      }
    };

    var onLongPress = function onLongPress(event) {
      if (!preventPress && onLongPressParam) {
        onLongPressParam({
          emitter: 'textLink',
          event: event
        });
      }
    };

    return _react["default"].createElement(_reactNative.Text, {
      key: state.key,
      onLongPress: onLongPress,
      onPress: onPress,
      style: styles.autolink,
      suppressHighlighting: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 7
      }
    }, output(node.content, (0, _extends2["default"])({}, state, {
      withinLink: true
    })));
  };

  var mentionedUsers = Array.isArray(mentioned_users) ? mentioned_users.reduce(function (acc, cur) {
    var userName = cur.name || cur.id || '';

    if (userName) {
      acc += (acc.length ? '|' : '') + "@" + userName;
    }

    return acc;
  }, '') : '';
  var regEx = new RegExp("^\\B(" + mentionedUsers + ")", 'g');

  var match = function match(source) {
    return regEx.exec(source);
  };

  var mentionsReact = function mentionsReact(node, output, _ref2) {
    var state = (0, _extends2["default"])({}, _ref2);

    var onPress = function onPress(event) {
      if (!preventPress && onPressParam) {
        onPressParam({
          emitter: 'textMention',
          event: event
        });
      }
    };

    var onLongPress = function onLongPress(event) {
      if (!preventPress && onLongPressParam) {
        onLongPressParam({
          emitter: 'textMention',
          event: event
        });
      }
    };

    return _react["default"].createElement(_reactNative.Text, {
      key: state.key,
      onLongPress: onLongPress,
      onPress: onPress,
      style: styles.mentions,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 7
      }
    }, Array.isArray(node.content) ? node.content[0].content || '' : output(node.content, state));
  };

  var listLevels = {
    sub: 'sub',
    top: 'top'
  };

  var customListAtLevel = function customListAtLevel(level) {
    return function (node, output, _ref3) {
      var state = (0, _extends2["default"])({}, _ref3);
      var items = node.items.map(function (item, index) {
        var withinList = item.length > 1 && item[1].type === 'list';
        var content = output(item, (0, _extends2["default"])({}, state, {
          withinList: withinList
        }));
        var isTopLevelText = ['text', 'paragraph', 'strong'].includes(item[0].type) && withinList === false;
        return _react["default"].createElement(_reactNative.View, {
          key: index,
          style: styles.listRow,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 11
          }
        }, _react["default"].createElement(_reactNative.Text, {
          style: styles.listItemNumber,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }
        }, node.ordered ? node.start + index + ". " : "\u2022"), _react["default"].createElement(_reactNative.Text, {
          style: [styles.listItemText, isTopLevelText && {
            marginBottom: 0
          }],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }
        }, content));
      });
      var isSublist = level === 'sub';
      return _react["default"].createElement(_reactNative.View, {
        key: state.key,
        style: [isSublist ? styles.list : styles.sublist],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 9
        }
      }, items);
    };
  };

  var customRules = (0, _extends2["default"])({
    link: {
      react: react
    },
    list: {
      react: customListAtLevel('top')
    },
    reflink: {
      match: function match() {
        return null;
      }
    },
    sublist: {
      react: customListAtLevel('sub')
    }
  }, mentionedUsers ? {
    mentions: {
      match: match,
      order: _simpleMarkdown.defaultRules.text.order - 0.5,
      parse: parse,
      react: mentionsReact
    }
  } : {});
  return _react["default"].createElement(_reactNativeMarkdownPackage["default"], {
    key: JSON.stringify(mentioned_users) + "-" + onlyEmojis + "-" + (messageOverlay ? JSON.stringify(markdownStyles) : undefined) + "-" + JSON.stringify(colors),
    onLink: onLink,
    rules: (0, _extends2["default"])({}, customRules, markdownRules),
    styles: styles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 5
    }
  }, newText);
};

exports.renderText = renderText;
//# sourceMappingURL=renderText.js.map