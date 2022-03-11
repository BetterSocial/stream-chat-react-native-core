var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _useMessageList = require("./hooks/useMessageList");

var _InlineLoadingMoreIndicator = require("./InlineLoadingMoreIndicator");

var _InlineLoadingMoreRecentIndicator = require("./InlineLoadingMoreRecentIndicator");

var _InlineLoadingMoreThreadIndicator = require("./InlineLoadingMoreThreadIndicator");

var _getLastReceivedMessage = require("./utils/getLastReceivedMessage");

var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");

var _ChannelContext = require("../../contexts/channelContext/ChannelContext");

var _ChatContext = require("../../contexts/chatContext/ChatContext");

var _ImageGalleryContext = require("../../contexts/imageGalleryContext/ImageGalleryContext");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");

var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");

var _ThreadContext = require("../../contexts/threadContext/ThreadContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _TranslationContext = require("../../contexts/translationContext/TranslationContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/MessageList.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 4
  },
  flex: {
    flex: 1
  },
  invert: {
    transform: [{
      scaleY: -1
    }]
  },
  listContainer: {
    flex: 1,
    width: '100%'
  },
  messagePadding: {
    paddingHorizontal: 8
  },
  stickyHeader: {
    position: 'absolute',
    top: 0
  }
});

var keyExtractor = function keyExtractor(item) {
  return item.id || (item.created_at ? typeof item.created_at === 'string' ? item.created_at : item.created_at.toISOString() : Date.now().toString());
};

var flatListViewabilityConfig = {
  viewAreaCoveragePercentThreshold: 1
};

