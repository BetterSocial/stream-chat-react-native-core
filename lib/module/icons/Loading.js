var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactNativeSvg = require("react-native-svg");

var _base = require("./utils/base");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/Loading.tsx";

var Loading = function Loading(props) {
  var _props$height = props.height,
      height = _props$height === void 0 ? 16 : _props$height,
      _props$startColor = props.startColor,
      startColor = _props$startColor === void 0 ? '#0169F6' : _props$startColor,
      _props$stopColor = props.stopColor,
      stopColor = _props$stopColor === void 0 ? '#006CFF' : _props$stopColor,
      _props$stopOpacity = props.stopOpacity,
      stopOpacity = _props$stopOpacity === void 0 ? 0.01 : _props$stopOpacity,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 16 16' : _props$viewBox,
      _props$width = props.width,
      width = _props$width === void 0 ? 16 : _props$width;
  return _react["default"].createElement(_base.RootSvg, (0, _extends2["default"])({
    height: height,
    viewBox: viewBox,
    width: width
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), _react["default"].createElement(_base.RootPath, {
    d: "M16 8a8 8 0 01-14.657 4.438l2.527-1.685A5 5 0 108 2.933V0a8 8 0 018 8z",
    pathFill: "url(#gradient)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNativeSvg.Defs, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNativeSvg.LinearGradient, {
    gradientUnits: "userSpaceOnUse",
    id: "gradient",
    x1: 1.3429,
    x2: 1.3429,
    y1: 0,
    y2: height,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, _react["default"].createElement(_reactNativeSvg.Stop, {
    stopColor: startColor,
    stopOpacity: stopOpacity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), _react["default"].createElement(_reactNativeSvg.Stop, {
    offset: 1,
    stopColor: stopColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }))));
};

exports.Loading = Loading;
//# sourceMappingURL=Loading.js.map