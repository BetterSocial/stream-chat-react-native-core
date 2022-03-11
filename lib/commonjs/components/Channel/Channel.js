var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Channel = exports.reactionData = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _streamChat = require("stream-chat");

var _useAppStateListener = require("../../hooks/useAppStateListener");

var _useCreateChannelContext = require("./hooks/useCreateChannelContext");

var _useCreateInputMessageInputContext = require("./hooks/useCreateInputMessageInputContext");

var _useCreateMessagesContext = require("./hooks/useCreateMessagesContext");

var _useCreatePaginatedMessageListContext = require("./hooks/useCreatePaginatedMessageListContext");

var _useCreateThreadContext = require("./hooks/useCreateThreadContext");

var _useCreateTypingContext = require("./hooks/useCreateTypingContext");

var _useTargetedMessage2 = require("./hooks/useTargetedMessage");

var _Attachment = require("../Attachment/Attachment");

var _AttachmentActions = require("../Attachment/AttachmentActions");

var _Card = require("../Attachment/Card");

var _FileAttachment = require("../Attachment/FileAttachment");

var _FileAttachmentGroup = require("../Attachment/FileAttachmentGroup");

var _FileIcon = require("../Attachment/FileIcon");

var _Gallery = require("../Attachment/Gallery");

var _Giphy = require("../Attachment/Giphy");

var _EmptyStateIndicator = require("../Indicators/EmptyStateIndicator");

var _LoadingErrorIndicator = require("../Indicators/LoadingErrorIndicator");

var _LoadingIndicator = require("../Indicators/LoadingIndicator");

var _NetworkDownIndicator = require("../MessageList/NetworkDownIndicator");

var _KeyboardCompatibleView = require("../KeyboardCompatibleView/KeyboardCompatibleView");

var _Message = require("../Message/Message");

var _MessageAvatar = require("../Message/MessageSimple/MessageAvatar");

var _MessageContent = require("../Message/MessageSimple/MessageContent");

var _MessageDeleted = require("../Message/MessageSimple/MessageDeleted");

var _MessageFooter = require("../Message/MessageSimple/MessageFooter");

var _MessageReplies = require("../Message/MessageSimple/MessageReplies");

var _MessageRepliesAvatars = require("../Message/MessageSimple/MessageRepliesAvatars");

var _MessageSimple = require("../Message/MessageSimple/MessageSimple");

var _MessageStatus = require("../Message/MessageSimple/MessageStatus");

var _ReactionList = require("../Message/MessageSimple/ReactionList");

var _AttachButton = require("../MessageInput/AttachButton");

var _CommandsButton = require("../MessageInput/CommandsButton");

var _FileUploadPreview = require("../MessageInput/FileUploadPreview");

var _ImageUploadPreview = require("../MessageInput/ImageUploadPreview");

var _InputButtons = require("../MessageInput/InputButtons");

var _MoreOptionsButton = require("../MessageInput/MoreOptionsButton");

var _SendButton = require("../MessageInput/SendButton");

var _ShowThreadMessageInChannelButton = require("../MessageInput/ShowThreadMessageInChannelButton");

var _UploadProgressIndicator = require("../MessageInput/UploadProgressIndicator");

var _DateHeader = require("../MessageList/DateHeader");

var _InlineDateSeparator = require("../MessageList/InlineDateSeparator");

var _InlineUnreadIndicator = require("../MessageList/InlineUnreadIndicator");

var _MessageList = require("../MessageList/MessageList");

var _MessageSystem = require("../MessageList/MessageSystem");

var _ScrollToBottomButton = require("../MessageList/ScrollToBottomButton");

var _TypingIndicator = require("../MessageList/TypingIndicator");

var _TypingIndicatorContainer = require("../MessageList/TypingIndicatorContainer");

var _OverlayReactionList = require("../MessageOverlay/OverlayReactionList");

var _Reply = require("../Reply/Reply");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");

var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _TypingContext = require("../../contexts/typingContext/TypingContext");

var _icons = require("../../icons");

var _native = require("../../native");

var _utils = require("../../utils/utils");

