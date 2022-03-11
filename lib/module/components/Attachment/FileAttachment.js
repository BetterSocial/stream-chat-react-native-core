var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToURL = exports.getFileSizeDisplayText = exports.FileAttachment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _AttachmentActions = require("../../components/Attachment/AttachmentActions");

var _FileIcon = require("../../components/Attachment/FileIcon");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _utils = require("../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/FileAttachment.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 8
  },
  details: {
    maxWidth: (0, _utils.vw)(60),
    paddingLeft: 16
  },
  size: {
    fontSize: 12
  },
  title: {
    fontSize: 14,
    fontWeight: '700'
  }
});

var FileAttachmentWithContext = function FileAttachmentWithContext(props) {
  var _attachment$actions;

  var additionalTouchableProps = props.additionalTouchableProps,
      attachment = props.attachment,
      attachmentSize = props.attachmentSize,
      AttachmentActions = props.AttachmentActions,
      FileAttachmentIcon = props.FileAttachmentIcon,
      _onLongPress = props.onLongPress,
      _onPress = props.onPress,
      _onPressIn = props.onPressIn,
      preventPress = props.preventPress,
      _props$styles = props.styles,
      stylesProp = _props$styles === void 0 ? {} : _props$styles;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      black = _useTheme$theme$color.black,
      grey = _useTheme$theme$color.grey,
      white = _useTheme$theme$color.white,
      _useTheme$theme$messa = _useTheme$theme.messageSimple.file,
      container = _useTheme$theme$messa.container,
      details = _useTheme$theme$messa.details,
      fileSize = _useTheme$theme$messa.fileSize,
      title = _useTheme$theme$messa.title;

  var defaultOnPress = function defaultOnPress() {
    return goToURL(attachment.asset_url);
  };

  return _react["default"].createElement(_reactNative.TouchableOpacity, (0, _extends2["default"])({
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'fileAttachment',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          defaultHandler: defaultOnPress,
          emitter: 'fileAttachment',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          defaultHandler: defaultOnPress,
          emitter: 'fileAttachment',
          event: event
        });
      }
    },
    testID: "file-attachment"
  }, additionalTouchableProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: white
    }, container, stylesProp.container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, _react["default"].createElement(FileAttachmentIcon, {
    mimeType: attachment.mime_type,
    size: attachmentSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.details, details, stylesProp.details],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNative.Text, {
    numberOfLines: 2,
    style: [styles.title, {
      color: black
    }, title, stylesProp.title],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, attachment.title), _react["default"].createElement(_reactNative.Text, {
    style: [styles.size, {
      color: grey
    }, fileSize, stylesProp.size],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, getFileSizeDisplayText(attachment.file_size)))), (_attachment$actions = attachment.actions) != null && _attachment$actions.length ? _react["default"].createElement(AttachmentActions, (0, _extends2["default"])({}, attachment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  })) : null);
};

var FileAttachment = function FileAttachment(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      onLongPress = _useMessageContext.onLongPress,
      onPress = _useMessageContext.onPress,
      onPressIn = _useMessageContext.onPressIn,
      preventPress = _useMessageContext.preventPress;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      additionalTouchableProps = _useMessagesContext.additionalTouchableProps,
      _useMessagesContext$A = _useMessagesContext.AttachmentActions,
      AttachmentActions = _useMessagesContext$A === void 0 ? _AttachmentActions.AttachmentActions : _useMessagesContext$A,
      _useMessagesContext$F = _useMessagesContext.FileAttachmentIcon,
      FileAttachmentIcon = _useMessagesContext$F === void 0 ? _FileIcon.FileIcon : _useMessagesContext$F;

  return _react["default"].createElement(FileAttachmentWithContext, (0, _extends2["default"])({
    additionalTouchableProps: additionalTouchableProps,
    AttachmentActions: AttachmentActions,
    FileAttachmentIcon: FileAttachmentIcon,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }));
};

exports.FileAttachment = FileAttachment;

var getFileSizeDisplayText = function getFileSizeDisplayText(size) {
  if (!size) return;

  if (typeof size === 'string') {
    size = parseFloat(size);
  }

  if (size < 1000 * 1000) {
    return Math.floor(Math.floor(size / 10) / 100) + " KB";
  }

  return Math.floor(Math.floor(size / 10000) / 100) + " MB";
};

exports.getFileSizeDisplayText = getFileSizeDisplayText;

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

exports.goToURL = goToURL;
FileAttachment.displayName = 'FileAttachment{messageSimple{file}}';
//# sourceMappingURL=FileAttachment.js.map