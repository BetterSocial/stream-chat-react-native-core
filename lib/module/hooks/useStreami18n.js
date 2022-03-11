var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStreami18n = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useIsMountedRef = require("./useIsMountedRef");

var _Streami18n = require("../utils/Streami18n");

var useStreami18n = function useStreami18n(_ref) {
  var i18nInstance = _ref.i18nInstance,
      setTranslators = _ref.setTranslators;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loadingTranslators = _useState2[0],
      setLoadingTranslators = _useState2[1];

  var isMounted = (0, _useIsMountedRef.useIsMountedRef)();
  var i18nInstanceExists = !!i18nInstance;
  (0, _react.useEffect)(function () {
    var streami18n;

    if (i18nInstance instanceof _Streami18n.Streami18n) {
      streami18n = i18nInstance;
    } else {
      streami18n = new _Streami18n.Streami18n({
        language: 'en'
      });
    }

    streami18n.registerSetLanguageCallback(function (t) {
      return setTranslators(function (prevTranslator) {
        return (0, _extends2["default"])({}, prevTranslator, {
          t: t
        });
      });
    });
    streami18n.getTranslators().then(function (translator) {
      if (translator && isMounted.current) setTranslators(translator);
    });
    setLoadingTranslators(false);
  }, [i18nInstanceExists, i18nInstance]);
  return loadingTranslators;
};

exports.useStreami18n = useStreami18n;
//# sourceMappingURL=useStreami18n.js.map