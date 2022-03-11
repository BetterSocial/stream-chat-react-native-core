var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  registerNativeHandlers: true,
  NetInfo: true,
  enTranslations: true,
  frTranslations: true,
  hiTranslations: true,
  itTranslations: true,
  nlTranslations: true,
  ruTranslations: true,
  trTranslations: true,
  version: true
};
Object.defineProperty(exports, "registerNativeHandlers", {
  enumerable: true,
  get: function get() {
    return _native.registerNativeHandlers;
  }
});
Object.defineProperty(exports, "NetInfo", {
  enumerable: true,
  get: function get() {
    return _native.NetInfo;
  }
});
Object.defineProperty(exports, "enTranslations", {
  enumerable: true,
  get: function get() {
    return _en["default"];
  }
});
Object.defineProperty(exports, "frTranslations", {
  enumerable: true,
  get: function get() {
    return _fr["default"];
  }
});
Object.defineProperty(exports, "hiTranslations", {
  enumerable: true,
  get: function get() {
    return _hi["default"];
  }
});
Object.defineProperty(exports, "itTranslations", {
  enumerable: true,
  get: function get() {
    return _it["default"];
  }
});
Object.defineProperty(exports, "nlTranslations", {
  enumerable: true,
  get: function get() {
    return _nl["default"];
  }
});
Object.defineProperty(exports, "ruTranslations", {
  enumerable: true,
  get: function get() {
    return _ru["default"];
  }
});
Object.defineProperty(exports, "trTranslations", {
  enumerable: true,
  get: function get() {
    return _tr["default"];
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function get() {
    return _version.version;
  }
});

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _hooks = require("./hooks");

Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hooks[key];
    }
  });
});

var _native = require("./native");

var _contexts = require("./contexts");

Object.keys(_contexts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _contexts[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _contexts[key];
    }
  });
});

var _compiled = require("./emoji-data/compiled");

Object.keys(_compiled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _compiled[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _compiled[key];
    }
  });
});

var _icons = require("./icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _icons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});

var _types = require("./types/types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _Streami18n = require("./utils/Streami18n");

Object.keys(_Streami18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Streami18n[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Streami18n[key];
    }
  });
});

var _utils = require("./utils/utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _en = _interopRequireDefault(require("./i18n/en.json"));

var _fr = _interopRequireDefault(require("./i18n/fr.json"));

var _hi = _interopRequireDefault(require("./i18n/hi.json"));

var _it = _interopRequireDefault(require("./i18n/it.json"));

var _nl = _interopRequireDefault(require("./i18n/nl.json"));

var _ru = _interopRequireDefault(require("./i18n/ru.json"));

var _tr = _interopRequireDefault(require("./i18n/tr.json"));

var _version = require("./version.json");
//# sourceMappingURL=index.js.map