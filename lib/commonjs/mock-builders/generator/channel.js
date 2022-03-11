var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateChannel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _uuid = require("uuid");

var _excluded = ["channel"];

var generateChannel = function generateChannel() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    channel: {}
  };
  var optionsChannel = options.channel,
      optionsBesidesChannel = (0, _objectWithoutProperties2["default"])(options, _excluded);
  var id = optionsChannel && optionsChannel.id || (0, _uuid.v4)();
  var type = optionsChannel && optionsChannel.type || 'messaging';
  return (0, _extends2["default"])({
    channel: (0, _extends2["default"])({
      cid: type + ":" + id,
      config: {
        automod: 'disabled',
        automod_behavior: 'flag',
        commands: [{
          args: '[text]',
          description: 'Post a random gif to the channel',
          name: 'giphy',
          set: 'fun_set'
        }],
        connect_events: true,
        created_at: '2020-04-24T11:36:43.859020368Z',
        max_message_length: 5000,
        message_retention: 'infinite',
        mutes: true,
        name: 'messaging',
        reactions: true,
        read_events: true,
        replies: true,
        search: true,
        typing_events: true,
        updated_at: '2020-04-24T11:36:43.859022903Z',
        uploads: true,
        url_enrichment: true
      },
      created_at: '2020-04-28T11:20:48.578147Z',
      created_by: {
        banned: false,
        created_at: '2020-04-27T13:05:13.847572Z',
        id: 'vishal',
        last_active: '2020-04-28T11:21:08.353026Z',
        online: false,
        role: 'user',
        updated_at: '2020-04-28T11:21:08.357468Z'
      },
      frozen: false,
      id: id,
      type: type,
      updated_at: '2020-04-28T11:20:48.578147Z'
    }, optionsChannel),
    members: [],
    messages: []
  }, optionsBesidesChannel);
};

exports.generateChannel = generateChannel;
//# sourceMappingURL=channel.js.map