var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSuggestionsContext = exports.useSuggestionsContext = exports.SuggestionsProvider = exports.SuggestionsContext = exports.isSuggestionUser = exports.isSuggestionEmoji = exports.isSuggestionCommand = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/suggestionsContext/SuggestionsContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isSuggestionCommand = function isSuggestionCommand(suggestion) {
  return 'args' in suggestion;
};

exports.isSuggestionCommand = isSuggestionCommand;

var isSuggestionEmoji = function isSuggestionEmoji(suggestion) {
  return 'unicode' in suggestion;
};

exports.isSuggestionEmoji = isSuggestionEmoji;

var isSuggestionUser = function isSuggestionUser(suggestion) {
  return 'id' in suggestion;
};

exports.isSuggestionUser = isSuggestionUser;

var SuggestionsContext = _react["default"].createContext({});

exports.SuggestionsContext = SuggestionsContext;

var SuggestionsProvider = function SuggestionsProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      componentType = _useState2[0],
      setComponentType = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      suggestions = _useState4[0],
      setSuggestions = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      suggestionsTitle = _useState6[0],
      setSuggestionsTitle = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      suggestionsViewActive = _useState8[0],
      setSuggestionsViewActive = _useState8[1];

  var openSuggestions = function openSuggestions(component, title) {
    setComponentType(component);
    setSuggestionsTitle(title);
    setSuggestionsViewActive(true);
  };

  var updateSuggestions = function updateSuggestions(newSuggestions, newSuggestionsTitle) {
    setSuggestions(newSuggestions);

    if (newSuggestionsTitle) {
      setSuggestionsTitle(newSuggestionsTitle);
    }

    setSuggestionsViewActive(!!componentType);
  };

  var closeSuggestions = function closeSuggestions() {
    setComponentType('');
    setSuggestions(undefined);
    setSuggestionsTitle(undefined);
    setSuggestionsViewActive(false);
  };

  var suggestionsContext = {
    closeSuggestions: (value == null ? void 0 : value.closeSuggestions) || closeSuggestions,
    componentType: componentType,
    openSuggestions: (value == null ? void 0 : value.openSuggestions) || openSuggestions,
    suggestions: suggestions,
    suggestionsTitle: suggestionsTitle,
    suggestionsViewActive: suggestionsViewActive,
    updateSuggestions: (value == null ? void 0 : value.updateSuggestions) || updateSuggestions
  };
  return _react["default"].createElement(SuggestionsContext.Provider, {
    value: suggestionsContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, children);
};

exports.SuggestionsProvider = SuggestionsProvider;

var useSuggestionsContext = function useSuggestionsContext() {
  return (0, _react.useContext)(SuggestionsContext);
};

exports.useSuggestionsContext = useSuggestionsContext;

var withSuggestionsContext = function withSuggestionsContext(Component) {
  var WithSuggestionsContextComponent = function WithSuggestionsContextComponent(props) {
    var suggestionsContext = useSuggestionsContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, suggestionsContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 12
      }
    }));
  };

  WithSuggestionsContextComponent.displayName = "WithSuggestionsContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithSuggestionsContextComponent;
};

exports.withSuggestionsContext = withSuggestionsContext;
//# sourceMappingURL=SuggestionsContext.js.map