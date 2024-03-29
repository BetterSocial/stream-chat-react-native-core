var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateReaction = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _user = require("./user");

var generateReaction = function generateReaction() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var user = options.user || (0, _user.generateUser)();
  return (0, _extends2["default"])({
    created_at: new Date(),
    type: 'love',
    user: user,
    user_id: user.user_id
  }, options);
};

exports.generateReaction = generateReaction;
//# sourceMappingURL=reaction.js.map