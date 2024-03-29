var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslationContext = exports.useTranslationContext = exports.TranslationProvider = exports.TranslationContext = exports.isDayOrMoment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/translationContext/TranslationContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isDayOrMoment = function isDayOrMoment(output) {
  return output.isSame != null;
};

exports.isDayOrMoment = isDayOrMoment;

var TranslationContext = _react["default"].createContext({
  t: function t(key) {
    return key;
  },
  tDateTimeParser: function tDateTimeParser(input) {
    return (0, _dayjs["default"])(input);
  }
});

exports.TranslationContext = TranslationContext;

var TranslationProvider = function TranslationProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react["default"].createElement(TranslationContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, children);
};

exports.TranslationProvider = TranslationProvider;

var useTranslationContext = function useTranslationContext() {
  return (0, _react.useContext)(TranslationContext);
};

exports.useTranslationContext = useTranslationContext;

var withTranslationContext = function withTranslationContext(Component) {
  var WithTranslationContextComponent = function WithTranslationContextComponent(props) {
    var translationContext = useTranslationContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, translationContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }
    }));
  };

  WithTranslationContextComponent.displayName = "WithTranslationContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithTranslationContextComponent;
};

exports.withTranslationContext = withTranslationContext;
//# sourceMappingURL=TranslationContext.js.map