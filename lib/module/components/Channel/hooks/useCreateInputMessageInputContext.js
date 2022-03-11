Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateInputMessageInputContext = void 0;

var _react = require("react");

var useCreateInputMessageInputContext = function useCreateInputMessageInputContext(_ref) {
  var additionalTextInputProps = _ref.additionalTextInputProps,
      AttachButton = _ref.AttachButton,
      autoCompleteSuggestionsLimit = _ref.autoCompleteSuggestionsLimit,
      autoCompleteTriggerSettings = _ref.autoCompleteTriggerSettings,
      channelId = _ref.channelId,
      clearEditingState = _ref.clearEditingState,
      clearQuotedMessageState = _ref.clearQuotedMessageState,
      CommandsButton = _ref.CommandsButton,
      compressImageQuality = _ref.compressImageQuality,
      doDocUploadRequest = _ref.doDocUploadRequest,
      doImageUploadRequest = _ref.doImageUploadRequest,
      editing = _ref.editing,
      editMessage = _ref.editMessage,
      FileUploadPreview = _ref.FileUploadPreview,
      hasCommands = _ref.hasCommands,
      hasFilePicker = _ref.hasFilePicker,
      hasImagePicker = _ref.hasImagePicker,
      ImageUploadPreview = _ref.ImageUploadPreview,
      initialValue = _ref.initialValue,
      Input = _ref.Input,
      InputButtons = _ref.InputButtons,
      maxMessageLength = _ref.maxMessageLength,
      maxNumberOfFiles = _ref.maxNumberOfFiles,
      mentionAllAppUsersEnabled = _ref.mentionAllAppUsersEnabled,
      mentionAllAppUsersQuery = _ref.mentionAllAppUsersQuery,
      MoreOptionsButton = _ref.MoreOptionsButton,
      numberOfLines = _ref.numberOfLines,
      onChangeText = _ref.onChangeText,
      quotedMessage = _ref.quotedMessage,
      SendButton = _ref.SendButton,
      sendImageAsync = _ref.sendImageAsync,
      sendMessage = _ref.sendMessage,
      setInputRef = _ref.setInputRef,
      setQuotedMessageState = _ref.setQuotedMessageState,
      ShowThreadMessageInChannelButton = _ref.ShowThreadMessageInChannelButton,
      UploadProgressIndicator = _ref.UploadProgressIndicator,
      uploadsEnabled = _ref.uploadsEnabled;
  var editingExists = !!editing;
  var quotedMessageId = quotedMessage ? typeof quotedMessage === 'boolean' ? '' : quotedMessage.id : '';
  var inputMessageInputContext = (0, _react.useMemo)(function () {
    return {
      additionalTextInputProps: additionalTextInputProps,
      AttachButton: AttachButton,
      autoCompleteSuggestionsLimit: autoCompleteSuggestionsLimit,
      autoCompleteTriggerSettings: autoCompleteTriggerSettings,
      clearEditingState: clearEditingState,
      clearQuotedMessageState: clearQuotedMessageState,
      CommandsButton: CommandsButton,
      compressImageQuality: compressImageQuality,
      doDocUploadRequest: doDocUploadRequest,
      doImageUploadRequest: doImageUploadRequest,
      editing: editing,
      editMessage: editMessage,
      FileUploadPreview: FileUploadPreview,
      hasCommands: hasCommands,
      hasFilePicker: hasFilePicker,
      hasImagePicker: hasImagePicker,
      ImageUploadPreview: ImageUploadPreview,
      initialValue: initialValue,
      Input: Input,
      InputButtons: InputButtons,
      maxMessageLength: maxMessageLength,
      maxNumberOfFiles: maxNumberOfFiles,
      mentionAllAppUsersEnabled: mentionAllAppUsersEnabled,
      mentionAllAppUsersQuery: mentionAllAppUsersQuery,
      MoreOptionsButton: MoreOptionsButton,
      numberOfLines: numberOfLines,
      onChangeText: onChangeText,
      quotedMessage: quotedMessage,
      SendButton: SendButton,
      sendImageAsync: sendImageAsync,
      sendMessage: sendMessage,
      setInputRef: setInputRef,
      setQuotedMessageState: setQuotedMessageState,
      ShowThreadMessageInChannelButton: ShowThreadMessageInChannelButton,
      UploadProgressIndicator: UploadProgressIndicator,
      uploadsEnabled: uploadsEnabled
    };
  }, [compressImageQuality, channelId, editingExists, initialValue, maxMessageLength, quotedMessageId, uploadsEnabled]);
  return inputMessageInputContext;
};

exports.useCreateInputMessageInputContext = useCreateInputMessageInputContext;
//# sourceMappingURL=useCreateInputMessageInputContext.js.map