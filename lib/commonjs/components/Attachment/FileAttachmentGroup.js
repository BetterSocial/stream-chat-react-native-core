var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAttachmentGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Attachment = require("./Attachment");

var _MessageContext = require("../../contexts/messageContext/MessageContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/FileAttachmentGroup.tsx";

var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 4
  }
});

var FileAttachmentGroupWithContext = function FileAttachmentGroupWithContext(props) {
  var Attachment = props.Attachment,
      files = props.files,
      messageId = props.messageId,
      _props$styles = props.styles,
      stylesProp = _props$styles === void 0 ? {} : _props$styles;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      container = _useTheme.theme.messageSimple.fileAttachmentGroup.container;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container, stylesProp.container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, files.map(function (file, index) {
    return _react["default"].createElement(_reactNative.View, {
      key: messageId + "-" + index,
      style: [{
        paddingBottom: index !== files.length - 1 ? 4 : 0
      }, stylesProp.attachmentContainer],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, _react["default"].createElement(Attachment, {
      attachment: file,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }));
  }));
};

var areEqual = function areEqual(prevProps, nextProps) {
  var prevFiles = prevProps.files;
  var nextFiles = nextProps.files;
  var filesEqual = prevFiles.length === nextFiles.length;
  return filesEqual;
};

var MemoizedFileAttachmentGroup = _react["default"].memo(FileAttachmentGroupWithContext, areEqual);

var FileAttachmentGroup = function FileAttachmentGroup(props) {
  var propFiles = props.files,
      messageId = props.messageId;

  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
      contextFiles = _useMessageContext.files;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      _useMessagesContext$A = _useMessagesContext.Attachment,
      Attachment = _useMessagesContext$A === void 0 ? _Attachment.Attachment : _useMessagesContext$A;

  var files = propFiles || contextFiles;
  if (!files.length) return null;
  return _react["default"].createElement(MemoizedFileAttachmentGroup, {
    Attachment: Attachment,
    files: files,
    messageId: messageId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  });
};

exports.FileAttachmentGroup = FileAttachmentGroup;
FileAttachmentGroup.displayName = 'FileAttachmentGroup{messageSimple{fileAttachmentGroup}}';
//# sourceMappingURL=FileAttachmentGroup.js.map