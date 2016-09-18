import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const stuff = 'Stuff';  // avoid typos, this string occurs three times.
export const Stuff = new Mongo.Collection(stuff);

/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Stuff.attachSchema(new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: stuff,
      placeholder: 'Bicycle',
    },
  },
  quantity: {
    label: 'Quantity',
    type: Number,
    optional: false,
    autoform: {
      group: stuff,
      placeholder: '3',
    },
  },
}));
