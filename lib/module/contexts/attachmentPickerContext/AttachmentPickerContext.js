var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAttachmentPickerContext = exports.useAttachmentPickerContext = exports.AttachmentPickerProvider = exports.AttachmentPickerContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = require("../utils/getDisplayName");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/attachmentPickerContext/AttachmentPickerContext.tsx";

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AttachmentPickerContext = _react["default"].createContext({});

exports.AttachmentPickerContext = AttachmentPickerContext;

var AttachmentPickerProvider = function AttachmentPickerProvider(_ref) {
  var _value$topInset;

  var children = _ref.children,
      value = _ref.value;
  var bottomInsetValue = value == null ? void 0 : value.bottomInset;
  var topInsetValue = value == null ? void 0 : value.topInset;

  var _useState = (0, _react.useState)(bottomInsetValue != null ? bottomInsetValue : 0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      bottomInset = _useState2[0],
      setBottomInset = _useState2[1];

  var _useState3 = (0, _react.useState)(10),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      maxNumberOfFiles = _useState4[0],
      setMaxNumberOfFiles = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selectedImages = _useState6[0],
      setSelectedImages = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      selectedPicker = _useState8[0],
      setSelectedPicker = _useState8[1];

  var _useState9 = (0, _react.useState)((_value$topInset = value == null ? void 0 : value.topInset) != null ? _value$topInset : 0),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      topInset = _useState10[0],
      setTopInset = _useState10[1];

  (0, _react.useEffect)(function () {
    setBottomInset(bottomInsetValue != null ? bottomInsetValue : 0);
  }, [bottomInsetValue]);
  (0, _react.useEffect)(function () {
    setTopInset(topInsetValue != null ? topInsetValue : 0);
  }, [topInsetValue]);
  var combinedValue = (0, _extends2["default"])({
    maxNumberOfFiles: maxNumberOfFiles,
    selectedImages: selectedImages,
    selectedPicker: selectedPicker,
    setBottomInset: setBottomInset,
    setMaxNumberOfFiles: setMaxNumberOfFiles,
    setSelectedImages: setSelectedImages,
    setSelectedPicker: setSelectedPicker,
    setTopInset: setTopInset
  }, value, {
    bottomInset: bottomInset,
    topInset: topInset
  });
  return _react["default"].createElement(AttachmentPickerContext.Provider, {
    value: combinedValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, children);
};

exports.AttachmentPickerProvider = AttachmentPickerProvider;

var useAttachmentPickerContext = function useAttachmentPickerContext() {
  return (0, _react.useContext)(AttachmentPickerContext);
};

exports.useAttachmentPickerContext = useAttachmentPickerContext;

var withAttachmentPickerContext = function withAttachmentPickerContext(Component) {
  var WithAttachmentPickerContextComponent = function WithAttachmentPickerContextComponent(props) {
    var attachmentPickerContext = useAttachmentPickerContext();
    return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, attachmentPickerContext, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 12
      }
    }));
  };

  WithAttachmentPickerContextComponent.displayName = "WithAttachmentPickerContext" + (0, _getDisplayName.getDisplayName)(Component);
  return WithAttachmentPickerContextComponent;
};

exports.withAttachmentPickerContext = withAttachmentPickerContext;
//# sourceMappingURL=AttachmentPickerContext.js.map