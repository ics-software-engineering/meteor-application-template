import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';
import { Stuff } from '../../api/stuff/Stuff.js';

/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */

/* eslint-disable object-shorthand, prefer-arrow-callback */

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function waitOn() { return Meteor.subscribe('Stuff'); },
  loadingTemplate: 'Loading',
});

Router.route('/', {
  name: 'Home',
});

Router.route('/list', {
  name: 'ListStuff',
});

Router.route('/add', {
  name: 'AddStuff',
});


Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function editStuff() { return Stuff.findOne(this.params._id); },
});
