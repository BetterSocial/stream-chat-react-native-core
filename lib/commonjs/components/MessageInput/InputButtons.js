var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputButtons = exports.InputButtonsWithContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/InputButtons.tsx";

var styles = _reactNative.StyleSheet.create({
  attachButtonContainer: {
    paddingRight: 10
  }
});

var InputButtonsWithContext = function InputButtonsWithContext(props) {
  var AttachButton = props.AttachButton,
      CommandsButton = props.CommandsButton,
      giphyActive = props.giphyActive,
      hasCommands = props.hasCommands,
      hasFilePicker = props.hasFilePicker,
      hasImagePicker = props.hasImagePicker,
      MoreOptionsButton = props.MoreOptionsButton,
      openCommandsPicker = props.openCommandsPicker,
      setShowMoreOptions = props.setShowMoreOptions,
      showMoreOptions = props.showMoreOptions,
      text = props.text,
      toggleAttachmentPicker = props.toggleAttachmentPicker,
      uploadsEnabled = props.uploadsEnabled;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme$messa = _useTheme.theme.messageInput,
      attachButtonContainer = _useTheme$theme$messa.attachButtonContainer,
      commandsButtonContainer = _useTheme$theme$messa.commandsButtonContainer;

  if (giphyActive) {
    return null;
  }

  return !showMoreOptions && (hasImagePicker || hasFilePicker) && hasCommands ? _react["default"].createElement(MoreOptionsButton, {
    handleOnPress: function handleOnPress() {
      return setShowMoreOptions(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }) : _react["default"].createElement(_react["default"].Fragment, null, (hasImagePicker || hasFilePicker) && uploadsEnabled !== false && _react["default"].createElement(_reactNative.View, {
    style: [hasCommands ? styles.attachButtonContainer : undefined, attachButtonContainer],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, _react["default"].createElement(AttachButton, {
    handleOnPress: toggleAttachmentPicker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  })), hasCommands && !text && _react["default"].createElement(_reactNative.View, {
    style: commandsButtonContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, _react["default"].createElement(CommandsButton, {
    handleOnPress: openCommandsPicker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  })));
};

exports.InputButtonsWithContext = InputButtonsWithContext;

var areEqual = function areEqual(prevProps, nextProps) {
  var prevGiphyActive = prevProps.giphyActive,
      prevHasCommands = prevProps.hasCommands,
      prevHasFilePicker = prevProps.hasFilePicker,
      prevHasImagePicker = prevProps.hasImagePicker,
      prevSelectedPicker = prevProps.selectedPicker,
      prevShowMoreOptions = prevProps.showMoreOptions,
      prevText = prevProps.text,
      prevUploadsEnabled = prevProps.uploadsEnabled;
  var nextGiphyActive = nextProps.giphyActive,
      nextHasCommands = nextProps.hasCommands,
      nextHasFilePicker = nextProps.hasFilePicker,
      nextHasImagePicker = nextProps.hasImagePicker,
      nextSelectedPicker = nextProps.selectedPicker,
      nextShowMoreOptions = nextProps.showMoreOptions,
      nextText = nextProps.text,
      nextUploadsEnabled = nextProps.uploadsEnabled;

  if (prevHasImagePicker !== nextHasImagePicker) {
    return false;
  }

  if (prevHasFilePicker !== nextHasFilePicker) {
    return false;
  }

  if (prevHasCommands !== nextHasCommands) {
    return false;
  }

  if (prevUploadsEnabled !== nextUploadsEnabled) {
    return false;
  }

  if (prevSelectedPicker !== nextSelectedPicker) {
    return false;
  }

  if (prevShowMoreOptions !== nextShowMoreOptions) {
    return false;
  }

  if (!prevProps.text && nextText || prevText && !nextText) {
    return false;
  }

  if (prevGiphyActive !== nextGiphyActive) {
    return false;
  }

  return true;
};

var MemoizedInputButtonsWithContext = _react["default"].memo(InputButtonsWithContext, areEqual);

var InputButtons = function InputButtons(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
      AttachButton = _useMessageInputConte.AttachButton,
      CommandsButton = _useMessageInputConte.CommandsButton,
      giphyActive = _useMessageInputConte.giphyActive,
      hasCommands = _useMessageInputConte.hasCommands,
      hasFilePicker = _useMessageInputConte.hasFilePicker,
      hasImagePicker = _useMessageInputConte.hasImagePicker,
      MoreOptionsButton = _useMessageInputConte.MoreOptionsButton,
      openCommandsPicker = _useMessageInputConte.openCommandsPicker,
      selectedPicker = _useMessageInputConte.selectedPicker,
      setShowMoreOptions = _useMessageInputConte.setShowMoreOptions,
      showMoreOptions = _useMessageInputConte.showMoreOptions,
      text = _useMessageInputConte.text,
      toggleAttachmentPicker = _useMessageInputConte.toggleAttachmentPicker,
      uploadsEnabled = _useMessageInputConte.uploadsEnabled;

  return _react["default"].createElement(MemoizedInputButtonsWithContext, (0, _extends2["default"])({
    AttachButton: AttachButton,
    CommandsButton: CommandsButton,
    giphyActive: giphyActive,
    hasCommands: hasCommands,
    hasFilePicker: hasFilePicker,
    hasImagePicker: hasImagePicker,
    MoreOptionsButton: MoreOptionsButton,
    openCommandsPicker: openCommandsPicker,
    selectedPicker: selectedPicker,
    setShowMoreOptions: setShowMoreOptions,
    showMoreOptions: showMoreOptions,
    text: text,
    toggleAttachmentPicker: toggleAttachmentPicker,
    uploadsEnabled: uploadsEnabled
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }));
};

exports.InputButtons = InputButtons;
//# sourceMappingURL=InputButtons.js.map