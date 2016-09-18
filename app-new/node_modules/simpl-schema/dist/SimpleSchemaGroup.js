'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoObject = require('mongo-object');

var _mongoObject2 = _interopRequireDefault(_mongoObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleSchemaGroup = function SimpleSchemaGroup() {
  _classCallCheck(this, SimpleSchemaGroup);

  for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
    definitions[_key] = arguments[_key];
  }

  this.definitions = definitions.map(function (definition) {
    if (_mongoObject2.default.isBasicObject(definition)) return definition;

    if (definition instanceof RegExp) {
      return {
        type: String,
        regEx: definition
      };
    }

    return {
      type: definition
    };
  });
};

exports.default = SimpleSchemaGroup;