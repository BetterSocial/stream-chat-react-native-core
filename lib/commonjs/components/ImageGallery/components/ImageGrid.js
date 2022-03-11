var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGrid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _bottomSheet = require("@gorhom/bottom-sheet");

var _Avatar = require("../../Avatar/Avatar");

var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");

var _utils = require("../../../utils/utils");

var _excluded = ["avatarComponent", "imageComponent"];

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGrid.tsx";

var styles = _reactNative.StyleSheet.create({
  avatarImage: {
    borderRadius: 22,
    height: 22,
    width: 22
  },
  avatarImageWrapper: {
    borderRadius: 24,
    borderWidth: 1,
    height: 24,
    margin: 8,
    width: 24
  },
  contentContainer: {
    flexGrow: 1
  },
  image: {
    margin: 1
  }
});

var GridImage = function GridImage(_ref) {
  var item = _ref.item;

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme$theme = _useTheme.theme,
      white = _useTheme$theme.colors.white,
      _useTheme$theme$image = _useTheme$theme.imageGallery.grid,
      gridAvatar = _useTheme$theme$image.gridAvatar,
      gridAvatarWrapper = _useTheme$theme$image.gridAvatarWrapper,
      gridImage = _useTheme$theme$image.gridImage;

  var avatarComponent = item.avatarComponent,
      imageComponent = item.imageComponent,
      restItem = (0, _objectWithoutProperties2["default"])(item, _excluded);
  var numberOfImageGalleryGridColumns = restItem.numberOfImageGalleryGridColumns,
      selectAndClose = restItem.selectAndClose,
      uri = restItem.uri,
      user = restItem.user;
  var size = (0, _utils.vw)(100) / (numberOfImageGalleryGridColumns || 3) - 2;

  if (imageComponent) {
    return imageComponent({
      item: restItem
    });
  }

  return _react["default"].createElement(_bottomSheet.TouchableOpacity, {
    onPress: selectAndClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, _react["default"].createElement(_reactNative.ImageBackground, {
    source: {
      uri: uri
    },
    style: [styles.image, {
      height: size,
      width: size
    }, gridImage],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, avatarComponent ? avatarComponent({
    item: restItem
  }) : !!(user != null && user.image) && _react["default"].createElement(_Avatar.Avatar, {
    containerStyle: [styles.avatarImageWrapper, {
      backgroundColor: white
    }, gridAvatarWrapper],
    image: user.image,
    imageStyle: gridAvatar,
    size: 22,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  })));
};

var renderItem = function renderItem(_ref2) {
  var item = _ref2.item;
  return _react["default"].createElement(GridImage, {
    item: item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  });
};

var ImageGrid = function ImageGrid(props) {
  var avatarComponent = props.avatarComponent,
      closeGridView = props.closeGridView,
      imageComponent = props.imageComponent,
      numberOfImageGalleryGridColumns = props.numberOfImageGalleryGridColumns,
      photos = props.photos,
      resetVisibleValues = props.resetVisibleValues,
      setImage = props.setImage;

  var _useTheme2 = (0, _ThemeContext.useTheme)(),
      _useTheme2$theme = _useTheme2.theme,
      white = _useTheme2$theme.colors.white,
      contentContainer = _useTheme2$theme.imageGallery.grid.contentContainer;

  var imageGridItems = photos.map(function (photo) {
    return (0, _extends2["default"])({}, photo, {
      avatarComponent: avatarComponent,
      imageComponent: imageComponent,
      numberOfImageGalleryGridColumns: numberOfImageGalleryGridColumns,
      selectAndClose: function selectAndClose() {
        resetVisibleValues();
        setImage({
          messageId: photo.messageId,
          url: photo.uri
        });
        closeGridView();
      }
    });
  });
  return _react["default"].createElement(_bottomSheet.BottomSheetFlatList, {
    contentContainerStyle: [styles.contentContainer, {
      backgroundColor: white
    }, contentContainer],
    data: imageGridItems,
    keyExtractor: function keyExtractor(item, index) {
      return item.uri + "-" + index;
    },
    numColumns: numberOfImageGalleryGridColumns || 3,
    renderItem: renderItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  });
};

exports.ImageGrid = ImageGrid;
ImageGrid.displayName = 'ImageGrid{imageGallery{grid}}';
//# sourceMappingURL=ImageGrid.js.map