var MessageListWithContext = function MessageListWithContext(props) {
  var _getLastReceivedMessa;

  var LoadingMoreIndicator = props.threadList ? _InlineLoadingMoreThreadIndicator.InlineLoadingMoreThreadIndicator : _InlineLoadingMoreIndicator.InlineLoadingMoreIndicator;
  var additionalFlatListProps = props.additionalFlatListProps,
      channel = props.channel,
      client = props.client,
      closePicker = props.closePicker,
      DateHeader = props.DateHeader,
      disabled = props.disabled,
      disableTypingIndicator = props.disableTypingIndicator,
      EmptyStateIndicator = props.EmptyStateIndicator,
      FlatList = props.FlatList,
      _props$FooterComponen = props.FooterComponent,
      FooterComponent = _props$FooterComponen === void 0 ? LoadingMoreIndicator : _props$FooterComponen,
      _props$HeaderComponen = props.HeaderComponent,
      HeaderComponent = _props$HeaderComponen === void 0 ? _InlineLoadingMoreRecentIndicator.InlineLoadingMoreRecentIndicator : _props$HeaderComponen,
      hideStickyDateHeader = props.hideStickyDateHeader,
      initialScrollToFirstUnreadMessage = props.initialScrollToFirstUnreadMessage,
      InlineDateSeparator = props.InlineDateSeparator,
      InlineUnreadIndicator = props.InlineUnreadIndicator,
      _props$inverted = props.inverted,
      inverted = _props$inverted === void 0 ? true : _props$inverted,
      legacyImageViewerSwipeBehaviour = props.legacyImageViewerSwipeBehaviour,
      loadChannelAtMessage = props.loadChannelAtMessage,
      loading = props.loading,
      LoadingIndicator = props.LoadingIndicator,
      loadMore = props.loadMore,
      loadMoreRecent = props.loadMoreRecent,
      loadMoreThread = props.loadMoreThread,
      markRead = props.markRead,
      Message = props.Message,
      MessageSystem = props.MessageSystem,
      myMessageTheme = props.myMessageTheme,
      NetworkDownIndicator = props.NetworkDownIndicator,
      noGroupByUser = props.noGroupByUser,
      onListScroll = props.onListScroll,
      onThreadSelect = props.onThreadSelect,
      overlay = props.overlay,
      reloadChannel = props.reloadChannel,
      ScrollToBottomButton = props.ScrollToBottomButton,
      scrollToFirstUnreadThreshold = props.scrollToFirstUnreadThreshold,
      selectedPicker = props.selectedPicker,
      setFlatListRef = props.setFlatListRef,
      setImages = props.setImages,
      setSelectedPicker = props.setSelectedPicker,
      setTargetedMessage = props.setTargetedMessage,
      StickyHeader = props.StickyHeader,
      targetedMessage = props.targetedMessage,
      tDateTimeParser = props.tDateTimeParser,
      thread = props.thread,
      _props$threadList = props.threadList,
      threadList = _props$threadList === void 0 ? false : _props$threadList,
      typingEventsEnabled = props.typingEventsEnabled,
      TypingIndicator = props.TypingIndicator,
      TypingIndicatorContainer = props.TypingIndicatorContainer;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var white_snow = theme.colors.white_snow,
      _theme$messageList = theme.messageList,
      container = _theme$messageList.container,
      contentContainer = _theme$messageList.contentContainer,
      listContainer = _theme$messageList.listContainer;
  var modifiedTheme = (0, _react.useMemo)(function () {
    return (0, _ThemeContext.mergeThemes)({
      style: myMessageTheme,
      theme: theme
    });
  }, [myMessageTheme, theme]);
  var messageList = (0, _useMessageList.useMessageList)({
    inverted: inverted,
    noGroupByUser: noGroupByUser,
    threadList: threadList
  });
  var messageListLengthBeforeUpdate = (0, _react.useRef)(0);
  var messageListLengthAfterUpdate = messageList.length;
  var topMessageBeforeUpdate = (0, _react.useRef)();
  var topMessageAfterUpdate = messageList[messageList.length - 1];

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      autoscrollToTop = _useState2[0],
      setAutoscrollToTop = _useState2[1];

  var onStartReachedTracker = (0, _react.useRef)({});
  var onEndReachedTracker = (0, _react.useRef)({});
  var onStartReachedInPromise = (0, _react.useRef)(null);
  var onEndReachedInPromise = (0, _react.useRef)(null);
  var flatListRef = (0, _react.useRef)(null);
  var initialScrollSet = (0, _react.useRef)(false);
  var channelResyncScrollSet = (0, _react.useRef)(true);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      hasMoved = _useState4[0],
      setHasMoved = _useState4[1];

  var _useState5 = (0, _react.useState)((_getLastReceivedMessa = (0, _getLastReceivedMessage.getLastReceivedMessage)(messageList)) == null ? void 0 : _getLastReceivedMessa.id),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      lastReceivedId = _useState6[0],
      setLastReceivedId = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      scrollToBottomButtonVisible = _useState8[0],
      setScrollToBottomButtonVisible = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      stickyHeaderDate = _useState10[0],
      setStickyHeaderDate = _useState10[1];

  var stickyHeaderDateRef = (0, _react.useRef)();

  var getLastReadSafely = function getLastReadSafely() {
    return channel != null && channel.initialized ? channel.lastRead() : undefined;
  };

  var channelLastRead = (0, _react.useRef)(getLastReadSafely());

  var isUnreadMessage = function isUnreadMessage(message, lastRead) {
    return message && lastRead && message.created_at && lastRead < message.created_at;
  };

  var setInitialScrollIfNeeded = function setInitialScrollIfNeeded() {
    if (!initialScrollToFirstUnreadMessage || initialScrollSet.current) {
      initialScrollSet.current = true;
      return;
    }

    if (isUnreadMessage(topMessageBeforeUpdate.current, channelLastRead.current)) {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd();
      }

      setTimeout(function () {
        initialScrollSet.current = true;
      }, 500);
    } else if (!initialScrollSet.current) {
      initialScrollSet.current = true;
    }
  };

  var updateStickyHeaderDateIfNeeded = function updateStickyHeaderDateIfNeeded(viewableItems) {
    if (viewableItems.length) {
      var _lastItem$item, _stickyHeaderDateRef$;

      var lastItem = viewableItems.pop();

      if (lastItem != null && (_lastItem$item = lastItem.item) != null && _lastItem$item.created_at && !lastItem.item.deleted_at && typeof lastItem.item.created_at !== 'string' && lastItem.item.created_at.toDateString() !== ((_stickyHeaderDateRef$ = stickyHeaderDateRef.current) == null ? void 0 : _stickyHeaderDateRef$.toDateString())) {
        stickyHeaderDateRef.current = lastItem.item.created_at;
        setStickyHeaderDate(lastItem.item.created_at);
      }
    }
  };

  var onViewableItemsChanged = (0, _react.useRef)(function (_ref) {
    var viewableItems = _ref.viewableItems;

    if (viewableItems && !hideStickyDateHeader) {
      updateStickyHeaderDateIfNeeded(viewableItems);
    }

    setInitialScrollIfNeeded();
  });

  var resetPaginationTrackers = function resetPaginationTrackers() {
    onStartReachedTracker.current = {};
    onEndReachedTracker.current = {};
  };

  (0, _react.useEffect)(function () {
    setScrollToBottomButtonVisible(false);
  }, [disabled]);
  (0, _react.useEffect)(function () {
    var shouldMarkReadOnFirstLoad = !loading && channel && (!initialScrollToFirstUnreadMessage && channel.countUnread() > 0 || initialScrollToFirstUnreadMessage && channel.countUnread() <= scrollToFirstUnreadThreshold);

    if (shouldMarkReadOnFirstLoad) {
      markRead();
    }
  }, [loading]);
  (0, _react.useEffect)(function () {
    var _lastReceivedMessage$;

    var lastReceivedMessage = (0, _getLastReceivedMessage.getLastReceivedMessage)(messageList);
    var hasNewMessage = lastReceivedId !== (lastReceivedMessage == null ? void 0 : lastReceivedMessage.id);
    var isMyMessage = (lastReceivedMessage == null ? void 0 : (_lastReceivedMessage$ = lastReceivedMessage.user) == null ? void 0 : _lastReceivedMessage$.id) === client.userID;
    setLastReceivedId(lastReceivedMessage == null ? void 0 : lastReceivedMessage.id);

    var scrollToBottomIfNeeded = function scrollToBottomIfNeeded() {
      var _topMessageBeforeUpda;

      if (!client || !channel || messageList.length === 0) {
        return;
      }

      if (hasNewMessage && isMyMessage || messageListLengthAfterUpdate < messageListLengthBeforeUpdate.current || (_topMessageBeforeUpda = topMessageBeforeUpdate.current) != null && _topMessageBeforeUpda.created_at && topMessageAfterUpdate != null && topMessageAfterUpdate.created_at && topMessageBeforeUpdate.current.created_at < topMessageAfterUpdate.created_at) {
        channelResyncScrollSet.current = false;
        setScrollToBottomButtonVisible(false);
        resetPaginationTrackers();
        setTimeout(function () {
          var _flatListRef$current;

          return (_flatListRef$current = flatListRef.current) == null ? void 0 : _flatListRef$current.scrollToOffset({
            offset: 0
          });
        }, 50);
        setTimeout(function () {
          channelResyncScrollSet.current = true;

          if (channel.countUnread() > 0) {
            markRead();
          }
        }, 500);
      }
    };

    if (threadList || channel != null && channel.state.isUpToDate) {
      scrollToBottomIfNeeded();
    } else if (!scrollToBottomButtonVisible) {
      setScrollToBottomButtonVisible(true);
    }

    if (!(channel != null && channel.state.isUpToDate) && flatListRef.current && messageListLengthBeforeUpdate.current === 0 && messageListLengthAfterUpdate < 10) {
      maybeCallOnStartReached(10);
    }

    if (initialScrollToFirstUnreadMessage && !initialScrollSet.current) {
      channelLastRead.current = getLastReadSafely();
    }

    messageListLengthBeforeUpdate.current = messageListLengthAfterUpdate;
    topMessageBeforeUpdate.current = topMessageAfterUpdate;
  }, [messageListLengthAfterUpdate, topMessageAfterUpdate == null ? void 0 : topMessageAfterUpdate.id]);
  (0, _react.useEffect)(function () {
    if (!(channel != null && channel.state.isUpToDate) && autoscrollToTop) {
      setAutoscrollToTop(false);
    } else if (channel != null && channel.state.isUpToDate && !autoscrollToTop) {
      setAutoscrollToTop(true);
    }
  }, [messageListLengthAfterUpdate]);

  var renderItem = function renderItem(_ref2) {
    var _message$user;

    var index = _ref2.index,
        message = _ref2.item;
    if (!channel || !channel.initialized) return null;
    var lastRead = getLastReadSafely();
    var lastMessage = messageList == null ? void 0 : messageList[index + 1];
    var showUnreadUnderlay = !!isUnreadMessage(message, lastRead) && scrollToBottomButtonVisible;
    var insertInlineUnreadIndicator = showUnreadUnderlay && !isUnreadMessage(lastMessage, lastRead);

    if (message.type === 'system') {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(MessageSystem, {
        message: message,
        style: styles.messagePadding,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 11
        }
      }), insertInlineUnreadIndicator && _react["default"].createElement(InlineUnreadIndicator, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 43
        }
      }));
    }

    var wrapMessageInTheme = client.userID === ((_message$user = message.user) == null ? void 0 : _message$user.id) && !!myMessageTheme;
    return wrapMessageInTheme ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ThemeContext.ThemeProvider, {
      mergedStyle: modifiedTheme,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 9
      }
    }, _react["default"].createElement(Message, {
      goToMessage: goToMessage,
      groupStyles: (0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message) ? message.groupStyles : [],
      lastReceivedId: lastReceivedId === message.id ? lastReceivedId : undefined,
      message: message,
      onThreadSelect: onThreadSelect,
      showUnreadUnderlay: showUnreadUnderlay,
      style: styles.messagePadding,
      targetedMessage: targetedMessage === message.id,
      threadList: threadList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574,
        columnNumber: 11
      }
    })), (0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message) && message.dateSeparator && _react["default"].createElement(InlineDateSeparator, {
      date: message.dateSeparator,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 11
      }
    }), insertInlineUnreadIndicator && _react["default"].createElement(InlineUnreadIndicator, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 41
      }
    })) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Message, {
      goToMessage: goToMessage,
      groupStyles: (0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message) ? message.groupStyles : [],
      lastReceivedId: lastReceivedId === message.id || message.quoted_message_id ? lastReceivedId : undefined,
      message: message,
      onThreadSelect: onThreadSelect,
      showUnreadUnderlay: showUnreadUnderlay,
      style: styles.messagePadding,
      targetedMessage: targetedMessage === message.id,
      threadList: threadList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 9
      }
    }), (0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message) && message.dateSeparator && _react["default"].createElement(InlineDateSeparator, {
      date: message.dateSeparator,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 11
      }
    }), insertInlineUnreadIndicator && _react["default"].createElement(InlineUnreadIndicator, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 41
      }
    }));
  };

  var maybeCallOnStartReached = function maybeCallOnStartReached(limit) {
    if (messageList != null && messageList.length && onStartReachedTracker.current[messageList.length]) {
      return;
    }

    if (messageList != null && messageList.length) {
      onStartReachedTracker.current[messageList.length] = true;
    }

    var callback = function callback() {
      onStartReachedInPromise.current = null;
      return Promise.resolve();
    };

    var onError = function onError() {
      setTimeout(function () {
        onStartReachedTracker.current = {};
      }, 2000);
    };

    if (onEndReachedInPromise.current) {
      onEndReachedInPromise.current["finally"](function () {
        onStartReachedInPromise.current = loadMoreRecent(limit).then(callback)["catch"](onError);
      });
    } else {
      onStartReachedInPromise.current = loadMoreRecent(limit).then(callback)["catch"](onError);
    }
  };

  var maybeCallOnEndReached = function maybeCallOnEndReached() {
    if (messageList != null && messageList.length && onEndReachedTracker.current[messageList.length]) {
      return;
    }

    if (messageList != null && messageList.length) {
      onEndReachedTracker.current[messageList.length] = true;
    }

    var callback = function callback() {
      onEndReachedInPromise.current = null;
      return Promise.resolve();
    };

    var onError = function onError() {
      setTimeout(function () {
        onEndReachedTracker.current = {};
      }, 2000);
    };

    if (onStartReachedInPromise.current) {
      onStartReachedInPromise.current["finally"](function () {
        onEndReachedInPromise.current = (threadList ? loadMoreThread() : loadMore()).then(callback)["catch"](onError);
      });
    } else {
      onEndReachedInPromise.current = (threadList ? loadMoreThread() : loadMore()).then(callback)["catch"](onError);
    }
  };

  var handleScroll = function handleScroll(event) {
    if (!channel || !initialScrollSet.current || !channelResyncScrollSet.current) {
      return;
    }

    var offset = event.nativeEvent.contentOffset.y;
    var visibleLength = event.nativeEvent.layoutMeasurement.height;
    var contentLength = event.nativeEvent.contentSize.height;
    var isScrollAtStart = offset < 100;
    var isScrollAtEnd = contentLength - visibleLength - offset < 100;

    if (isScrollAtStart) {
      maybeCallOnStartReached();
    }

    if (isScrollAtEnd) {
      maybeCallOnEndReached();
    }

    var isScrollAtBottom = offset <= 300;
    var showScrollToBottomButton = !isScrollAtBottom || !(channel != null && channel.state.isUpToDate);
    var shouldMarkRead = !threadList && offset <= 0 && (channel == null ? void 0 : channel.state.isUpToDate) && channel.countUnread() > 0;

    if (shouldMarkRead) {
      markRead();
    }

    if (showScrollToBottomButton && !scrollToBottomButtonVisible) {
      setScrollToBottomButtonVisible(true);
    } else if (!showScrollToBottomButton && scrollToBottomButtonVisible) {
      setScrollToBottomButtonVisible(false);
    }

    if (onListScroll) {
      onListScroll(event);
    }
  };

  var goToNewMessages = function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (channel != null && channel.state.isUpToDate) {
                _context.next = 6;
                break;
              }

              resetPaginationTrackers();
              _context.next = 4;
              return reloadChannel();

            case 4:
              _context.next = 7;
              break;

            case 6:
              if (flatListRef.current) {
                flatListRef.current.scrollToOffset({
                  offset: 0
                });
              }

            case 7:
              setScrollToBottomButtonVisible(false);

              if (!threadList) {
                markRead();
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function goToNewMessages() {
      return _ref3.apply(this, arguments);
    };
  }();

  var goToMessage = (0, _react.useCallback)(function (messageId) {
    var indexOfParentInMessageList = messageList.findIndex(function (message) {
      return (message == null ? void 0 : message.id) === messageId;
    });

    if (indexOfParentInMessageList > -1) {
      try {
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index: indexOfParentInMessageList,
            viewPosition: 0.5
          });
          setTargetedMessage(messageId);
          return;
        }
      } catch (_) {}
    }

    loadChannelAtMessage({
      messageId: messageId
    });
    resetPaginationTrackers();
  }, [messageListLengthAfterUpdate]);
  var messagesWithImages = legacyImageViewerSwipeBehaviour && messageList.filter(function (message) {
    if (!message.deleted_at && message.attachments) {
      return message.attachments.some(function (attachment) {
        return attachment.type === 'image' && !attachment.title_link && !attachment.og_scrape_url && (attachment.image_url || attachment.thumb_url);
      });
    }

    return false;
  });
  var imageString = legacyImageViewerSwipeBehaviour && messagesWithImages && messagesWithImages.map(function (message) {
    var _message$attachments;

    return (_message$attachments = message.attachments) == null ? void 0 : _message$attachments.map(function (attachment) {
      return attachment.image_url || attachment.thumb_url || '';
    }).join();
  }).join();
  var numberOfMessagesWithImages = legacyImageViewerSwipeBehaviour && messagesWithImages && messagesWithImages.length;
  var threadExists = !!thread;
  (0, _react.useEffect)(function () {
    if (legacyImageViewerSwipeBehaviour && (threadList && thread || !threadList && !thread)) {
      setImages(messagesWithImages);
    }
  }, [imageString, legacyImageViewerSwipeBehaviour, numberOfMessagesWithImages, threadExists, threadList]);
  var stickyHeaderFormatDate = (stickyHeaderDate == null ? void 0 : stickyHeaderDate.getFullYear()) === new Date().getFullYear() ? 'MMM D' : 'MMM D, YYYY';
  var tStickyHeaderDate = stickyHeaderDate && !hideStickyDateHeader ? tDateTimeParser(stickyHeaderDate) : null;
  var stickyHeaderDateToRender = tStickyHeaderDate === null || hideStickyDateHeader ? null : (0, _TranslationContext.isDayOrMoment)(tStickyHeaderDate) ? tStickyHeaderDate.format(stickyHeaderFormatDate) : new Date(tStickyHeaderDate).toDateString();

  var dismissImagePicker = function dismissImagePicker() {
    if (!hasMoved && selectedPicker) {
      setSelectedPicker(undefined);
      closePicker();
    }
  };

  var onScrollBeginDrag = function onScrollBeginDrag() {
    return !hasMoved && selectedPicker && setHasMoved(true);
  };

  var onScrollEndDrag = function onScrollEndDrag() {
    return hasMoved && selectedPicker && setHasMoved(false);
  };

  var refCallback = function refCallback(ref) {
    flatListRef.current = ref;

    if (setFlatListRef) {
      setFlatListRef(ref);
    }
  };

  var renderListEmptyComponent = function renderListEmptyComponent() {
    return _react["default"].createElement(_reactNative.View, {
      style: [styles.flex, styles.invert],
      testID: "empty-state",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 885,
        columnNumber: 5
      }
    }, _react["default"].createElement(EmptyStateIndicator, {
      listType: "message",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 886,
        columnNumber: 7
      }
    }));
  };

  if (!FlatList) return null;

  if (loading) {
    return _react["default"].createElement(_reactNative.View, {
      style: styles.flex,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 894,
        columnNumber: 7
      }
    }, _react["default"].createElement(LoadingIndicator, {
      listType: "message",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895,
        columnNumber: 9
      }
    }));
  }

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: white_snow
    }, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 901,
      columnNumber: 5
    }
  }, _react["default"].createElement(FlatList, (0, _extends2["default"])({
    contentContainerStyle: [styles.contentContainer, contentContainer],
    data: messageList,
    extraData: disabled || !(channel != null && channel.state.isUpToDate),
    inverted: inverted,
    keyboardShouldPersistTaps: "handled",
    keyExtractor: keyExtractor,
    ListEmptyComponent: renderListEmptyComponent,
    ListFooterComponent: FooterComponent,
    ListHeaderComponent: HeaderComponent,
    maintainVisibleContentPosition: {
      autoscrollToTopThreshold: autoscrollToTop ? 10 : undefined,
      minIndexForVisible: 1
    },
    onScroll: handleScroll,
    onScrollBeginDrag: onScrollBeginDrag,
    onScrollEndDrag: onScrollEndDrag,
    onTouchEnd: dismissImagePicker,
    onViewableItemsChanged: onViewableItemsChanged.current,
    ref: refCallback,
    renderItem: renderItem,
    scrollEnabled: overlay === 'none',
    style: [styles.listContainer, listContainer],
    testID: "message-flat-list",
    viewabilityConfig: flatListViewabilityConfig
  }, additionalFlatListProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 7
    }
  })), !loading && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactNative.View, {
    style: styles.stickyHeader,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 11
    }
  }, stickyHeaderDateToRender && (StickyHeader ? _react["default"].createElement(StickyHeader, {
    dateString: stickyHeaderDateToRender,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 17
    }
  }) : messageListLengthAfterUpdate ? _react["default"].createElement(DateHeader, {
    dateString: stickyHeaderDateToRender,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 17
    }
  }) : null)), !disableTypingIndicator && TypingIndicator && typingEventsEnabled !== false && _react["default"].createElement(TypingIndicatorContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941,
      columnNumber: 13
    }
  }, _react["default"].createElement(TypingIndicator, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
      columnNumber: 15
    }
  })), _react["default"].createElement(ScrollToBottomButton, {
    onPress: goToNewMessages,
    showNotification: scrollToBottomButtonVisible,
    unreadCount: threadList ? 0 : channel == null ? void 0 : channel.countUnread(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 11
    }
  })), _react["default"].createElement(NetworkDownIndicator, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 7
    }
  }));
};

