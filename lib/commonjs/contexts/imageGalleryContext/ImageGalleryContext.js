var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withImageGalleryContext = exports.useImageGalleryContext = exports.ImageGalleryProvider = exports.ImageGalleryContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/imageGalleryContext/ImageGalleryContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ImageGalleryContext = _react["default"].createContext({});

exports.ImageGalleryContext = ImageGalleryContext;

var ImageGalleryProvider = function ImageGalleryProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      images = _useState2[0],
      setImages = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      image = _useState4[0],
      setImage = _useState4[1];

  var imageGalleryContext = {
    image: image,
    images: images,
    setImage: setImage,
    setImages: setImages
  };
  return _react["default"].createElement(ImageGalleryContext.Provider, {
    value: imageGalleryContext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, children);
};

exports.ImageGalleryProvider = ImageGalleryProvider;

var useImageGalleryContext = function useImageGalleryContext() {
  return (0, _react.useContext)(ImageGalleryContext);
};

exports.useImageGalleryContext = useImageGalleryContext;

var withImageGalleryContext = function withImageGalleryContext(Component) {
  var WithImageGalleryContextComponent = function WithImageGalleryContextComponent(props) {
    var imageGalleryContext = useImageGalleryContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, imageGalleryContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 12
      }
    }));
  };

  WithImageGalleryContextComponent.displayName = "WithImageGalleryContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithImageGalleryContextComponent;
};

exports.withImageGalleryContext = withImageGalleryContext;
//# sourceMappingURL=ImageGalleryContext.js.map