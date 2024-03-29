Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastReceivedMessage = void 0;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getLastReceivedMessage = function getLastReceivedMessage(messages) {
  for (var _iterator = _createForOfIteratorHelperLoose(messages), _step; !(_step = _iterator()).done;) {
    var _message = _step.value;

    if ((_message == null ? void 0 : _message.status) === 'received' || (_message == null ? void 0 : _message.status) === 'sending') {
      return _message;
    }
  }

  return;
};

exports.getLastReceivedMessage = getLastReceivedMessage;
//# sourceMappingURL=getLastReceivedMessage.js.map