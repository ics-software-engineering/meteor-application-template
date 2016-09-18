import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList: function stuffList() {
    return Stuff.find();
  },
});
