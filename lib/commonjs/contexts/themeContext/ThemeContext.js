var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = exports.mergeThemes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _theme = require("./utils/theme");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/themeContext/ThemeContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mergeThemes = function mergeThemes(params) {
  var style = params.style,
      theme = params.theme;
  var finalTheme = !theme || Object.keys(theme).length === 0 ? JSON.parse(JSON.stringify(_theme.defaultTheme)) : JSON.parse(JSON.stringify(theme));

  if (style) {
    (0, _merge["default"])(finalTheme, style);
  }

  return finalTheme;
};

exports.mergeThemes = mergeThemes;

var ThemeContext = _react["default"].createContext({});

exports.ThemeContext = ThemeContext;

var ThemeProvider = function ThemeProvider(props) {
  var children = props.children,
      mergedStyle = props.mergedStyle,
      style = props.style;

  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var modifiedTheme = (0, _react.useMemo)(function () {
    if (mergedStyle) {
      return mergedStyle;
    }

    return mergeThemes({
      style: style,
      theme: theme
    });
  }, [mergedStyle, style, theme]);
  return _react["default"].createElement(ThemeContext.Provider, {
    value: modifiedTheme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }
  }, children);
};

exports.ThemeProvider = ThemeProvider;

var useTheme = function useTheme() {
  var theme = (0, _react.useContext)(ThemeContext);
  return {
    theme: theme
  };
};

exports.useTheme = useTheme;
//# sourceMappingURL=ThemeContext.js.map