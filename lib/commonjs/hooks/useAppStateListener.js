var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppStateListener = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _reactNative = require("react-native");

var useAppStateListener = function useAppStateListener(onForeground, onBackground) {
  var _useState = (0, _react.useState)(_reactNative.AppState.currentState),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      appState = _useState2[0],
      setAppState = _useState2[1];

  var handleAppStateChange = (0, _react.useCallback)(function (nextAppState) {
    if (appState === 'background' && nextAppState === 'active' && onForeground) {
      onForeground();
    } else if (appState.match(/active|inactive/) && nextAppState === 'background' && onBackground) {
      onBackground();
    }

    setAppState(nextAppState);
  }, [onBackground, onForeground, appState]);
  (0, _react.useEffect)(function () {
    var subscription = _reactNative.AppState.addEventListener('change', handleAppStateChange);

    return function () {
      if (subscription != null && subscription.remove) {
        subscription.remove();
      } else {
        _reactNative.AppState.removeEventListener('change', handleAppStateChange);
      }
    };
  }, [handleAppStateChange]);
};

exports.useAppStateListener = useAppStateListener;
//# sourceMappingURL=useAppStateListener.js.map