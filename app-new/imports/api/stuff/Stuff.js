import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

/* eslint-disable object-shorthand, prefer-arrow-callback */

export const stuff = 'Stuff';  // avoid typos, this string occurs many times.
export const Stuff = new Mongo.Collection(stuff);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The Stuff document.
   */
  addStuff: function addStuff(doc) {
    check(doc, Stuff.simpleSchema());
    Stuff.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param doc The Stuff document.
   * @param docID It's ID.
   */
  editStuff: function editStuff(doc, docID) {
    check(doc, Stuff.simpleSchema());
    check(docID, Stuff.simpleSchema());
    Stuff.update({ _id: docID }, doc);
  },
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(stuff, function publishStuff() {
    return Stuff.find();
  });
}


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
