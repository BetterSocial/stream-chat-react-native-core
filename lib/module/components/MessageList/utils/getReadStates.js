Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReadStates = void 0;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getReadStates = function getReadStates(clientUserId, messages, read) {
  var readData = messages.reduce(function (acc, cur) {
    if (cur.id) {
      acc[cur.id] = false;
    }

    return acc;
  }, {});
  var filteredMessagesReversed = messages.filter(function (msg) {
    return msg.updated_at;
  }).reverse();

  if (read) {
    if (clientUserId) {
      delete read[clientUserId];
    }

    var members = Object.values(read);
    var memberReadCount = 0;

    for (var _iterator = _createForOfIteratorHelperLoose(filteredMessagesReversed), _step; !(_step = _iterator()).done;) {
      var _message = _step.value;

      if (!members.length) {
        readData[_message.id] = memberReadCount || true;
      } else {
        var _loop = function _loop(member) {
          if (!member.last_read) {
            return "continue";
          }

          if (_message.updated_at < member.last_read) {
            var numberOfReads = Object.keys(read).length;

            if (numberOfReads === 1) {
              readData[_message.id] = true;
            } else {
              var currentMessageReadData = readData[_message.id];
              readData[_message.id] = typeof currentMessageReadData === 'boolean' ? memberReadCount + 1 : currentMessageReadData + 1;
            }

            var userIndex = members.findIndex(function (_ref) {
              var _member$user;

              var user = _ref.user;
              return user.id === ((_member$user = member.user) == null ? void 0 : _member$user.id);
            });

            if (userIndex !== -1) {
              members.splice(userIndex, 1);

              if (numberOfReads > 1) {
                memberReadCount += 1;
              }
            }
          }
        };

        for (var _iterator2 = _createForOfIteratorHelperLoose(members), _step2; !(_step2 = _iterator2()).done;) {
          var member = _step2.value;

          var _ret = _loop(member);

          if (_ret === "continue") continue;
        }

        if (readData[_message.id] === false) {
          readData[_message.id] = memberReadCount || false;
        }
      }
    }
  }

  return readData;
};

exports.getReadStates = getReadStates;
//# sourceMappingURL=getReadStates.js.map