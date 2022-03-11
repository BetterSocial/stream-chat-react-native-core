var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuggestionsList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _CommandsItem = require("./CommandsItem");

var _EmojisItem = require("./EmojisItem");

var _MentionsItem = require("./MentionsItem");

var _SuggestionsContext = require("../../contexts/suggestionsContext/SuggestionsContext");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _excluded = ["children"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/SuggestionsList.tsx";

var styles = _reactNative.StyleSheet.create({
  emojiItem: {
    paddingVertical: 10
  }
});

var SuggestionsItem = function SuggestionsItem(props) {
  var children = props.children,
      touchableOpacityProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_reactNative.TouchableOpacity, (0, _extends2["default"])({}, touchableOpacityProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }), children);
};

SuggestionsItem.displayName = 'SuggestionsHeader{messageInput{suggestions}}';

var isString = function isString(component) {
  return typeof component === 'string';
};

var SuggestionsList = function SuggestionsList(props) {
  var active = props.active,
      Component = props.componentType,
      _props$suggestions = props.suggestions,
      data = _props$suggestions.data,
      onSelect = _props$suggestions.onSelect,
      SuggestionsTitle = props.suggestionsTitle;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme$messa = _useTheme.theme.messageInput.suggestions,
      maxHeight = _useTheme$theme$messa.container.maxHeight,
      itemStyle = _useTheme$theme$messa.item;

  var renderItem = function renderItem(_ref) {
    var index = _ref.index,
        item = _ref.item;

    if (isString(Component)) {
      switch (Component) {
        case 'MentionsItem':
          if ((0, _SuggestionsContext.isSuggestionUser)(item)) {
            return _react["default"].createElement(SuggestionsItem, {
              onPress: function onPress() {
                return onSelect(item);
              },
              style: [{
                paddingBottom: index === data.length - 1 ? 8 : 0,
                paddingTop: index === 0 ? 8 : 0
              }, itemStyle],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }
            }, _react["default"].createElement(_MentionsItem.MentionsItem, {
              item: item,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }
            }));
          }

          return null;

        case 'CommandsItem':
          if ((0, _SuggestionsContext.isSuggestionCommand)(item)) {
            return _react["default"].createElement(SuggestionsItem, {
              onPress: function onPress() {
                return onSelect(item);
              },
              style: [itemStyle],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 15
              }
            }, _react["default"].createElement(_CommandsItem.CommandsItem, {
              item: item,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }
            }));
          }

          return null;

        case 'EmojisItem':
          if ((0, _SuggestionsContext.isSuggestionEmoji)(item)) {
            return _react["default"].createElement(SuggestionsItem, {
              onPress: function onPress() {
                return onSelect(item);
              },
              style: [styles.emojiItem, itemStyle],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 15
              }
            }, _react["default"].createElement(_EmojisItem.EmojisItem, {
              item: item,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }
            }));
          }

          return null;

        default:
          return null;
      }
    }

    return _react["default"].createElement(SuggestionsItem, {
      onPress: function onPress() {
        return onSelect(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 7
      }
    }, _react["default"].cloneElement(Component, {
      item: item
    }));
  };

  if (!active || data.length === 0) return null;
  return _react["default"].createElement(_reactNative.FlatList, {
    data: data,
    keyboardShouldPersistTaps: "always",
    keyExtractor: function keyExtractor(item, index) {
      return "" + (item.name || ((0, _SuggestionsContext.isSuggestionUser)(item) ? item.id : '')) + index;
    },
    ListHeaderComponent: SuggestionsTitle ? SuggestionsTitle : undefined,
    renderItem: renderItem,
    style: {
      maxHeight: maxHeight
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  });
};

exports.SuggestionsList = SuggestionsList;
SuggestionsList.displayName = 'SuggestionsList{messageInput{suggestions}}';
//# sourceMappingURL=SuggestionsList.js.map