var MessageList = function MessageList(props) {
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
      closePicker = _useAttachmentPickerC.closePicker,
      selectedPicker = _useAttachmentPickerC.selectedPicker,
      setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;

  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
      channel = _useChannelContext.channel,
      disabled = _useChannelContext.disabled,
      EmptyStateIndicator = _useChannelContext.EmptyStateIndicator,
      enableMessageGroupingByUser = _useChannelContext.enableMessageGroupingByUser,
      error = _useChannelContext.error,
      hideStickyDateHeader = _useChannelContext.hideStickyDateHeader,
      loadChannelAtMessage = _useChannelContext.loadChannelAtMessage,
      loading = _useChannelContext.loading,
      LoadingIndicator = _useChannelContext.LoadingIndicator,
      markRead = _useChannelContext.markRead,
      NetworkDownIndicator = _useChannelContext.NetworkDownIndicator,
      reloadChannel = _useChannelContext.reloadChannel,
      scrollToFirstUnreadThreshold = _useChannelContext.scrollToFirstUnreadThreshold,
      setTargetedMessage = _useChannelContext.setTargetedMessage,
      StickyHeader = _useChannelContext.StickyHeader,
      targetedMessage = _useChannelContext.targetedMessage,
      typingEventsEnabled = _useChannelContext.typingEventsEnabled;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useImageGalleryConte = (0, _ImageGalleryContext.useImageGalleryContext)(),
      setImages = _useImageGalleryConte.setImages;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      DateHeader = _useMessagesContext.DateHeader,
      disableTypingIndicator = _useMessagesContext.disableTypingIndicator,
      FlatList = _useMessagesContext.FlatList,
      initialScrollToFirstUnreadMessage = _useMessagesContext.initialScrollToFirstUnreadMessage,
      InlineDateSeparator = _useMessagesContext.InlineDateSeparator,
      InlineUnreadIndicator = _useMessagesContext.InlineUnreadIndicator,
      legacyImageViewerSwipeBehaviour = _useMessagesContext.legacyImageViewerSwipeBehaviour,
      Message = _useMessagesContext.Message,
      MessageSystem = _useMessagesContext.MessageSystem,
      myMessageTheme = _useMessagesContext.myMessageTheme,
      ScrollToBottomButton = _useMessagesContext.ScrollToBottomButton,
      TypingIndicator = _useMessagesContext.TypingIndicator,
      TypingIndicatorContainer = _useMessagesContext.TypingIndicatorContainer;

  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
      loadMore = _usePaginatedMessageL.loadMore,
      loadMoreRecent = _usePaginatedMessageL.loadMoreRecent;

  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
      overlay = _useOverlayContext.overlay;

  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
      loadMoreThread = _useThreadContext.loadMoreThread,
      thread = _useThreadContext.thread;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t,
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  return _react["default"].createElement(MessageListWithContext, (0, _extends2["default"])({
    channel: channel,
    client: client,
    closePicker: closePicker,
    DateHeader: DateHeader,
    disabled: disabled,
    disableTypingIndicator: disableTypingIndicator,
    EmptyStateIndicator: EmptyStateIndicator,
    enableMessageGroupingByUser: enableMessageGroupingByUser,
    error: error,
    FlatList: FlatList,
    hideStickyDateHeader: hideStickyDateHeader,
    initialScrollToFirstUnreadMessage: initialScrollToFirstUnreadMessage,
    InlineDateSeparator: InlineDateSeparator,
    InlineUnreadIndicator: InlineUnreadIndicator,
    legacyImageViewerSwipeBehaviour: legacyImageViewerSwipeBehaviour,
    loadChannelAtMessage: loadChannelAtMessage,
    loading: loading,
    LoadingIndicator: LoadingIndicator,
    loadMore: loadMore,
    loadMoreRecent: loadMoreRecent,
    loadMoreThread: loadMoreThread,
    markRead: markRead,
    Message: Message,
    MessageSystem: MessageSystem,
    myMessageTheme: myMessageTheme,
    NetworkDownIndicator: NetworkDownIndicator,
    overlay: overlay,
    reloadChannel: reloadChannel,
    ScrollToBottomButton: ScrollToBottomButton,
    scrollToFirstUnreadThreshold: scrollToFirstUnreadThreshold,
    selectedPicker: selectedPicker,
    setImages: setImages,
    setSelectedPicker: setSelectedPicker,
    setTargetedMessage: setTargetedMessage,
    StickyHeader: StickyHeader,
    t: t,
    targetedMessage: targetedMessage,
    tDateTimeParser: tDateTimeParser,
    thread: thread,
    typingEventsEnabled: typingEventsEnabled,
    TypingIndicator: TypingIndicator,
    TypingIndicatorContainer: TypingIndicatorContainer
  }, props, {
    noGroupByUser: !enableMessageGroupingByUser || props.noGroupByUser,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 5
    }
  }));
};

exports.MessageList = MessageList;
//# sourceMappingURL=MessageList.js.map