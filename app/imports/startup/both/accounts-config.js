import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
  });
}

