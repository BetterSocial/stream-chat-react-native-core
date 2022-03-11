Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConnectionRecovered = void 0;

var _react = require("react");

var _ChatContext = require("../../../../contexts/chatContext/ChatContext");

var useConnectionRecovered = function useConnectionRecovered(_ref) {
  var refreshList = _ref.refreshList,
      setForceUpdate = _ref.setForceUpdate;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var refRefreshList = (0, _react.useRef)(refreshList);
  refRefreshList.current = refreshList;
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent() {
      refRefreshList.current();
      setForceUpdate(function (count) {
        return count + 1;
      });
    };

    var _client$on = client.on('connection.recovered', handleEvent),
        unsubscribeRecovered = _client$on.unsubscribe;

    var _client$on2 = client.on('connection.changed', function (event) {
      if (event.online) {
        handleEvent();
      }
    }),
        unsubscribeChanged = _client$on2.unsubscribe;

    return function () {
      unsubscribeRecovered();
      unsubscribeChanged();
    };
  }, []);
};

exports.useConnectionRecovered = useConnectionRecovered;
//# sourceMappingURL=useConnectionRecovered.js.map