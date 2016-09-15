import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/Stuff.js';

Template.ListStuff.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList: function stuffList() {
    return Stuff.find();
  },
});
