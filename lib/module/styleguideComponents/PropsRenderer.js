var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowKey = getRowKey;
exports["default"] = exports.columns = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _ArgumentsRenderer = _interopRequireDefault(require("./ArgumentsRenderer"));

var _Argument = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Argument"));

var _JsDoc = _interopRequireDefault(require("./JsDoc"));

var _Markdown = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Markdown"));

var _Name = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Name"));

var _Para = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Para"));

var _renderType = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Props/renderType"));

var _renderExtra = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Props/renderExtra"));

var _renderDefault = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Props/renderDefault"));

var _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/styleguideComponents/PropsRenderer.tsx",
    _this = this;

function renderDescription(prop) {
  var description = prop.description,
      _prop$tags = prop.tags,
      tags = _prop$tags === void 0 ? {} : _prop$tags;
  var extra = (0, _renderExtra["default"])(prop);
  var args = [].concat((0, _toConsumableArray2["default"])(tags.arg || []), (0, _toConsumableArray2["default"])(tags.argument || []), (0, _toConsumableArray2["default"])(tags.param || []));
  var returnDocumentation = tags["return"] && tags["return"][0] || tags.returns && tags.returns[0];
  return _react["default"].createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, description && _react["default"].createElement(_Markdown["default"], {
    text: description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  }), extra && _react["default"].createElement(_Para["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, extra), _react["default"].createElement(_JsDoc["default"], (0, _extends2["default"])({}, tags, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  })), args.length > 0 && _react["default"].createElement(_ArgumentsRenderer["default"], {
    args: args,
    heading: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 27
    }
  }), returnDocumentation && _react["default"].createElement(_Argument["default"], (0, _extends2["default"])({}, (0, _extends2["default"])({}, returnDocumentation, {
    name: ''
  }), {
    returns: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 31
    }
  })));
}

function renderName(prop) {
  var name = prop.name,
      _prop$tags2 = prop.tags,
      tags = _prop$tags2 === void 0 ? {} : _prop$tags2;
  return _react["default"].createElement(_Name["default"], {
    deprecated: !!tags.deprecated,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }
  }, name);
}

function getRowKey(row) {
  return row.name;
}

var columns = [{
  caption: 'Prop name lol',
  render: renderName
}, {
  caption: 'Type',
  render: _renderType["default"]
}, {
  caption: 'Default',
  render: _renderDefault["default"]
}, {
  caption: 'Description',
  render: renderDescription
}];
exports.columns = columns;

var PropsRenderer = function PropsRenderer(_ref) {
  var props = _ref.props;
  return props.map(function (r) {
    var isComponentProp = r.name[0].toUpperCase() === r.name[0];
    var customType = r.tags.overrideType;
    return _react["default"].createElement("div", {
      key: r.name,
      style: styles.container,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }, _react["default"].createElement("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, _react["default"].createElement("a", {
      href: "#" + r.name,
      id: r.name,
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        color: '#1c1e21',
        fontFamily: 'monospace',
        fontSize: 21,
        fontWeight: 700,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        textDecoration: 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, r.name)), renderDescription(r), _react["default"].createElement("table", {
      style: styles.table,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, _react["default"].createElement("tr", {
      style: styles.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, _react["default"].createElement("th", {
      style: styles.th,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, "Type"), _react["default"].createElement("th", {
      style: styles.th,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, "Required")), _react["default"].createElement("tr", {
      style: styles.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, _react["default"].createElement("td", {
      style: styles.td,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, customType ? customType[0].description : isComponentProp ? 'Component, element' : r.type.name), _react["default"].createElement("td", {
      style: styles.td,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, "No"))), _react["default"].createElement("hr", {
      style: {
        marginTop: 20
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }));
  });
};

var styles = {
  container: {
    marginTop: 50
  },
  table: {
    border: '1px solid black',
    borderCollapse: 'collapse',
    width: '100%'
  },
  td: {
    border: '1px solid black',
    borderCollapse: 'collapse',
    padding: 10,
    textAlign: 'center',
    width: '50%'
  },
  th: {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    border: '1px solid black',
    borderCollapse: 'collapse',
    padding: 10,
    textAlign: 'center',
    width: '50%'
  },
  tr: {}
};
var _default = PropsRenderer;
exports["default"] = _default;
//# sourceMappingURL=PropsRenderer.js.map