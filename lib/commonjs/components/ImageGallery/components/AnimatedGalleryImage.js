var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedGalleryImage = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));

var _utils = require("../../../utils/utils");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/AnimatedGalleryImage.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var screenWidth = (0, _utils.vw)(100);
var halfScreenWidth = (0, _utils.vw)(50);
var oneEight = 1 / 8;

var AnimatedGalleryImage = _react["default"].memo(function (props) {
  var index = props.index,
      offsetScale = props.offsetScale,
      photo = props.photo,
      previous = props.previous,
      scale = props.scale,
      screenHeight = props.screenHeight,
      selected = props.selected,
      shouldRender = props.shouldRender,
      style = props.style,
      translateX = props.translateX,
      translateY = props.translateY;
  var AnimatedGalleryImageStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var xScaleOffset = -7 * screenWidth * (0.5 + index);
    var yScaleOffset = -screenHeight * 3.5;
    return {
      transform: [{
        translateX: selected ? translateX.value + xScaleOffset : scale.value < 1 || scale.value !== offsetScale.value ? xScaleOffset : previous ? translateX.value - halfScreenWidth * (scale.value - 1) + xScaleOffset : translateX.value + halfScreenWidth * (scale.value - 1) + xScaleOffset
      }, {
        translateY: selected ? translateY.value + yScaleOffset : yScaleOffset
      }, {
        scale: selected ? scale.value / 8 : oneEight
      }, {
        scaleX: -1
      }]
    };
  }, [previous, selected]);

  if (!shouldRender) {
    return _react["default"].createElement(_reactNative.View, {
      style: [style, {
        transform: [{
          scale: oneEight
        }]
      }],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 14
      }
    });
  }

  return _react["default"].createElement(_reactNativeReanimated["default"].Image, {
    resizeMode: 'contain',
    source: {
      uri: photo.uri
    },
    style: [style, AnimatedGalleryImageStyle, {
      transform: [{
        scaleX: -1
      }, {
        translateY: -screenHeight * 3.5
      }, {
        translateX: -translateX.value + 7 * screenWidth * (0.5 + index)
      }, {
        scale: oneEight
      }]
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  });
}, function (prevProps, nextProps) {
  if (prevProps.selected === nextProps.selected && prevProps.shouldRender === nextProps.shouldRender && prevProps.photo.uri === nextProps.photo.uri && prevProps.previous === nextProps.previous && prevProps.index === nextProps.index && prevProps.screenHeight === nextProps.screenHeight) {
    return true;
  }

  return false;
});

exports.AnimatedGalleryImage = AnimatedGalleryImage;
AnimatedGalleryImage.displayName = 'AnimatedGalleryImage';
//# sourceMappingURL=AnimatedGalleryImage.js.map