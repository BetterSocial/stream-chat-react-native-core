var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandsItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _icons = require("../../icons");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/CommandsItem.tsx";

var styles = _reactNative.StyleSheet.create({
  args: {
    fontSize: 14
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: 12,
    height: 24,
    justifyContent: 'center',
    marginRight: 8,
    width: 24
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 8
  }
});

var Icon = function Icon(_ref) {
  var name = _ref.name;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      _useTheme$theme$color = _useTheme$theme.colors,
      accent_blue = _useTheme$theme$color.accent_blue,
      white = _useTheme$theme$color.white,
      iconContainer = _useTheme$theme.messageInput.suggestions.command.iconContainer;

  switch (name) {
    case 'ban':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.UserDelete, {
        height: 16,
        pathFill: white,
        width: 16,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }));

    case 'flag':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.Flag, {
        pathFill: white,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }));

    case 'giphy':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.GiphyIcon, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }));

    case 'imgur':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.Imgur, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }));

    case 'mute':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.Mute, {
        height: 16,
        pathFill: white,
        width: 16,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }));

    case 'unban':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.UserAdd, {
        height: 16,
        pathFill: white,
        width: 16,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }));

    case 'unmute':
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.Sound, {
        pathFill: white,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }));

    default:
      return _react["default"].createElement(_reactNative.View, {
        style: [styles.iconContainer, {
          backgroundColor: accent_blue
        }, iconContainer],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, _react["default"].createElement(_icons.Lightning, {
        height: 16,
        pathFill: white,
        width: 16,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }));
  }
};

var CommandsItem = function CommandsItem(_ref2) {
  var _ref2$item = _ref2.item,
      args = _ref2$item.args,
      name = _ref2$item.name;

  var _useTheme2 = (0, _ThemeContext.useTheme)(),
      _useTheme2$theme = _useTheme2.theme,
      _useTheme2$theme$colo = _useTheme2$theme.colors,
      black = _useTheme2$theme$colo.black,
      grey = _useTheme2$theme$colo.grey,
      _useTheme2$theme$mess = _useTheme2$theme.messageInput.suggestions.command,
      argsStyle = _useTheme2$theme$mess.args,
      container = _useTheme2$theme$mess.container,
      title = _useTheme2$theme$mess.title;

  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, container],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, _react["default"].createElement(Icon, {
    name: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), _react["default"].createElement(_reactNative.Text, {
    style: [styles.title, {
      color: black
    }, title],
    testID: "commands-item-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, (name || '').replace(/^\w/, function (_char) {
    return _char.toUpperCase();
  })), _react["default"].createElement(_reactNative.Text, {
    style: [styles.args, {
      color: grey
    }, argsStyle],
    testID: "commands-item-args",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, "/" + name + " " + args));
};

exports.CommandsItem = CommandsItem;
CommandsItem.displayName = 'CommandsItem{messageInput{suggestions{command}}}';
//# sourceMappingURL=CommandsItem.js.map