var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupAvatar = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _ThemeContext = require("../../contexts/themeContext/ThemeContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Avatar/GroupAvatar.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var randomImageBaseUrl = 'https://getstream.io/random_png/';
var randomSvgBaseUrl = 'https://getstream.io/random_svg/';
var streamCDN = 'stream-io-cdn.com';

var styles = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  flex: {
    flex: 1
  }
});

var getInitials = function getInitials(fullName) {
  return fullName.split(' ').slice(0, 2).map(function (name) {
    return name.charAt(0);
  }).join(' ');
};

var GroupAvatar = function GroupAvatar(props) {
  var containerStyle = props.containerStyle,
      images = props.images,
      names = props.names,
      size = props.size,
      testID = props.testID;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme$group = _useTheme.theme.groupAvatar,
      container = _useTheme$theme$group.container,
      image = _useTheme$theme$group.image;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      imageError = _useState2[0],
      setImageError = _useState2[1];

  var imagesOrNames = images || names || [];
  var avatarImages = imagesOrNames.slice(0, 4).reduce(function (returnArray, currentImage, index) {
    var url = currentImage.startsWith('http') ? currentImage : "" + randomImageBaseUrl + (names ? "?name=" + getInitials(names[index]) + "&size=" + (imagesOrNames.length <= 2 ? size : size / 2) : '');

    if (imagesOrNames.length <= 2) {
      _reactNative.Image.prefetch(imageError ? url : url.replace('h=%2A', "h=" + _reactNative.PixelRatio.getPixelSizeForLayoutSize(imagesOrNames.length <= 2 ? size : size / 2)))["catch"](function () {});

      returnArray[0] = [].concat((0, _toConsumableArray2["default"])(returnArray[0] || []), [{
        height: imagesOrNames.length === 1 ? size : size / 2,
        name: names ? names[index] : '',
        url: url,
        width: size
      }]);
    } else {
      var _Image$prefetch;

      (_Image$prefetch = _reactNative.Image.prefetch(imageError ? url : url.replace('h=%2A', "h=" + _reactNative.PixelRatio.getPixelSizeForLayoutSize(size / 2)))) == null ? void 0 : _Image$prefetch["catch"](function () {});

      if (index < 2) {
        returnArray[0] = [].concat((0, _toConsumableArray2["default"])(returnArray[0] || []), [{
          height: size / 2,
          name: names ? names[index] : '',
          url: url,
          width: size / 2
        }]);
      } else {
        returnArray[1] = [].concat((0, _toConsumableArray2["default"])(returnArray[1] || []), [{
          height: size / 2,
          name: names ? names[index] : '',
          url: url,
          width: imagesOrNames.length === 3 ? size : size / 2
        }]);
      }
    }

    return returnArray;
  }, []);
  return _react["default"].createElement(_reactNative.View, {
    style: [styles.container, {
      borderRadius: size / 2,
      height: size,
      width: size
    }, container, containerStyle],
    testID: testID || 'group-avatar',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, avatarImages.map(function (column, colIndex) {
    return _react["default"].createElement(_reactNative.View, {
      key: "avatar-column-" + colIndex,
      style: [styles.flex, {
        flexDirection: imagesOrNames.length === 2 ? 'column' : 'row'
      }],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }
    }, column.map(function (_ref, rowIndex) {
      var height = _ref.height,
          name = _ref.name,
          url = _ref.url,
          width = _ref.width;
      return _react["default"].createElement(_reactNative.Image, {
        accessibilityLabel: testID || 'avatar-image',
        key: "avatar-" + url + "-" + rowIndex,
        onError: function onError() {
          return setImageError(true);
        },
        source: {
          uri: imageError || url.includes(randomSvgBaseUrl) ? url.includes(streamCDN) ? url : "" + randomImageBaseUrl + (name ? "?name=" + getInitials(name) + "&size=" + height : '') : url.replace('h=%2A', "h=" + _reactNative.PixelRatio.getPixelSizeForLayoutSize(height))
        },
        style: [image, size ? {
          height: height,
          width: width
        } : {}],
        testID: "group-avatar-image-" + colIndex + "-" + rowIndex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      });
    }));
  }));
};

exports.GroupAvatar = GroupAvatar;
GroupAvatar.displayName = 'GroupAvatar{groupAvatar}';
//# sourceMappingURL=GroupAvatar.js.map