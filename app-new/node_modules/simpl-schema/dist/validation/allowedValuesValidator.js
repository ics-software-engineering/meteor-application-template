'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleSchema = require('../SimpleSchema');

function allowedValuesValidator() {
  if (!this.valueShouldBeChecked) return;

  var allowedValues = this.definition.allowedValues;
  if (!allowedValues) return;

  var isAllowed = Array.includes(allowedValues, this.value);
  return isAllowed ? true : _SimpleSchema.SimpleSchema.ErrorTypes.VALUE_NOT_ALLOWED;
}

exports.default = allowedValuesValidator;