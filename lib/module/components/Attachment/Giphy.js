var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Giphy = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _Left = require("../../icons/Left");

var _Lightning = require("../../icons/Lightning");

var _Right = require("../../icons/Right");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Giphy.tsx";

var styles = _reactNative.StyleSheet.create({
  cancel: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 16
  },
  cancelContainer: {
    alignItems: 'center',
    borderRightWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    overflow: 'hidden',
    width: 256
  },
  giphy: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 140
  },
  giphyContainer: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    width: 68
  },
  giphyMask: {
    bottom: 8,
    left: 8,
    position: 'absolute'
  },
  giphyText: {
    fontSize: 11,
    fontWeight: '600'
  },
  margin: {
    margin: 8
  },
  row: {
    flexDirection: 'row'
  },
  selectionContainer: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    width: 250
  },
  selector: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingHorizontal: 8
  },
  send: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 16
  },
  sendContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  shuffleButton: {
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
    width: 32
  },
  title: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '500'
  }
});

var GiphyWithContext = function GiphyWithContext(props) {
  var additionalTouchableProps = props.additionalTouchableProps,
      attachment = props.attachment,
      handleAction = props.handleAction,
      _onLongPress = props.onLongPress,
      _onPress = props.onPress,
      _onPressIn = props.onPressIn,
      preventPress = props.preventPress;
  var actions = attachment.actions,
      image_url = attachment.image_url,
      thumb_url = attachment.thumb_url,
      title = attachment.title,
      type = attachment.type;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      black = _useTheme$theme$color.black,
      border = _useTheme$theme$color.border,
      grey = _useTheme$theme$color.grey,
      overlay_dark = _useTheme$theme$color.overlay_dark,
      white = _useTheme$theme$color.white,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.giphy,
      cancel = _useTheme$theme$messa.cancel,
      cancelContainer = _useTheme$theme$messa.cancelContainer,
      container = _useTheme$theme$messa.container,
      giphy = _useTheme$theme$messa.giphy,
      giphyContainer = _useTheme$theme$messa.giphyContainer,
      giphyMask = _useTheme$theme$messa.giphyMask,
      giphyText = _useTheme$theme$messa.giphyText,
      selectionContainer = _useTheme$theme$messa.selectionContainer,
      selector = _useTheme$theme$messa.selector,
      send = _useTheme$theme$messa.send,
      sendContainer = _useTheme$theme$messa.sendContainer,
      shuffleButton = _useTheme$theme$messa.shuffleButton,
      titleStyle = _useTheme$theme$messa.title;

  var uri = image_url || thumb_url;
  if (!uri) return null;
  return actions ? _react["default"].createElement(_reactNative.View, {
    style: [styles.selectionContainer, {
      backgroundColor: white,
      borderColor: black + "0D"
    }, selectionContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: styles.margin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.Image, {
    resizeMode: "cover",
    source: {
      uri: (0, _utils.makeImageCompatibleUrl)(uri)
    },
    style: [styles.giphy, giphy],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.giphyMask, giphyMask],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.giphyContainer, {
      backgroundColor: overlay_dark
    }, giphyContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, _react["default"].createElement(_Lightning.Lightning, {
    height: 16,
    pathFill: white,
    width: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.giphyText, {
      color: white
    }, giphyText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, type == null ? void 0 : type.toUpperCase())))), _react["default"].createElement(_reactNative.View, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.selector, {
      borderBottomColor: border
    }, selector],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      return handleAction('image_action', 'shuffle');
    },
    style: [styles.shuffleButton, {
      borderColor: border
    }, shuffleButton],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, _react["default"].createElement(_Left.Left, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  })), _react["default"].createElement(_reactNative.Text, {
    style: [styles.title, {
      color: black
    }, titleStyle],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, "\"" + title + "\""), _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      if (actions != null && actions[1].name && actions != null && actions[1].value && handleAction) {
        handleAction(actions[1].name, actions[1].value);
      }
    },
    style: [styles.shuffleButton, shuffleButton],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, _react["default"].createElement(_Right.Right, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }))), _react["default"].createElement(_reactNative.View, {
    style: styles.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      if (actions != null && actions[2].name && actions != null && actions[2].value && handleAction) {
        handleAction(actions[2].name, actions[2].value);
      }
    },
    style: [styles.cancelContainer, {
      borderRightColor: border
    }, cancelContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.cancel, {
      color: grey
    }, cancel],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, actions == null ? void 0 : actions[2].text)), _react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: function onPress() {
      if (actions != null && actions[0].name && actions != null && actions[0].value && handleAction) {
        handleAction(actions[0].name, actions[0].value);
      }
    },
    style: [styles.sendContainer, sendContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 11
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.send, {
      color: accent_blue
    }, send],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }, actions == null ? void 0 : actions[0].text))))) : _react["default"].createElement(_reactNative.TouchableOpacity, (0, _extends2["default"])({
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'giphy',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          emitter: 'giphy',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          emitter: 'giphy',
          event: event
        });
      }
    },
    style: [styles.container, container],
    testID: "giphy-attachment"
  }, additionalTouchableProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }), _react["default"].createElement(_reactNative.View, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.Image, {
    resizeMode: "cover",
    source: {
      uri: (0, _utils.makeImageCompatibleUrl)(uri)
    },
    style: [styles.giphy, giphy],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 9
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.giphyMask, giphyMask],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.giphyContainer, {
      backgroundColor: overlay_dark
    }, giphyContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }, _react["default"].createElement(_Lightning.Lightning, {
    height: 16,
    pathFill: white,
    width: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.giphyText, {
      color: white
    }, giphyText],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }, type == null ? void 0 : type.toUpperCase())))));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevProps$attachment = prevProps.attachment,
      prevActions = _prevProps$attachment.actions,
      prevImageUrl = _prevProps$attachment.image_url,
      prevThumbUrl = _prevProps$attachment.thumb_url;
  var _nextProps$attachment = nextProps.attachment,
      nextActions = _nextProps$attachment.actions,
      nextImageUrl = _nextProps$attachment.image_url,
      nextThumbUrl = _nextProps$attachment.thumb_url;
  var imageUrlEqual = prevImageUrl === nextImageUrl;
  if (!imageUrlEqual) return false;
  var thumbUrlEqual = prevThumbUrl === nextThumbUrl;
  if (!thumbUrlEqual) return false;
  var actionsEqual = Array.isArray(prevActions) === Array.isArray(nextActions) && (Array.isArray(prevActions) && Array.isArray(nextActions) && prevActions.length === nextActions.length || prevActions === nextActions);
  if (!actionsEqual) return false;
  return true;
};

var MemoizedGiphy = _react["default"].memo(GiphyWithContext, areEqual);

var Giphy = function Giphy(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      handleAction = _useMessageContext.handleAction,
      onLongPress = _useMessageContext.onLongPress,
      onPress = _useMessageContext.onPress,
      onPressIn = _useMessageContext.onPressIn,
      preventPress = _useMessageContext.preventPress;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      additionalTouchableProps = _useMessagesContext.additionalTouchableProps;

  return _react["default"].createElement(MemoizedGiphy, (0, _extends2["default"])({
    additionalTouchableProps: additionalTouchableProps,
    handleAction: handleAction,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 5
    }
  }));
};

exports.Giphy = Giphy;
Giphy.displayName = 'Giphy{messageSimple{giphy}}';
//# sourceMappingURL=Giphy.js.map