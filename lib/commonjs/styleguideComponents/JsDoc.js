var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarkdown = getMarkdown;
exports["default"] = JsDoc;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _map = _interopRequireDefault(require("lodash/map"));

var _Markdown = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Markdown"));

var _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/styleguideComponents/JsDoc.tsx";

var plural = function plural(array, caption) {
  return array.length === 1 ? caption : caption + "s";
};

var list = function list(array) {
  return array.map(function (item) {
    return item.description;
  }).join(', ');
};

var paragraphs = function paragraphs(array) {
  return array.map(function (item) {
    return item.description;
  }).join('\n\n');
};

var fields = {
  author: function author(value) {
    return plural(value, 'Author') + ": " + list(value);
  },
  "default": function _default(value) {
    return "**Default**: " + value[0]["default"];
  },
  deprecated: function deprecated(value) {
    return "**Deprecated:** " + value[0].description;
  },
  link: function link(value) {
    return paragraphs(value);
  },
  see: function see(value) {
    return paragraphs(value);
  },
  since: function since(value) {
    return "Since: " + value[0].description;
  },
  version: function version(value) {
    return "Version: " + value[0].description;
  }
};

function getMarkdown(props) {
  return (0, _map["default"])(fields, function (format, field) {
    var tag = props[field];
    return tag && format(tag);
  }).filter(Boolean).join('\n\n');
}

function JsDoc(props) {
  var markdown = getMarkdown(props);
  return markdown ? _react["default"].createElement(_Markdown["default"], {
    text: markdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }) : null;
}

JsDoc.propTypes = {
  author: _propTypes["default"].array,
  deprecated: _propTypes["default"].array,
  link: _propTypes["default"].array,
  see: _propTypes["default"].array,
  since: _propTypes["default"].array,
  version: _propTypes["default"].array
};
//# sourceMappingURL=JsDoc.js.map