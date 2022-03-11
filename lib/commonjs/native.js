Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNativeHandlers = exports.SDK = exports.triggerHaptic = exports.takePhoto = exports.shareImage = exports.saveFile = exports.pickDocument = exports.NetInfo = exports.FlatList = exports.getPhotos = exports.getLocalAssetUri = exports.deleteFile = exports.compressImage = exports.BlurView = void 0;

var _reactNative = require("react-native");

var fail = function fail() {
  throw Error('Native handler was not registered, you should import stream-chat-expo or stream-chat-react-native');
};

var BlurView = fail;
exports.BlurView = BlurView;
var compressImage = fail;
exports.compressImage = compressImage;
var deleteFile = fail;
exports.deleteFile = deleteFile;
var getLocalAssetUri = fail;
exports.getLocalAssetUri = getLocalAssetUri;
var getPhotos = fail;
exports.getPhotos = getPhotos;
var FlatList = _reactNative.FlatList;
exports.FlatList = FlatList;
var NetInfo = {
  addEventListener: fail,
  fetch: fail
};
exports.NetInfo = NetInfo;
var pickDocument = fail;
exports.pickDocument = pickDocument;
var saveFile = fail;
exports.saveFile = saveFile;
var shareImage = fail;
exports.shareImage = shareImage;
var takePhoto = fail;
exports.takePhoto = takePhoto;
var triggerHaptic = fail;
exports.triggerHaptic = triggerHaptic;
var SDK;
exports.SDK = SDK;

var registerNativeHandlers = function registerNativeHandlers(handlers) {
  if (handlers.BlurView) {
    exports.BlurView = BlurView = handlers.BlurView;
  }

  if (handlers.compressImage) {
    exports.compressImage = compressImage = handlers.compressImage;
  }

  if (handlers.deleteFile) {
    exports.deleteFile = deleteFile = handlers.deleteFile;
  }

  if (handlers.FlatList) {
    exports.FlatList = FlatList = handlers.FlatList;
  }

  if (handlers.NetInfo) {
    exports.NetInfo = NetInfo = handlers.NetInfo;
  }

  if (handlers.getLocalAssetUri) {
    exports.getLocalAssetUri = getLocalAssetUri = handlers.getLocalAssetUri;
  }

  if (handlers.getPhotos) {
    exports.getPhotos = getPhotos = handlers.getPhotos;
  }

  if (handlers.NetInfo) {
    exports.NetInfo = NetInfo = handlers.NetInfo;
  }

  if (handlers.pickDocument) {
    exports.pickDocument = pickDocument = handlers.pickDocument;
  }

  if (handlers.saveFile) {
    exports.saveFile = saveFile = handlers.saveFile;
  }

  if (handlers.SDK) {
    exports.SDK = SDK = handlers.SDK;
  }

  if (handlers.shareImage) {
    exports.shareImage = shareImage = handlers.shareImage;
  }

  if (handlers.takePhoto) {
    exports.takePhoto = takePhoto = handlers.takePhoto;
  }

  if (handlers.triggerHaptic) {
    exports.triggerHaptic = triggerHaptic = handlers.triggerHaptic;
  }
};

exports.registerNativeHandlers = registerNativeHandlers;
//# sourceMappingURL=native.js.map