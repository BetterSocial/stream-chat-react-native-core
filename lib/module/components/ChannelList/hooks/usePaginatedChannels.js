var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePaginatedChannels = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../utils");

var _ChatContext = require("../../../contexts/chatContext/ChatContext");

var _useIsMountedRef = require("../../../hooks/useIsMountedRef");

var wait = function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};

var DEFAULT_OPTIONS = {
  message_limit: 10
};

var usePaginatedChannels = function usePaginatedChannels(_ref) {
  var _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? {} : _ref$filters,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? DEFAULT_OPTIONS : _ref$options,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? {} : _ref$sort;

  var _useChatContext = (0, _ChatContext.useChatContext)(),
      client = _useChatContext.client;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      channels = _useState2[0],
      setChannels = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      hasNextPage = _useState6[0],
      setHasNextPage = _useState6[1];

  var lastRefresh = (0, _react.useRef)(Date.now());

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      loadingChannels = _useState8[0],
      setLoadingChannels = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      loadingNextPage = _useState10[0],
      setLoadingNextPage = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      refreshing = _useState12[0],
      setRefreshing = _useState12[1];

  var isMounted = (0, _useIsMountedRef.useIsMountedRef)();

  var queryChannels = function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _options$limit;

      var queryType,
          retryCount,
          newOptions,
          channelQueryResponse,
          newChannels,
          _args = arguments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              queryType = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              retryCount = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;

              if (!(!client || loadingChannels || loadingNextPage || refreshing || !isMounted.current)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              if (queryType === 'reload') {
                setLoadingChannels(true);
              } else if (queryType === 'refresh') {
                setRefreshing(true);
              } else if (!queryType) {
                setLoadingNextPage(true);
              }

              newOptions = (0, _extends2["default"])({
                limit: (_options$limit = options == null ? void 0 : options.limit) != null ? _options$limit : _utils.MAX_QUERY_CHANNELS_LIMIT,
                offset: queryType === 'reload' || queryType === 'refresh' ? 0 : channels.length
              }, options);
              _context.prev = 6;
              _context.next = 9;
              return client.queryChannels(filters, sort, newOptions);

            case 9:
              channelQueryResponse = _context.sent;

              if (isMounted.current) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return");

            case 12:
              channelQueryResponse.forEach(function (channel) {
                return channel.state.setIsUpToDate(true);
              });
              newChannels = queryType === 'reload' || queryType === 'refresh' ? channelQueryResponse : [].concat((0, _toConsumableArray2["default"])(channels), (0, _toConsumableArray2["default"])(channelQueryResponse));
              setChannels(newChannels);
              setHasNextPage(channelQueryResponse.length >= newOptions.limit);
              setError(false);
              _context.next = 32;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](6);
              _context.next = 23;
              return wait(2000);

            case 23:
              if (isMounted.current) {
                _context.next = 25;
                break;
              }

              return _context.abrupt("return");

            case 25:
              if (!(retryCount === 3)) {
                _context.next = 31;
                break;
              }

              setLoadingChannels(false);
              setLoadingNextPage(false);
              setRefreshing(false);
              console.warn(_context.t0);
              return _context.abrupt("return", setError(true));

            case 31:
              return _context.abrupt("return", queryChannels(queryType, retryCount + 1));

            case 32:
              setLoadingChannels(false);
              setLoadingNextPage(false);
              setRefreshing(false);

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 19]]);
    }));

    return function queryChannels() {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadNextPage = hasNextPage ? queryChannels : undefined;

  var refreshList = function refreshList() {
    var now = Date.now();

    if (now - lastRefresh.current < 5000 && !error) {
      return;
    }

    lastRefresh.current = Date.now();
    return queryChannels('refresh');
  };

  var reloadList = function reloadList() {
    return queryChannels('reload');
  };

  var filterStr = (0, _react.useMemo)(function () {
    return JSON.stringify(filters);
  }, [filters]);
  var sortStr = (0, _react.useMemo)(function () {
    return JSON.stringify(sort);
  }, [sort]);
  (0, _react.useEffect)(function () {
    reloadList();
  }, [filterStr, sortStr]);
  return {
    channels: channels,
    error: error,
    hasNextPage: hasNextPage,
    loadingChannels: loadingChannels,
    loadingNextPage: loadingNextPage,
    loadNextPage: loadNextPage,
    refreshing: refreshing,
    refreshList: refreshList,
    reloadList: reloadList,
    setChannels: setChannels
  };
};

exports.usePaginatedChannels = usePaginatedChannels;
//# sourceMappingURL=usePaginatedChannels.js.map