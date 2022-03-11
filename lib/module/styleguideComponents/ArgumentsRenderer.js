var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ArgumentsRenderer = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Styled = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Styled"));

var _Argument = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Argument"));

var _Heading = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Heading"));

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/styleguideComponents/ArgumentsRenderer.tsx";

var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    headingWrapper: {
      marginBottom: space[0]
    },
    root: {
      fontSize: 'inherit',
      marginBottom: space[2]
    }
  };
};

exports.styles = styles;

var ArgumentsRenderer = function ArgumentsRenderer(_ref2) {
  var args = _ref2.args,
      classes = _ref2.classes,
      heading = _ref2.heading;

  if (args.length === 0) {
    return null;
  }

  return _react["default"].createElement("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, heading && _react["default"].createElement("div", {
    className: classes.headingWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, _react["default"].createElement(_Heading["default"], {
    level: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Arguments")), args.map(function (arg) {
    return _react["default"].createElement(_Argument["default"], (0, _extends2["default"])({
      key: arg.name
    }, arg, {
      block: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }));
  }));
};

exports.ArgumentsRenderer = ArgumentsRenderer;
ArgumentsRenderer.propTypes = {
  args: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    description: _propTypes["default"].string,
    name: _propTypes["default"].string.isRequired,
    type: _propTypes["default"].object
  }).isRequired).isRequired,
  classes: _propTypes["default"].objectOf(_propTypes["default"].string.isRequired).isRequired,
  heading: _propTypes["default"].bool
};

var _default = (0, _Styled["default"])(styles)(ArgumentsRenderer);

exports["default"] = _default;
//# sourceMappingURL=ArgumentsRenderer.js.map