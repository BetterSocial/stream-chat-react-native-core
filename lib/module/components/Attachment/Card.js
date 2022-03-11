var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _utils = require("../../utils/utils");

var _excluded = ["description", "title"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Card.tsx";

var styles = _reactNative.StyleSheet.create({
  authorName: {
    fontSize: 14.5,
    fontWeight: '600'
  },
  authorNameContainer: {
    borderTopRightRadius: 15,
    paddingHorizontal: 8,
    paddingTop: 8
  },
  authorNameFooter: {
    fontSize: 14.5,
    fontWeight: '600',
    padding: 8
  },
  authorNameMask: {
    bottom: 0,
    left: 8,
    position: 'absolute'
  },
  cardCover: {
    borderRadius: 8,
    height: 140,
    marginHorizontal: 8
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  container: {
    overflow: 'hidden',
    width: 256
  },
  description: {
    fontSize: 12,
    marginHorizontal: 8
  },
  title: {
    fontSize: 12,
    marginHorizontal: 8
  }
});

var goToURL = function goToURL(url) {
  if (!url) return;

  _reactNative.Linking.canOpenURL(url).then(function (supported) {
    if (supported) {
      _reactNative.Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

var CardWithContext = function CardWithContext(props) {
  var additionalTouchableProps = props.additionalTouchableProps,
      author_name = props.author_name,
      CardCover = props.CardCover,
      CardFooter = props.CardFooter,
      CardHeader = props.CardHeader,
      image_url = props.image_url,
      og_scrape_url = props.og_scrape_url,
      _onLongPress = props.onLongPress,
      _onPress = props.onPress,
      _onPressIn = props.onPressIn,
      preventPress = props.preventPress,
      _props$styles = props.styles,
      stylesProp = _props$styles === void 0 ? {} : _props$styles,
      text = props.text,
      thumb_url = props.thumb_url,
      title = props.title;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      black = _useTheme$theme$color.black,
      blue_alice = _useTheme$theme$color.blue_alice,
      transparent = _useTheme$theme$color.transparent,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.card,
      authorName = _useTheme$theme$messa.authorName,
      authorNameContainer = _useTheme$theme$messa.authorNameContainer,
      authorNameFooter = _useTheme$theme$messa.authorNameFooter,
      authorNameFooterContainer = _useTheme$theme$messa.authorNameFooterContainer,
      authorNameMask = _useTheme$theme$messa.authorNameMask,
      container = _useTheme$theme$messa.container,
      cover = _useTheme$theme$messa.cover,
      _useTheme$theme$messa2 = _useTheme$theme$messa.footer,
      description = _useTheme$theme$messa2.description,
      titleStyle = _useTheme$theme$messa2.title,
      footerStyle = (0, _objectWithoutProperties2["default"])(_useTheme$theme$messa2, _excluded),
      noURI = _useTheme$theme$messa.noURI;

  var uri = image_url || thumb_url;

  var defaultOnPress = function defaultOnPress() {
    return goToURL(og_scrape_url || uri);
  };

  return _react["default"].createElement(_reactNative.TouchableOpacity, (0, _extends2["default"])({
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'card',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          defaultHandler: defaultOnPress,
          emitter: 'card',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          defaultHandler: defaultOnPress,
          emitter: 'card',
          event: event
        });
      }
    },
    style: [styles.container, container, stylesProp.container],
    testID: "card-attachment"
  }, additionalTouchableProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }), CardHeader && _react["default"].createElement(CardHeader, (0, _extends2["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 22
    }
  })), CardCover && _react["default"].createElement(CardCover, (0, _extends2["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  })), uri && !CardCover && _react["default"].createElement(_reactNative.View, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.Image, {
    resizeMode: "cover",
    source: {
      uri: (0, _utils.makeImageCompatibleUrl)(uri)
    },
    style: [styles.cardCover, cover, stylesProp.cardCover],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }), author_name && _react["default"].createElement(_reactNative.View, {
    style: [styles.authorNameMask, authorNameMask, stylesProp.authorNameMask],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [styles.authorNameContainer, {
      backgroundColor: blue_alice
    }, authorNameContainer, stylesProp.authorNameContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.authorName, {
      color: accent_blue
    }, authorName, stylesProp.authorName],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, author_name)))), CardFooter ? _react["default"].createElement(CardFooter, (0, _extends2["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  })) : _react["default"].createElement(_reactNative.View, {
    style: [styles.cardFooter, footerStyle, stylesProp.cardFooter],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: [authorNameFooterContainer, {
      backgroundColor: transparent
    }, !uri ? (0, _extends2["default"])({
      borderLeftColor: accent_blue
    }, noURI) : {}, stylesProp.authorNameFooterContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, !uri && author_name && _react["default"].createElement(_reactNative.Text, {
    style: [styles.authorNameFooter, {
      color: accent_blue
    }, authorNameFooter, stylesProp.authorNameFooter],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, author_name), title && _react["default"].createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [styles.title, {
      color: black
    }, titleStyle, stylesProp.title],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, title), text && _react["default"].createElement(_reactNative.Text, {
    numberOfLines: 3,
    style: [styles.description, {
      color: black
    }, description, stylesProp.description],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 15
    }
  }, text))));
};

var MemoizedCard = _react["default"].memo(CardWithContext, function () {
  return true;
});

var Card = function Card(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      onLongPress = _useMessageContext.onLongPress,
      onPress = _useMessageContext.onPress,
      onPressIn = _useMessageContext.onPressIn,
      preventPress = _useMessageContext.preventPress;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      additionalTouchableProps = _useMessagesContext.additionalTouchableProps,
      CardCover = _useMessagesContext.CardCover,
      CardFooter = _useMessagesContext.CardFooter,
      CardHeader = _useMessagesContext.CardHeader;

  return _react["default"].createElement(MemoizedCard, (0, _extends2["default"])({
    additionalTouchableProps: additionalTouchableProps,
    CardCover: CardCover,
    CardFooter: CardFooter,
    CardHeader: CardHeader,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 5
    }
  }));
};

exports.Card = Card;
Card.displayName = 'Card{messageSimple{card}}';
//# sourceMappingURL=Card.js.map