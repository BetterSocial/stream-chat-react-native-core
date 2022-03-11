var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MentionsItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Avatar = require("../Avatar/Avatar");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _AtMentions = require("../../icons/AtMentions");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/MentionsItem.tsx";

var styles = _reactNative.StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: 8
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 2
  },
  tag: {
    fontSize: 12,
    fontWeight: '600'
  }
});

var MentionsItem = function MentionsItem(_ref) {
  var _ref$item = _ref.item,
      id = _ref$item.id,
      image = _ref$item.image,
      name = _ref$item.name,
      online = _ref$item.online;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      black = _useTheme$theme$color.black,
      grey = _useTheme$theme$color.grey,
      _useTheme$theme$messa = _useTheme$theme.messageInput.suggestions.mention,
      avatarSize = _useTheme$theme$messa.avatarSize,
      column = _useTheme$theme$messa.column,
      container = _useTheme$theme$messa.container,
      nameStyle = _useTheme$theme$messa.name,
      tag = _useTheme$theme$messa.tag;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, _react["default"].createElement(_Avatar.Avatar, {
    image: image,
    name: name,
    online: online,
    size: avatarSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.View, {
    style: [styles.column, column],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, _react["default"].createElement(_reactNative.Text, {
    style: [styles.name, {
      color: black
    }, nameStyle],
    testID: "mentions-item-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, name || id), _react["default"].createElement(_reactNative.Text, {
    style: [styles.tag, {
      color: grey
    }, tag],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, "@" + id)), _react["default"].createElement(_AtMentions.AtMentions, {
    pathFill: accent_blue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
};

exports.MentionsItem = MentionsItem;
MentionsItem.displayName = 'MentionsItem{messageInput{suggestions{mention}}}';
//# sourceMappingURL=MentionsItem.js.map