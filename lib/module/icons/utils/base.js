var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RootPath = exports.RootSvg = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/utils/base.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RootSvg = function RootSvg(props) {
  var children = props.children,
      _props$height = props.height,
      height = _props$height === void 0 ? 24 : _props$height,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      _props$width = props.width,
      width = _props$width === void 0 ? 24 : _props$width;
  return _react["default"].createElement(_reactNativeSvg["default"], (0, _extends2["default"])({
    height: height,
    viewBox: viewBox,
    width: width
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), children);
};

exports.RootSvg = RootSvg;

var RootPath = function RootPath(props) {
  var _useTheme = (0, _ThemeContext.useTheme)(),
      black = _useTheme.theme.colors.black;

  var d = props.d,
      _props$pathFill = props.pathFill,
      pathFill = _props$pathFill === void 0 ? black : _props$pathFill,
      pathOpacity = props.pathOpacity;
  return _react["default"].createElement(_reactNativeSvg.Path, {
    clipRule: 'evenodd',
    d: d,
    fill: pathFill,
    fillRule: 'evenodd',
    opacity: pathOpacity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  });
};

exports.RootPath = RootPath;
//# sourceMappingURL=base.js.map