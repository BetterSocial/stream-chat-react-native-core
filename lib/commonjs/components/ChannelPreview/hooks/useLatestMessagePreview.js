var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLatestMessagePreview = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = require("react");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");

var getLatestMessageDisplayText = function getLatestMessageDisplayText(channel, client, message, t) {
  var _message$user, _message$user2, _message$user3, _message$user4, _message$attachments;

  if (!message) return [{
    bold: false,
    text: t('Nothing yet...')
  }];
  if (message.deleted_at) return [{
    bold: false,
    text: t('Message deleted')
  }];
  var currentUserId = client.userID;
  var messageOwnerId = (_message$user = message.user) == null ? void 0 : _message$user.id;
  var members = Object.keys(channel.state.members);
  var owner = messageOwnerId === currentUserId ? t('You') : members.length > 2 ? ((_message$user2 = message.user) == null ? void 0 : _message$user2.name) || ((_message$user3 = message.user) == null ? void 0 : _message$user3.username) || ((_message$user4 = message.user) == null ? void 0 : _message$user4.id) || '' : '';
  var ownerText = owner ? "" + (owner === t('You') ? '' : '@') + owner + ": " : '';
  var boldOwner = ownerText.includes('@');

  if (message.text) {
    var shortenedText = message.text.substring(0, 100).replace(/\n/g, ' ');
    var mentionedUsers = Array.isArray(message.mentioned_users) ? message.mentioned_users.reduce(function (acc, cur) {
      var userName = cur.name || cur.id || '';

      if (userName) {
        acc += (acc.length ? '|' : '') + "@" + userName;
      }

      return acc;
    }, '') : '';
    var regEx = new RegExp("^(" + mentionedUsers + ")");
    return [{
      bold: boldOwner,
      text: ownerText
    }].concat((0, _toConsumableArray2["default"])(shortenedText.split('').reduce(function (acc, cur, index) {
      if (cur === '@' && mentionedUsers && regEx.test(shortenedText.substring(index))) {
        acc.push({
          bold: true,
          text: cur
        });
      } else if (mentionedUsers && regEx.test(acc[acc.length - 1].text)) {
        acc.push({
          bold: false,
          text: cur
        });
      } else {
        acc[acc.length - 1].text += cur;
      }

      return acc;
    }, [{
      bold: false,
      text: ''
    }])));
  }

  if (message.command) {
    return [{
      bold: boldOwner,
      text: ownerText
    }, {
      bold: false,
      text: "/" + message.command
    }];
  }

  if ((_message$attachments = message.attachments) != null && _message$attachments.length) {
    return [{
      bold: boldOwner,
      text: ownerText
    }, {
      bold: false,
      text: t('🏙 Attachment...')
    }];
  }

  return [{
    bold: boldOwner,
    text: ownerText
  }, {
    bold: false,
    text: t('Empty message...')
  }];
};

var getLatestMessageDisplayDate = function getLatestMessageDisplayDate(message, tDateTimeParser) {
  var parserOutput = tDateTimeParser(message == null ? void 0 : message.created_at);

  if ((0, _TranslationContext.isDayOrMoment)(parserOutput)) {
    if (parserOutput.isSame(new Date(), 'day')) {
      return parserOutput.format('LT');
    }

    return parserOutput.format('L');
  }

  return parserOutput;
};

var getLatestMessageReadStatus = function getLatestMessageReadStatus(channel, client, message, readEvents) {
  var _message$user5;

  var currentUserId = client.userID;
  if (!message || currentUserId !== ((_message$user5 = message.user) == null ? void 0 : _message$user5.id) || readEvents === false) return 0;
  var readList = channel.state.read;

  if (currentUserId) {
    delete readList[currentUserId];
  }

  var messageUpdatedAt = message.updated_at ? typeof message.updated_at === 'string' ? new Date(message.updated_at) : message.updated_at : undefined;
  return Object.values(readList).some(function (_ref) {
    var last_read = _ref.last_read;
    return messageUpdatedAt && messageUpdatedAt < last_read;
  }) ? 2 : 1;
};

var getLatestMessagePreview = function getLatestMessagePreview(params) {
  var channel = params.channel,
      client = params.client,
      lastMessage = params.lastMessage,
      readEvents = params.readEvents,
      t = params.t,
      tDateTimeParser = params.tDateTimeParser;
  var messages = channel.state.messages;

  if (!messages.length && !lastMessage) {
    return {
      created_at: '',
      messageObject: undefined,
      previews: [{
        bold: false,
        text: t('Nothing yet...')
      }],
      status: 0
    };
  }

  var message = lastMessage || messages.length ? messages[messages.length - 1] : undefined;
  return {
    created_at: getLatestMessageDisplayDate(message, tDateTimeParser),
    messageObject: message,
    previews: getLatestMessageDisplayText(channel, client, message, t),
    status: getLatestMessageReadStatus(channel, client, message, readEvents)
  };
};

var useLatestMessagePreview = function useLatestMessagePreview(channel, forceUpdate, lastMessage) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
      t = _useTranslationContex.t,
      tDateTimeParser = _useTranslationContex.tDateTimeParser;

  var channelConfigExists = typeof (channel == null ? void 0 : channel.getConfig) === 'function';
  var messages = channel.state.messages;
  var message = messages.length ? messages[messages.length - 1] : undefined;
  var channelLastMessageString = "" + ((lastMessage == null ? void 0 : lastMessage.id) || (message == null ? void 0 : message.id)) + ((lastMessage == null ? void 0 : lastMessage.updated_at) || (message == null ? void 0 : message.updated_at));

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      readEvents = _useState2[0],
      setReadEvents = _useState2[1];

  var _useState3 = (0, _react.useState)({
    created_at: '',
    messageObject: undefined,
    previews: [{
      bold: false,
      text: ''
    }],
    status: 0
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      latestMessagePreview = _useState4[0],
      setLatestMessagePreview = _useState4[1];

  var readStatus = getLatestMessageReadStatus(channel, client, lastMessage || message, readEvents);
  (0, _react.useEffect)(function () {
    if (channelConfigExists) {
      var _channel$getConfig;

      var read_events = (_channel$getConfig = channel.getConfig()) == null ? void 0 : _channel$getConfig.read_events;

      if (typeof read_events === 'boolean') {
        setReadEvents(read_events);
      }
    }
  }, [channelConfigExists]);
  (0, _react.useEffect)(function () {
    return setLatestMessagePreview(getLatestMessagePreview({
      channel: channel,
      client: client,
      lastMessage: lastMessage,
      readEvents: readEvents,
      t: t,
      tDateTimeParser: tDateTimeParser
    }));
  }, [channelLastMessageString, forceUpdate, readEvents, readStatus]);
  return latestMessagePreview;
};

exports.useLatestMessagePreview = useLatestMessagePreview;
//# sourceMappingURL=useLatestMessagePreview.js.map