var _excluded = ["attachments", "mentioned_users", "parent_id", "text"],
    _excluded2 = ["__html", "attachments", "created_at", "html", "id", "mentioned_users", "parent_id", "quoted_message", "reactions", "status", "text", "type", "updated_at", "user"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Channel/Channel.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  selectChannel: {
    fontWeight: 'bold',
    padding: 16
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
exports.reactionData = reactionData;
var scrollToFirstUnreadThreshold = 4;
var defaultThrottleInterval = 500;
var defaultDebounceInterval = 500;
var throttleOptions = {
  leading: true,
  trailing: true
};
var debounceOptions = {
  leading: true,
  trailing: true
};
var unreadMessagesOnInitialLoadLimit = 2;

var ChannelWithContext = function ChannelWithContext(props) {
  var _channel$state, _channel$state$thread, _client$user, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _channel$data, _ref28;

  var additionalKeyboardAvoidingViewProps = props.additionalKeyboardAvoidingViewProps,
      additionalTextInputProps = props.additionalTextInputProps,
      animatedLongPress = props.animatedLongPress,
      additionalTouchableProps = props.additionalTouchableProps,
      _props$allowThreadMes = props.allowThreadMessagesInChannel,
      allowThreadMessagesInChannel = _props$allowThreadMes === void 0 ? true : _props$allowThreadMes,
      _props$AttachButton = props.AttachButton,
      AttachButton = _props$AttachButton === void 0 ? _AttachButton.AttachButton : _props$AttachButton,
      _props$Attachment = props.Attachment,
      Attachment = _props$Attachment === void 0 ? _Attachment.Attachment : _props$Attachment,
      _props$AttachmentActi = props.AttachmentActions,
      AttachmentActions = _props$AttachmentActi === void 0 ? _AttachmentActions.AttachmentActions : _props$AttachmentActi,
      autoCompleteSuggestionsLimit = props.autoCompleteSuggestionsLimit,
      autoCompleteTriggerSettings = props.autoCompleteTriggerSettings,
      blockUser = props.blockUser,
      _props$Card = props.Card,
      Card = _props$Card === void 0 ? _Card.Card : _props$Card,
      CardCover = props.CardCover,
      CardFooter = props.CardFooter,
      CardHeader = props.CardHeader,
      channel = props.channel,
      children = props.children,
      client = props.client,
      closeSuggestions = props.closeSuggestions,
      _props$CommandsButton = props.CommandsButton,
      CommandsButton = _props$CommandsButton === void 0 ? _CommandsButton.CommandsButton : _props$CommandsButton,
      compressImageQuality = props.compressImageQuality,
      copyMessage = props.copyMessage,
      _props$DateHeader = props.DateHeader,
      DateHeader = _props$DateHeader === void 0 ? _DateHeader.DateHeader : _props$DateHeader,
      deleteMessage = props.deleteMessage,
      _props$disableIfFroze = props.disableIfFrozenChannel,
      disableIfFrozenChannel = _props$disableIfFroze === void 0 ? true : _props$disableIfFroze,
      _props$disableKeyboar = props.disableKeyboardCompatibleView,
      disableKeyboardCompatibleView = _props$disableKeyboar === void 0 ? false : _props$disableKeyboar,
      disableTypingIndicator = props.disableTypingIndicator,
      _props$dismissKeyboar = props.dismissKeyboardOnMessageTouch,
      dismissKeyboardOnMessageTouch = _props$dismissKeyboar === void 0 ? true : _props$dismissKeyboar,
      doDocUploadRequest = props.doDocUploadRequest,
      doImageUploadRequest = props.doImageUploadRequest,
      doMarkReadRequest = props.doMarkReadRequest,
      doSendMessageRequest = props.doSendMessageRequest,
      doUpdateMessageRequest = props.doUpdateMessageRequest,
      editMessageProp = props.editMessage,
      _props$EmptyStateIndi = props.EmptyStateIndicator,
      EmptyStateIndicator = _props$EmptyStateIndi === void 0 ? _EmptyStateIndicator.EmptyStateIndicator : _props$EmptyStateIndi,
      _props$enableMessageG = props.enableMessageGroupingByUser,
      enableMessageGroupingByUser = _props$enableMessageG === void 0 ? true : _props$enableMessageG,
      _props$enforceUniqueR = props.enforceUniqueReaction,
      enforceUniqueReaction = _props$enforceUniqueR === void 0 ? false : _props$enforceUniqueR,
      _props$FileAttachment = props.FileAttachment,
      FileAttachment = _props$FileAttachment === void 0 ? _FileAttachment.FileAttachment : _props$FileAttachment,
      _props$FileAttachment2 = props.FileAttachmentIcon,
      FileAttachmentIcon = _props$FileAttachment2 === void 0 ? _FileIcon.FileIcon : _props$FileAttachment2,
      _props$FileAttachment3 = props.FileAttachmentGroup,
      FileAttachmentGroup = _props$FileAttachment3 === void 0 ? _FileAttachmentGroup.FileAttachmentGroup : _props$FileAttachment3,
      _props$FileUploadPrev = props.FileUploadPreview,
      FileUploadPreview = _props$FileUploadPrev === void 0 ? _FileUploadPreview.FileUploadPreview : _props$FileUploadPrev,
      flagMessage = props.flagMessage,
      _props$FlatList = props.FlatList,
      FlatList = _props$FlatList === void 0 ? _native.FlatList : _props$FlatList,
      forceAlignMessages = props.forceAlignMessages,
      formatDate = props.formatDate,
      _props$Gallery = props.Gallery,
      Gallery = _props$Gallery === void 0 ? _Gallery.Gallery : _props$Gallery,
      _props$Giphy = props.Giphy,
      Giphy = _props$Giphy === void 0 ? _Giphy.Giphy : _props$Giphy,
      giphyEnabled = props.giphyEnabled,
      _props$globalUnreadCo = props.globalUnreadCountLimit,
      globalUnreadCountLimit = _props$globalUnreadCo === void 0 ? 255 : _props$globalUnreadCo,
      handleBlock = props.handleBlock,
      handleCopy = props.handleCopy,
      handleDelete = props.handleDelete,
      handleEdit = props.handleEdit,
      handleFlag = props.handleFlag,
      handleMute = props.handleMute,
      handleQuotedReply = props.handleQuotedReply,
      handleReaction = props.handleReaction,
      handleRetry = props.handleRetry,
      handleThreadReply = props.handleThreadReply,
      _props$hasCommands = props.hasCommands,
      hasCommands = _props$hasCommands === void 0 ? true : _props$hasCommands,
      _props$hasFilePicker = props.hasFilePicker,
      hasFilePicker = _props$hasFilePicker === void 0 ? true : _props$hasFilePicker,
      _props$hasImagePicker = props.hasImagePicker,
      hasImagePicker = _props$hasImagePicker === void 0 ? true : _props$hasImagePicker,
      _props$hideDateSepara = props.hideDateSeparators,
      hideDateSeparators = _props$hideDateSepara === void 0 ? false : _props$hideDateSepara,
      _props$hideStickyDate = props.hideStickyDateHeader,
      hideStickyDateHeader = _props$hideStickyDate === void 0 ? false : _props$hideStickyDate,
      _props$ImageUploadPre = props.ImageUploadPreview,
      ImageUploadPreview = _props$ImageUploadPre === void 0 ? _ImageUploadPreview.ImageUploadPreview : _props$ImageUploadPre,
      _props$initialScrollT = props.initialScrollToFirstUnreadMessage,
      initialScrollToFirstUnreadMessage = _props$initialScrollT === void 0 ? false : _props$initialScrollT,
      initialValue = props.initialValue,
      _props$InlineDateSepa = props.InlineDateSeparator,
      InlineDateSeparator = _props$InlineDateSepa === void 0 ? _InlineDateSeparator.InlineDateSeparator : _props$InlineDateSepa,
      _props$InlineUnreadIn = props.InlineUnreadIndicator,
      InlineUnreadIndicator = _props$InlineUnreadIn === void 0 ? _InlineUnreadIndicator.InlineUnreadIndicator : _props$InlineUnreadIn,
      Input = props.Input,
      _props$InputButtons = props.InputButtons,
      InputButtons = _props$InputButtons === void 0 ? _InputButtons.InputButtons : _props$InputButtons,
      keyboardBehavior = props.keyboardBehavior,
      _props$KeyboardCompat = props.KeyboardCompatibleView,
      KeyboardCompatibleView = _props$KeyboardCompat === void 0 ? _KeyboardCompatibleView.KeyboardCompatibleView : _props$KeyboardCompat,
      keyboardVerticalOffset = props.keyboardVerticalOffset,
      _props$legacyImageVie = props.legacyImageViewerSwipeBehaviour,
      legacyImageViewerSwipeBehaviour = _props$legacyImageVie === void 0 ? true : _props$legacyImageVie,
      _props$LoadingErrorIn = props.LoadingErrorIndicator,
      LoadingErrorIndicator = _props$LoadingErrorIn === void 0 ? _LoadingErrorIndicator.LoadingErrorIndicator : _props$LoadingErrorIn,
      _props$LoadingIndicat = props.LoadingIndicator,
      LoadingIndicator = _props$LoadingIndicat === void 0 ? _LoadingIndicator.LoadingIndicator : _props$LoadingIndicat,
      loadingMoreProp = props.loadingMore,
      loadingMoreRecentProp = props.loadingMoreRecent,
      markdownRules = props.markdownRules,
      messageId = props.messageId,
      maxMessageLengthProp = props.maxMessageLength,
      _props$maxNumberOfFil = props.maxNumberOfFiles,
      maxNumberOfFiles = _props$maxNumberOfFil === void 0 ? 10 : _props$maxNumberOfFil,
      maxTimeBetweenGroupedMessages = props.maxTimeBetweenGroupedMessages,
      _props$mentionAllAppU = props.mentionAllAppUsersEnabled,
      mentionAllAppUsersEnabled = _props$mentionAllAppU === void 0 ? false : _props$mentionAllAppU,
      mentionAllAppUsersQuery = props.mentionAllAppUsersQuery,
      _props$Message = props.Message,
      Message = _props$Message === void 0 ? _Message.Message : _props$Message,
      messageActions = props.messageActions,
      _props$MessageAvatar = props.MessageAvatar,
      MessageAvatar = _props$MessageAvatar === void 0 ? _MessageAvatar.MessageAvatar : _props$MessageAvatar,
      _props$MessageContent = props.MessageContent,
      MessageContent = _props$MessageContent === void 0 ? _MessageContent.MessageContent : _props$MessageContent,
      _props$messageContent = props.messageContentOrder,
      messageContentOrder = _props$messageContent === void 0 ? ['quoted_reply', 'gallery', 'files', 'text', 'attachments'] : _props$messageContent,
      _props$MessageDeleted = props.MessageDeleted,
      MessageDeleted = _props$MessageDeleted === void 0 ? _MessageDeleted.MessageDeleted : _props$MessageDeleted,
      _props$MessageFooter = props.MessageFooter,
      MessageFooter = _props$MessageFooter === void 0 ? _MessageFooter.MessageFooter : _props$MessageFooter,
      MessageHeader = props.MessageHeader,
      _props$MessageList = props.MessageList,
      MessageList = _props$MessageList === void 0 ? _MessageList.MessageList : _props$MessageList,
      _props$MessageReplies = props.MessageReplies,
      MessageReplies = _props$MessageReplies === void 0 ? _MessageReplies.MessageReplies : _props$MessageReplies,
      _props$MessageReplies2 = props.MessageRepliesAvatars,
      MessageRepliesAvatars = _props$MessageReplies2 === void 0 ? _MessageRepliesAvatars.MessageRepliesAvatars : _props$MessageReplies2,
      messagesProp = props.messages,
      _props$MessageSimple = props.MessageSimple,
      MessageSimple = _props$MessageSimple === void 0 ? _MessageSimple.MessageSimple : _props$MessageSimple,
      _props$MessageStatus = props.MessageStatus,
      MessageStatus = _props$MessageStatus === void 0 ? _MessageStatus.MessageStatus : _props$MessageStatus,
      _props$MessageSystem = props.MessageSystem,
      MessageSystem = _props$MessageSystem === void 0 ? _MessageSystem.MessageSystem : _props$MessageSystem,
      MessageText = props.MessageText,
      _props$MoreOptionsBut = props.MoreOptionsButton,
      MoreOptionsButton = _props$MoreOptionsBut === void 0 ? _MoreOptionsButton.MoreOptionsButton : _props$MoreOptionsBut,
      mutesEnabledProp = props.mutesEnabled,
      muteUser = props.muteUser,
      myMessageTheme = props.myMessageTheme,
      _props$newMessageStat = props.newMessageStateUpdateThrottleInterval,
      newMessageStateUpdateThrottleInterval = _props$newMessageStat === void 0 ? defaultThrottleInterval : _props$newMessageStat,
      _props$NetworkDownInd = props.NetworkDownIndicator,
      NetworkDownIndicator = _props$NetworkDownInd === void 0 ? _NetworkDownIndicator.NetworkDownIndicator : _props$NetworkDownInd,
      _props$numberOfLines = props.numberOfLines,
      numberOfLines = _props$numberOfLines === void 0 ? 5 : _props$numberOfLines,
      onChangeText = props.onChangeText,
      onDoubleTapMessage = props.onDoubleTapMessage,
      onLongPressMessage = props.onLongPressMessage,
      onPressMessage = props.onPressMessage,
      onPressInMessage = props.onPressInMessage,
      openSuggestions = props.openSuggestions,
      _props$OverlayReactio = props.OverlayReactionList,
      OverlayReactionList = _props$OverlayReactio === void 0 ? _OverlayReactionList.OverlayReactionList : _props$OverlayReactio,
      quotedRepliesEnabledProp = props.quotedRepliesEnabled,
      quotedReply = props.quotedReply,
      _props$ReactionList = props.ReactionList,
      ReactionList = _props$ReactionList === void 0 ? _ReactionList.ReactionList : _props$ReactionList,
      reactionsEnabledProp = props.reactionsEnabled,
      readEventsEnabledProp = props.readEventsEnabled,
      _props$Reply = props.Reply,
      Reply = _props$Reply === void 0 ? _Reply.Reply : _props$Reply,
      retry = props.retry,
      _props$ScrollToBottom = props.ScrollToBottomButton,
      ScrollToBottomButton = _props$ScrollToBottom === void 0 ? _ScrollToBottomButton.ScrollToBottomButton : _props$ScrollToBottom,
      selectReaction = props.selectReaction,
      _props$SendButton = props.SendButton,
      SendButton = _props$SendButton === void 0 ? _SendButton.SendButton : _props$SendButton,
      _props$sendImageAsync = props.sendImageAsync,
      sendImageAsync = _props$sendImageAsync === void 0 ? false : _props$sendImageAsync,
      setInputRef = props.setInputRef,
      _props$ShowThreadMess = props.ShowThreadMessageInChannelButton,
      ShowThreadMessageInChannelButton = _props$ShowThreadMess === void 0 ? _ShowThreadMessageInChannelButton.ShowThreadMessageInChannelButton : _props$ShowThreadMess,
      _props$stateUpdateThr = props.stateUpdateThrottleInterval,
      stateUpdateThrottleInterval = _props$stateUpdateThr === void 0 ? defaultThrottleInterval : _props$stateUpdateThr,
      StickyHeader = props.StickyHeader,
      _props$supportedReact = props.supportedReactions,
      supportedReactions = _props$supportedReact === void 0 ? reactionData : _props$supportedReact,
      t = props.t,
      threadProps = props.thread,
      threadRepliesEnabledProp = props.threadRepliesEnabled,
      threadReply = props.threadReply,
      typingEventsEnabledProp = props.typingEventsEnabled,
      _props$TypingIndicato = props.TypingIndicator,
      TypingIndicator = _props$TypingIndicato === void 0 ? _TypingIndicator.TypingIndicator : _props$TypingIndicato,
      _props$TypingIndicato2 = props.TypingIndicatorContainer,
      TypingIndicatorContainer = _props$TypingIndicato2 === void 0 ? _TypingIndicatorContainer.TypingIndicatorContainer : _props$TypingIndicato2,
      updateSuggestions = props.updateSuggestions,
      _props$UploadProgress = props.UploadProgressIndicator,
      UploadProgressIndicator = _props$UploadProgress === void 0 ? _UploadProgressIndicator.UploadProgressIndicator : _props$UploadProgress,
      uploadsEnabledProp = props.uploadsEnabled,
      _props$UrlPreview = props.UrlPreview,
      UrlPreview = _props$UrlPreview === void 0 ? _Card.Card : _props$UrlPreview;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      selectChannel = _useTheme$theme.channel.selectChannel,
      black = _useTheme$theme.colors.black;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      deleted = _useState2[0],
      setDeleted = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      hasMore = _useState8[0],
      setHasMore = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      lastRead = _useState10[0],
      setLastRead = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      loadingMore = _useState14[0],
      setLoadingMore = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      loadingMoreRecent = _useState16[0],
      setLoadingMoreRecent = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      messages = _useState18[0],
      setMessages = _useState18[1];

  var _useState19 = (0, _react.useState)({}),
      _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
      members = _useState20[0],
      setMembers = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
      quotedMessage = _useState22[0],
      setQuotedMessage = _useState22[1];

  var _useState23 = (0, _react.useState)({}),
      _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
      read = _useState24[0],
      setRead = _useState24[1];

  var _useState25 = (0, _react.useState)(threadProps || null),
      _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
      thread = _useState26[0],
      setThread = _useState26[1];

  var _useState27 = (0, _react.useState)(true),
      _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
      threadHasMore = _useState28[0],
      setThreadHasMore = _useState28[1];

  var _useState29 = (0, _react.useState)(false),
      _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
      threadLoadingMore = _useState30[0],
      setThreadLoadingMore = _useState30[1];

  var _useState31 = (0, _react.useState)((threadProps == null ? void 0 : threadProps.id) && (channel == null ? void 0 : (_channel$state = channel.state) == null ? void 0 : (_channel$state$thread = _channel$state.threads) == null ? void 0 : _channel$state$thread[threadProps.id]) || []),
      _useState32 = (0, _slicedToArray2["default"])(_useState31, 2),
      threadMessages = _useState32[0],
      setThreadMessages = _useState32[1];

  var _useState33 = (0, _react.useState)({}),
      _useState34 = (0, _slicedToArray2["default"])(_useState33, 2),
      typing = _useState34[0],
      setTyping = _useState34[1];

  var _useState35 = (0, _react.useState)(),
      _useState36 = (0, _slicedToArray2["default"])(_useState35, 2),
      watcherCount = _useState36[0],
      setWatcherCount = _useState36[1];

  var _useState37 = (0, _react.useState)({}),
      _useState38 = (0, _slicedToArray2["default"])(_useState37, 2),
      watchers = _useState38[0],
      setWatchers = _useState38[1];

  var _useTargetedMessage = (0, _useTargetedMessage2.useTargetedMessage)(messageId),
      setTargetedMessage = _useTargetedMessage.setTargetedMessage,
      targetedMessage = _useTargetedMessage.targetedMessage;

  var channelId = (channel == null ? void 0 : channel.id) || '';
  (0, _react.useEffect)(function () {
    var initChannel = function initChannel() {
      if (!channel) return;

      if (!channel.initialized) {
        loadChannel();
        return;
      }

      if (messageId) {
        loadChannelAtMessage({
          messageId: messageId
        });
        return;
      }

      if (initialScrollToFirstUnreadMessage && channel.countUnread() > scrollToFirstUnreadThreshold) {
        loadChannelAtFirstUnreadMessage();
      } else {
        loadChannel();
      }
    };

    initChannel();
    return function () {
      copyChannelState.cancel();
      copyReadState.cancel();
      copyTypingState.cancel();
      loadMoreFinished.cancel();
      loadMoreThreadFinished.cancel();
    };
  }, [channelId, messageId]);
  var threadPropsExists = !!threadProps;
  (0, _react.useEffect)(function () {
    if (threadProps) {
      setThread(threadProps);

      if (channel && threadProps != null && threadProps.id) {
        var _channel$state$thread2;

        setThreadMessages(((_channel$state$thread2 = channel.state.threads) == null ? void 0 : _channel$state$thread2[threadProps.id]) || []);
      }
    } else {
      setThread(null);
    }
  }, [threadPropsExists]);
  var handleAppBackground = (0, _react.useCallback)(function () {
    if (channel) {
      channel.sendEvent({
        parent_id: thread == null ? void 0 : thread.id,
        type: 'typing.stop'
      });
    }
  }, [thread == null ? void 0 : thread.id, channelId]);
  (0, _useAppStateListener.useAppStateListener)(undefined, handleAppBackground);
  var isAdmin = (client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.role) === 'admin' || (channel == null ? void 0 : channel.state.membership.role) === 'admin';
  var isModerator = (channel == null ? void 0 : channel.state.membership.role) === 'channel_moderator' || (channel == null ? void 0 : channel.state.membership.role) === 'moderator';
  var isOwner = (channel == null ? void 0 : channel.state.membership.role) === 'owner';
  var markRead = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (!channel || channel != null && channel.disconnected || !(clientChannelConfig != null && clientChannelConfig.read_events)) {
      return;
    }

    if (doMarkReadRequest) {
      doMarkReadRequest(channel);
    } else {
      (0, _streamChat.logChatPromiseExecution)(channel.markRead(), 'mark read');
    }
  }, defaultThrottleInterval, throttleOptions)).current;
  var copyMessagesState = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (channel) {
      setMessages((0, _toConsumableArray2["default"])(channel.state.messages));
    }
  }, newMessageStateUpdateThrottleInterval, throttleOptions)).current;
  var copyTypingState = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (channel) {
      setTyping((0, _extends2["default"])({}, channel.state.typing));
    }
  }, stateUpdateThrottleInterval, throttleOptions)).current;
  var copyReadState = (0, _react.useRef)((0, _throttle["default"])(function () {
    if (channel) {
      setRead((0, _extends2["default"])({}, channel.state.read));
    }
  }, stateUpdateThrottleInterval, throttleOptions)).current;
  var copyChannelState = (0, _react.useRef)((0, _throttle["default"])(function () {
    setLoading(false);

    if (channel) {
      setMembers((0, _extends2["default"])({}, channel.state.members));
      setMessages((0, _toConsumableArray2["default"])(channel.state.messages));
      setRead((0, _extends2["default"])({}, channel.state.read));
      setTyping((0, _extends2["default"])({}, channel.state.typing));
      setWatcherCount(channel.state.watcher_count);
      setWatchers((0, _extends2["default"])({}, channel.state.watchers));
    }
  }, stateUpdateThrottleInterval, throttleOptions)).current;

  var connectionRecoveredHandler = function connectionRecoveredHandler() {
    if (channel) {
      copyChannelState();

      if (thread) {
        setThreadMessages((0, _toConsumableArray2["default"])(channel.state.threads[thread.id]));
      }
    }
  };

  var connectionChangedHandler = function connectionChangedHandler(event) {
    if (event.online) {
      resyncChannel();
    }
  };

  var handleEvent = function handleEvent(event) {
    var _event$message;

    if (thread) {
      var updatedThreadMessages = thread.id && channel && channel.state.threads[thread.id] || threadMessages;
      setThreadMessages(updatedThreadMessages);
    }

    if (channel && thread && ((_event$message = event.message) == null ? void 0 : _event$message.id) === thread.id) {
      var updatedThread = channel.state.formatMessage(event.message);
      setThread(updatedThread);
    }

    if (event.type === 'typing.start' || event.type === 'typing.stop') {
      copyTypingState();
    } else if (event.type === 'message.read') {
      copyReadState();
    } else if (event.type === 'message.new') {
      copyMessagesState();
    } else if (channel) {
      copyChannelState();
    }
  };

  (0, _react.useEffect)(function () {
    var channelSubscriptions = [];
    var clientSubscriptions = [];

    var subscribe = function subscribe() {
      if (!channel) return;
      clientSubscriptions.push(client.on('connection.recovered', connectionRecoveredHandler));
      clientSubscriptions.push(client.on('connection.changed', connectionChangedHandler));
      clientSubscriptions.push(client.on('channel.deleted', function (event) {
        if (event.cid === channel.cid) {
          setDeleted(true);
        }
      }));
      channelSubscriptions.push(channel.on(handleEvent));
    };

    subscribe();
    return function () {
      clientSubscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
      channelSubscriptions.forEach(function (s) {
        return s.unsubscribe();
      });
    };
  }, [channelId, connectionRecoveredHandler, handleEvent]);

  var channelQueryCall = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var queryCall,
          _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              queryCall = _args.length > 0 && _args[0] !== undefined ? _args[0] : function () {
                return null;
              };
              setError(false);
              setLoading(true);
              _context.prev = 3;
              _context.next = 6;
              return queryCall();

            case 6:
              setLastRead(new Date());
              setHasMore(true);
              copyChannelState();
              _context.next = 16;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              setError(_context.t0);
              setLoading(false);
              setLastRead(new Date());

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));

    return function channelQueryCall() {
      return _ref.apply(this, arguments);
    };
  }();

  var loadChannelAtFirstUnreadMessage = function loadChannelAtFirstUnreadMessage() {
    if (!channel) return;
    var unreadCount = channel.countUnread();
    if (unreadCount <= scrollToFirstUnreadThreshold) return;
    channel.state.clearMessages();
    channel.state.setIsUpToDate(false);
    return channelQueryCall((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var offset, mostRecentMessage, _mostRecentMessage;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(unreadCount < globalUnreadCountLimit)) {
                _context2.next = 10;
                break;
              }

              offset = unreadCount - unreadMessagesOnInitialLoadLimit;
              _context2.next = 4;
              return query(offset, 30);

            case 4:
              if (!(channel.state.messages.length && channel.state.messages.length <= scrollToFirstUnreadThreshold && !channel.state.isUpToDate)) {
                _context2.next = 8;
                break;
              }

              mostRecentMessage = channel.state.messages[channel.state.messages.length - 1];
              _context2.next = 8;
              return queryAfterMessage(mostRecentMessage.id, 10 - channel.state.messages.length);

            case 8:
              _context2.next = 21;
              break;

            case 10:
              _context2.next = 12;
              return channel.query({
                messages: {
                  created_at_before_or_equal: channel.lastRead() || new Date(0),
                  limit: 30
                }
              });

            case 12:
              if (!(channel.state.messages.length <= unreadMessagesOnInitialLoadLimit && !channel.state.isUpToDate)) {
                _context2.next = 21;
                break;
              }

              if (!(channel.state.messages.length > 0)) {
                _context2.next = 19;
                break;
              }

              _mostRecentMessage = channel.state.messages[channel.state.messages.length - 1];
              _context2.next = 17;
              return queryAfterMessage(_mostRecentMessage.id, 5);

            case 17:
              _context2.next = 21;
              break;

            case 19:
              _context2.next = 21;
              return channel.query({
                messages: {
                  created_at_after: channel.lastRead() || new Date(0),
                  limit: 10
                }
              });

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  };

  var loadChannelAtMessage = function loadChannelAtMessage(_ref3) {
    var _ref3$after = _ref3.after,
        after = _ref3$after === void 0 ? 2 : _ref3$after,
        _ref3$before = _ref3.before,
        before = _ref3$before === void 0 ? 30 : _ref3$before,
        messageId = _ref3.messageId;
    return channelQueryCall((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return queryAtMessage({
                after: after,
                before: before,
                messageId: messageId
              });

            case 2:
              if (messageId) {
                setTargetedMessage(messageId);
              }

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  };

  var loadChannel = function loadChannel() {
    return channelQueryCall((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!(channel != null && channel.initialized) || !channel.state.isUpToDate)) {
                _context4.next = 4;
                break;
              }

              _context4.next = 3;
              return channel == null ? void 0 : channel.watch();

            case 3:
              channel == null ? void 0 : channel.state.setIsUpToDate(true);

            case 4:
              return _context4.abrupt("return");

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  };

  var reloadThread = function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      var parentID, limit, queryResponse, updatedHasMore, updatedThreadMessages;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!channel || !(thread != null && thread.id))) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              setThreadLoadingMore(true);
              _context5.prev = 3;
              parentID = thread.id;
              limit = 50;
              channel.state.threads[parentID] = [];
              _context5.next = 9;
              return channel.getReplies(parentID, {
                limit: 50
              });

            case 9:
              queryResponse = _context5.sent;
              updatedHasMore = queryResponse.messages.length === limit;
              updatedThreadMessages = channel.state.threads[parentID] || [];
              loadMoreThreadFinished(updatedHasMore, updatedThreadMessages);
              _context5.next = 21;
              break;

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](3);
              console.warn('Thread loading request failed with error', _context5.t0);
              setError(_context5.t0);
              setThreadLoadingMore(false);
              throw _context5.t0;

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[3, 15]]);
    }));

    return function reloadThread() {
      return _ref6.apply(this, arguments);
    };
  }();

  var resyncChannel = function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
      var _messages$, state, oldListTopMessage, oldListTopMessageId, oldListBottomMessage, newListTopMessage, newListBottomMessage, parseMessage, failedMessages, failedThreadMessages, oldListTopMessageCreatedAt, oldListBottomMessageCreatedAt, newListTopMessageCreatedAt, newListBottomMessageCreatedAt, finalMessages, index;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (channel) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              setError(false);
              _context6.prev = 3;
              _context6.next = 6;
              return channel.watch({
                messages: {
                  limit: messages.length + 30
                }
              });

            case 6:
              state = _context6.sent;
              oldListTopMessage = messages[0];
              oldListTopMessageId = (_messages$ = messages[0]) == null ? void 0 : _messages$.id;
              oldListBottomMessage = messages[messages.length - 1];
              newListTopMessage = state.messages[0];
              newListBottomMessage = state.messages[state.messages.length - 1];

              if (!(!oldListTopMessage || !oldListBottomMessage || !newListTopMessage || !newListBottomMessage)) {
                _context6.next = 18;
                break;
              }

              channel.state.clearMessages();
              channel.state.setIsUpToDate(true);
              channel.state.addMessagesSorted(state.messages);
              copyChannelState();
              return _context6.abrupt("return");

            case 18:
              parseMessage = function parseMessage(message) {
                var _message$pinned_at, _message$updated_at;

                return (0, _extends2["default"])({}, message, {
                  created_at: message.created_at.toString(),
                  pinned_at: (_message$pinned_at = message.pinned_at) == null ? void 0 : _message$pinned_at.toString(),
                  updated_at: (_message$updated_at = message.updated_at) == null ? void 0 : _message$updated_at.toString()
                });
              };

              failedMessages = messages.filter(function (message) {
                return message.status === 'failed';
              }).map(parseMessage);
              failedThreadMessages = thread ? threadMessages.filter(function (message) {
                return message.status === 'failed';
              }).map(parseMessage) : [];
              oldListTopMessageCreatedAt = oldListTopMessage.created_at;
              oldListBottomMessageCreatedAt = oldListBottomMessage.created_at;
              newListTopMessageCreatedAt = newListTopMessage.created_at ? new Date(newListTopMessage.created_at) : new Date();
              newListBottomMessageCreatedAt = newListBottomMessage != null && newListBottomMessage.created_at ? new Date(newListBottomMessage.created_at) : new Date();
              finalMessages = [];

              if (oldListTopMessage && oldListTopMessageCreatedAt && oldListBottomMessageCreatedAt && newListTopMessageCreatedAt < oldListTopMessageCreatedAt && newListBottomMessageCreatedAt >= oldListBottomMessageCreatedAt) {
                index = state.messages.findIndex(function (message) {
                  return message.id === oldListTopMessageId;
                });
                finalMessages = state.messages.slice(index);
              } else {
                finalMessages = state.messages;
              }

              channel.state.setIsUpToDate(true);
              channel.state.clearMessages();
              channel.state.addMessagesSorted(finalMessages);
              setHasMore(true);
              copyChannelState();

              if (failedMessages.length) {
                channel.state.addMessagesSorted(failedMessages);
                copyChannelState();
              }

              _context6.next = 35;
              return reloadThread();

            case 35:
              if (thread && failedThreadMessages.length) {
                channel.state.addMessagesSorted(failedThreadMessages);
                setThreadMessages((0, _toConsumableArray2["default"])(channel.state.threads[thread.id]));
              }

              _context6.next = 42;
              break;

            case 38:
              _context6.prev = 38;
              _context6.t0 = _context6["catch"](3);
              setError(_context6.t0);
              setLoading(false);

            case 42:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[3, 38]]);
    }));

    return function resyncChannel() {
      return _ref7.apply(this, arguments);
    };
  }();

  var reloadChannel = function reloadChannel() {
    return channelQueryCall((0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7() {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return channel == null ? void 0 : channel.watch();

            case 2:
              channel == null ? void 0 : channel.state.setIsUpToDate(true);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
  };

  var query = function () {
    var _ref9 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8() {
      var offset,
          limit,
          _args8 = arguments;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              offset = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : 0;
              limit = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : 30;

              if (channel) {
                _context8.next = 4;
                break;
              }

              return _context8.abrupt("return");

            case 4:
              channel.state.clearMessages();
              _context8.next = 7;
              return channel.query({
                messages: {
                  limit: limit,
                  offset: offset
                },
                watch: true
              });

            case 7:
              channel.state.setIsUpToDate(offset === 0);

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function query() {
      return _ref9.apply(this, arguments);
    };
  }();

  var queryAtMessage = function () {
    var _ref11 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(_ref10) {
      var _ref10$after, after, _ref10$before, before, messageId;

      return _regenerator["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _ref10$after = _ref10.after, after = _ref10$after === void 0 ? 10 : _ref10$after, _ref10$before = _ref10.before, before = _ref10$before === void 0 ? 10 : _ref10$before, messageId = _ref10.messageId;

              if (channel) {
                _context9.next = 3;
                break;
              }

              return _context9.abrupt("return");

            case 3:
              channel.state.setIsUpToDate(false);
              channel.state.clearMessages();
              setMessages((0, _toConsumableArray2["default"])(channel.state.messages));

              if (messageId) {
                _context9.next = 11;
                break;
              }

              _context9.next = 9;
              return channel.query({
                messages: {
                  limit: before
                },
                watch: true
              });

            case 9:
              channel.state.setIsUpToDate(true);
              return _context9.abrupt("return");

            case 11:
              _context9.next = 13;
              return queryBeforeMessage(messageId, before);

            case 13:
              _context9.next = 15;
              return queryAfterMessage(messageId, after);

            case 15:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function queryAtMessage(_x) {
      return _ref11.apply(this, arguments);
    };
  }();

  var queryBeforeMessage = function () {
    var _ref12 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10(messageId) {
      var limit,
          _args10 = arguments;
      return _regenerator["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              limit = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : 5;

              if (channel) {
                _context10.next = 3;
                break;
              }

              return _context10.abrupt("return");

            case 3:
              _context10.next = 5;
              return channel.query({
                messages: {
                  id_lt: messageId,
                  limit: limit
                },
                watch: true
              });

            case 5:
              channel.state.setIsUpToDate(false);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function queryBeforeMessage(_x2) {
      return _ref12.apply(this, arguments);
    };
  }();

  var queryAfterMessage = function () {
    var _ref13 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11(messageId) {
      var limit,
          state,
          _args11 = arguments;
      return _regenerator["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              limit = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : 5;

              if (channel) {
                _context11.next = 3;
                break;
              }

              return _context11.abrupt("return");

            case 3:
              _context11.next = 5;
              return channel.query({
                messages: {
                  id_gte: messageId,
                  limit: limit
                },
                watch: true
              });

            case 5:
              state = _context11.sent;

              if (state.messages.length < limit) {
                channel.state.setIsUpToDate(true);
              } else {
                channel.state.setIsUpToDate(false);
              }

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function queryAfterMessage(_x3) {
      return _ref13.apply(this, arguments);
    };
  }();

  var getChannelConfigSafely = function getChannelConfigSafely() {
    try {
      return channel == null ? void 0 : channel.getConfig();
    } catch (_) {
      return null;
    }
  };

  var clientChannelConfig = getChannelConfigSafely();
  var messagesConfig = {
    mutesEnabled: (_ref14 = mutesEnabledProp != null ? mutesEnabledProp : clientChannelConfig == null ? void 0 : clientChannelConfig.mutes) != null ? _ref14 : true,
    quotedRepliesEnabled: quotedRepliesEnabledProp != null ? quotedRepliesEnabledProp : true,
    reactionsEnabled: (_ref15 = reactionsEnabledProp != null ? reactionsEnabledProp : clientChannelConfig == null ? void 0 : clientChannelConfig.reactions) != null ? _ref15 : true,
    threadRepliesEnabled: (_ref16 = threadRepliesEnabledProp != null ? threadRepliesEnabledProp : clientChannelConfig == null ? void 0 : clientChannelConfig.replies) != null ? _ref16 : true
  };
  var channelConfig = {
    readEventsEnabled: (_ref17 = readEventsEnabledProp != null ? readEventsEnabledProp : clientChannelConfig == null ? void 0 : clientChannelConfig.read_events) != null ? _ref17 : true,
    typingEventsEnabled: (_ref18 = typingEventsEnabledProp != null ? typingEventsEnabledProp : clientChannelConfig == null ? void 0 : clientChannelConfig.typing_events) != null ? _ref18 : true
  };
  var inputConfig = {
    maxMessageLength: (_ref19 = maxMessageLengthProp != null ? maxMessageLengthProp : clientChannelConfig == null ? void 0 : clientChannelConfig.max_message_length) != null ? _ref19 : undefined,
    uploadsEnabled: (_ref20 = uploadsEnabledProp != null ? uploadsEnabledProp : clientChannelConfig == null ? void 0 : clientChannelConfig.uploads) != null ? _ref20 : true
  };

  var updateMessage = function updateMessage(updatedMessage) {
    var extraState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (channel) {
      channel.state.addMessageSorted(updatedMessage, true);

      if (thread && updatedMessage.parent_id) {
        extraState.threadMessages = channel.state.threads[updatedMessage.parent_id] || [];
        setThreadMessages(extraState.threadMessages);
      }

      setMessages((0, _toConsumableArray2["default"])(channel.state.messages));
    }
  };

  var replaceMessage = function replaceMessage(oldMessage, newMessage) {
    if (channel) {
      channel.state.removeMessage(oldMessage);
      channel.state.addMessageSorted(newMessage, true);

      if (thread && newMessage.parent_id) {
        var _threadMessages = channel.state.threads[newMessage.parent_id] || [];

        setThreadMessages(_threadMessages);
      }

      setMessages(channel.state.messages);
    }
  };

  var createMessagePreview = function createMessagePreview(_ref21) {
    var attachments = _ref21.attachments,
        mentioned_users = _ref21.mentioned_users,
        parent_id = _ref21.parent_id,
        text = _ref21.text,
        extraFields = (0, _objectWithoutProperties2["default"])(_ref21, _excluded);
    var preview = (0, _extends2["default"])({
      __html: text,
      attachments: attachments,
      created_at: new Date(),
      html: text,
      id: client.userID + "-" + (0, _utils.generateRandomId)(),
      mentioned_users: (mentioned_users == null ? void 0 : mentioned_users.map(function (userId) {
        return {
          id: userId
        };
      })) || [],
      parent_id: parent_id,
      reactions: [],
      status: 'sending',
      text: text,
      type: 'regular',
      user: (0, _extends2["default"])({
        id: client.userID
      }, client.user)
    }, extraFields);

    if (preview.quoted_message_id) {
      var _quotedMessage = messages.find(function (message) {
        return message.id === preview.quoted_message_id;
      });

      preview.quoted_message = _quotedMessage;
    }

    return preview;
  };

  var sendMessageRequest = function () {
    var _ref22 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee12(message, retrying) {
      var __html, attachments, created_at, html, id, mentioned_users, parent_id, quoted_message, reactions, status, text, type, updated_at, user, extraFields, messageData, messageResponse;

      return _regenerator["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              __html = message.__html, attachments = message.attachments, created_at = message.created_at, html = message.html, id = message.id, mentioned_users = message.mentioned_users, parent_id = message.parent_id, quoted_message = message.quoted_message, reactions = message.reactions, status = message.status, text = message.text, type = message.type, updated_at = message.updated_at, user = message.user, extraFields = (0, _objectWithoutProperties2["default"])(message, _excluded2);
              messageData = (0, _extends2["default"])({
                attachments: attachments,
                id: retrying ? undefined : id,
                mentioned_users: (mentioned_users == null ? void 0 : mentioned_users.map(function (mentionedUser) {
                  return mentionedUser.id;
                })) || [],
                parent_id: parent_id,
                text: text
              }, extraFields);
              _context12.prev = 2;
              messageResponse = {};

              if (!doSendMessageRequest) {
                _context12.next = 10;
                break;
              }

              _context12.next = 7;
              return doSendMessageRequest((channel == null ? void 0 : channel.cid) || '', messageData);

            case 7:
              messageResponse = _context12.sent;
              _context12.next = 14;
              break;

            case 10:
              if (!channel) {
                _context12.next = 14;
                break;
              }

              _context12.next = 13;
              return channel.sendMessage(messageData);

            case 13:
              messageResponse = _context12.sent;

            case 14:
              if (messageResponse.message) {
                messageResponse.message.status = 'received';

                if (retrying) {
                  replaceMessage(message, messageResponse.message);
                } else {
                  updateMessage(messageResponse.message);
                }
              }

              _context12.next = 22;
              break;

            case 17:
              _context12.prev = 17;
              _context12.t0 = _context12["catch"](2);
              console.log(_context12.t0);
              message.status = 'failed';
              updateMessage(message);

            case 22:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[2, 17]]);
    }));

    return function sendMessageRequest(_x4, _x5) {
      return _ref22.apply(this, arguments);
    };
  }();

  var sendMessage = function () {
    var _ref23 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee13(message) {
      var _channel$state2;

      var messagePreview;
      return _regenerator["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (channel != null && (_channel$state2 = channel.state) != null && _channel$state2.filterErrorMessages) {
                channel.state.filterErrorMessages();
              }

              messagePreview = createMessagePreview((0, _extends2["default"])({}, message, {
                attachments: message.attachments || []
              }));

              if (channel != null && channel.state.isUpToDate) {
                _context13.next = 5;
                break;
              }

              _context13.next = 5;
              return reloadChannel();

            case 5:
              updateMessage(messagePreview, {
                commands: [],
                messageInput: ''
              });
              _context13.next = 8;
              return sendMessageRequest(messagePreview);

            case 8:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function sendMessage(_x6) {
      return _ref23.apply(this, arguments);
    };
  }();

  var retrySendMessage = function () {
    var _ref24 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee14(message) {
      var statusPendingMessage;
      return _regenerator["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              statusPendingMessage = (0, _extends2["default"])({}, message, {
                status: 'sending'
              });
              updateMessage(statusPendingMessage);
              _context14.next = 4;
              return sendMessageRequest(statusPendingMessage, true);

            case 4:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function retrySendMessage(_x7) {
      return _ref24.apply(this, arguments);
    };
  }();

  var loadMoreFinished = (0, _react.useRef)((0, _debounce["default"])(function (updatedHasMore, newMessages) {
    setLoadingMore(false);
    setError(false);
    setHasMore(updatedHasMore);
    setMessages(newMessages);
  }, defaultDebounceInterval, debounceOptions)).current;

  var loadMore = function () {
    var _ref25 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee15() {
      var limit,
          oldestMessage,
          oldestID,
          queryResponse,
          updatedHasMore,
          _args15 = arguments;
      return _regenerator["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              limit = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : 20;

              if (!(loadingMore || hasMore === false)) {
                _context15.next = 3;
                break;
              }

              return _context15.abrupt("return");

            case 3:
              setLoadingMore(true);

              if (messages.length) {
                _context15.next = 6;
                break;
              }

              return _context15.abrupt("return", setLoadingMore(false));

            case 6:
              oldestMessage = messages && messages[0];

              if (!(oldestMessage && oldestMessage.status !== 'received')) {
                _context15.next = 9;
                break;
              }

              return _context15.abrupt("return", setLoadingMore(false));

            case 9:
              oldestID = oldestMessage && oldestMessage.id;
              _context15.prev = 10;

              if (!channel) {
                _context15.next = 17;
                break;
              }

              _context15.next = 14;
              return channel.query({
                messages: {
                  id_lt: oldestID,
                  limit: limit
                }
              });

            case 14:
              queryResponse = _context15.sent;
              updatedHasMore = queryResponse.messages.length === limit;
              loadMoreFinished(updatedHasMore, channel.state.messages);

            case 17:
              _context15.next = 25;
              break;

            case 19:
              _context15.prev = 19;
              _context15.t0 = _context15["catch"](10);
              console.warn('Message pagination request failed with error', _context15.t0);
              setError(_context15.t0);
              setLoadingMore(false);
              throw _context15.t0;

            case 25:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[10, 19]]);
    }));

    return function loadMore() {
      return _ref25.apply(this, arguments);
    };
  }();

  var loadMoreRecent = function () {
    var _ref26 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee16() {
      var limit,
          recentMessage,
          _args16 = arguments;
      return _regenerator["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              limit = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : 5;

              if (!(channel != null && channel.state.isUpToDate)) {
                _context16.next = 3;
                break;
              }

              return _context16.abrupt("return");

            case 3:
              setLoadingMoreRecent(true);
              recentMessage = messages[messages.length - 1];

              if (!((recentMessage == null ? void 0 : recentMessage.status) !== 'received')) {
                _context16.next = 8;
                break;
              }

              setLoadingMoreRecent(false);
              return _context16.abrupt("return");

            case 8:
              _context16.prev = 8;

              if (!channel) {
                _context16.next = 13;
                break;
              }

              _context16.next = 12;
              return queryAfterMessage(recentMessage.id, limit);

            case 12:
              loadMoreRecentFinished(channel.state.messages);

            case 13:
              _context16.next = 21;
              break;

            case 15:
              _context16.prev = 15;
              _context16.t0 = _context16["catch"](8);
              console.warn('Message pagination request failed with error', _context16.t0);
              setError(_context16.t0);
              setLoadingMoreRecent(false);
              throw _context16.t0;

            case 21:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[8, 15]]);
    }));

    return function loadMoreRecent() {
      return _ref26.apply(this, arguments);
    };
  }();

  var loadMoreRecentFinished = (0, _react.useRef)((0, _debounce["default"])(function (newMessages) {
    setLoadingMoreRecent(false);
    setMessages(newMessages);
    setError(false);
  }, defaultDebounceInterval, debounceOptions)).current;

  var editMessage = function editMessage(updatedMessage) {
    return doUpdateMessageRequest ? doUpdateMessageRequest((channel == null ? void 0 : channel.cid) || '', updatedMessage) : client.updateMessage(updatedMessage);
  };

  var setEditingState = function setEditingState(message) {
    setEditing(message);
  };

  var setQuotedMessageState = function setQuotedMessageState(message) {
    setQuotedMessage(message);
  };

  var clearEditingState = function clearEditingState() {
    return setEditing(false);
  };

  var clearQuotedMessageState = function clearQuotedMessageState() {
    return setQuotedMessage(false);
  };

  var removeMessage = function removeMessage(message) {
    if (channel) {
      channel.state.removeMessage(message);
      setMessages(channel.state.messages);

      if (thread) {
        setThreadMessages(channel.state.threads[thread.id] || []);
      }
    }
  };

  var openThread = function openThread(message) {
    var _channel$state3;

    var newThreadMessages = message != null && message.id ? (channel == null ? void 0 : (_channel$state3 = channel.state) == null ? void 0 : _channel$state3.threads[message.id]) || [] : [];
    setThread(message);
    setThreadMessages(newThreadMessages);
  };

  var closeThread = (0, _react.useCallback)(function () {
    setThread(null);
    setThreadMessages([]);
  }, [setThread, setThreadMessages]);
  var loadMoreThreadFinished = (0, _react.useRef)((0, _debounce["default"])(function (newThreadHasMore, updatedThreadMessages) {
    setThreadHasMore(newThreadHasMore);
    setThreadLoadingMore(false);
    setThreadMessages(updatedThreadMessages);
  }, defaultDebounceInterval, debounceOptions)).current;

  var loadMoreThread = function () {
    var _ref27 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee17() {
      var _threadMessages$, parentID, oldestMessageID, limit, queryResponse, updatedHasMore, updatedThreadMessages;

      return _regenerator["default"].wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              if (!(threadLoadingMore || !(thread != null && thread.id))) {
                _context17.next = 2;
                break;
              }

              return _context17.abrupt("return");

            case 2:
              setThreadLoadingMore(true);
              _context17.prev = 3;

              if (!channel) {
                _context17.next = 15;
                break;
              }

              parentID = thread.id;
              channel.state.threads[parentID] = threadMessages;
              oldestMessageID = threadMessages == null ? void 0 : (_threadMessages$ = threadMessages[0]) == null ? void 0 : _threadMessages$.id;
              limit = 50;
              _context17.next = 11;
              return channel.getReplies(parentID, {
                id_lt: oldestMessageID,
                limit: limit
              });

            case 11:
              queryResponse = _context17.sent;
              updatedHasMore = queryResponse.messages.length === limit;
              updatedThreadMessages = channel.state.threads[parentID] || [];
              loadMoreThreadFinished(updatedHasMore, updatedThreadMessages);

            case 15:
              _context17.next = 23;
              break;

            case 17:
              _context17.prev = 17;
              _context17.t0 = _context17["catch"](3);
              console.warn('Message pagination request failed with error', _context17.t0);
              setError(_context17.t0);
              setThreadLoadingMore(false);
              throw _context17.t0;

            case 23:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[3, 17]]);
    }));

    return function loadMoreThread() {
      return _ref27.apply(this, arguments);
    };
  }();

  var channelContext = (0, _useCreateChannelContext.useCreateChannelContext)((0, _extends2["default"])({}, channelConfig, {
    channel: channel,
    disabled: !!(channel != null && (_channel$data = channel.data) != null && _channel$data.frozen) && disableIfFrozenChannel,
    EmptyStateIndicator: EmptyStateIndicator,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    enforceUniqueReaction: enforceUniqueReaction,
    error: error,
    giphyEnabled: giphyEnabled != null ? giphyEnabled : !!((_ref28 = (clientChannelConfig == null ? void 0 : clientChannelConfig.commands) || []) != null && _ref28.some(function (command) {
      return command.name === 'giphy';
    })),
    hideDateSeparators: hideDateSeparators,
    hideStickyDateHeader: hideStickyDateHeader,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isOwner: isOwner,
    lastRead: lastRead,
    loadChannelAtMessage: loadChannelAtMessage,
    loading: loading,
    LoadingIndicator: LoadingIndicator,
    markRead: markRead,
    maxTimeBetweenGroupedMessages: maxTimeBetweenGroupedMessages,
    members: members,
    NetworkDownIndicator: NetworkDownIndicator,
    read: read,
    reloadChannel: reloadChannel,
    scrollToFirstUnreadThreshold: scrollToFirstUnreadThreshold,
    setLastRead: setLastRead,
    setTargetedMessage: setTargetedMessage,
    StickyHeader: StickyHeader,
    targetedMessage: targetedMessage,
    watcherCount: watcherCount,
    watchers: watchers
  }));
  var messageInputContext = (0, _useCreateInputMessageInputContext.useCreateInputMessageInputContext)((0, _extends2["default"])({}, inputConfig, {
    additionalTextInputProps: additionalTextInputProps,
    AttachButton: AttachButton,
    autoCompleteSuggestionsLimit: autoCompleteSuggestionsLimit,
    autoCompleteTriggerSettings: autoCompleteTriggerSettings,
    channelId: channelId,
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
    UploadProgressIndicator: UploadProgressIndicator
  }));
  var messageListContext = (0, _useCreatePaginatedMessageListContext.useCreatePaginatedMessageListContext)({
    channelId: channelId,
    hasMore: hasMore,
    loadingMore: loadingMoreProp !== undefined ? loadingMoreProp : loadingMore,
    loadingMoreRecent: loadingMoreRecentProp !== undefined ? loadingMoreRecentProp : loadingMoreRecent,
    loadMore: loadMore,
    loadMoreRecent: loadMoreRecent,
    messages: messagesProp || messages,
    setLoadingMore: setLoadingMore,
    setLoadingMoreRecent: setLoadingMoreRecent
  });
  var messagesContext = (0, _useCreateMessagesContext.useCreateMessagesContext)((0, _extends2["default"])({}, messagesConfig, {
    additionalTouchableProps: additionalTouchableProps,
    animatedLongPress: animatedLongPress,
    Attachment: Attachment,
    AttachmentActions: AttachmentActions,
    blockUser: blockUser,
    Card: Card,
    CardCover: CardCover,
    CardFooter: CardFooter,
    CardHeader: CardHeader,
    channelId: channelId,
    copyMessage: copyMessage,
    DateHeader: DateHeader,
    deleteMessage: deleteMessage,
    disableTypingIndicator: disableTypingIndicator,
    dismissKeyboardOnMessageTouch: dismissKeyboardOnMessageTouch,
    editMessage: editMessageProp,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    FileAttachment: FileAttachment,
    FileAttachmentGroup: FileAttachmentGroup,
    FileAttachmentIcon: FileAttachmentIcon,
    flagMessage: flagMessage,
    FlatList: FlatList,
    forceAlignMessages: forceAlignMessages,
    formatDate: formatDate,
    Gallery: Gallery,
    Giphy: Giphy,
    handleBlock: handleBlock,
    handleCopy: handleCopy,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleFlag: handleFlag,
    handleMute: handleMute,
    handleQuotedReply: handleQuotedReply,
    handleReaction: handleReaction,
    handleRetry: handleRetry,
    handleThreadReply: handleThreadReply,
    initialScrollToFirstUnreadMessage: initialScrollToFirstUnreadMessage,
    InlineDateSeparator: InlineDateSeparator,
    InlineUnreadIndicator: InlineUnreadIndicator,
    legacyImageViewerSwipeBehaviour: legacyImageViewerSwipeBehaviour,
    markdownRules: markdownRules,
    Message: Message,
    messageActions: messageActions,
    MessageAvatar: MessageAvatar,
    MessageContent: MessageContent,
    messageContentOrder: messageContentOrder,
    MessageDeleted: MessageDeleted,
    MessageFooter: MessageFooter,
    MessageHeader: MessageHeader,
    MessageList: MessageList,
    MessageReplies: MessageReplies,
    MessageRepliesAvatars: MessageRepliesAvatars,
    MessageSimple: MessageSimple,
    MessageStatus: MessageStatus,
    MessageSystem: MessageSystem,
    MessageText: MessageText,
    muteUser: muteUser,
    myMessageTheme: myMessageTheme,
    onDoubleTapMessage: onDoubleTapMessage,
    onLongPressMessage: onLongPressMessage,
    onPressInMessage: onPressInMessage,
    onPressMessage: onPressMessage,
    OverlayReactionList: OverlayReactionList,
    quotedReply: quotedReply,
    ReactionList: ReactionList,
    removeMessage: removeMessage,
    Reply: Reply,
    retry: retry,
    retrySendMessage: retrySendMessage,
    ScrollToBottomButton: ScrollToBottomButton,
    selectReaction: selectReaction,
    setEditingState: setEditingState,
    setQuotedMessageState: setQuotedMessageState,
    supportedReactions: supportedReactions,
    threadReply: threadReply,
    TypingIndicator: TypingIndicator,
    TypingIndicatorContainer: TypingIndicatorContainer,
    updateMessage: updateMessage,
    UrlPreview: UrlPreview
  }));
  var suggestionsContext = {
    closeSuggestions: closeSuggestions,
    openSuggestions: openSuggestions,
    updateSuggestions: updateSuggestions
  };
  var threadContext = (0, _useCreateThreadContext.useCreateThreadContext)({
    allowThreadMessagesInChannel: allowThreadMessagesInChannel,
    closeThread: closeThread,
    loadMoreThread: loadMoreThread,
    openThread: openThread,
    reloadThread: reloadThread,
    setThreadLoadingMore: setThreadLoadingMore,
    thread: thread,
    threadHasMore: threadHasMore,
    threadLoadingMore: threadLoadingMore,
    threadMessages: threadMessages
  });
  var typingContext = (0, _useCreateTypingContext.useCreateTypingContext)({
    typing: typing
  });
  if (deleted) return null;

  if (!channel || error && messages.length === 0) {
    return _react["default"].createElement(LoadingErrorIndicator, {
      error: error,
      listType: "message",
      retry: reloadChannel,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1812,
        columnNumber: 12
      }
    });
  }

  if (!(channel != null && channel.cid) || !channel.watch) {
    return _react["default"].createElement(_reactNative.Text, {
      style: [styles.selectChannel, {
        color: black
      }, selectChannel],
      testID: "no-channel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1817,
        columnNumber: 7
      }
    }, t('Please select a channel first'));
  }

  return _react["default"].createElement(KeyboardCompatibleView, (0, _extends2["default"])({
    behavior: keyboardBehavior,
    enabled: !disableKeyboardCompatibleView,
    keyboardVerticalOffset: keyboardVerticalOffset
  }, additionalKeyboardAvoidingViewProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1824,
      columnNumber: 5
    }
  }), _react["default"].createElement(_ChannelContext.ChannelProvider, {
    value: channelContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1830,
      columnNumber: 7
    }
  }, _react["default"].createElement(_TypingContext.TypingProvider, {
    value: typingContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1831,
      columnNumber: 9
    }
  }, _react["default"].createElement(_PaginatedMessageListContext.PaginatedMessageListProvider, {
    value: messageListContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1832,
      columnNumber: 11
    }
  }, _react["default"].createElement(_MessagesContext.MessagesProvider, {
    value: messagesContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1833,
      columnNumber: 13
    }
  }, _react["default"].createElement(_ThreadContext.ThreadProvider, {
    value: threadContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1834,
      columnNumber: 15
    }
  }, _react["default"].createElement(_SuggestionsContext.SuggestionsProvider, {
    value: suggestionsContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1835,
      columnNumber: 17
    }
  }, _react["default"].createElement(_MessageInputContext.MessageInputProvider, {
    value: messageInputContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1836,
      columnNumber: 19
    }
  }, _react["default"].createElement(_reactNative.View, {
    style: {
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1837,
      columnNumber: 21
    }
  }, children)))))))));
};

var Channel = function Channel(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t;

  return _react["default"].createElement(ChannelWithContext, (0, _extends2["default"])({
    client: client,
    t: t
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1882,
      columnNumber: 5
    }
  }));
};

exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map